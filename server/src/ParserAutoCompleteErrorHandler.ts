import { ANTLRErrorStrategy, DefaultErrorStrategy } from 'antlr4ts';
import { IntervalSet } from 'antlr4ts/misc/IntervalSet';
import { SuppressWarnings } from 'antlr4ts/Decorators';

export class ParserAutoCompleteErrorHandler extends DefaultErrorStrategy  {
	expectedTokens: number[] = [];
	
	constructor() {
		super();
	}
	
	reportError(recognizer: import("antlr4ts").Parser, e: import("antlr4ts").RecognitionException): void {
		// Don't report the error if it has already been detected
		if (this.errorRecoveryMode) {
			return;
		}
		
		if (e.expectedTokens) {
			this.accumulateTokenSuggestions(e.expectedTokens)
		} else {
			this.accumulateTokenSuggestions(recognizer.getExpectedTokens());
		}
		super.reportError(recognizer, e);
	}
	
	recoverInline(recognizer: import("antlr4ts").Parser): import("antlr4ts").Token {
		this.accumulateTokenSuggestions(recognizer.getExpectedTokens());
		this.errorRecoveryMode = true;
		return super.recoverInline(recognizer);
	}

	private accumulateTokenSuggestions(tokens: IntervalSet): void {
		if (tokens === undefined || tokens.size === 0) {
			return;
		}
		if (this.expectedTokens.length > 0) {
			this.expectedTokens = this.expectedTokens.concat(tokens.toArray())
		} else {
			this.expectedTokens = tokens.toArray();
		}
	}
}