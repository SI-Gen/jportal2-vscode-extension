/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import {
  createConnection,
  TextDocuments,
  TextDocument,
  Diagnostic,
  DiagnosticSeverity,
  ProposedFeatures,
  InitializeParams,
  DidChangeConfigurationNotification,
  CompletionItem,
  TextDocumentPositionParams,
  Hover
} from 'vscode-languageserver';

import { ANTLRInputStream } from 'antlr4ts/ANTLRInputStream';
import { CommonTokenStream } from 'antlr4ts/CommonTokenStream';
import { siParser } from './antlr/grammer/siParser'
import { siLexer } from './antlr/grammer/siLexer'
import { ServerErrorListener, ParsingError } from './antlr/grammer/error-listener';
import { getAutoComplete, getKeyWordDetailsByWord, getKeyWordDetailsById, getCompletionItemByWord } from './definitions/languageKeyWords';
import { readFileSync, stat, createReadStream } from 'fs';
import { CommonToken, ListTokenSource, Token, Vocabulary, TokenStream, TokenSource, FailedPredicateException, Recognizer } from 'antlr4ts';
import { ATNState } from 'antlr4ts/atn/ATNState';
import { ATNStateType } from 'antlr4ts/atn/ATNStateType';
import { RuleStartState } from 'antlr4ts/atn/RuleStartState';
import { Transition } from 'antlr4ts/atn/Transition';
import { TransitionType } from 'antlr4ts/atn/TransitionType';
import { ParserAutoCompleteErrorHandler } from './ParserAutoCompleteErrorHandler'
import { siHover } from './feature/hover';

// Create a connection for the server. The connection uses Node's IPC as a transport.
// Also include all preview / proposed LSP features.
let connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager. The text document manager
// supports full document sync only
let documents: TextDocuments = new TextDocuments();

let hasConfigurationCapability: boolean = false;
let hasWorkspaceFolderCapability: boolean = false;
let hasDiagnosticRelatedInformationCapability: boolean = false;

const CARAT_TOKEN_TYPE = -10;

connection.onInitialize((params: InitializeParams) => {
  let capabilities = params.capabilities;

  // Does the client support the `workspace/configuration` request?
  // If not, we will fall back using global settings
  hasConfigurationCapability = !!(
    capabilities.workspace && !!capabilities.workspace.configuration
  );
  hasWorkspaceFolderCapability = !!(
    capabilities.workspace && !!capabilities.workspace.workspaceFolders
  );
  hasDiagnosticRelatedInformationCapability = !!(
    capabilities.textDocument &&
    capabilities.textDocument.publishDiagnostics &&
    capabilities.textDocument.publishDiagnostics.relatedInformation
  );

  return {
    capabilities: {
      textDocumentSync: documents.syncKind,
      hoverProvider: true,
      // Tell the client that the server supports code completion
      completionProvider: {
        resolveProvider: true
      }
    }
  };
});

connection.onInitialized(() => {
  if (hasConfigurationCapability) {
    // Register for all configuration changes.
    connection.client.register(
      DidChangeConfigurationNotification.type,
      undefined
    );
  }
  if (hasWorkspaceFolderCapability) {
    connection.workspace.onDidChangeWorkspaceFolders(_event => {
      connection.console.log('Workspace folder change event received.');
    });
  }
});

// The example settings
interface ExampleSettings {
  maxNumberOfProblems: number;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: ExampleSettings = { maxNumberOfProblems: 1000 };
let globalSettings: ExampleSettings = defaultSettings;

// Cache the settings of all open documents
let documentSettings: Map<string, Thenable<ExampleSettings>> = new Map();

connection.onDidChangeConfiguration(change => {
  if (hasConfigurationCapability) {
    // Reset all cached document settings
    documentSettings.clear();
  } else {
    globalSettings = <ExampleSettings>(
      (change.settings.siLanguageServer || defaultSettings)
    );
  }

  // Revalidate all open text documents
  documents.all().forEach(validateTextDocument);
});

function getDocumentSettings(resource: string): Thenable<ExampleSettings> {
  if (!hasConfigurationCapability) {
    return Promise.resolve(globalSettings);
  }
  let result = documentSettings.get(resource);
  if (!result) {
    result = connection.workspace.getConfiguration({
      scopeUri: resource,
      section: 'siLanguageServer'
    });
    documentSettings.set(resource, result);
  }
  return result;
}

// Only keep settings for open documents
documents.onDidClose(e => {
  documentSettings.delete(e.document.uri);
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
  validateTextDocument(change.document);
});

async function validateTextDocument(textDocument: TextDocument): Promise<void> {
  // In this simple example we get the settings for every validate run.
  let settings = await getDocumentSettings(textDocument.uri);

  // The validator creates diagnostics for all uppercase words length 2 and more
  let text = textDocument.getText();
  // let pattern = /\b[A-Z]{2,}\b/g;
  // let m: RegExpExecArray | null;
  let inputStream = new ANTLRInputStream(text);

  let lexer = new siLexer(inputStream);
  lexer.removeErrorListeners();
  let lexerError = new ServerErrorListener();
  lexer.addErrorListener(lexerError);

  let tokenStream = new CommonTokenStream(lexer);

  let parser = new siParser(tokenStream);
  parser.removeErrorListeners();
  let parserError = new ServerErrorListener();
  parser.addErrorListener(parserError);

  var tree = parser.jInput();

  let problems = 0;
  let diagnostics: Diagnostic[] = [];
  let errors: ParsingError[] = [];
  lexerError.errors.forEach(error => {
    errors.push(error);
  });
  parserError.errors.forEach(error => {
    errors.push(error);
  });

  errors.forEach(element => {
    let diagnostic: Diagnostic = {
      severity: DiagnosticSeverity.Error,
      range: {
        start: { line: element.line, character: element.columnStart },
        end: { line: element.line, character: element.columnEnd }
      },
      message: element.msg,
      source: 'ex'
    };
    diagnostics.push(diagnostic);
  });

  // while ((m = pattern.exec(text)) && problems < settings.maxNumberOfProblems) {
  // 	problems++;
  // 	let diagnostic: Diagnostic = {
  // 		severity: DiagnosticSeverity.Warning,
  // 		range: {
  // 			start: textDocument.positionAt(m.index),
  // 			end: textDocument.positionAt(m.index + m[0].length)
  // 		},
  // 		message: `${m[0]} is all uppercase.`,
  // 		source: 'ex'
  // 	};
  // 	if (hasDiagnosticRelatedInformationCapability) {
  // 		diagnostic.relatedInformation = [
  // 			{
  // 				location: {
  // 					uri: textDocument.uri,
  // 					range: Object.assign({}, diagnostic.range)
  // 				},
  // 				message: 'Spelling matters'
  // 			},
  // 			{
  // 				location: {
  // 					uri: textDocument.uri,
  // 					range: Object.assign({}, diagnostic.range)
  // 				},
  // 				message: 'Particularly for names'
  // 			}
  // 		];
  // 	}
  // 	diagnostics.push(diagnostic);
  // }

  // Send the computed diagnostics to VSCode.
  connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

connection.onDidChangeWatchedFiles(_change => {
  // Monitored files have change in VSCode
  connection.console.log('We received an file change event');
});

// This handler provides the initial list of the completion items.
connection.onCompletion(
	(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
		let file = documents.get(decodeURI(_textDocumentPosition.textDocument.uri))
		if (file === undefined) {
			return []
		}
		let fileString = file.getText().split(/\r?\n/);
		let lastLine = '';

		let fileSoFar = '';
		for(let i = 0 ; i <= _textDocumentPosition.position.line; i++) {
			if (i < _textDocumentPosition.position.line) {
				fileSoFar = fileSoFar + fileString[i] + '\n';
			} else {
				fileSoFar = fileSoFar + fileString[i].substr(0, _textDocumentPosition.position.character);
				lastLine = fileString[i];
			}
		}

		// Get the beginning of the word the user is trying to autocomplete so that we can replace it with the
    	// autocomplete form
    	// Are we at the beginning of a line?
    	if (_textDocumentPosition.position.character > 0) {
			// Nope! So find the position of the word beginning
			let i = 0;
			for (i = _textDocumentPosition.position.character; i > 0; i--) {
			  // Is this is a space, break
			  if (lastLine[i] === ' ') {
				  break;
			  }
			}
			// update the position
			// Beginning of word?
			if (i > 0) {
				// Nope, so increase i by one space to exclude the space
				_textDocumentPosition.position.character = i+1;
			} else {
				_textDocumentPosition.position.character = i;
			}
		  }

		let inputStream = new ANTLRInputStream(fileSoFar);
	
		let lexer = new siLexer(inputStream);

		//Remove error listeners to avoid printing out syntax errors to the consol.
		lexer.removeErrorListeners();
		let tokenList = lexer.getAllTokens();
		
		//Add a special token to mark the location of the carat.
		tokenList.push(new CommonToken(CARAT_TOKEN_TYPE, "carat_token"));
		const parser = new siParser(new CommonTokenStream(new ListTokenSource(tokenList)));

		//Remove error listeners to avoid printing out syntax errors to the consol.
		parser.removeErrorListeners();

		//Add a custom error handler to catch syntax errors and find tokens to suggest.
		const errorHandler = new ParserAutoCompleteErrorHandler();
		parser.errorHandler = errorHandler;
		parser.jInput();

		//Prepare the expected token list for the client.
		let expectedTokens = errorHandler.expectedTokens;
		let completionItems: CompletionItem[] = [];
		for (let token of expectedTokens) {
			const completionItem = getCompletionItemByWord(parser.vocabulary.getDisplayName(token)
				, _textDocumentPosition.position);
			if (completionItem !== undefined) {
				completionItems.push(completionItem)
			}
		}
		return completionItems;
	}
);



// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve(
  (item: CompletionItem): CompletionItem => {
    let autocomplete = getAutoComplete();
    item.detail = autocomplete[item.data].detail;
    item.documentation = autocomplete[item.data].documentation;
    return item;
  }
);

connection.onHover(
  (_textDocumentPosition: TextDocumentPositionParams): Hover => {
    return siHover(_textDocumentPosition, documents);
  }
);

/*
connection.onDidOpenTextDocument((params) => {
	// A text document got opened in VSCode.
	// params.textDocument.uri uniquely identifies the document. For documents store on disk this is a file URI.
	// params.textDocument.text the initial full content of the document.
	connection.console.log(`${params.textDocument.uri} opened.`);
});
connection.onDidChangeTextDocument((params) => {
	// The content of a text document did change in VSCode.
	// params.textDocument.uri uniquely identifies the document.
	// params.contentChanges describe the content changes to the document.
	connection.console.log(`${params.textDocument.uri} changed: ${JSON.stringify(params.contentChanges)}`);
});
connection.onDidCloseTextDocument((params) => {
	// A text document got closed in VSCode.
	// params.textDocument.uri uniquely identifies the document.
	connection.console.log(`${params.textDocument.uri} closed.`);
});
*/

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();
