
import { ANTLRErrorListener, Token, Recognizer, RecognitionException, DefaultErrorStrategy } from "antlr4ts";
import { IntervalSet } from 'antlr4ts/misc/IntervalSet';


export class ParsingError {
	public line: number = 0;
	public columnStart: number = 0;
	public columnEnd: number = 0;
	public msg: string = "";

	constructor(line: number, columnStart: number, columnEnd: number, msg: string){
		// For some reason it seems as if the error is always reported one line 
		// after the actual error, not sure if this is lexer/parser behavior?
		// TODO: Find out why, quick fix is to just subtract one from the line number
		this.line = line-1;
		this.columnEnd = columnEnd;
		this.columnStart = columnStart;
		this.msg = msg;
	}
}


export class ServerErrorListener<problem> implements ANTLRErrorListener<problem> {

	errors: ParsingError[] = [];
	expectedTokens: string[] = [];

	syntaxError = <T extends problem>(recognizer: Recognizer<T, any>, 
		offendingSymbol: T | undefined, 
		line: number, 
		charPositionInLine: number, 
		msg: string, 
		e: RecognitionException | undefined): void => {		
		let error = new ParsingError(line, charPositionInLine, charPositionInLine, msg);
		this.errors.push(error);
		if (e !== undefined && e.expectedTokens !== undefined) { 
			for (const token of (e.expectedTokens.toArray())) {
				this.expectedTokens.push(recognizer.vocabulary.getDisplayName(token))
			}
		}
    }
    constructor() {
	}
}