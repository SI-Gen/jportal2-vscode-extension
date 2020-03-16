import { TextDocumentPositionParams, Hover, TextDocument, TextDocuments } from 'vscode-languageserver';
import { getKeyWordDetailsByWord } from '../definitions/languageKeyWords';


export function siHover(_textDocumentPosition: TextDocumentPositionParams, documents: TextDocuments) : Hover {
	// Define an empty structure
	let hover: Hover = {
		contents: ''
	};
	
	// Read the file the user is currently workign on
	let file = documents.get(decodeURI(_textDocumentPosition.textDocument.uri));
	if (file === undefined) {
		return hover;
	}

	// Get the line the user is hovering on
	let fileStrings = file.getText().toString().split(/\r?\n/);
	let line = fileStrings[_textDocumentPosition.position.line];
	let i = 0;

	// Calculate the word the user is hovering over
	// NOTE: We need to check for space, ( or [, specifically for the 
	// column types
	for (i = _textDocumentPosition.position.character; i < line.length; i++) {
		if (line[i] === ' ' || line[i] === '(' || line[i] === '[')  break;
	}
	let endPosition = i;

	for (i = _textDocumentPosition.position.character; i >= 0; i--) {
		if (line[i] === ' ') break;
	}
	let startPosition = i;

	if (startPosition > 0) {
		startPosition = i + 1;
	} else { 
		startPosition = 0;
	}
	// Get the word the user is hovering over
	let word = line.substr(startPosition, endPosition - startPosition);
	// Ge the hover contents of the word the user is hovering over, if it is valid
	return getKeyWordDetailsByWord(word);
}