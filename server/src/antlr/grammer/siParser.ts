// Generated from siParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { siParserListener } from "./siParserListener";

export class siParser extends Parser {
	public static readonly BLOCK_COMMENT = 1;
	public static readonly LINE_COMMENT = 2;
	public static readonly WHITE_SPACE = 3;
	public static readonly ALL = 4;
	public static readonly ANSICHAR = 5;
	public static readonly AS = 6;
	public static readonly AUTOTIMESTAMP = 7;
	public static readonly BIGIDENTITY = 8;
	public static readonly BIGSEQUENCE = 9;
	public static readonly BIGXML = 10;
	public static readonly BLOB = 11;
	public static readonly BOOLEAN = 12;
	public static readonly BULKINSERT = 13;
	public static readonly BULKUPDATE = 14;
	public static readonly BYTE = 15;
	public static readonly CALC = 16;
	public static readonly CASCADE = 17;
	public static readonly CHAR = 18;
	public static readonly CHECK = 19;
	public static readonly COUNT = 20;
	public static readonly CONST = 21;
	public static readonly CURSOR = 22;
	public static readonly DATABASE = 23;
	public static readonly DATE = 24;
	public static readonly DATETIME = 25;
	public static readonly DECLARE = 26;
	public static readonly DEFAULTV = 27;
	public static readonly DELETE = 28;
	public static readonly DELETEBY = 29;
	public static readonly DELETEALL = 30;
	public static readonly DELETEONE = 31;
	public static readonly DESC = 32;
	public static readonly DOUBLE = 33;
	public static readonly DYNAMIC = 34;
	public static readonly EXECUTE = 35;
	public static readonly EXISTS = 36;
	public static readonly FLAGS = 37;
	public static readonly FLOAT = 38;
	public static readonly FOR = 39;
	public static readonly GRANT = 40;
	public static readonly IDENTITY = 41;
	public static readonly IMPORT = 42;
	public static readonly IN = 43;
	public static readonly INOUT = 44;
	public static readonly INPUT = 45;
	public static readonly INSERT = 46;
	public static readonly INT = 47;
	public static readonly KEY = 48;
	public static readonly LINK = 49;
	public static readonly LONG = 50;
	public static readonly MERGE = 51;
	public static readonly MONEY = 52;
	public static readonly MULTIPLE = 53;
	public static readonly NAMES = 54;
	public static readonly NOT = 55;
	public static readonly NULL = 56;
	public static readonly OPTIONS = 57;
	public static readonly ORDER = 58;
	public static readonly OUTPUT = 59;
	public static readonly PACKAGE = 60;
	public static readonly PASSWORD = 61;
	public static readonly PRIMARY = 62;
	public static readonly PROC = 63;
	public static readonly READONLY = 64;
	public static readonly RETURNING = 65;
	public static readonly SCHEMA = 66;
	public static readonly SELECT = 67;
	public static readonly SELECTALL = 68;
	public static readonly SELECTBY = 69;
	public static readonly FROM = 70;
	public static readonly WHERE = 71;
	public static readonly SELECTONEBY = 72;
	public static readonly SELECTONE = 73;
	public static readonly SEQUENCE = 74;
	public static readonly SERVER = 75;
	public static readonly SHORT = 76;
	public static readonly SINGLE = 77;
	public static readonly SQL = 78;
	public static readonly SPROC = 79;
	public static readonly STANDARD = 80;
	public static readonly TABLE = 81;
	public static readonly TIME = 82;
	public static readonly TIMESTAMP = 83;
	public static readonly TLOB = 84;
	public static readonly TO = 85;
	public static readonly UID = 86;
	public static readonly UNIQUE = 87;
	public static readonly UPDATE = 88;
	public static readonly UPDATEFOR = 89;
	public static readonly UPDATEBY = 90;
	public static readonly MAXTMSTAMP = 91;
	public static readonly USERID = 92;
	public static readonly USERSTAMP = 93;
	public static readonly UTF8 = 94;
	public static readonly VIEW = 95;
	public static readonly WANSICHAR = 96;
	public static readonly WCHAR = 97;
	public static readonly XML = 98;
	public static readonly PARM = 99;
	public static readonly PARMSHOWS = 100;
	public static readonly PARMVIEWONLY = 101;
	public static readonly PARMCACHE = 102;
	public static readonly PARMREADER = 103;
	public static readonly PARMINSERT = 104;
	public static readonly PARMDELETE = 105;
	public static readonly PARMUPDATE = 106;
	public static readonly PARMSUPPLIED = 107;
	public static readonly COMMENT = 108;
	public static readonly ATSIGN = 109;
	public static readonly COLON = 110;
	public static readonly COMMA = 111;
	public static readonly EQUALS = 112;
	public static readonly LEFTBRACE = 113;
	public static readonly LEFTBRACK = 114;
	public static readonly LEFTPAREN = 115;
	public static readonly RIGHTBRACE = 116;
	public static readonly RIGHTBRACK = 117;
	public static readonly RIGHTPAREN = 118;
	public static readonly SEMICOLON = 119;
	public static readonly NUMBER = 120;
	public static readonly STRING = 121;
	public static readonly DQUOTEDS = 122;
	public static readonly SQUOTEDS = 123;
	public static readonly IDENTIFIER = 124;
	public static readonly LIDENTIFIER = 125;
	public static readonly LETTER = 126;
	public static readonly DIGIT = 127;
	public static readonly EXTRA = 128;
	public static readonly LITERAL = 129;
	public static readonly POINT = 130;
	public static readonly SQLCODE = 131;
	public static readonly SQLDATA = 132;
	public static readonly IDLCODE = 133;
	public static readonly CODE = 134;
	public static readonly DATA = 135;
	public static readonly ENDCODE = 136;
	public static readonly ENDDATA = 137;
	public static readonly CODELINE = 138;
	public static readonly RULE_jInput = 0;
	public static readonly RULE_jConnect = 1;
	public static readonly RULE_jPackageIdent = 2;
	public static readonly RULE_jIdentOrString = 3;
	public static readonly RULE_jIdent = 4;
	public static readonly RULE_jTables = 5;
	public static readonly RULE_jTableImport = 6;
	public static readonly RULE_jTable = 7;
	public static readonly RULE_jPackageField = 8;
	public static readonly RULE_jField = 9;
	public static readonly RULE_jAlias = 10;
	public static readonly RULE_jDatatype = 11;
	public static readonly RULE_jLookup = 12;
	public static readonly RULE_jEnumValue = 13;
	public static readonly RULE_jFloatsize = 14;
	public static readonly RULE_jEnumChar = 15;
	public static readonly RULE_jCharsize = 16;
	public static readonly RULE_jCharList = 17;
	public static readonly RULE_jNumber = 18;
	public static readonly RULE_jParm = 19;
	public static readonly RULE_jExtras = 20;
	public static readonly RULE_jConst = 21;
	public static readonly RULE_jGrant = 22;
	public static readonly RULE_jPermission = 23;
	public static readonly RULE_jUser = 24;
	public static readonly RULE_jKey = 25;
	public static readonly RULE_jModifier = 26;
	public static readonly RULE_jColumn = 27;
	public static readonly RULE_jLink = 28;
	public static readonly RULE_jLinkColumn = 29;
	public static readonly RULE_jView = 30;
	public static readonly RULE_jViewAlias = 31;
	public static readonly RULE_jLine = 32;
	public static readonly RULE_jString = 33;
	public static readonly RULE_jAsciiChar = 34;
	public static readonly RULE_jProc = 35;
	public static readonly RULE_jStdProc = 36;
	public static readonly RULE_jNewProc = 37;
	public static readonly RULE_jProcColumn = 38;
	public static readonly RULE_jOrderColumn = 39;
	public static readonly RULE_jProcUpdateByColumn = 40;
	public static readonly RULE_jComment = 41;
	public static readonly RULE_jRowCount = 42;
	public static readonly RULE_jUserProc = 43;
	public static readonly RULE_jOptSize = 44;
	public static readonly RULE_jInputType = 45;
	public static readonly RULE_jOutputType = 46;
	public static readonly RULE_jOldData = 47;
	public static readonly RULE_jNewData = 48;
	public static readonly RULE_jIdlCode = 49;
	public static readonly RULE_jOldCode = 50;
	public static readonly RULE_jOldViewCode = 51;
	public static readonly RULE_jNewCode = 52;
	public static readonly RULE_jNewViewCode = 53;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"jInput", "jConnect", "jPackageIdent", "jIdentOrString", "jIdent", "jTables", 
		"jTableImport", "jTable", "jPackageField", "jField", "jAlias", "jDatatype", 
		"jLookup", "jEnumValue", "jFloatsize", "jEnumChar", "jCharsize", "jCharList", 
		"jNumber", "jParm", "jExtras", "jConst", "jGrant", "jPermission", "jUser", 
		"jKey", "jModifier", "jColumn", "jLink", "jLinkColumn", "jView", "jViewAlias", 
		"jLine", "jString", "jAsciiChar", "jProc", "jStdProc", "jNewProc", "jProcColumn", 
		"jOrderColumn", "jProcUpdateByColumn", "jComment", "jRowCount", "jUserProc", 
		"jOptSize", "jInputType", "jOutputType", "jOldData", "jNewData", "jIdlCode", 
		"jOldCode", "jOldViewCode", "jNewCode", "jNewViewCode",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'@'", "':'", "','", "'='", 
		"'{'", "'['", "'('", "'};'", "']'", "')'", "';'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'.'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "BLOCK_COMMENT", "LINE_COMMENT", "WHITE_SPACE", "ALL", "ANSICHAR", 
		"AS", "AUTOTIMESTAMP", "BIGIDENTITY", "BIGSEQUENCE", "BIGXML", "BLOB", 
		"BOOLEAN", "BULKINSERT", "BULKUPDATE", "BYTE", "CALC", "CASCADE", "CHAR", 
		"CHECK", "COUNT", "CONST", "CURSOR", "DATABASE", "DATE", "DATETIME", "DECLARE", 
		"DEFAULTV", "DELETE", "DELETEBY", "DELETEALL", "DELETEONE", "DESC", "DOUBLE", 
		"DYNAMIC", "EXECUTE", "EXISTS", "FLAGS", "FLOAT", "FOR", "GRANT", "IDENTITY", 
		"IMPORT", "IN", "INOUT", "INPUT", "INSERT", "INT", "KEY", "LINK", "LONG", 
		"MERGE", "MONEY", "MULTIPLE", "NAMES", "NOT", "NULL", "OPTIONS", "ORDER", 
		"OUTPUT", "PACKAGE", "PASSWORD", "PRIMARY", "PROC", "READONLY", "RETURNING", 
		"SCHEMA", "SELECT", "SELECTALL", "SELECTBY", "FROM", "WHERE", "SELECTONEBY", 
		"SELECTONE", "SEQUENCE", "SERVER", "SHORT", "SINGLE", "SQL", "SPROC", 
		"STANDARD", "TABLE", "TIME", "TIMESTAMP", "TLOB", "TO", "UID", "UNIQUE", 
		"UPDATE", "UPDATEFOR", "UPDATEBY", "MAXTMSTAMP", "USERID", "USERSTAMP", 
		"UTF8", "VIEW", "WANSICHAR", "WCHAR", "XML", "PARM", "PARMSHOWS", "PARMVIEWONLY", 
		"PARMCACHE", "PARMREADER", "PARMINSERT", "PARMDELETE", "PARMUPDATE", "PARMSUPPLIED", 
		"COMMENT", "ATSIGN", "COLON", "COMMA", "EQUALS", "LEFTBRACE", "LEFTBRACK", 
		"LEFTPAREN", "RIGHTBRACE", "RIGHTBRACK", "RIGHTPAREN", "SEMICOLON", "NUMBER", 
		"STRING", "DQUOTEDS", "SQUOTEDS", "IDENTIFIER", "LIDENTIFIER", "LETTER", 
		"DIGIT", "EXTRA", "LITERAL", "POINT", "SQLCODE", "SQLDATA", "IDLCODE", 
		"CODE", "DATA", "ENDCODE", "ENDDATA", "CODELINE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(siParser._LITERAL_NAMES, siParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return siParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "siParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return siParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return siParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(siParser._ATN, this);
	}
	// @RuleVersion(0)
	public jInput(): JInputContext {
		let _localctx: JInputContext = new JInputContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, siParser.RULE_jInput);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 108;
			this.match(siParser.DATABASE);
			this.state = 109;
			this.jIdent();
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === siParser.FLAGS) {
				{
				{
				this.state = 110;
				this.match(siParser.FLAGS);
				this.state = 112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 111;
					this.jString();
					}
					}
					this.state = 114;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === siParser.STRING);
				}
				}
				this.state = 120;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === siParser.PACKAGE) {
				{
				this.state = 121;
				this.match(siParser.PACKAGE);
				this.state = 122;
				this.jPackageIdent();
				}
			}

			this.state = 133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === siParser.IMPORT || _la === siParser.OUTPUT) {
				{
				{
				this.state = 129;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case siParser.OUTPUT:
					{
					this.state = 125;
					this.match(siParser.OUTPUT);
					this.state = 126;
					this.jIdentOrString();
					}
					break;
				case siParser.IMPORT:
					{
					this.state = 127;
					this.match(siParser.IMPORT);
					this.state = 128;
					this.jIdentOrString();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 136;
			this.jConnect();
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 137;
				this.jTables();
				}
				}
				this.state = 140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === siParser.IMPORT || _la === siParser.TABLE);
			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === siParser.VIEW) {
				{
				{
				this.state = 142;
				this.jView();
				}
				}
				this.state = 147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 148;
			this.match(siParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jConnect(): JConnectContext {
		let _localctx: JConnectContext = new JConnectContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, siParser.RULE_jConnect);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 150;
			this.match(siParser.SERVER);
			this.state = 151;
			this.jIdentOrString();
			this.state = 154;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === siParser.SCHEMA) {
				{
				this.state = 152;
				this.match(siParser.SCHEMA);
				this.state = 153;
				this.jIdentOrString();
				}
			}

			this.state = 161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === siParser.USERID) {
				{
				this.state = 156;
				this.match(siParser.USERID);
				this.state = 157;
				this.jIdent();
				this.state = 158;
				this.match(siParser.PASSWORD);
				this.state = 159;
				this.jIdent();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jPackageIdent(): JPackageIdentContext {
		let _localctx: JPackageIdentContext = new JPackageIdentContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, siParser.RULE_jPackageIdent);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this.jIdent();
			this.state = 168;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === siParser.POINT) {
				{
				{
				this.state = 164;
				this.match(siParser.POINT);
				this.state = 165;
				this.jIdent();
				}
				}
				this.state = 170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jIdentOrString(): JIdentOrStringContext {
		let _localctx: JIdentOrStringContext = new JIdentOrStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, siParser.RULE_jIdentOrString);
		try {
			this.state = 173;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case siParser.IDENTIFIER:
			case siParser.LIDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 171;
				this.jIdent();
				}
				break;
			case siParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 172;
				this.match(siParser.STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jIdent(): JIdentContext {
		let _localctx: JIdentContext = new JIdentContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, siParser.RULE_jIdent);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			_la = this._input.LA(1);
			if (!(_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jTables(): JTablesContext {
		let _localctx: JTablesContext = new JTablesContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, siParser.RULE_jTables);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case siParser.TABLE:
				{
				this.state = 177;
				this.jTable();
				this.state = 181;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 178;
						this.jExtras();
						}
						}
					}
					this.state = 183;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
				}
				}
				break;
			case siParser.IMPORT:
				{
				this.state = 184;
				this.jTableImport();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 190;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === siParser.PROC || _la === siParser.SPROC || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (siParser.SQLDATA - 132)) | (1 << (siParser.IDLCODE - 132)) | (1 << (siParser.DATA - 132)))) !== 0)) {
				{
				{
				this.state = 187;
				this.jProc();
				}
				}
				this.state = 192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === siParser.PARM) {
				{
				{
				this.state = 193;
				this.match(siParser.PARM);
				this.state = 194;
				this.jParm();
				}
				}
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jTableImport(): JTableImportContext {
		let _localctx: JTableImportContext = new JTableImportContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, siParser.RULE_jTableImport);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this.match(siParser.IMPORT);
			this.state = 201;
			this.jIdentOrString();
			this.state = 210;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === siParser.LEFTBRACK) {
				{
				this.state = 202;
				this.match(siParser.LEFTBRACK);
				this.state = 204;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 203;
					this.jIdent();
					}
					}
					this.state = 206;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER);
				this.state = 208;
				this.match(siParser.RIGHTBRACK);
				}
			}

			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === siParser.LEFTPAREN) {
				{
				this.state = 212;
				this.jAlias();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jTable(): JTableContext {
		let _localctx: JTableContext = new JTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, siParser.RULE_jTable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 215;
			this.match(siParser.TABLE);
			this.state = 216;
			this.jIdent();
			this.state = 218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === siParser.LEFTPAREN) {
				{
				this.state = 217;
				this.jAlias();
				}
			}

			this.state = 222;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === siParser.CHECK) {
				{
				this.state = 220;
				this.match(siParser.CHECK);
				this.state = 221;
				this.match(siParser.STRING);
				}
			}

			this.state = 227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === siParser.COMMENT) {
				{
				{
				this.state = 224;
				this.jComment();
				}
				}
				this.state = 229;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === siParser.OPTIONS) {
				{
				{
				this.state = 230;
				this.match(siParser.OPTIONS);
				this.state = 232;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 231;
					this.jString();
					}
					}
					this.state = 234;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === siParser.STRING);
				}
				}
				this.state = 240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 244;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER) {
				{
				{
				this.state = 241;
				this.jField();
				}
				}
				this.state = 246;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jPackageField(): JPackageFieldContext {
		let _localctx: JPackageFieldContext = new JPackageFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, siParser.RULE_jPackageField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			this.jPackageIdent();
			this.state = 249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === siParser.LEFTPAREN) {
				{
				this.state = 248;
				this.jAlias();
				}
			}

			this.state = 251;
			this.jDatatype();
			this.state = 263;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << siParser.CALC) | (1 << siParser.CHECK) | (1 << siParser.DEFAULTV))) !== 0) || _la === siParser.NOT || _la === siParser.NULL) {
				{
				this.state = 261;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case siParser.DEFAULTV:
					{
					this.state = 252;
					this.match(siParser.DEFAULTV);
					this.state = 253;
					this.match(siParser.STRING);
					}
					break;
				case siParser.NOT:
				case siParser.NULL:
					{
					this.state = 255;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === siParser.NOT) {
						{
						this.state = 254;
						this.match(siParser.NOT);
						}
					}

					this.state = 257;
					this.match(siParser.NULL);
					}
					break;
				case siParser.CALC:
					{
					this.state = 258;
					this.match(siParser.CALC);
					}
					break;
				case siParser.CHECK:
					{
					this.state = 259;
					this.match(siParser.CHECK);
					this.state = 260;
					this.match(siParser.STRING);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 265;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 269;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === siParser.COMMENT) {
				{
				{
				this.state = 266;
				this.jComment();
				}
				}
				this.state = 271;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jField(): JFieldContext {
		let _localctx: JFieldContext = new JFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, siParser.RULE_jField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 272;
			this.jIdent();
			this.state = 274;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === siParser.LEFTPAREN) {
				{
				this.state = 273;
				this.jAlias();
				}
			}

			this.state = 276;
			this.jDatatype();
			this.state = 288;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << siParser.CALC) | (1 << siParser.CHECK) | (1 << siParser.DEFAULTV))) !== 0) || _la === siParser.NOT || _la === siParser.NULL) {
				{
				this.state = 286;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case siParser.DEFAULTV:
					{
					this.state = 277;
					this.match(siParser.DEFAULTV);
					this.state = 278;
					this.match(siParser.STRING);
					}
					break;
				case siParser.NOT:
				case siParser.NULL:
					{
					this.state = 280;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === siParser.NOT) {
						{
						this.state = 279;
						this.match(siParser.NOT);
						}
					}

					this.state = 282;
					this.match(siParser.NULL);
					}
					break;
				case siParser.CALC:
					{
					this.state = 283;
					this.match(siParser.CALC);
					}
					break;
				case siParser.CHECK:
					{
					this.state = 284;
					this.match(siParser.CHECK);
					this.state = 285;
					this.match(siParser.STRING);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 290;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === siParser.COMMENT) {
				{
				{
				this.state = 291;
				this.jComment();
				}
				}
				this.state = 296;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jAlias(): JAliasContext {
		let _localctx: JAliasContext = new JAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, siParser.RULE_jAlias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 297;
			this.match(siParser.LEFTPAREN);
			this.state = 298;
			this.jIdent();
			this.state = 299;
			this.match(siParser.RIGHTPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jDatatype(): JDatatypeContext {
		let _localctx: JDatatypeContext = new JDatatypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, siParser.RULE_jDatatype);
		let _la: number;
		try {
			this.state = 380;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case siParser.BLOB:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 301;
				this.match(siParser.BLOB);
				this.state = 303;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (siParser.LEFTBRACK - 114)) | (1 << (siParser.LEFTPAREN - 114)) | (1 << (siParser.NUMBER - 114)))) !== 0)) {
					{
					this.state = 302;
					this.jCharsize();
					}
				}

				}
				break;
			case siParser.BOOLEAN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 305;
				this.match(siParser.BOOLEAN);
				}
				break;
			case siParser.BYTE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 306;
				this.match(siParser.BYTE);
				this.state = 309;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case siParser.LEFTPAREN:
					{
					this.state = 307;
					this.jEnumValue();
					}
					break;
				case siParser.LEFTBRACE:
					{
					this.state = 308;
					this.jCharList();
					}
					break;
				case siParser.EOF:
				case siParser.CALC:
				case siParser.CHECK:
				case siParser.CONST:
				case siParser.DEFAULTV:
				case siParser.GRANT:
				case siParser.IMPORT:
				case siParser.INOUT:
				case siParser.KEY:
				case siParser.LINK:
				case siParser.NOT:
				case siParser.NULL:
				case siParser.OPTIONS:
				case siParser.OUTPUT:
				case siParser.PROC:
				case siParser.SQL:
				case siParser.SPROC:
				case siParser.TABLE:
				case siParser.VIEW:
				case siParser.PARM:
				case siParser.COMMENT:
				case siParser.IDENTIFIER:
				case siParser.LIDENTIFIER:
				case siParser.SQLCODE:
				case siParser.SQLDATA:
				case siParser.IDLCODE:
				case siParser.CODE:
				case siParser.DATA:
					break;
				default:
					break;
				}
				}
				break;
			case siParser.CHAR:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 311;
				this.match(siParser.CHAR);
				this.state = 313;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (siParser.LEFTBRACK - 114)) | (1 << (siParser.LEFTPAREN - 114)) | (1 << (siParser.NUMBER - 114)))) !== 0)) {
					{
					this.state = 312;
					this.jCharsize();
					}
				}

				this.state = 316;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.LEFTBRACE) {
					{
					this.state = 315;
					this.jCharList();
					}
				}

				}
				break;
			case siParser.ANSICHAR:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 318;
				this.match(siParser.ANSICHAR);
				this.state = 320;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (siParser.LEFTBRACK - 114)) | (1 << (siParser.LEFTPAREN - 114)) | (1 << (siParser.NUMBER - 114)))) !== 0)) {
					{
					this.state = 319;
					this.jEnumChar();
					}
				}

				}
				break;
			case siParser.WCHAR:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 322;
				this.match(siParser.WCHAR);
				this.state = 324;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (siParser.LEFTBRACK - 114)) | (1 << (siParser.LEFTPAREN - 114)) | (1 << (siParser.NUMBER - 114)))) !== 0)) {
					{
					this.state = 323;
					this.jCharsize();
					}
				}

				this.state = 327;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.LEFTBRACE) {
					{
					this.state = 326;
					this.jCharList();
					}
				}

				}
				break;
			case siParser.WANSICHAR:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 329;
				this.match(siParser.WANSICHAR);
				this.state = 331;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (siParser.LEFTBRACK - 114)) | (1 << (siParser.LEFTPAREN - 114)) | (1 << (siParser.NUMBER - 114)))) !== 0)) {
					{
					this.state = 330;
					this.jEnumChar();
					}
				}

				}
				break;
			case siParser.UTF8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 333;
				this.match(siParser.UTF8);
				this.state = 335;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (siParser.LEFTBRACK - 114)) | (1 << (siParser.LEFTPAREN - 114)) | (1 << (siParser.NUMBER - 114)))) !== 0)) {
					{
					this.state = 334;
					this.jCharsize();
					}
				}

				this.state = 338;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.LEFTBRACE) {
					{
					this.state = 337;
					this.jCharList();
					}
				}

				}
				break;
			case siParser.SHORT:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 340;
				this.match(siParser.SHORT);
				this.state = 343;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case siParser.LEFTPAREN:
					{
					this.state = 341;
					this.jEnumValue();
					}
					break;
				case siParser.LEFTBRACE:
					{
					this.state = 342;
					this.jCharList();
					}
					break;
				case siParser.EOF:
				case siParser.CALC:
				case siParser.CHECK:
				case siParser.CONST:
				case siParser.DEFAULTV:
				case siParser.GRANT:
				case siParser.IMPORT:
				case siParser.INOUT:
				case siParser.KEY:
				case siParser.LINK:
				case siParser.NOT:
				case siParser.NULL:
				case siParser.OPTIONS:
				case siParser.OUTPUT:
				case siParser.PROC:
				case siParser.SQL:
				case siParser.SPROC:
				case siParser.TABLE:
				case siParser.VIEW:
				case siParser.PARM:
				case siParser.COMMENT:
				case siParser.IDENTIFIER:
				case siParser.LIDENTIFIER:
				case siParser.SQLCODE:
				case siParser.SQLDATA:
				case siParser.IDLCODE:
				case siParser.CODE:
				case siParser.DATA:
					break;
				default:
					break;
				}
				}
				break;
			case siParser.INT:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 345;
				this.match(siParser.INT);
				this.state = 348;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case siParser.LEFTPAREN:
					{
					this.state = 346;
					this.jEnumValue();
					}
					break;
				case siParser.LEFTBRACE:
					{
					this.state = 347;
					this.jCharList();
					}
					break;
				case siParser.EOF:
				case siParser.CALC:
				case siParser.CHECK:
				case siParser.CONST:
				case siParser.DEFAULTV:
				case siParser.GRANT:
				case siParser.IMPORT:
				case siParser.INOUT:
				case siParser.KEY:
				case siParser.LINK:
				case siParser.NOT:
				case siParser.NULL:
				case siParser.OPTIONS:
				case siParser.OUTPUT:
				case siParser.PROC:
				case siParser.SQL:
				case siParser.SPROC:
				case siParser.TABLE:
				case siParser.VIEW:
				case siParser.PARM:
				case siParser.COMMENT:
				case siParser.IDENTIFIER:
				case siParser.LIDENTIFIER:
				case siParser.SQLCODE:
				case siParser.SQLDATA:
				case siParser.IDLCODE:
				case siParser.CODE:
				case siParser.DATA:
					break;
				default:
					break;
				}
				}
				break;
			case siParser.LONG:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 350;
				this.match(siParser.LONG);
				}
				break;
			case siParser.UID:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 351;
				this.match(siParser.UID);
				}
				break;
			case siParser.DATE:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 352;
				this.match(siParser.DATE);
				}
				break;
			case siParser.DATETIME:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 353;
				this.match(siParser.DATETIME);
				}
				break;
			case siParser.TIME:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 354;
				this.match(siParser.TIME);
				}
				break;
			case siParser.TIMESTAMP:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 355;
				this.match(siParser.TIMESTAMP);
				}
				break;
			case siParser.AUTOTIMESTAMP:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 356;
				this.match(siParser.AUTOTIMESTAMP);
				}
				break;
			case siParser.TLOB:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 357;
				this.match(siParser.TLOB);
				this.state = 359;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (siParser.LEFTBRACK - 114)) | (1 << (siParser.LEFTPAREN - 114)) | (1 << (siParser.NUMBER - 114)))) !== 0)) {
					{
					this.state = 358;
					this.jCharsize();
					}
				}

				}
				break;
			case siParser.XML:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 361;
				this.match(siParser.XML);
				this.state = 363;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (siParser.LEFTBRACK - 114)) | (1 << (siParser.LEFTPAREN - 114)) | (1 << (siParser.NUMBER - 114)))) !== 0)) {
					{
					this.state = 362;
					this.jCharsize();
					}
				}

				}
				break;
			case siParser.BIGXML:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 365;
				this.match(siParser.BIGXML);
				this.state = 367;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (siParser.LEFTBRACK - 114)) | (1 << (siParser.LEFTPAREN - 114)) | (1 << (siParser.NUMBER - 114)))) !== 0)) {
					{
					this.state = 366;
					this.jCharsize();
					}
				}

				}
				break;
			case siParser.USERSTAMP:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 369;
				this.match(siParser.USERSTAMP);
				}
				break;
			case siParser.SEQUENCE:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 370;
				this.match(siParser.SEQUENCE);
				}
				break;
			case siParser.BIGSEQUENCE:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 371;
				this.match(siParser.BIGSEQUENCE);
				}
				break;
			case siParser.IDENTITY:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 372;
				this.match(siParser.IDENTITY);
				}
				break;
			case siParser.BIGIDENTITY:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 373;
				this.match(siParser.BIGIDENTITY);
				}
				break;
			case siParser.DOUBLE:
			case siParser.FLOAT:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 374;
				_la = this._input.LA(1);
				if (!(_la === siParser.DOUBLE || _la === siParser.FLOAT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 376;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.LEFTBRACK || _la === siParser.LEFTPAREN) {
					{
					this.state = 375;
					this.jFloatsize();
					}
				}

				}
				break;
			case siParser.MONEY:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 378;
				this.match(siParser.MONEY);
				}
				break;
			case siParser.EQUALS:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 379;
				this.jLookup();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jLookup(): JLookupContext {
		let _localctx: JLookupContext = new JLookupContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, siParser.RULE_jLookup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 382;
			this.match(siParser.EQUALS);
			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === siParser.LEFTPAREN) {
				{
				this.state = 383;
				this.match(siParser.LEFTPAREN);
				this.state = 384;
				this.jIdent();
				this.state = 385;
				this.match(siParser.RIGHTPAREN);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jEnumValue(): JEnumValueContext {
		let _localctx: JEnumValueContext = new JEnumValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, siParser.RULE_jEnumValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 389;
			this.match(siParser.LEFTPAREN);
			{
			this.state = 392;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === siParser.LINK) {
				{
				this.state = 390;
				this.match(siParser.LINK);
				this.state = 391;
				this.jIdent();
				}
			}

			this.state = 400;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 394;
				this.jIdent();
				this.state = 395;
				this.match(siParser.EQUALS);
				this.state = 396;
				this.jNumber();
				this.state = 398;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.COMMA) {
					{
					this.state = 397;
					this.match(siParser.COMMA);
					}
				}

				}
				}
				this.state = 402;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER);
			}
			this.state = 404;
			this.match(siParser.RIGHTPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jFloatsize(): JFloatsizeContext {
		let _localctx: JFloatsizeContext = new JFloatsizeContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, siParser.RULE_jFloatsize);
		try {
			this.state = 418;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case siParser.LEFTBRACK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 406;
				this.match(siParser.LEFTBRACK);
				this.state = 407;
				this.jNumber();
				this.state = 408;
				this.match(siParser.COMMA);
				this.state = 409;
				this.jNumber();
				this.state = 410;
				this.match(siParser.RIGHTBRACK);
				}
				break;
			case siParser.LEFTPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 412;
				this.match(siParser.LEFTPAREN);
				this.state = 413;
				this.jNumber();
				this.state = 414;
				this.match(siParser.COMMA);
				this.state = 415;
				this.jNumber();
				this.state = 416;
				this.match(siParser.RIGHTPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jEnumChar(): JEnumCharContext {
		let _localctx: JEnumCharContext = new JEnumCharContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, siParser.RULE_jEnumChar);
		let _la: number;
		try {
			this.state = 445;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case siParser.LEFTBRACK:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 420;
				this.match(siParser.LEFTBRACK);
				this.state = 421;
				this.jNumber();
				this.state = 422;
				this.match(siParser.RIGHTBRACK);
				}
				}
				break;
			case siParser.LEFTPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 424;
				this.match(siParser.LEFTPAREN);
				this.state = 440;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case siParser.NUMBER:
					{
					this.state = 425;
					this.jNumber();
					}
					break;
				case siParser.LINK:
				case siParser.IDENTIFIER:
				case siParser.LIDENTIFIER:
					{
					this.state = 428;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === siParser.LINK) {
						{
						this.state = 426;
						this.match(siParser.LINK);
						this.state = 427;
						this.jIdent();
						}
					}

					this.state = 436;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 430;
						this.jIdent();
						this.state = 431;
						this.match(siParser.EQUALS);
						this.state = 432;
						this.jAsciiChar();
						this.state = 434;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === siParser.COMMA) {
							{
							this.state = 433;
							this.match(siParser.COMMA);
							}
						}

						}
						}
						this.state = 438;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 442;
				this.match(siParser.RIGHTPAREN);
				}
				}
				break;
			case siParser.NUMBER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 444;
				this.jNumber();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jCharsize(): JCharsizeContext {
		let _localctx: JCharsizeContext = new JCharsizeContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, siParser.RULE_jCharsize);
		try {
			this.state = 456;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case siParser.LEFTBRACK:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 447;
				this.match(siParser.LEFTBRACK);
				this.state = 448;
				this.jNumber();
				this.state = 449;
				this.match(siParser.RIGHTBRACK);
				}
				}
				break;
			case siParser.LEFTPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 451;
				this.match(siParser.LEFTPAREN);
				this.state = 452;
				this.jNumber();
				this.state = 453;
				this.match(siParser.RIGHTPAREN);
				}
				}
				break;
			case siParser.NUMBER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 455;
				this.jNumber();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jCharList(): JCharListContext {
		let _localctx: JCharListContext = new JCharListContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, siParser.RULE_jCharList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 458;
			this.match(siParser.LEFTBRACE);
			this.state = 463;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 459;
				this.jIdent();
				this.state = 461;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.COMMA) {
					{
					this.state = 460;
					this.match(siParser.COMMA);
					}
				}

				}
				}
				this.state = 465;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER);
			this.state = 467;
			this.match(siParser.RIGHTBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jNumber(): JNumberContext {
		let _localctx: JNumberContext = new JNumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, siParser.RULE_jNumber);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 469;
			this.match(siParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jParm(): JParmContext {
		let _localctx: JParmContext = new JParmContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, siParser.RULE_jParm);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 472;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === siParser.STRING) {
				{
				this.state = 471;
				this.jString();
				}
			}

			this.state = 520;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (siParser.PARMSHOWS - 100)) | (1 << (siParser.PARMVIEWONLY - 100)) | (1 << (siParser.PARMCACHE - 100)) | (1 << (siParser.PARMREADER - 100)) | (1 << (siParser.PARMINSERT - 100)) | (1 << (siParser.PARMDELETE - 100)) | (1 << (siParser.PARMUPDATE - 100)) | (1 << (siParser.PARMSUPPLIED - 100)))) !== 0)) {
				{
				this.state = 518;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case siParser.PARMSHOWS:
					{
					this.state = 474;
					this.match(siParser.PARMSHOWS);
					this.state = 476;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 475;
						this.jIdent();
						}
						}
						this.state = 478;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER);
					}
					break;
				case siParser.PARMVIEWONLY:
					{
					this.state = 480;
					this.match(siParser.PARMVIEWONLY);
					}
					break;
				case siParser.PARMSUPPLIED:
					{
					this.state = 481;
					this.match(siParser.PARMSUPPLIED);
					this.state = 483;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 482;
						this.jIdent();
						}
						}
						this.state = 485;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER);
					}
					break;
				case siParser.PARMCACHE:
					{
					this.state = 487;
					this.match(siParser.PARMCACHE);
					this.state = 490;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case siParser.IDENTIFIER:
					case siParser.LIDENTIFIER:
						{
						this.state = 488;
						this.jIdent();
						}
						break;
					case siParser.SELECTALL:
						{
						this.state = 489;
						this.match(siParser.SELECTALL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 495;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER) {
						{
						{
						this.state = 492;
						this.jIdent();
						}
						}
						this.state = 497;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				case siParser.PARMREADER:
					{
					this.state = 498;
					this.match(siParser.PARMREADER);
					this.state = 501;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case siParser.IDENTIFIER:
					case siParser.LIDENTIFIER:
						{
						this.state = 499;
						this.jIdent();
						}
						break;
					case siParser.SELECTALL:
						{
						this.state = 500;
						this.match(siParser.SELECTALL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				case siParser.PARMINSERT:
					{
					this.state = 503;
					this.match(siParser.PARMINSERT);
					this.state = 506;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case siParser.IDENTIFIER:
					case siParser.LIDENTIFIER:
						{
						this.state = 504;
						this.jIdent();
						}
						break;
					case siParser.INSERT:
						{
						this.state = 505;
						this.match(siParser.INSERT);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				case siParser.PARMUPDATE:
					{
					this.state = 508;
					this.match(siParser.PARMUPDATE);
					this.state = 511;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case siParser.IDENTIFIER:
					case siParser.LIDENTIFIER:
						{
						this.state = 509;
						this.jIdent();
						}
						break;
					case siParser.UPDATE:
						{
						this.state = 510;
						this.match(siParser.UPDATE);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				case siParser.PARMDELETE:
					{
					this.state = 513;
					this.match(siParser.PARMDELETE);
					this.state = 516;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case siParser.IDENTIFIER:
					case siParser.LIDENTIFIER:
						{
						this.state = 514;
						this.jIdent();
						}
						break;
					case siParser.DELETEONE:
						{
						this.state = 515;
						this.match(siParser.DELETEONE);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 522;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jExtras(): JExtrasContext {
		let _localctx: JExtrasContext = new JExtrasContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, siParser.RULE_jExtras);
		try {
			this.state = 528;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case siParser.GRANT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 523;
				this.jGrant();
				}
				break;
			case siParser.KEY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 524;
				this.jKey();
				}
				break;
			case siParser.LINK:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 525;
				this.jLink();
				}
				break;
			case siParser.VIEW:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 526;
				this.jView();
				}
				break;
			case siParser.CONST:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 527;
				this.jConst();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jConst(): JConstContext {
		let _localctx: JConstContext = new JConstContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, siParser.RULE_jConst);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 530;
			this.match(siParser.CONST);
			this.state = 531;
			this.jIdent();
			this.state = 538;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 532;
				this.jIdent();
				this.state = 533;
				this.match(siParser.EQUALS);
				this.state = 534;
				this.jString();
				this.state = 536;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.COMMA) {
					{
					this.state = 535;
					this.match(siParser.COMMA);
					}
				}

				}
				}
				this.state = 540;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jGrant(): JGrantContext {
		let _localctx: JGrantContext = new JGrantContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, siParser.RULE_jGrant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 542;
			this.match(siParser.GRANT);
			this.state = 544;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 543;
				this.jPermission();
				}
				}
				this.state = 546;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === siParser.ALL || _la === siParser.DELETE || _la === siParser.EXECUTE || _la === siParser.INSERT || _la === siParser.SELECT || _la === siParser.UPDATE);
			this.state = 548;
			this.match(siParser.TO);
			this.state = 550;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 549;
				this.jUser();
				}
				}
				this.state = 552;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jPermission(): JPermissionContext {
		let _localctx: JPermissionContext = new JPermissionContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, siParser.RULE_jPermission);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 554;
			_la = this._input.LA(1);
			if (!(_la === siParser.ALL || _la === siParser.DELETE || _la === siParser.EXECUTE || _la === siParser.INSERT || _la === siParser.SELECT || _la === siParser.UPDATE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jUser(): JUserContext {
		let _localctx: JUserContext = new JUserContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, siParser.RULE_jUser);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 556;
			this.jIdent();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jKey(): JKeyContext {
		let _localctx: JKeyContext = new JKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, siParser.RULE_jKey);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 558;
			this.match(siParser.KEY);
			this.state = 559;
			this.jIdent();
			this.state = 568;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === siParser.OPTIONS) {
				{
				{
				this.state = 560;
				this.match(siParser.OPTIONS);
				this.state = 562;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 561;
					this.jString();
					}
					}
					this.state = 564;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === siParser.STRING);
				}
				}
				this.state = 570;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 574;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === siParser.PRIMARY || _la === siParser.UNIQUE) {
				{
				{
				this.state = 571;
				this.jModifier();
				}
				}
				this.state = 576;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 578;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 577;
				this.jColumn();
				}
				}
				this.state = 580;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jModifier(): JModifierContext {
		let _localctx: JModifierContext = new JModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, siParser.RULE_jModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 582;
			_la = this._input.LA(1);
			if (!(_la === siParser.PRIMARY || _la === siParser.UNIQUE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jColumn(): JColumnContext {
		let _localctx: JColumnContext = new JColumnContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, siParser.RULE_jColumn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 584;
			this.jIdent();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jLink(): JLinkContext {
		let _localctx: JLinkContext = new JLinkContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, siParser.RULE_jLink);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 586;
			this.match(siParser.LINK);
			this.state = 587;
			this.jPackageIdent();
			this.state = 596;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === siParser.LEFTPAREN) {
				{
				this.state = 588;
				this.match(siParser.LEFTPAREN);
				this.state = 590;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 589;
					this.jIdent();
					}
					}
					this.state = 592;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER);
				this.state = 594;
				this.match(siParser.RIGHTPAREN);
				}
			}

			this.state = 602;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === siParser.DELETE) {
				{
				this.state = 598;
				this.match(siParser.DELETE);
				this.state = 600;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.CASCADE) {
					{
					this.state = 599;
					this.match(siParser.CASCADE);
					}
				}

				}
			}

			this.state = 608;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === siParser.UPDATE) {
				{
				this.state = 604;
				this.match(siParser.UPDATE);
				this.state = 606;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.CASCADE) {
					{
					this.state = 605;
					this.match(siParser.CASCADE);
					}
				}

				}
			}

			this.state = 618;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === siParser.OPTIONS) {
				{
				{
				this.state = 610;
				this.match(siParser.OPTIONS);
				this.state = 612;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 611;
					this.jString();
					}
					}
					this.state = 614;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === siParser.STRING);
				}
				}
				this.state = 620;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 622;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 621;
				this.jLinkColumn();
				}
				}
				this.state = 624;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jLinkColumn(): JLinkColumnContext {
		let _localctx: JLinkColumnContext = new JLinkColumnContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, siParser.RULE_jLinkColumn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 626;
			this.jIdent();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jView(): JViewContext {
		let _localctx: JViewContext = new JViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, siParser.RULE_jView);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 628;
			this.match(siParser.VIEW);
			this.state = 629;
			this.jIdent();
			this.state = 636;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === siParser.TO) {
				{
				this.state = 630;
				this.match(siParser.TO);
				this.state = 632;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 631;
					this.jUser();
					}
					}
					this.state = 634;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER);
				}
			}

			this.state = 644;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === siParser.OUTPUT) {
				{
				this.state = 638;
				this.match(siParser.OUTPUT);
				this.state = 640;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 639;
					this.jViewAlias();
					}
					}
					this.state = 642;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER);
				}
			}

			this.state = 648;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case siParser.CODE:
				{
				this.state = 646;
				this.jOldViewCode();
				}
				break;
			case siParser.SQLCODE:
				{
				this.state = 647;
				this.jNewViewCode();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jViewAlias(): JViewAliasContext {
		let _localctx: JViewAliasContext = new JViewAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, siParser.RULE_jViewAlias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 650;
			this.jIdent();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jLine(): JLineContext {
		let _localctx: JLineContext = new JLineContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, siParser.RULE_jLine);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 652;
			this.match(siParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jString(): JStringContext {
		let _localctx: JStringContext = new JStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, siParser.RULE_jString);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 654;
			this.match(siParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jAsciiChar(): JAsciiCharContext {
		let _localctx: JAsciiCharContext = new JAsciiCharContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, siParser.RULE_jAsciiChar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 656;
			this.jString();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jProc(): JProcContext {
		let _localctx: JProcContext = new JProcContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, siParser.RULE_jProc);
		let _la: number;
		try {
			this.state = 671;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case siParser.PROC:
			case siParser.SPROC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 658;
				_la = this._input.LA(1);
				if (!(_la === siParser.PROC || _la === siParser.SPROC)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 664;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case siParser.BULKINSERT:
				case siParser.BULKUPDATE:
				case siParser.COUNT:
				case siParser.DELETEALL:
				case siParser.DELETEONE:
				case siParser.EXISTS:
				case siParser.INSERT:
				case siParser.MERGE:
				case siParser.SELECTALL:
				case siParser.SELECTBY:
				case siParser.SELECTONEBY:
				case siParser.SELECTONE:
				case siParser.UPDATE:
				case siParser.MAXTMSTAMP:
					{
					this.state = 659;
					this.jStdProc();
					}
					break;
				case siParser.IDENTIFIER:
				case siParser.LIDENTIFIER:
					{
					this.state = 662;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
					case 1:
						{
						this.state = 660;
						this.jNewProc();
						}
						break;

					case 2:
						{
						this.state = 661;
						this.jUserProc();
						}
						break;
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case siParser.SQLDATA:
			case siParser.IDLCODE:
			case siParser.DATA:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 669;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case siParser.DATA:
					{
					this.state = 666;
					this.jOldData();
					}
					break;
				case siParser.SQLDATA:
					{
					this.state = 667;
					this.jNewData();
					}
					break;
				case siParser.IDLCODE:
					{
					this.state = 668;
					this.jIdlCode();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jStdProc(): JStdProcContext {
		let _localctx: JStdProcContext = new JStdProcContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, siParser.RULE_jStdProc);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 782;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case siParser.INSERT:
				{
				this.state = 673;
				this.match(siParser.INSERT);
				this.state = 675;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.RETURNING) {
					{
					this.state = 674;
					this.match(siParser.RETURNING);
					}
				}

				}
				break;
			case siParser.UPDATE:
				{
				this.state = 677;
				this.match(siParser.UPDATE);
				}
				break;
			case siParser.BULKINSERT:
				{
				this.state = 678;
				this.match(siParser.BULKINSERT);
				this.state = 680;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.LEFTPAREN) {
					{
					this.state = 679;
					this.jRowCount();
					}
				}

				}
				break;
			case siParser.MAXTMSTAMP:
				{
				this.state = 682;
				this.match(siParser.MAXTMSTAMP);
				}
				break;
			case siParser.BULKUPDATE:
				{
				this.state = 683;
				this.match(siParser.BULKUPDATE);
				this.state = 685;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.LEFTPAREN) {
					{
					this.state = 684;
					this.jRowCount();
					}
				}

				}
				break;
			case siParser.DELETEONE:
				{
				this.state = 687;
				this.match(siParser.DELETEONE);
				this.state = 691;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.LEFTPAREN) {
					{
					this.state = 688;
					this.match(siParser.LEFTPAREN);
					this.state = 689;
					this.match(siParser.STANDARD);
					this.state = 690;
					this.match(siParser.RIGHTPAREN);
					}
				}

				}
				break;
			case siParser.DELETEALL:
				{
				this.state = 693;
				this.match(siParser.DELETEALL);
				}
				break;
			case siParser.SELECTONE:
				{
				this.state = 694;
				this.match(siParser.SELECTONE);
				this.state = 699;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.FOR || _la === siParser.READONLY || _la === siParser.UPDATE) {
					{
					this.state = 696;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === siParser.FOR) {
						{
						this.state = 695;
						this.match(siParser.FOR);
						}
					}

					this.state = 698;
					_la = this._input.LA(1);
					if (!(_la === siParser.READONLY || _la === siParser.UPDATE)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				}
				break;
			case siParser.SELECTONEBY:
				{
				this.state = 701;
				this.match(siParser.SELECTONEBY);
				this.state = 703;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 702;
					this.jProcColumn();
					}
					}
					this.state = 705;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER);
				this.state = 711;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.IN || _la === siParser.ORDER) {
					{
					this.state = 708;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === siParser.IN) {
						{
						this.state = 707;
						this.match(siParser.IN);
						}
					}

					this.state = 710;
					this.match(siParser.ORDER);
					}
				}

				this.state = 717;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.FOR || _la === siParser.READONLY || _la === siParser.UPDATE) {
					{
					this.state = 714;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === siParser.FOR) {
						{
						this.state = 713;
						this.match(siParser.FOR);
						}
					}

					this.state = 716;
					_la = this._input.LA(1);
					if (!(_la === siParser.READONLY || _la === siParser.UPDATE)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 721;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.AS) {
					{
					this.state = 719;
					this.match(siParser.AS);
					this.state = 720;
					this.jIdent();
					}
				}

				}
				break;
			case siParser.SELECTBY:
				{
				this.state = 723;
				this.match(siParser.SELECTBY);
				this.state = 725;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 724;
					this.jProcColumn();
					}
					}
					this.state = 727;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER);
				this.state = 733;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.IN || _la === siParser.ORDER) {
					{
					this.state = 730;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === siParser.IN) {
						{
						this.state = 729;
						this.match(siParser.IN);
						}
					}

					this.state = 732;
					this.match(siParser.ORDER);
					}
				}

				this.state = 739;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.FOR || _la === siParser.READONLY || _la === siParser.UPDATE) {
					{
					this.state = 736;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === siParser.FOR) {
						{
						this.state = 735;
						this.match(siParser.FOR);
						}
					}

					this.state = 738;
					_la = this._input.LA(1);
					if (!(_la === siParser.READONLY || _la === siParser.UPDATE)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 743;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.AS) {
					{
					this.state = 741;
					this.match(siParser.AS);
					this.state = 742;
					this.jIdent();
					}
				}

				this.state = 755;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.OUTPUT) {
					{
					this.state = 745;
					this.match(siParser.OUTPUT);
					this.state = 747;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === siParser.LEFTPAREN) {
						{
						this.state = 746;
						this.jOutputType();
						}
					}

					this.state = 752;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER) {
						{
						{
						this.state = 749;
						this.jField();
						}
						}
						this.state = 754;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				}
				break;
			case siParser.SELECTALL:
				{
				this.state = 757;
				this.match(siParser.SELECTALL);
				this.state = 771;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.IN || _la === siParser.ORDER) {
					{
					this.state = 759;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === siParser.IN) {
						{
						this.state = 758;
						this.match(siParser.IN);
						}
					}

					this.state = 761;
					this.match(siParser.ORDER);
					this.state = 765;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER) {
						{
						{
						this.state = 762;
						this.jOrderColumn();
						}
						}
						this.state = 767;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 769;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === siParser.DESC) {
						{
						this.state = 768;
						this.match(siParser.DESC);
						}
					}

					}
				}

				this.state = 777;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.FOR || _la === siParser.READONLY || _la === siParser.UPDATE) {
					{
					this.state = 774;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === siParser.FOR) {
						{
						this.state = 773;
						this.match(siParser.FOR);
						}
					}

					this.state = 776;
					_la = this._input.LA(1);
					if (!(_la === siParser.READONLY || _la === siParser.UPDATE)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				}
				break;
			case siParser.COUNT:
				{
				this.state = 779;
				this.match(siParser.COUNT);
				}
				break;
			case siParser.EXISTS:
				{
				this.state = 780;
				this.match(siParser.EXISTS);
				}
				break;
			case siParser.MERGE:
				{
				this.state = 781;
				this.match(siParser.MERGE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 792;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === siParser.OPTIONS) {
				{
				{
				this.state = 784;
				this.match(siParser.OPTIONS);
				this.state = 786;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 785;
					this.jString();
					}
					}
					this.state = 788;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === siParser.STRING);
				}
				}
				this.state = 794;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jNewProc(): JNewProcContext {
		let _localctx: JNewProcContext = new JNewProcContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, siParser.RULE_jNewProc);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 795;
			this.jIdent();
			this.state = 906;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case siParser.SELECT:
				{
				this.state = 796;
				this.match(siParser.SELECT);
				this.state = 800;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.LEFTPAREN) {
					{
					this.state = 797;
					this.match(siParser.LEFTPAREN);
					this.state = 798;
					this.match(siParser.STANDARD);
					this.state = 799;
					this.match(siParser.RIGHTPAREN);
					}
				}

				this.state = 811;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.INPUT) {
					{
					this.state = 802;
					this.match(siParser.INPUT);
					this.state = 804;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === siParser.LEFTPAREN) {
						{
						this.state = 803;
						this.jInputType();
						}
					}

					this.state = 807;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 806;
						this.jField();
						}
						}
						this.state = 809;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER);
					}
				}

				this.state = 823;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.OUTPUT) {
					{
					this.state = 813;
					this.match(siParser.OUTPUT);
					this.state = 815;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === siParser.LEFTPAREN) {
						{
						this.state = 814;
						this.jOutputType();
						}
					}

					this.state = 820;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER) {
						{
						{
						this.state = 817;
						this.jPackageField();
						}
						}
						this.state = 822;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 827;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case siParser.SQL:
				case siParser.CODE:
					{
					this.state = 825;
					this.jOldCode();
					}
					break;
				case siParser.SQLCODE:
					{
					this.state = 826;
					this.jNewCode();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case siParser.SELECTONEBY:
				{
				this.state = 829;
				this.match(siParser.SELECTONEBY);
				this.state = 831;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 830;
					this.jProcColumn();
					}
					}
					this.state = 833;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER);
				this.state = 839;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.FOR || _la === siParser.READONLY || _la === siParser.UPDATE) {
					{
					this.state = 836;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === siParser.FOR) {
						{
						this.state = 835;
						this.match(siParser.FOR);
						}
					}

					this.state = 838;
					_la = this._input.LA(1);
					if (!(_la === siParser.READONLY || _la === siParser.UPDATE)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				}
				break;
			case siParser.SELECTBY:
				{
				this.state = 841;
				this.match(siParser.SELECTBY);
				this.state = 843;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 842;
					this.jProcColumn();
					}
					}
					this.state = 845;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER);
				this.state = 860;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.IN || _la === siParser.ORDER) {
					{
					this.state = 848;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === siParser.IN) {
						{
						this.state = 847;
						this.match(siParser.IN);
						}
					}

					this.state = 850;
					this.match(siParser.ORDER);
					this.state = 854;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER) {
						{
						{
						this.state = 851;
						this.jOrderColumn();
						}
						}
						this.state = 856;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 858;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === siParser.DESC) {
						{
						this.state = 857;
						this.match(siParser.DESC);
						}
					}

					}
				}

				this.state = 866;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.FOR || _la === siParser.READONLY || _la === siParser.UPDATE) {
					{
					this.state = 863;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === siParser.FOR) {
						{
						this.state = 862;
						this.match(siParser.FOR);
						}
					}

					this.state = 865;
					_la = this._input.LA(1);
					if (!(_la === siParser.READONLY || _la === siParser.UPDATE)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 878;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.OUTPUT) {
					{
					this.state = 868;
					this.match(siParser.OUTPUT);
					this.state = 870;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === siParser.LEFTPAREN) {
						{
						this.state = 869;
						this.jOutputType();
						}
					}

					this.state = 875;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER) {
						{
						{
						this.state = 872;
						this.jField();
						}
						}
						this.state = 877;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				}
				break;
			case siParser.DELETEBY:
				{
				this.state = 880;
				this.match(siParser.DELETEBY);
				this.state = 882;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 881;
					this.jProcColumn();
					}
					}
					this.state = 884;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER);
				}
				break;
			case siParser.UPDATEFOR:
				{
				this.state = 886;
				this.match(siParser.UPDATEFOR);
				this.state = 888;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 887;
					this.jProcColumn();
					}
					}
					this.state = 890;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER);
				}
				break;
			case siParser.UPDATEBY:
				{
				this.state = 892;
				this.match(siParser.UPDATEBY);
				{
				this.state = 894;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 893;
					this.jProcUpdateByColumn();
					}
					}
					this.state = 896;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER);
				this.state = 904;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.FOR) {
					{
					this.state = 898;
					this.match(siParser.FOR);
					this.state = 900;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 899;
						this.jProcColumn();
						}
						}
						this.state = 902;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER);
					}
				}

				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jProcColumn(): JProcColumnContext {
		let _localctx: JProcColumnContext = new JProcColumnContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, siParser.RULE_jProcColumn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 908;
			this.jIdent();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jOrderColumn(): JOrderColumnContext {
		let _localctx: JOrderColumnContext = new JOrderColumnContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, siParser.RULE_jOrderColumn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 910;
			this.jIdent();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jProcUpdateByColumn(): JProcUpdateByColumnContext {
		let _localctx: JProcUpdateByColumnContext = new JProcUpdateByColumnContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, siParser.RULE_jProcUpdateByColumn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 912;
			this.jIdent();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jComment(): JCommentContext {
		let _localctx: JCommentContext = new JCommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, siParser.RULE_jComment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 914;
			this.match(siParser.COMMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jRowCount(): JRowCountContext {
		let _localctx: JRowCountContext = new JRowCountContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, siParser.RULE_jRowCount);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 916;
			this.match(siParser.LEFTPAREN);
			this.state = 917;
			this.jNumber();
			this.state = 918;
			this.match(siParser.RIGHTPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jUserProc(): JUserProcContext {
		let _localctx: JUserProcContext = new JUserProcContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, siParser.RULE_jUserProc);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 920;
			this.jIdent();
			this.state = 924;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === siParser.LEFTPAREN) {
				{
				this.state = 921;
				this.match(siParser.LEFTPAREN);
				this.state = 922;
				this.match(siParser.STANDARD);
				this.state = 923;
				this.match(siParser.RIGHTPAREN);
				}
			}

			this.state = 929;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === siParser.COMMENT) {
				{
				{
				this.state = 926;
				this.jComment();
				}
				}
				this.state = 931;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 940;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === siParser.OPTIONS) {
				{
				{
				this.state = 932;
				this.match(siParser.OPTIONS);
				this.state = 934;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 933;
					this.jString();
					}
					}
					this.state = 936;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === siParser.STRING);
				}
				}
				this.state = 942;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 953;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === siParser.INPUT) {
				{
				this.state = 943;
				this.match(siParser.INPUT);
				this.state = 945;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.LEFTPAREN) {
					{
					this.state = 944;
					this.jInputType();
					}
				}

				this.state = 950;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER) {
					{
					{
					this.state = 947;
					this.jField();
					}
					}
					this.state = 952;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 965;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === siParser.INOUT) {
				{
				this.state = 955;
				this.match(siParser.INOUT);
				this.state = 957;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.LEFTPAREN) {
					{
					this.state = 956;
					this.jOutputType();
					}
				}

				this.state = 962;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER) {
					{
					{
					this.state = 959;
					this.jField();
					}
					}
					this.state = 964;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 977;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === siParser.OUTPUT) {
				{
				this.state = 967;
				this.match(siParser.OUTPUT);
				this.state = 969;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.LEFTPAREN) {
					{
					this.state = 968;
					this.jOutputType();
					}
				}

				this.state = 974;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === siParser.IDENTIFIER || _la === siParser.LIDENTIFIER) {
					{
					{
					this.state = 971;
					this.jField();
					}
					}
					this.state = 976;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 981;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case siParser.SQL:
			case siParser.CODE:
				{
				this.state = 979;
				this.jOldCode();
				}
				break;
			case siParser.SQLCODE:
				{
				this.state = 980;
				this.jNewCode();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jOptSize(): JOptSizeContext {
		let _localctx: JOptSizeContext = new JOptSizeContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, siParser.RULE_jOptSize);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 987;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === siParser.LEFTPAREN) {
				{
				this.state = 983;
				this.match(siParser.LEFTPAREN);
				this.state = 984;
				this.jNumber();
				this.state = 985;
				this.match(siParser.RIGHTPAREN);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jInputType(): JInputTypeContext {
		let _localctx: JInputTypeContext = new JInputTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, siParser.RULE_jInputType);
		try {
			this.state = 999;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 174, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 989;
				this.match(siParser.LEFTPAREN);
				this.state = 990;
				this.match(siParser.MULTIPLE);
				this.state = 991;
				this.match(siParser.RIGHTPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 992;
				this.match(siParser.LEFTPAREN);
				this.state = 993;
				this.jNumber();
				this.state = 994;
				this.match(siParser.RIGHTPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 996;
				this.match(siParser.LEFTPAREN);
				this.state = 997;
				this.match(siParser.STANDARD);
				this.state = 998;
				this.match(siParser.RIGHTPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jOutputType(): JOutputTypeContext {
		let _localctx: JOutputTypeContext = new JOutputTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, siParser.RULE_jOutputType);
		let _la: number;
		try {
			this.state = 1023;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 178, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1001;
				this.match(siParser.LEFTPAREN);
				this.state = 1002;
				this.match(siParser.SINGLE);
				this.state = 1004;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.STANDARD) {
					{
					this.state = 1003;
					this.match(siParser.STANDARD);
					}
				}

				this.state = 1006;
				this.match(siParser.RIGHTPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1007;
				this.match(siParser.LEFTPAREN);
				this.state = 1008;
				this.match(siParser.SINGLE);
				this.state = 1010;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.UPDATE) {
					{
					this.state = 1009;
					this.match(siParser.UPDATE);
					}
				}

				this.state = 1012;
				this.match(siParser.RIGHTPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1013;
				this.match(siParser.LEFTPAREN);
				this.state = 1014;
				this.jNumber();
				this.state = 1015;
				this.match(siParser.RIGHTPAREN);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1017;
				this.match(siParser.LEFTPAREN);
				this.state = 1018;
				this.match(siParser.STANDARD);
				this.state = 1020;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === siParser.SINGLE) {
					{
					this.state = 1019;
					this.match(siParser.SINGLE);
					}
				}

				this.state = 1022;
				this.match(siParser.RIGHTPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jOldData(): JOldDataContext {
		let _localctx: JOldDataContext = new JOldDataContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, siParser.RULE_jOldData);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1025;
			this.match(siParser.DATA);
			this.state = 1029;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === siParser.STRING) {
				{
				{
				this.state = 1026;
				this.jLine();
				}
				}
				this.state = 1031;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1032;
			this.match(siParser.ENDDATA);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jNewData(): JNewDataContext {
		let _localctx: JNewDataContext = new JNewDataContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, siParser.RULE_jNewData);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1034;
			this.match(siParser.SQLDATA);
			this.state = 1036;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1035;
				this.match(siParser.CODELINE);
				}
				}
				this.state = 1038;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === siParser.CODELINE);
			this.state = 1040;
			this.match(siParser.ENDDATA);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jIdlCode(): JIdlCodeContext {
		let _localctx: JIdlCodeContext = new JIdlCodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, siParser.RULE_jIdlCode);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1042;
			this.match(siParser.IDLCODE);
			this.state = 1044;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1043;
				this.match(siParser.CODELINE);
				}
				}
				this.state = 1046;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === siParser.CODELINE);
			this.state = 1048;
			this.match(siParser.ENDCODE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jOldCode(): JOldCodeContext {
		let _localctx: JOldCodeContext = new JOldCodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, siParser.RULE_jOldCode);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1051;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === siParser.SQL) {
				{
				this.state = 1050;
				this.match(siParser.SQL);
				}
			}

			this.state = 1053;
			this.match(siParser.CODE);
			this.state = 1060;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (siParser.STRING - 121)) | (1 << (siParser.IDENTIFIER - 121)) | (1 << (siParser.LIDENTIFIER - 121)))) !== 0)) {
				{
				this.state = 1058;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case siParser.STRING:
					{
					this.state = 1054;
					this.jLine();
					}
					break;
				case siParser.IDENTIFIER:
				case siParser.LIDENTIFIER:
					{
					this.state = 1055;
					this.jIdent();
					this.state = 1056;
					this.jOptSize();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 1062;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1063;
			this.match(siParser.ENDCODE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jOldViewCode(): JOldViewCodeContext {
		let _localctx: JOldViewCodeContext = new JOldViewCodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, siParser.RULE_jOldViewCode);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1065;
			this.match(siParser.CODE);
			this.state = 1069;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === siParser.STRING) {
				{
				{
				this.state = 1066;
				this.jLine();
				}
				}
				this.state = 1071;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1072;
			this.match(siParser.ENDCODE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jNewCode(): JNewCodeContext {
		let _localctx: JNewCodeContext = new JNewCodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, siParser.RULE_jNewCode);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1074;
			this.match(siParser.SQLCODE);
			this.state = 1076;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1075;
				this.match(siParser.CODELINE);
				}
				}
				this.state = 1078;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === siParser.CODELINE);
			this.state = 1080;
			this.match(siParser.ENDCODE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jNewViewCode(): JNewViewCodeContext {
		let _localctx: JNewViewCodeContext = new JNewViewCodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, siParser.RULE_jNewViewCode);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1082;
			this.match(siParser.SQLCODE);
			this.state = 1084;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1083;
				this.match(siParser.CODELINE);
				}
				}
				this.state = 1086;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === siParser.CODELINE);
			this.state = 1088;
			this.match(siParser.ENDCODE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x8C\u0445\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x03\x02\x03\x02\x03\x02\x03\x02\x06\x02s" +
		"\n\x02\r\x02\x0E\x02t\x07\x02w\n\x02\f\x02\x0E\x02z\v\x02\x03\x02\x03" +
		"\x02\x05\x02~\n\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02\x84\n\x02" +
		"\x07\x02\x86\n\x02\f\x02\x0E\x02\x89\v\x02\x03\x02\x03\x02\x06\x02\x8D" +
		"\n\x02\r\x02\x0E\x02\x8E\x03\x02\x07\x02\x92\n\x02\f\x02\x0E\x02\x95\v" +
		"\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x9D\n\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xA4\n\x03\x03\x04\x03" +
		"\x04\x03\x04\x07\x04\xA9\n\x04\f\x04\x0E\x04\xAC\v\x04\x03\x05\x03\x05" +
		"\x05\x05\xB0\n\x05\x03\x06\x03\x06\x03\x07\x03\x07\x07\x07\xB6\n\x07\f" +
		"\x07\x0E\x07\xB9\v\x07\x03\x07\x05\x07\xBC\n\x07\x03\x07\x07\x07\xBF\n" +
		"\x07\f\x07\x0E\x07\xC2\v\x07\x03\x07\x03\x07\x07\x07\xC6\n\x07\f\x07\x0E" +
		"\x07\xC9\v\x07\x03\b\x03\b\x03\b\x03\b\x06\b\xCF\n\b\r\b\x0E\b\xD0\x03" +
		"\b\x03\b\x05\b\xD5\n\b\x03\b\x05\b\xD8\n\b\x03\t\x03\t\x03\t\x05\t\xDD" +
		"\n\t\x03\t\x03\t\x05\t\xE1\n\t\x03\t\x07\t\xE4\n\t\f\t\x0E\t\xE7\v\t\x03" +
		"\t\x03\t\x06\t\xEB\n\t\r\t\x0E\t\xEC\x07\t\xEF\n\t\f\t\x0E\t\xF2\v\t\x03" +
		"\t\x07\t\xF5\n\t\f\t\x0E\t\xF8\v\t\x03\n\x03\n\x05\n\xFC\n\n\x03\n\x03" +
		"\n\x03\n\x03\n\x05\n\u0102\n\n\x03\n\x03\n\x03\n\x03\n\x07\n\u0108\n\n" +
		"\f\n\x0E\n\u010B\v\n\x03\n\x07\n\u010E\n\n\f\n\x0E\n\u0111\v\n\x03\v\x03" +
		"\v\x05\v\u0115\n\v\x03\v\x03\v\x03\v\x03\v\x05\v\u011B\n\v\x03\v\x03\v" +
		"\x03\v\x03\v\x07\v\u0121\n\v\f\v\x0E\v\u0124\v\v\x03\v\x07\v\u0127\n\v" +
		"\f\v\x0E\v\u012A\v\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x05\r\u0132\n" +
		"\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0138\n\r\x03\r\x03\r\x05\r\u013C\n\r" +
		"\x03\r\x05\r\u013F\n\r\x03\r\x03\r\x05\r\u0143\n\r\x03\r\x03\r\x05\r\u0147" +
		"\n\r\x03\r\x05\r\u014A\n\r\x03\r\x03\r\x05\r\u014E\n\r\x03\r\x03\r\x05" +
		"\r\u0152\n\r\x03\r\x05\r\u0155\n\r\x03\r\x03\r\x03\r\x05\r\u015A\n\r\x03" +
		"\r\x03\r\x03\r\x05\r\u015F\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x05\r\u016A\n\r\x03\r\x03\r\x05\r\u016E\n\r\x03\r\x03\r" +
		"\x05\r\u0172\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u017B" +
		"\n\r\x03\r\x03\r\x05\r\u017F\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x05\x0E\u0186\n\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u018B\n\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0191\n\x0F\x06\x0F\u0193\n\x0F\r\x0F" +
		"\x0E\x0F\u0194\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u01A5" +
		"\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x05\x11\u01AF\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u01B5\n\x11" +
		"\x06\x11\u01B7\n\x11\r\x11\x0E\x11\u01B8\x05\x11\u01BB\n\x11\x03\x11\x03" +
		"\x11\x03\x11\x05\x11\u01C0\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u01CB\n\x12\x03\x13\x03\x13\x03" +
		"\x13\x05\x13\u01D0\n\x13\x06\x13\u01D2\n\x13\r\x13\x0E\x13\u01D3\x03\x13" +
		"\x03\x13\x03\x14\x03\x14\x03\x15\x05\x15\u01DB\n\x15\x03\x15\x03\x15\x06" +
		"\x15\u01DF\n\x15\r\x15\x0E\x15\u01E0\x03\x15\x03\x15\x03\x15\x06\x15\u01E6" +
		"\n\x15\r\x15\x0E\x15\u01E7\x03\x15\x03\x15\x03\x15\x05\x15\u01ED\n\x15" +
		"\x03\x15\x07\x15\u01F0\n\x15\f\x15\x0E\x15\u01F3\v\x15\x03\x15\x03\x15" +
		"\x03\x15\x05\x15\u01F8\n\x15\x03\x15\x03\x15\x03\x15\x05\x15\u01FD\n\x15" +
		"\x03\x15\x03\x15\x03\x15\x05\x15\u0202\n\x15\x03\x15\x03\x15\x03\x15\x05" +
		"\x15\u0207\n\x15\x07\x15\u0209\n\x15\f\x15\x0E\x15\u020C\v\x15\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0213\n\x16\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x05\x17\u021B\n\x17\x06\x17\u021D\n\x17\r" +
		"\x17\x0E\x17\u021E\x03\x18\x03\x18\x06\x18\u0223\n\x18\r\x18\x0E\x18\u0224" +
		"\x03\x18\x03\x18\x06\x18\u0229\n\x18\r\x18\x0E\x18\u022A\x03\x19\x03\x19" +
		"\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x06\x1B\u0235\n\x1B\r" +
		"\x1B\x0E\x1B\u0236\x07\x1B\u0239\n\x1B\f\x1B\x0E\x1B\u023C\v\x1B\x03\x1B" +
		"\x07\x1B\u023F\n\x1B\f\x1B\x0E\x1B\u0242\v\x1B\x03\x1B\x06\x1B\u0245\n" +
		"\x1B\r\x1B\x0E\x1B\u0246\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x06\x1E\u0251\n\x1E\r\x1E\x0E\x1E\u0252\x03\x1E\x03\x1E" +
		"\x05\x1E\u0257\n\x1E\x03\x1E\x03\x1E\x05\x1E\u025B\n\x1E\x05\x1E\u025D" +
		"\n\x1E\x03\x1E\x03\x1E\x05\x1E\u0261\n\x1E\x05\x1E\u0263\n\x1E\x03\x1E" +
		"\x03\x1E\x06\x1E\u0267\n\x1E\r\x1E\x0E\x1E\u0268\x07\x1E\u026B\n\x1E\f" +
		"\x1E\x0E\x1E\u026E\v\x1E\x03\x1E\x06\x1E\u0271\n\x1E\r\x1E\x0E\x1E\u0272" +
		"\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x06 \u027B\n \r \x0E \u027C\x05 " +
		"\u027F\n \x03 \x03 \x06 \u0283\n \r \x0E \u0284\x05 \u0287\n \x03 \x03" +
		" \x05 \u028B\n \x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03" +
		"%\x03%\x05%\u0299\n%\x05%\u029B\n%\x03%\x03%\x03%\x05%\u02A0\n%\x05%\u02A2" +
		"\n%\x03&\x03&\x05&\u02A6\n&\x03&\x03&\x03&\x05&\u02AB\n&\x03&\x03&\x03" +
		"&\x05&\u02B0\n&\x03&\x03&\x03&\x03&\x05&\u02B6\n&\x03&\x03&\x03&\x05&" +
		"\u02BB\n&\x03&\x05&\u02BE\n&\x03&\x03&\x06&\u02C2\n&\r&\x0E&\u02C3\x03" +
		"&\x05&\u02C7\n&\x03&\x05&\u02CA\n&\x03&\x05&\u02CD\n&\x03&\x05&\u02D0" +
		"\n&\x03&\x03&\x05&\u02D4\n&\x03&\x03&\x06&\u02D8\n&\r&\x0E&\u02D9\x03" +
		"&\x05&\u02DD\n&\x03&\x05&\u02E0\n&\x03&\x05&\u02E3\n&\x03&\x05&\u02E6" +
		"\n&\x03&\x03&\x05&\u02EA\n&\x03&\x03&\x05&\u02EE\n&\x03&\x07&\u02F1\n" +
		"&\f&\x0E&\u02F4\v&\x05&\u02F6\n&\x03&\x03&\x05&\u02FA\n&\x03&\x03&\x07" +
		"&\u02FE\n&\f&\x0E&\u0301\v&\x03&\x05&\u0304\n&\x05&\u0306\n&\x03&\x05" +
		"&\u0309\n&\x03&\x05&\u030C\n&\x03&\x03&\x03&\x05&\u0311\n&\x03&\x03&\x06" +
		"&\u0315\n&\r&\x0E&\u0316\x07&\u0319\n&\f&\x0E&\u031C\v&\x03\'\x03\'\x03" +
		"\'\x03\'\x03\'\x05\'\u0323\n\'\x03\'\x03\'\x05\'\u0327\n\'\x03\'\x06\'" +
		"\u032A\n\'\r\'\x0E\'\u032B\x05\'\u032E\n\'\x03\'\x03\'\x05\'\u0332\n\'" +
		"\x03\'\x07\'\u0335\n\'\f\'\x0E\'\u0338\v\'\x05\'\u033A\n\'\x03\'\x03\'" +
		"\x05\'\u033E\n\'\x03\'\x03\'\x06\'\u0342\n\'\r\'\x0E\'\u0343\x03\'\x05" +
		"\'\u0347\n\'\x03\'\x05\'\u034A\n\'\x03\'\x03\'\x06\'\u034E\n\'\r\'\x0E" +
		"\'\u034F\x03\'\x05\'\u0353\n\'\x03\'\x03\'\x07\'\u0357\n\'\f\'\x0E\'\u035A" +
		"\v\'\x03\'\x05\'\u035D\n\'\x05\'\u035F\n\'\x03\'\x05\'\u0362\n\'\x03\'" +
		"\x05\'\u0365\n\'\x03\'\x03\'\x05\'\u0369\n\'\x03\'\x07\'\u036C\n\'\f\'" +
		"\x0E\'\u036F\v\'\x05\'\u0371\n\'\x03\'\x03\'\x06\'\u0375\n\'\r\'\x0E\'" +
		"\u0376\x03\'\x03\'\x06\'\u037B\n\'\r\'\x0E\'\u037C\x03\'\x03\'\x06\'\u0381" +
		"\n\'\r\'\x0E\'\u0382\x03\'\x03\'\x06\'\u0387\n\'\r\'\x0E\'\u0388\x05\'" +
		"\u038B\n\'\x05\'\u038D\n\'\x03(\x03(\x03)\x03)\x03*\x03*\x03+\x03+\x03" +
		",\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x05-\u039F\n-\x03-\x07-\u03A2\n-" +
		"\f-\x0E-\u03A5\v-\x03-\x03-\x06-\u03A9\n-\r-\x0E-\u03AA\x07-\u03AD\n-" +
		"\f-\x0E-\u03B0\v-\x03-\x03-\x05-\u03B4\n-\x03-\x07-\u03B7\n-\f-\x0E-\u03BA" +
		"\v-\x05-\u03BC\n-\x03-\x03-\x05-\u03C0\n-\x03-\x07-\u03C3\n-\f-\x0E-\u03C6" +
		"\v-\x05-\u03C8\n-\x03-\x03-\x05-\u03CC\n-\x03-\x07-\u03CF\n-\f-\x0E-\u03D2" +
		"\v-\x05-\u03D4\n-\x03-\x03-\x05-\u03D8\n-\x03.\x03.\x03.\x03.\x05.\u03DE" +
		"\n.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x05/\u03EA\n/\x03" +
		"0\x030\x030\x050\u03EF\n0\x030\x030\x030\x030\x050\u03F5\n0\x030\x030" +
		"\x030\x030\x030\x030\x030\x030\x050\u03FF\n0\x030\x050\u0402\n0\x031\x03" +
		"1\x071\u0406\n1\f1\x0E1\u0409\v1\x031\x031\x032\x032\x062\u040F\n2\r2" +
		"\x0E2\u0410\x032\x032\x033\x033\x063\u0417\n3\r3\x0E3\u0418\x033\x033" +
		"\x034\x054\u041E\n4\x034\x034\x034\x034\x034\x074\u0425\n4\f4\x0E4\u0428" +
		"\v4\x034\x034\x035\x035\x075\u042E\n5\f5\x0E5\u0431\v5\x035\x035\x036" +
		"\x036\x066\u0437\n6\r6\x0E6\u0438\x036\x036\x037\x037\x067\u043F\n7\r" +
		"7\x0E7\u0440\x037\x037\x037\x02\x02\x028\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026" +
		"\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
		"R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02" +
		"\x02\b\x03\x02~\x7F\x04\x02##((\b\x02\x06\x06\x1E\x1E%%00EEZZ\x04\x02" +
		"@@YY\x04\x02AAQQ\x04\x02BBZZ\x02\u050A\x02n\x03\x02\x02\x02\x04\x98\x03" +
		"\x02\x02\x02\x06\xA5\x03\x02\x02\x02\b\xAF\x03\x02\x02\x02\n\xB1\x03\x02" +
		"\x02\x02\f\xBB\x03\x02\x02\x02\x0E\xCA\x03\x02\x02\x02\x10\xD9\x03\x02" +
		"\x02\x02\x12\xF9\x03\x02\x02\x02\x14\u0112\x03\x02\x02\x02\x16\u012B\x03" +
		"\x02\x02\x02\x18\u017E\x03\x02\x02\x02\x1A\u0180\x03\x02\x02\x02\x1C\u0187" +
		"\x03\x02\x02\x02\x1E\u01A4\x03\x02\x02\x02 \u01BF\x03\x02\x02\x02\"\u01CA" +
		"\x03\x02\x02\x02$\u01CC\x03\x02\x02\x02&\u01D7\x03\x02\x02\x02(\u01DA" +
		"\x03\x02\x02\x02*\u0212\x03\x02\x02\x02,\u0214\x03\x02\x02\x02.\u0220" +
		"\x03\x02\x02\x020\u022C\x03\x02\x02\x022\u022E\x03\x02\x02\x024\u0230" +
		"\x03\x02\x02\x026\u0248\x03\x02\x02\x028\u024A\x03\x02\x02\x02:\u024C" +
		"\x03\x02\x02\x02<\u0274\x03\x02\x02\x02>\u0276\x03\x02\x02\x02@\u028C" +
		"\x03\x02\x02\x02B\u028E\x03\x02\x02\x02D\u0290\x03\x02\x02\x02F\u0292" +
		"\x03\x02\x02\x02H\u02A1\x03\x02\x02\x02J\u0310\x03\x02\x02\x02L\u031D" +
		"\x03\x02\x02\x02N\u038E\x03\x02\x02\x02P\u0390\x03\x02\x02\x02R\u0392" +
		"\x03\x02\x02\x02T\u0394\x03\x02\x02\x02V\u0396\x03\x02\x02\x02X\u039A" +
		"\x03\x02\x02\x02Z\u03DD\x03\x02\x02\x02\\\u03E9\x03\x02\x02\x02^\u0401" +
		"\x03\x02\x02\x02`\u0403\x03\x02\x02\x02b\u040C\x03\x02\x02\x02d\u0414" +
		"\x03\x02\x02\x02f\u041D\x03\x02\x02\x02h\u042B\x03\x02\x02\x02j\u0434" +
		"\x03\x02\x02\x02l\u043C\x03\x02\x02\x02no\x07\x19\x02\x02ox\x05\n\x06" +
		"\x02pr\x07\'\x02\x02qs\x05D#\x02rq\x03\x02\x02\x02st\x03\x02\x02\x02t" +
		"r\x03\x02\x02\x02tu\x03\x02\x02\x02uw\x03\x02\x02\x02vp\x03\x02\x02\x02" +
		"wz\x03\x02\x02\x02xv\x03\x02\x02\x02xy\x03\x02\x02\x02y}\x03\x02\x02\x02" +
		"zx\x03\x02\x02\x02{|\x07>\x02\x02|~\x05\x06\x04\x02}{\x03\x02\x02\x02" +
		"}~\x03\x02\x02\x02~\x87\x03\x02\x02\x02\x7F\x80\x07=\x02\x02\x80\x84\x05" +
		"\b\x05\x02\x81\x82\x07,\x02\x02\x82\x84\x05\b\x05\x02\x83\x7F\x03\x02" +
		"\x02\x02\x83\x81\x03\x02\x02\x02\x84\x86\x03\x02\x02\x02\x85\x83\x03\x02" +
		"\x02\x02\x86\x89\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x87\x88\x03\x02" +
		"\x02\x02\x88\x8A\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02\x8A\x8C\x05\x04" +
		"\x03\x02\x8B\x8D\x05\f\x07\x02\x8C\x8B\x03\x02\x02\x02\x8D\x8E\x03\x02" +
		"\x02\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x93\x03\x02" +
		"\x02\x02\x90\x92\x05> \x02\x91\x90\x03\x02\x02\x02\x92\x95\x03\x02\x02" +
		"\x02\x93\x91\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\x96\x03\x02\x02" +
		"\x02\x95\x93\x03\x02\x02\x02\x96\x97\x07\x02\x02\x03\x97\x03\x03\x02\x02" +
		"\x02\x98\x99\x07M\x02\x02\x99\x9C\x05\b\x05\x02\x9A\x9B\x07D\x02\x02\x9B" +
		"\x9D\x05\b\x05\x02\x9C\x9A\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D" +
		"\xA3\x03\x02\x02\x02\x9E\x9F\x07^\x02\x02\x9F\xA0\x05\n\x06\x02\xA0\xA1" +
		"\x07?\x02\x02\xA1\xA2\x05\n\x06\x02\xA2\xA4\x03\x02\x02\x02\xA3\x9E\x03" +
		"\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\x05\x03\x02\x02\x02\xA5\xAA\x05" +
		"\n\x06\x02\xA6\xA7\x07\x84\x02\x02\xA7\xA9\x05\n\x06\x02\xA8\xA6\x03\x02" +
		"\x02\x02\xA9\xAC\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAA\xAB\x03\x02" +
		"\x02\x02\xAB\x07\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAD\xB0\x05\n" +
		"\x06\x02\xAE\xB0\x07{\x02\x02\xAF\xAD\x03\x02\x02\x02\xAF\xAE\x03\x02" +
		"\x02\x02\xB0\t\x03\x02\x02\x02\xB1\xB2\t\x02\x02\x02\xB2\v\x03\x02\x02" +
		"\x02\xB3\xB7\x05\x10\t\x02\xB4\xB6\x05*\x16\x02\xB5\xB4\x03\x02\x02\x02" +
		"\xB6\xB9\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02" +
		"\xB8\xBC\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xBA\xBC\x05\x0E\b\x02" +
		"\xBB\xB3\x03\x02\x02\x02\xBB\xBA\x03\x02\x02\x02\xBC\xC0\x03\x02\x02\x02" +
		"\xBD\xBF\x05H%\x02\xBE\xBD\x03\x02\x02\x02\xBF\xC2\x03\x02\x02\x02\xC0" +
		"\xBE\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xC7\x03\x02\x02\x02\xC2" +
		"\xC0\x03\x02\x02\x02\xC3\xC4\x07e\x02\x02\xC4\xC6\x05(\x15\x02\xC5\xC3" +
		"\x03\x02\x02\x02\xC6\xC9\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC8" +
		"\x03\x02\x02\x02\xC8\r\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xCA\xCB" +
		"\x07,\x02\x02\xCB\xD4\x05\b\x05\x02\xCC\xCE\x07t\x02\x02\xCD\xCF\x05\n" +
		"\x06\x02\xCE\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xCE\x03\x02" +
		"\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD3\x07w" +
		"\x02\x02\xD3\xD5\x03\x02\x02\x02\xD4\xCC\x03\x02\x02\x02\xD4\xD5\x03\x02" +
		"\x02\x02\xD5\xD7\x03\x02\x02\x02\xD6\xD8\x05\x16\f\x02\xD7\xD6\x03\x02" +
		"\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\x0F\x03\x02\x02\x02\xD9\xDA\x07S" +
		"\x02\x02\xDA\xDC\x05\n\x06\x02\xDB\xDD\x05\x16\f\x02\xDC\xDB\x03\x02\x02" +
		"\x02\xDC\xDD\x03\x02\x02\x02\xDD\xE0\x03\x02\x02\x02\xDE\xDF\x07\x15\x02" +
		"\x02\xDF\xE1\x07{\x02\x02\xE0\xDE\x03\x02\x02\x02\xE0\xE1\x03\x02\x02" +
		"\x02\xE1\xE5\x03\x02\x02\x02\xE2\xE4\x05T+\x02\xE3\xE2\x03\x02\x02\x02" +
		"\xE4\xE7\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02" +
		"\xE6\xF0\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE8\xEA\x07;\x02\x02" +
		"\xE9\xEB\x05D#\x02\xEA\xE9\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC" +
		"\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xEF\x03\x02\x02\x02\xEE" +
		"\xE8\x03\x02\x02\x02\xEF\xF2\x03\x02\x02\x02\xF0\xEE\x03\x02\x02\x02\xF0" +
		"\xF1\x03\x02\x02\x02\xF1\xF6\x03\x02\x02\x02\xF2\xF0\x03\x02\x02\x02\xF3" +
		"\xF5\x05\x14\v\x02\xF4\xF3\x03\x02\x02\x02\xF5\xF8\x03\x02\x02\x02\xF6" +
		"\xF4\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\x11\x03\x02\x02\x02\xF8" +
		"\xF6\x03\x02\x02\x02\xF9\xFB\x05\x06\x04\x02\xFA\xFC\x05\x16\f\x02\xFB" +
		"\xFA\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD" +
		"\u0109\x05\x18\r\x02\xFE\xFF\x07\x1D\x02\x02\xFF\u0108\x07{\x02\x02\u0100" +
		"\u0102\x079\x02\x02\u0101\u0100\x03\x02\x02\x02\u0101\u0102\x03\x02\x02" +
		"\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0108\x07:\x02\x02\u0104\u0108" +
		"\x07\x12\x02\x02\u0105\u0106\x07\x15\x02\x02\u0106\u0108\x07{\x02\x02" +
		"\u0107\xFE\x03\x02\x02\x02\u0107\u0101\x03\x02\x02\x02\u0107\u0104\x03" +
		"\x02\x02\x02\u0107\u0105\x03\x02\x02\x02\u0108\u010B\x03\x02\x02\x02\u0109" +
		"\u0107\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A\u010F\x03\x02" +
		"\x02\x02\u010B\u0109\x03\x02\x02\x02\u010C\u010E\x05T+\x02\u010D\u010C" +
		"\x03\x02\x02\x02\u010E\u0111\x03\x02\x02\x02\u010F\u010D\x03\x02\x02\x02" +
		"\u010F\u0110\x03\x02\x02\x02\u0110\x13\x03\x02\x02\x02\u0111\u010F\x03" +
		"\x02\x02\x02\u0112\u0114\x05\n\x06\x02\u0113\u0115\x05\x16\f\x02\u0114" +
		"\u0113\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0116\x03\x02" +
		"\x02\x02\u0116\u0122\x05\x18\r\x02\u0117\u0118\x07\x1D\x02\x02\u0118\u0121" +
		"\x07{\x02\x02\u0119\u011B\x079\x02\x02\u011A\u0119\x03\x02\x02\x02\u011A" +
		"\u011B\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C\u0121\x07:\x02" +
		"\x02\u011D\u0121\x07\x12\x02\x02\u011E\u011F\x07\x15\x02\x02\u011F\u0121" +
		"\x07{\x02\x02\u0120\u0117\x03\x02\x02\x02\u0120\u011A\x03\x02\x02\x02" +
		"\u0120\u011D\x03\x02\x02\x02\u0120\u011E\x03\x02\x02\x02\u0121\u0124\x03" +
		"\x02\x02\x02\u0122\u0120\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123" +
		"\u0128\x03\x02\x02\x02\u0124\u0122\x03\x02\x02\x02\u0125\u0127\x05T+\x02" +
		"\u0126\u0125\x03\x02\x02\x02\u0127\u012A\x03\x02\x02\x02\u0128\u0126\x03" +
		"\x02\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129\x15\x03\x02\x02\x02\u012A" +
		"\u0128\x03\x02\x02\x02\u012B\u012C\x07u\x02\x02\u012C\u012D\x05\n\x06" +
		"\x02\u012D\u012E\x07x\x02\x02\u012E\x17\x03\x02\x02\x02\u012F\u0131\x07" +
		"\r\x02\x02\u0130\u0132\x05\"\x12\x02\u0131\u0130\x03\x02\x02\x02\u0131" +
		"\u0132\x03\x02\x02\x02\u0132\u017F\x03\x02\x02\x02\u0133\u017F\x07\x0E" +
		"\x02\x02\u0134\u0137\x07\x11\x02\x02\u0135\u0138\x05\x1C\x0F\x02\u0136" +
		"\u0138\x05$\x13\x02\u0137\u0135\x03\x02\x02\x02\u0137\u0136\x03\x02\x02" +
		"\x02\u0137\u0138\x03\x02\x02\x02\u0138\u017F\x03\x02\x02\x02\u0139\u013B" +
		"\x07\x14\x02\x02\u013A\u013C\x05\"\x12\x02\u013B\u013A\x03\x02\x02\x02" +
		"\u013B\u013C\x03\x02\x02\x02\u013C\u013E\x03\x02\x02\x02\u013D\u013F\x05" +
		"$\x13\x02\u013E\u013D\x03\x02\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F" +
		"\u017F\x03\x02\x02\x02\u0140\u0142\x07\x07\x02\x02\u0141\u0143\x05 \x11" +
		"\x02\u0142\u0141\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u017F" +
		"\x03\x02\x02\x02\u0144\u0146\x07c\x02\x02\u0145\u0147\x05\"\x12\x02\u0146" +
		"\u0145\x03\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0149\x03\x02" +
		"\x02\x02\u0148\u014A\x05$\x13\x02\u0149\u0148\x03\x02\x02\x02\u0149\u014A" +
		"\x03\x02\x02\x02\u014A\u017F\x03\x02\x02\x02\u014B\u014D\x07b\x02\x02" +
		"\u014C\u014E\x05 \x11\x02\u014D\u014C\x03\x02\x02\x02\u014D\u014E\x03" +
		"\x02\x02\x02\u014E\u017F\x03\x02\x02\x02\u014F\u0151\x07`\x02\x02\u0150" +
		"\u0152\x05\"\x12\x02\u0151\u0150\x03\x02\x02\x02\u0151\u0152\x03\x02\x02" +
		"\x02\u0152\u0154\x03\x02\x02\x02\u0153\u0155\x05$\x13\x02\u0154\u0153" +
		"\x03\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155\u017F\x03\x02\x02\x02" +
		"\u0156\u0159\x07N\x02\x02\u0157\u015A\x05\x1C\x0F\x02\u0158\u015A\x05" +
		"$\x13\x02\u0159\u0157\x03\x02\x02\x02\u0159\u0158\x03\x02\x02\x02\u0159" +
		"\u015A\x03\x02\x02\x02\u015A\u017F\x03\x02\x02\x02\u015B\u015E\x071\x02" +
		"\x02\u015C\u015F\x05\x1C\x0F\x02\u015D\u015F\x05$\x13\x02\u015E\u015C" +
		"\x03\x02\x02\x02\u015E\u015D\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02" +
		"\u015F\u017F\x03\x02\x02\x02\u0160\u017F\x074\x02\x02\u0161\u017F\x07" +
		"X\x02\x02\u0162\u017F\x07\x1A\x02\x02\u0163\u017F\x07\x1B\x02\x02\u0164" +
		"\u017F\x07T\x02\x02\u0165\u017F\x07U\x02\x02\u0166\u017F\x07\t\x02\x02" +
		"\u0167\u0169\x07V\x02\x02\u0168\u016A\x05\"\x12\x02\u0169\u0168\x03\x02" +
		"\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A\u017F\x03\x02\x02\x02\u016B" +
		"\u016D\x07d\x02\x02\u016C\u016E\x05\"\x12\x02\u016D\u016C\x03\x02\x02" +
		"\x02\u016D\u016E\x03\x02\x02\x02\u016E\u017F\x03\x02\x02\x02\u016F\u0171" +
		"\x07\f\x02\x02\u0170\u0172\x05\"\x12\x02\u0171\u0170\x03\x02\x02\x02\u0171" +
		"\u0172\x03\x02\x02\x02\u0172\u017F\x03\x02\x02\x02\u0173\u017F\x07_\x02" +
		"\x02\u0174\u017F\x07L\x02\x02\u0175\u017F\x07\v\x02\x02\u0176\u017F\x07" +
		"+\x02\x02\u0177\u017F\x07\n\x02\x02\u0178\u017A\t\x03\x02\x02\u0179\u017B" +
		"\x05\x1E\x10\x02\u017A\u0179\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02" +
		"\u017B\u017F\x03\x02\x02\x02\u017C\u017F\x076\x02\x02\u017D\u017F\x05" +
		"\x1A\x0E\x02\u017E\u012F\x03\x02\x02\x02\u017E\u0133\x03\x02\x02\x02\u017E" +
		"\u0134\x03\x02\x02\x02\u017E\u0139\x03\x02\x02\x02\u017E\u0140\x03\x02" +
		"\x02\x02\u017E\u0144\x03\x02\x02\x02\u017E\u014B\x03\x02\x02\x02\u017E" +
		"\u014F\x03\x02\x02\x02\u017E\u0156\x03\x02\x02\x02\u017E\u015B\x03\x02" +
		"\x02\x02\u017E\u0160\x03\x02\x02\x02\u017E\u0161\x03\x02\x02\x02\u017E" +
		"\u0162\x03\x02\x02\x02\u017E\u0163\x03\x02\x02\x02\u017E\u0164\x03\x02" +
		"\x02\x02\u017E\u0165\x03\x02\x02\x02\u017E\u0166\x03";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\x02\u017E\u0167\x03\x02\x02\x02\u017E\u016B\x03\x02\x02\x02\u017E" +
		"\u016F\x03\x02\x02\x02\u017E\u0173\x03\x02\x02\x02\u017E\u0174\x03\x02" +
		"\x02\x02\u017E\u0175\x03\x02\x02\x02\u017E\u0176\x03\x02\x02\x02\u017E" +
		"\u0177\x03\x02\x02\x02\u017E\u0178\x03\x02\x02\x02\u017E\u017C\x03\x02" +
		"\x02\x02\u017E\u017D\x03\x02\x02\x02\u017F\x19\x03\x02\x02\x02\u0180\u0185" +
		"\x07r\x02\x02\u0181\u0182\x07u\x02\x02\u0182\u0183\x05\n\x06\x02\u0183" +
		"\u0184\x07x\x02\x02\u0184\u0186\x03\x02\x02\x02\u0185\u0181\x03\x02\x02" +
		"\x02\u0185\u0186\x03\x02\x02\x02\u0186\x1B\x03\x02\x02\x02\u0187\u018A" +
		"\x07u\x02\x02\u0188\u0189\x073\x02\x02\u0189\u018B\x05\n\x06\x02\u018A" +
		"\u0188\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B\u0192\x03\x02" +
		"\x02\x02\u018C\u018D\x05\n\x06\x02\u018D\u018E\x07r\x02\x02\u018E\u0190" +
		"\x05&\x14\x02\u018F\u0191\x07q\x02\x02\u0190\u018F\x03\x02\x02\x02\u0190" +
		"\u0191\x03\x02\x02\x02\u0191\u0193\x03\x02\x02\x02\u0192\u018C\x03\x02" +
		"\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194\u0192\x03\x02\x02\x02\u0194" +
		"\u0195\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196\u0197\x07x\x02" +
		"\x02\u0197\x1D\x03\x02\x02\x02\u0198\u0199\x07t\x02\x02\u0199\u019A\x05" +
		"&\x14\x02\u019A\u019B\x07q\x02\x02\u019B\u019C\x05&\x14\x02\u019C\u019D" +
		"\x07w\x02\x02\u019D\u01A5\x03\x02\x02\x02\u019E\u019F\x07u\x02\x02\u019F" +
		"\u01A0\x05&\x14\x02\u01A0\u01A1\x07q\x02\x02\u01A1\u01A2\x05&\x14\x02" +
		"\u01A2\u01A3\x07x\x02\x02\u01A3\u01A5\x03\x02\x02\x02\u01A4\u0198\x03" +
		"\x02\x02\x02\u01A4\u019E\x03\x02\x02\x02\u01A5\x1F\x03\x02\x02\x02\u01A6" +
		"\u01A7\x07t\x02\x02\u01A7\u01A8\x05&\x14\x02\u01A8\u01A9\x07w\x02\x02" +
		"\u01A9\u01C0\x03\x02\x02\x02\u01AA\u01BA\x07u\x02\x02\u01AB\u01BB\x05" +
		"&\x14\x02\u01AC\u01AD\x073\x02\x02\u01AD\u01AF\x05\n\x06\x02\u01AE\u01AC" +
		"\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF\u01B6\x03\x02\x02\x02" +
		"\u01B0\u01B1\x05\n\x06\x02\u01B1\u01B2\x07r\x02\x02\u01B2\u01B4\x05F$" +
		"\x02\u01B3\u01B5\x07q\x02\x02\u01B4\u01B3\x03\x02\x02\x02\u01B4\u01B5" +
		"\x03\x02\x02\x02\u01B5\u01B7\x03\x02\x02\x02\u01B6\u01B0\x03\x02\x02\x02" +
		"\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01B6\x03\x02\x02\x02\u01B8\u01B9\x03" +
		"\x02\x02\x02\u01B9\u01BB\x03\x02\x02\x02\u01BA\u01AB\x03\x02\x02\x02\u01BA" +
		"\u01AE\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02\u01BC\u01BD\x07x\x02" +
		"\x02\u01BD\u01C0\x03\x02\x02\x02\u01BE\u01C0\x05&\x14\x02\u01BF\u01A6" +
		"\x03\x02\x02\x02\u01BF\u01AA\x03\x02\x02\x02\u01BF\u01BE\x03\x02\x02\x02" +
		"\u01C0!\x03\x02\x02\x02\u01C1\u01C2\x07t\x02\x02\u01C2\u01C3\x05&\x14" +
		"\x02\u01C3\u01C4\x07w\x02\x02\u01C4\u01CB\x03\x02\x02\x02\u01C5\u01C6" +
		"\x07u\x02\x02\u01C6\u01C7\x05&\x14\x02\u01C7\u01C8\x07x\x02\x02\u01C8" +
		"\u01CB\x03\x02\x02\x02\u01C9\u01CB\x05&\x14\x02\u01CA\u01C1\x03\x02\x02" +
		"\x02\u01CA\u01C5\x03\x02\x02\x02\u01CA\u01C9\x03\x02\x02\x02\u01CB#\x03" +
		"\x02\x02\x02\u01CC\u01D1\x07s\x02\x02\u01CD\u01CF\x05\n\x06\x02\u01CE" +
		"\u01D0\x07q\x02\x02\u01CF\u01CE\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02" +
		"\x02\u01D0\u01D2\x03\x02\x02\x02\u01D1\u01CD\x03\x02\x02\x02\u01D2\u01D3" +
		"\x03\x02\x02\x02\u01D3\u01D1\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02" +
		"\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01D6\x07v\x02\x02\u01D6%\x03\x02\x02" +
		"\x02\u01D7\u01D8\x07z\x02\x02\u01D8\'\x03\x02\x02\x02\u01D9\u01DB\x05" +
		"D#\x02\u01DA\u01D9\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u020A" +
		"\x03\x02\x02\x02\u01DC\u01DE\x07f\x02\x02\u01DD\u01DF\x05\n\x06\x02\u01DE" +
		"\u01DD\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0\u01DE\x03\x02" +
		"\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1\u0209\x03\x02\x02\x02\u01E2" +
		"\u0209\x07g\x02\x02\u01E3\u01E5\x07m\x02\x02\u01E4\u01E6\x05\n\x06\x02" +
		"\u01E5\u01E4\x03\x02\x02\x02\u01E6\u01E7\x03\x02\x02\x02\u01E7\u01E5\x03" +
		"\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8\u0209\x03\x02\x02\x02\u01E9" +
		"\u01EC\x07h\x02\x02\u01EA\u01ED\x05\n\x06\x02\u01EB\u01ED\x07F\x02\x02" +
		"\u01EC\u01EA\x03\x02\x02\x02\u01EC\u01EB\x03\x02\x02\x02\u01ED\u01F1\x03" +
		"\x02\x02\x02\u01EE\u01F0\x05\n\x06\x02\u01EF\u01EE\x03\x02\x02\x02\u01F0" +
		"\u01F3\x03\x02\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F1\u01F2\x03\x02" +
		"\x02\x02\u01F2\u0209\x03\x02\x02\x02\u01F3\u01F1\x03\x02\x02\x02\u01F4" +
		"\u01F7\x07i\x02\x02\u01F5\u01F8\x05\n\x06\x02\u01F6\u01F8\x07F\x02\x02" +
		"\u01F7\u01F5\x03\x02\x02\x02\u01F7\u01F6\x03\x02\x02\x02\u01F8\u0209\x03" +
		"\x02\x02\x02\u01F9\u01FC\x07j\x02\x02\u01FA\u01FD\x05\n\x06\x02\u01FB" +
		"\u01FD\x070\x02\x02\u01FC\u01FA\x03\x02\x02\x02\u01FC\u01FB\x03\x02\x02" +
		"\x02\u01FD\u0209\x03\x02\x02\x02\u01FE\u0201\x07l\x02\x02\u01FF\u0202" +
		"\x05\n\x06\x02\u0200\u0202\x07Z\x02\x02\u0201\u01FF\x03\x02\x02\x02\u0201" +
		"\u0200\x03\x02\x02\x02\u0202\u0209\x03\x02\x02\x02\u0203\u0206\x07k\x02" +
		"\x02\u0204\u0207\x05\n\x06\x02\u0205\u0207\x07!\x02\x02\u0206\u0204\x03" +
		"\x02\x02\x02\u0206\u0205\x03\x02\x02\x02\u0207\u0209\x03\x02\x02\x02\u0208" +
		"\u01DC\x03\x02\x02\x02\u0208\u01E2\x03\x02\x02\x02\u0208\u01E3\x03\x02" +
		"\x02\x02\u0208\u01E9\x03\x02\x02\x02\u0208\u01F4\x03\x02\x02\x02\u0208" +
		"\u01F9\x03\x02\x02\x02\u0208\u01FE\x03\x02\x02\x02\u0208\u0203\x03\x02" +
		"\x02\x02\u0209\u020C\x03\x02\x02\x02\u020A\u0208\x03\x02\x02\x02\u020A" +
		"\u020B\x03\x02\x02\x02\u020B)\x03\x02\x02\x02\u020C\u020A\x03\x02\x02" +
		"\x02\u020D\u0213\x05.\x18\x02\u020E\u0213\x054\x1B\x02\u020F\u0213\x05" +
		":\x1E\x02\u0210\u0213\x05> \x02\u0211\u0213\x05,\x17\x02\u0212\u020D\x03" +
		"\x02\x02\x02\u0212\u020E\x03\x02\x02\x02\u0212\u020F\x03\x02\x02\x02\u0212" +
		"\u0210\x03\x02\x02\x02\u0212\u0211\x03\x02\x02\x02\u0213+\x03\x02\x02" +
		"\x02\u0214\u0215\x07\x17\x02\x02\u0215\u021C\x05\n\x06\x02\u0216\u0217" +
		"\x05\n\x06\x02\u0217\u0218\x07r\x02\x02\u0218\u021A\x05D#\x02\u0219\u021B" +
		"\x07q\x02\x02\u021A\u0219\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02" +
		"\u021B\u021D\x03\x02\x02\x02\u021C\u0216\x03\x02\x02\x02\u021D\u021E\x03" +
		"\x02\x02\x02\u021E\u021C\x03\x02\x02\x02\u021E\u021F\x03\x02\x02\x02\u021F" +
		"-\x03\x02\x02\x02\u0220\u0222\x07*\x02\x02\u0221\u0223\x050\x19\x02\u0222" +
		"\u0221\x03\x02\x02\x02\u0223\u0224\x03\x02\x02\x02\u0224\u0222\x03\x02" +
		"\x02\x02\u0224\u0225\x03\x02\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226" +
		"\u0228\x07W\x02\x02\u0227\u0229\x052\x1A\x02\u0228\u0227\x03\x02\x02\x02" +
		"\u0229\u022A\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022A\u022B\x03" +
		"\x02\x02\x02\u022B/\x03\x02\x02\x02\u022C\u022D\t\x04\x02\x02\u022D1\x03" +
		"\x02\x02\x02\u022E\u022F\x05\n\x06\x02\u022F3\x03\x02\x02\x02\u0230\u0231" +
		"\x072\x02\x02\u0231\u023A\x05\n\x06\x02\u0232\u0234\x07;\x02\x02\u0233" +
		"\u0235\x05D#\x02\u0234\u0233\x03\x02\x02\x02\u0235\u0236\x03\x02\x02\x02" +
		"\u0236\u0234\x03\x02\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237\u0239\x03" +
		"\x02\x02\x02\u0238\u0232\x03\x02\x02\x02\u0239\u023C\x03\x02\x02\x02\u023A" +
		"\u0238\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B\u0240\x03\x02" +
		"\x02\x02\u023C\u023A\x03\x02\x02\x02\u023D\u023F\x056\x1C\x02\u023E\u023D" +
		"\x03\x02\x02\x02\u023F\u0242\x03\x02\x02\x02\u0240\u023E\x03\x02\x02\x02" +
		"\u0240\u0241\x03\x02\x02\x02\u0241\u0244\x03\x02\x02\x02\u0242\u0240\x03" +
		"\x02\x02\x02\u0243\u0245\x058\x1D\x02\u0244\u0243\x03\x02\x02\x02\u0245" +
		"\u0246\x03\x02\x02\x02\u0246\u0244\x03\x02\x02\x02\u0246\u0247\x03\x02" +
		"\x02\x02\u02475\x03\x02\x02\x02\u0248\u0249\t\x05\x02\x02\u02497\x03\x02" +
		"\x02\x02\u024A\u024B\x05\n\x06\x02\u024B9\x03\x02\x02\x02\u024C\u024D" +
		"\x073\x02\x02\u024D\u0256\x05\x06\x04\x02\u024E\u0250\x07u\x02\x02\u024F" +
		"\u0251\x05\n\x06\x02\u0250\u024F\x03\x02\x02\x02\u0251\u0252\x03\x02\x02" +
		"\x02\u0252\u0250\x03\x02\x02\x02\u0252\u0253\x03\x02\x02\x02\u0253\u0254" +
		"\x03\x02\x02\x02\u0254\u0255\x07x\x02\x02\u0255\u0257\x03\x02\x02\x02" +
		"\u0256\u024E\x03\x02\x02\x02\u0256\u0257\x03\x02\x02\x02\u0257\u025C\x03" +
		"\x02\x02\x02\u0258\u025A\x07\x1E\x02\x02\u0259\u025B\x07\x13\x02\x02\u025A" +
		"\u0259\x03\x02\x02\x02\u025A\u025B\x03\x02\x02\x02\u025B\u025D\x03\x02" +
		"\x02\x02\u025C\u0258\x03\x02\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D" +
		"\u0262\x03\x02\x02\x02\u025E\u0260\x07Z\x02\x02\u025F\u0261\x07\x13\x02" +
		"\x02\u0260\u025F\x03\x02\x02\x02\u0260\u0261\x03\x02\x02\x02\u0261\u0263" +
		"\x03\x02\x02\x02\u0262\u025E\x03\x02\x02\x02\u0262\u0263\x03\x02\x02\x02" +
		"\u0263\u026C\x03\x02\x02\x02\u0264\u0266\x07;\x02\x02\u0265\u0267\x05" +
		"D#\x02\u0266\u0265\x03\x02\x02\x02\u0267\u0268\x03\x02\x02\x02\u0268\u0266" +
		"\x03\x02\x02\x02\u0268\u0269\x03\x02\x02\x02\u0269\u026B\x03\x02\x02\x02" +
		"\u026A\u0264\x03\x02\x02\x02\u026B\u026E\x03\x02\x02\x02\u026C\u026A\x03" +
		"\x02\x02\x02\u026C\u026D\x03\x02\x02\x02\u026D\u0270\x03\x02\x02\x02\u026E" +
		"\u026C\x03\x02\x02\x02\u026F\u0271\x05<\x1F\x02\u0270\u026F\x03\x02\x02" +
		"\x02\u0271\u0272\x03\x02\x02\x02\u0272\u0270\x03\x02\x02\x02\u0272\u0273" +
		"\x03\x02\x02\x02\u0273;\x03\x02\x02\x02\u0274\u0275\x05\n\x06\x02\u0275" +
		"=\x03\x02\x02\x02\u0276\u0277\x07a\x02\x02\u0277\u027E\x05\n\x06\x02\u0278" +
		"\u027A\x07W\x02\x02\u0279\u027B\x052\x1A\x02\u027A\u0279\x03\x02\x02\x02" +
		"\u027B\u027C\x03\x02\x02\x02\u027C\u027A\x03\x02\x02\x02\u027C\u027D\x03" +
		"\x02\x02\x02\u027D\u027F\x03\x02\x02\x02\u027E\u0278\x03\x02\x02\x02\u027E" +
		"\u027F\x03\x02\x02\x02\u027F\u0286\x03\x02\x02\x02\u0280\u0282\x07=\x02" +
		"\x02\u0281\u0283\x05@!\x02\u0282\u0281\x03\x02\x02\x02\u0283\u0284\x03" +
		"\x02\x02\x02\u0284\u0282\x03\x02\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285" +
		"\u0287\x03\x02\x02\x02\u0286\u0280\x03\x02\x02\x02\u0286\u0287\x03\x02" +
		"\x02\x02\u0287\u028A\x03\x02\x02\x02\u0288\u028B\x05h5\x02\u0289\u028B" +
		"\x05l7\x02\u028A\u0288\x03\x02\x02\x02\u028A\u0289\x03\x02\x02\x02\u028B" +
		"?\x03\x02\x02\x02\u028C\u028D\x05\n\x06\x02\u028DA\x03\x02\x02\x02\u028E" +
		"\u028F\x07{\x02\x02\u028FC\x03\x02\x02\x02\u0290\u0291\x07{\x02\x02\u0291" +
		"E\x03\x02\x02\x02\u0292\u0293\x05D#\x02\u0293G\x03\x02\x02\x02\u0294\u029A" +
		"\t\x06\x02\x02\u0295\u029B\x05J&\x02\u0296\u0299\x05L\'\x02\u0297\u0299" +
		"\x05X-\x02\u0298\u0296\x03\x02\x02\x02\u0298\u0297\x03\x02\x02\x02\u0299" +
		"\u029B\x03\x02\x02\x02\u029A\u0295\x03\x02\x02\x02\u029A\u0298\x03\x02" +
		"\x02\x02\u029B\u02A2\x03\x02\x02\x02\u029C\u02A0\x05`1\x02\u029D\u02A0" +
		"\x05b2\x02\u029E\u02A0\x05d3\x02\u029F\u029C\x03\x02\x02\x02\u029F\u029D" +
		"\x03\x02\x02\x02\u029F\u029E\x03\x02\x02\x02\u02A0\u02A2\x03\x02\x02\x02" +
		"\u02A1\u0294\x03\x02\x02\x02\u02A1\u029F\x03\x02\x02\x02\u02A2I\x03\x02" +
		"\x02\x02\u02A3\u02A5\x070\x02\x02\u02A4\u02A6\x07C\x02\x02\u02A5\u02A4" +
		"\x03\x02\x02\x02\u02A5\u02A6\x03\x02\x02\x02\u02A6\u0311\x03\x02\x02\x02" +
		"\u02A7\u0311\x07Z\x02\x02\u02A8\u02AA\x07\x0F\x02\x02\u02A9\u02AB\x05" +
		"V,\x02\u02AA\u02A9\x03\x02\x02\x02\u02AA\u02AB\x03\x02\x02\x02\u02AB\u0311" +
		"\x03\x02\x02\x02\u02AC\u0311\x07]\x02\x02\u02AD\u02AF\x07\x10\x02\x02" +
		"\u02AE\u02B0\x05V,\x02\u02AF\u02AE\x03\x02\x02\x02\u02AF\u02B0\x03\x02" +
		"\x02\x02\u02B0\u0311\x03\x02\x02\x02\u02B1\u02B5\x07!\x02\x02\u02B2\u02B3" +
		"\x07u\x02\x02\u02B3\u02B4\x07R\x02\x02\u02B4\u02B6\x07x\x02\x02\u02B5" +
		"\u02B2\x03\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6\u0311\x03\x02" +
		"\x02\x02\u02B7\u0311\x07 \x02\x02\u02B8\u02BD\x07K\x02\x02\u02B9\u02BB" +
		"\x07)\x02\x02\u02BA\u02B9\x03\x02\x02\x02\u02BA\u02BB\x03\x02\x02\x02" +
		"\u02BB\u02BC\x03\x02\x02\x02\u02BC\u02BE\t\x07\x02\x02\u02BD\u02BA\x03" +
		"\x02\x02\x02\u02BD\u02BE\x03\x02\x02\x02\u02BE\u0311\x03\x02\x02\x02\u02BF" +
		"\u02C1\x07J\x02\x02\u02C0\u02C2\x05N(\x02\u02C1\u02C0\x03\x02\x02\x02" +
		"\u02C2\u02C3\x03\x02\x02\x02\u02C3\u02C1\x03\x02\x02\x02\u02C3\u02C4\x03" +
		"\x02\x02\x02\u02C4\u02C9\x03\x02\x02\x02\u02C5\u02C7\x07-\x02\x02\u02C6" +
		"\u02C5\x03\x02\x02\x02\u02C6\u02C7\x03\x02\x02\x02\u02C7\u02C8\x03\x02" +
		"\x02\x02\u02C8\u02CA\x07<\x02\x02\u02C9\u02C6\x03\x02\x02\x02\u02C9\u02CA" +
		"\x03\x02\x02\x02\u02CA\u02CF\x03\x02\x02\x02\u02CB\u02CD\x07)\x02\x02" +
		"\u02CC\u02CB\x03\x02\x02\x02\u02CC\u02CD\x03\x02\x02\x02\u02CD\u02CE\x03" +
		"\x02\x02\x02\u02CE\u02D0\t\x07\x02\x02\u02CF\u02CC\x03\x02\x02\x02\u02CF" +
		"\u02D0\x03\x02\x02\x02\u02D0\u02D3\x03\x02\x02\x02\u02D1\u02D2\x07\b\x02" +
		"\x02\u02D2\u02D4\x05\n\x06\x02\u02D3\u02D1\x03\x02\x02\x02\u02D3\u02D4" +
		"\x03\x02\x02\x02\u02D4\u0311\x03\x02\x02\x02\u02D5\u02D7\x07G\x02\x02" +
		"\u02D6\u02D8\x05N(\x02\u02D7\u02D6\x03\x02\x02\x02\u02D8\u02D9\x03\x02" +
		"\x02\x02\u02D9\u02D7\x03\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02\u02DA" +
		"\u02DF\x03\x02\x02\x02\u02DB\u02DD\x07-\x02\x02\u02DC\u02DB\x03\x02\x02" +
		"\x02\u02DC\u02DD\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02\u02DE\u02E0" +
		"\x07<\x02\x02\u02DF\u02DC\x03\x02\x02\x02\u02DF\u02E0\x03\x02\x02\x02" +
		"\u02E0\u02E5\x03\x02\x02\x02\u02E1\u02E3\x07)\x02\x02\u02E2\u02E1\x03" +
		"\x02\x02\x02\u02E2\u02E3\x03\x02\x02\x02\u02E3\u02E4\x03\x02\x02\x02\u02E4" +
		"\u02E6\t\x07\x02\x02\u02E5\u02E2\x03\x02\x02\x02\u02E5\u02E6\x03\x02\x02" +
		"\x02\u02E6\u02E9\x03\x02\x02\x02\u02E7\u02E8\x07\b\x02\x02\u02E8\u02EA" +
		"\x05\n\x06\x02\u02E9\u02E7\x03\x02\x02\x02\u02E9\u02EA\x03\x02\x02\x02" +
		"\u02EA\u02F5\x03\x02\x02\x02\u02EB\u02ED\x07=\x02\x02\u02EC\u02EE\x05" +
		"^0\x02\u02ED\u02EC\x03\x02\x02\x02\u02ED\u02EE\x03\x02\x02\x02\u02EE\u02F2" +
		"\x03\x02\x02\x02\u02EF\u02F1\x05\x14\v\x02\u02F0\u02EF\x03\x02\x02\x02" +
		"\u02F1\u02F4\x03\x02\x02\x02\u02F2\u02F0\x03\x02\x02\x02\u02F2\u02F3\x03" +
		"\x02\x02\x02\u02F3\u02F6\x03\x02\x02\x02\u02F4\u02F2\x03\x02\x02\x02\u02F5" +
		"\u02EB\x03\x02\x02\x02\u02F5\u02F6\x03\x02\x02\x02\u02F6\u0311\x03\x02" +
		"\x02\x02\u02F7\u0305\x07F\x02\x02\u02F8\u02FA\x07-\x02\x02\u02F9\u02F8" +
		"\x03\x02\x02\x02\u02F9\u02FA\x03\x02\x02\x02\u02FA\u02FB\x03\x02\x02\x02" +
		"\u02FB\u02FF\x07<\x02\x02\u02FC\u02FE\x05P)\x02\u02FD\u02FC\x03\x02\x02" +
		"\x02\u02FE\u0301\x03\x02\x02\x02\u02FF\u02FD\x03\x02\x02\x02\u02FF\u0300" +
		"\x03\x02\x02\x02\u0300\u0303\x03\x02\x02\x02\u0301\u02FF\x03\x02\x02\x02" +
		"\u0302\u0304\x07\"\x02\x02\u0303\u0302\x03\x02\x02\x02\u0303\u0304\x03" +
		"\x02\x02\x02\u0304\u0306\x03\x02\x02\x02\u0305\u02F9\x03\x02\x02\x02\u0305" +
		"\u0306\x03\x02\x02\x02\u0306\u030B\x03\x02\x02\x02\u0307\u0309\x07)\x02" +
		"\x02\u0308\u0307\x03\x02\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309\u030A" +
		"\x03\x02\x02\x02\u030A\u030C\t\x07\x02\x02\u030B\u0308\x03\x02\x02\x02" +
		"\u030B\u030C\x03\x02\x02\x02\u030C\u0311\x03\x02\x02\x02\u030D\u0311\x07" +
		"\x16\x02\x02\u030E\u0311\x07&\x02\x02\u030F\u0311\x075\x02\x02\u0310\u02A3" +
		"\x03\x02\x02\x02\u0310\u02A7\x03\x02\x02\x02\u0310\u02A8\x03\x02\x02\x02" +
		"\u0310\u02AC\x03\x02\x02\x02\u0310\u02AD\x03\x02\x02\x02\u0310\u02B1\x03" +
		"\x02\x02\x02\u0310\u02B7\x03\x02\x02\x02\u0310\u02B8\x03\x02\x02\x02\u0310" +
		"\u02BF\x03\x02\x02\x02\u0310\u02D5\x03\x02\x02\x02\u0310\u02F7\x03\x02" +
		"\x02\x02\u0310\u030D\x03\x02\x02\x02\u0310\u030E\x03\x02\x02\x02\u0310" +
		"\u030F\x03\x02\x02\x02\u0311\u031A\x03\x02\x02\x02\u0312\u0314\x07;\x02" +
		"\x02\u0313\u0315\x05D#\x02\u0314\u0313\x03\x02\x02\x02\u0315\u0316\x03" +
		"\x02\x02\x02\u0316\u0314\x03\x02\x02\x02\u0316\u0317\x03\x02\x02\x02\u0317" +
		"\u0319\x03\x02\x02\x02\u0318\u0312\x03\x02\x02\x02\u0319\u031C\x03\x02" +
		"\x02\x02\u031A\u0318\x03\x02\x02\x02\u031A\u031B\x03\x02\x02\x02\u031B" +
		"K\x03\x02\x02\x02\u031C\u031A\x03\x02\x02\x02\u031D\u038C\x05\n\x06\x02" +
		"\u031E\u0322\x07E\x02\x02\u031F\u0320\x07u\x02\x02\u0320\u0321\x07R\x02" +
		"\x02\u0321\u0323\x07x\x02\x02\u0322\u031F\x03\x02\x02\x02\u0322\u0323" +
		"\x03\x02\x02\x02\u0323\u032D\x03\x02\x02\x02\u0324\u0326\x07/\x02\x02" +
		"\u0325\u0327\x05\\/\x02\u0326\u0325\x03\x02\x02\x02\u0326\u0327\x03\x02" +
		"\x02\x02\u0327\u0329\x03\x02\x02\x02\u0328\u032A\x05\x14\v\x02\u0329\u0328" +
		"\x03\x02\x02\x02\u032A\u032B\x03\x02\x02\x02\u032B\u0329\x03\x02\x02\x02" +
		"\u032B\u032C\x03\x02\x02\x02\u032C\u032E\x03\x02\x02\x02\u032D\u0324\x03" +
		"\x02\x02\x02\u032D\u032E\x03\x02\x02\x02\u032E\u0339\x03\x02\x02\x02\u032F" +
		"\u0331\x07=\x02\x02\u0330\u0332\x05^0\x02\u0331\u0330\x03\x02\x02\x02" +
		"\u0331\u0332\x03\x02\x02\x02\u0332\u0336\x03\x02\x02\x02\u0333\u0335\x05" +
		"\x12\n\x02\u0334\u0333\x03\x02\x02\x02\u0335\u0338\x03\x02\x02\x02\u0336" +
		"\u0334\x03\x02\x02\x02\u0336\u0337\x03\x02\x02\x02\u0337\u033A\x03\x02" +
		"\x02\x02\u0338\u0336\x03\x02\x02\x02\u0339\u032F\x03\x02\x02\x02\u0339" +
		"\u033A\x03\x02\x02\x02\u033A\u033D\x03\x02\x02\x02\u033B\u033E\x05f4\x02" +
		"\u033C\u033E\x05j6\x02\u033D\u033B\x03\x02\x02\x02\u033D\u033C\x03\x02" +
		"\x02\x02\u033E\u038D\x03\x02\x02\x02\u033F\u0341\x07J\x02\x02\u0340\u0342" +
		"\x05N(\x02\u0341\u0340\x03\x02\x02\x02\u0342\u0343\x03\x02\x02\x02\u0343" +
		"\u0341\x03\x02\x02\x02\u0343\u0344\x03\x02\x02\x02\u0344\u0349\x03\x02" +
		"\x02\x02\u0345\u0347\x07)\x02\x02\u0346\u0345\x03\x02\x02\x02\u0346\u0347" +
		"\x03\x02\x02\x02\u0347\u0348\x03\x02\x02\x02\u0348\u034A\t\x07\x02\x02" +
		"\u0349\u0346\x03\x02\x02\x02\u0349\u034A\x03\x02\x02\x02\u034A\u038D\x03" +
		"\x02\x02\x02\u034B\u034D\x07G\x02\x02\u034C\u034E\x05N(\x02\u034D\u034C" +
		"\x03\x02\x02\x02\u034E\u034F\x03\x02\x02\x02\u034F\u034D\x03\x02\x02\x02" +
		"\u034F\u0350\x03\x02\x02\x02\u0350\u035E\x03\x02\x02\x02\u0351\u0353\x07" +
		"-\x02\x02\u0352\u0351\x03\x02\x02\x02\u0352\u0353\x03\x02\x02\x02\u0353" +
		"\u0354\x03\x02\x02\x02\u0354\u0358\x07<\x02\x02\u0355\u0357\x05P)\x02" +
		"\u0356\u0355\x03\x02\x02\x02\u0357\u035A\x03\x02\x02\x02\u0358\u0356\x03" +
		"\x02\x02\x02\u0358\u0359\x03\x02\x02\x02\u0359\u035C\x03\x02\x02\x02\u035A" +
		"\u0358\x03\x02\x02\x02\u035B\u035D\x07\"\x02\x02\u035C\u035B\x03\x02\x02" +
		"\x02\u035C\u035D\x03\x02\x02\x02\u035D\u035F\x03\x02\x02\x02\u035E\u0352" +
		"\x03\x02\x02\x02\u035E\u035F\x03\x02\x02\x02\u035F\u0364\x03\x02\x02\x02" +
		"\u0360\u0362\x07)\x02\x02\u0361\u0360\x03\x02\x02\x02\u0361\u0362\x03" +
		"\x02\x02\x02\u0362\u0363\x03\x02\x02\x02\u0363\u0365\t\x07\x02\x02\u0364" +
		"\u0361\x03\x02\x02\x02\u0364\u0365\x03\x02\x02\x02\u0365\u0370\x03\x02" +
		"\x02\x02\u0366\u0368\x07=\x02\x02\u0367\u0369\x05^0\x02\u0368\u0367\x03" +
		"\x02\x02\x02\u0368\u0369\x03\x02\x02\x02\u0369\u036D\x03\x02\x02\x02\u036A" +
		"\u036C\x05\x14\v\x02\u036B\u036A\x03\x02\x02\x02\u036C\u036F\x03\x02\x02" +
		"\x02\u036D\u036B\x03\x02\x02\x02\u036D\u036E\x03\x02\x02\x02\u036E\u0371" +
		"\x03\x02\x02\x02\u036F\u036D\x03\x02\x02\x02\u0370\u0366\x03\x02\x02\x02" +
		"\u0370\u0371\x03\x02\x02\x02\u0371\u038D\x03\x02\x02\x02\u0372\u0374\x07" +
		"\x1F\x02\x02\u0373\u0375\x05N(\x02\u0374\u0373\x03\x02\x02\x02\u0375\u0376" +
		"\x03\x02\x02\x02\u0376\u0374\x03\x02\x02\x02\u0376\u0377\x03\x02\x02\x02" +
		"\u0377\u038D\x03\x02\x02\x02\u0378\u037A\x07[\x02\x02\u0379\u037B\x05" +
		"N(\x02\u037A\u0379\x03\x02\x02\x02\u037B\u037C\x03\x02\x02\x02\u037C\u037A" +
		"\x03\x02\x02\x02\u037C\u037D\x03\x02\x02\x02\u037D\u038D\x03\x02\x02\x02" +
		"\u037E\u0380\x07\\\x02\x02\u037F\u0381\x05R*\x02\u0380\u037F\x03\x02\x02" +
		"\x02\u0381\u0382\x03\x02\x02\x02\u0382\u0380\x03\x02\x02\x02\u0382\u0383" +
		"\x03\x02\x02\x02\u0383\u038A\x03\x02\x02\x02\u0384\u0386\x07)\x02\x02" +
		"\u0385\u0387\x05N(\x02\u0386\u0385\x03\x02\x02\x02\u0387\u0388\x03\x02" +
		"\x02\x02\u0388\u0386\x03\x02\x02\x02\u0388\u0389\x03\x02\x02\x02\u0389" +
		"\u038B\x03\x02\x02\x02\u038A\u0384\x03\x02\x02\x02\u038A\u038B\x03\x02" +
		"\x02\x02\u038B\u038D\x03\x02\x02\x02\u038C\u031E\x03\x02\x02\x02\u038C" +
		"\u033F\x03\x02\x02\x02\u038C\u034B\x03\x02\x02\x02\u038C\u0372\x03\x02" +
		"\x02\x02\u038C\u0378\x03\x02\x02\x02\u038C\u037E\x03\x02\x02\x02\u038D" +
		"M\x03\x02\x02\x02\u038E\u038F\x05\n\x06\x02\u038FO\x03\x02\x02\x02\u0390" +
		"\u0391\x05\n\x06\x02\u0391Q\x03\x02\x02\x02\u0392\u0393\x05\n\x06\x02" +
		"\u0393S\x03\x02\x02\x02\u0394\u0395\x07n\x02\x02\u0395U\x03\x02\x02\x02" +
		"\u0396\u0397\x07u\x02\x02\u0397\u0398\x05&\x14\x02\u0398\u0399\x07x\x02" +
		"\x02\u0399W\x03\x02\x02\x02\u039A\u039E\x05\n\x06\x02\u039B\u039C\x07" +
		"u\x02\x02\u039C\u039D\x07R\x02\x02\u039D\u039F\x07x\x02\x02\u039E\u039B" +
		"\x03\x02\x02\x02\u039E\u039F\x03\x02\x02\x02\u039F\u03A3\x03\x02\x02\x02" +
		"\u03A0\u03A2\x05T+\x02\u03A1\u03A0\x03\x02\x02\x02\u03A2\u03A5\x03\x02" +
		"\x02\x02\u03A3\u03A1\x03\x02\x02\x02\u03A3\u03A4\x03\x02\x02\x02\u03A4" +
		"\u03AE\x03\x02\x02\x02\u03A5\u03A3\x03\x02\x02\x02\u03A6\u03A8\x07;\x02" +
		"\x02\u03A7\u03A9\x05D#\x02\u03A8\u03A7\x03\x02\x02\x02\u03A9\u03AA\x03" +
		"\x02\x02\x02\u03AA\u03A8\x03\x02\x02\x02\u03AA\u03AB\x03\x02\x02\x02\u03AB" +
		"\u03AD\x03\x02\x02\x02\u03AC\u03A6\x03\x02\x02\x02\u03AD\u03B0\x03\x02" +
		"\x02\x02\u03AE\u03AC\x03\x02\x02\x02\u03AE\u03AF\x03\x02\x02\x02\u03AF" +
		"\u03BB\x03\x02\x02\x02\u03B0\u03AE\x03\x02\x02\x02\u03B1\u03B3\x07/\x02" +
		"\x02\u03B2\u03B4\x05\\/\x02\u03B3\u03B2\x03\x02\x02\x02\u03B3\u03B4\x03" +
		"\x02\x02\x02\u03B4\u03B8\x03\x02\x02\x02\u03B5\u03B7\x05\x14\v\x02\u03B6" +
		"\u03B5\x03\x02\x02\x02\u03B7\u03BA\x03\x02\x02\x02\u03B8\u03B6\x03\x02" +
		"\x02\x02\u03B8\u03B9\x03\x02\x02\x02\u03B9\u03BC\x03\x02\x02\x02\u03BA" +
		"\u03B8\x03\x02\x02\x02\u03BB\u03B1\x03\x02\x02\x02\u03BB\u03BC\x03\x02" +
		"\x02\x02\u03BC\u03C7\x03\x02\x02\x02\u03BD\u03BF\x07.\x02\x02\u03BE\u03C0" +
		"\x05^0\x02\u03BF\u03BE\x03\x02\x02\x02\u03BF\u03C0\x03\x02\x02\x02\u03C0" +
		"\u03C4\x03\x02\x02\x02\u03C1\u03C3\x05\x14\v\x02\u03C2\u03C1\x03\x02\x02" +
		"\x02\u03C3\u03C6\x03\x02\x02\x02\u03C4\u03C2\x03\x02\x02\x02\u03C4\u03C5" +
		"\x03\x02\x02\x02\u03C5\u03C8\x03\x02\x02\x02\u03C6\u03C4\x03\x02\x02\x02" +
		"\u03C7\u03BD\x03\x02\x02\x02\u03C7\u03C8\x03\x02\x02\x02\u03C8\u03D3\x03" +
		"\x02\x02\x02\u03C9\u03CB\x07=\x02\x02\u03CA\u03CC\x05^0\x02\u03CB\u03CA" +
		"\x03\x02\x02\x02\u03CB\u03CC\x03\x02\x02\x02\u03CC\u03D0\x03\x02\x02\x02" +
		"\u03CD\u03CF\x05\x14\v\x02\u03CE\u03CD\x03\x02\x02\x02\u03CF\u03D2\x03" +
		"\x02\x02\x02\u03D0\u03CE\x03\x02\x02\x02\u03D0\u03D1\x03\x02\x02\x02\u03D1" +
		"\u03D4\x03\x02\x02\x02\u03D2\u03D0\x03\x02\x02\x02\u03D3\u03C9\x03\x02" +
		"\x02\x02\u03D3\u03D4\x03\x02\x02\x02\u03D4\u03D7\x03\x02\x02\x02\u03D5" +
		"\u03D8\x05f4\x02\u03D6\u03D8\x05j6\x02\u03D7\u03D5\x03\x02\x02\x02\u03D7" +
		"\u03D6\x03\x02\x02\x02\u03D8Y\x03\x02\x02\x02\u03D9\u03DA\x07u\x02\x02" +
		"\u03DA\u03DB\x05&\x14\x02\u03DB\u03DC\x07x\x02\x02\u03DC\u03DE\x03\x02" +
		"\x02\x02\u03DD\u03D9\x03\x02\x02\x02\u03DD\u03DE\x03\x02\x02\x02\u03DE" +
		"[\x03\x02\x02\x02\u03DF\u03E0\x07u\x02\x02\u03E0\u03E1\x077\x02\x02\u03E1" +
		"\u03EA\x07x\x02\x02\u03E2\u03E3\x07u\x02\x02\u03E3\u03E4\x05&\x14\x02" +
		"\u03E4\u03E5\x07x\x02\x02\u03E5\u03EA\x03\x02\x02\x02\u03E6\u03E7\x07" +
		"u\x02\x02\u03E7\u03E8\x07R\x02\x02\u03E8\u03EA\x07x\x02\x02\u03E9\u03DF" +
		"\x03\x02\x02\x02\u03E9\u03E2\x03\x02\x02\x02\u03E9\u03E6\x03\x02\x02\x02" +
		"\u03EA]\x03\x02\x02\x02\u03EB\u03EC\x07u\x02\x02\u03EC\u03EE\x07O\x02" +
		"\x02\u03ED\u03EF\x07R\x02\x02\u03EE\u03ED\x03\x02\x02\x02\u03EE\u03EF" +
		"\x03\x02\x02\x02\u03EF\u03F0\x03\x02\x02\x02\u03F0\u0402\x07x\x02\x02" +
		"\u03F1\u03F2\x07u\x02\x02\u03F2\u03F4\x07O\x02\x02\u03F3\u03F5\x07Z\x02" +
		"\x02\u03F4\u03F3\x03\x02\x02\x02\u03F4\u03F5\x03\x02\x02\x02\u03F5\u03F6" +
		"\x03\x02\x02\x02\u03F6\u0402\x07x\x02\x02\u03F7\u03F8\x07u\x02\x02\u03F8" +
		"\u03F9\x05&\x14\x02\u03F9\u03FA\x07x\x02\x02\u03FA\u0402\x03\x02\x02\x02" +
		"\u03FB\u03FC\x07u\x02\x02\u03FC\u03FE\x07R\x02\x02\u03FD\u03FF\x07O\x02" +
		"\x02\u03FE\u03FD\x03\x02\x02\x02\u03FE\u03FF\x03\x02\x02\x02\u03FF\u0400" +
		"\x03\x02\x02\x02\u0400\u0402\x07x\x02\x02\u0401\u03EB\x03\x02\x02\x02" +
		"\u0401\u03F1\x03\x02\x02\x02\u0401\u03F7\x03\x02\x02\x02\u0401\u03FB\x03" +
		"\x02\x02\x02\u0402_\x03\x02\x02\x02\u0403\u0407\x07\x89\x02\x02\u0404" +
		"\u0406\x05B\"\x02\u0405\u0404\x03\x02\x02\x02\u0406\u0409\x03\x02\x02" +
		"\x02\u0407\u0405\x03\x02\x02\x02\u0407\u0408\x03\x02\x02\x02\u0408\u040A" +
		"\x03\x02\x02\x02\u0409\u0407\x03\x02\x02\x02\u040A\u040B\x07\x8B\x02\x02" +
		"\u040Ba\x03\x02\x02\x02\u040C\u040E\x07\x86\x02\x02\u040D\u040F\x07\x8C" +
		"\x02\x02\u040E\u040D\x03\x02\x02\x02\u040F\u0410\x03\x02\x02\x02\u0410" +
		"\u040E\x03\x02\x02\x02\u0410\u0411\x03\x02\x02\x02\u0411\u0412\x03\x02" +
		"\x02\x02\u0412\u0413\x07\x8B\x02\x02\u0413c\x03\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\u0414\u0416\x07\x87\x02\x02\u0415\u0417\x07\x8C\x02\x02\u0416\u0415" +
		"\x03\x02\x02\x02\u0417\u0418\x03\x02\x02\x02\u0418\u0416\x03\x02\x02\x02" +
		"\u0418\u0419\x03\x02\x02\x02\u0419\u041A\x03\x02\x02\x02\u041A\u041B\x07" +
		"\x8A\x02\x02\u041Be\x03\x02\x02\x02\u041C\u041E\x07P\x02\x02\u041D\u041C" +
		"\x03\x02\x02\x02\u041D\u041E\x03\x02\x02\x02\u041E\u041F\x03\x02\x02\x02" +
		"\u041F\u0426\x07\x88\x02\x02\u0420\u0425\x05B\"\x02\u0421\u0422\x05\n" +
		"\x06\x02\u0422\u0423\x05Z.\x02\u0423\u0425\x03\x02\x02\x02\u0424\u0420" +
		"\x03\x02\x02\x02\u0424\u0421\x03\x02\x02\x02\u0425\u0428\x03\x02\x02\x02" +
		"\u0426\u0424\x03\x02\x02\x02\u0426\u0427\x03\x02\x02\x02\u0427\u0429\x03" +
		"\x02\x02\x02\u0428\u0426\x03\x02\x02\x02\u0429\u042A\x07\x8A\x02\x02\u042A" +
		"g\x03\x02\x02\x02\u042B\u042F\x07\x88\x02\x02\u042C\u042E\x05B\"\x02\u042D" +
		"\u042C\x03\x02\x02\x02\u042E\u0431\x03\x02\x02\x02\u042F\u042D\x03\x02" +
		"\x02\x02\u042F\u0430\x03\x02\x02\x02\u0430\u0432\x03\x02\x02\x02\u0431" +
		"\u042F\x03\x02\x02\x02\u0432\u0433\x07\x8A\x02\x02\u0433i\x03\x02\x02" +
		"\x02\u0434\u0436\x07\x85\x02\x02\u0435\u0437\x07\x8C\x02\x02\u0436\u0435" +
		"\x03\x02\x02\x02\u0437\u0438\x03\x02\x02\x02\u0438\u0436\x03\x02\x02\x02" +
		"\u0438\u0439\x03\x02\x02\x02\u0439\u043A\x03\x02\x02\x02\u043A\u043B\x07" +
		"\x8A\x02\x02\u043Bk\x03\x02\x02\x02\u043C\u043E\x07\x85\x02\x02\u043D" +
		"\u043F\x07\x8C\x02\x02\u043E\u043D\x03\x02\x02\x02\u043F\u0440\x03\x02" +
		"\x02\x02\u0440\u043E\x03\x02\x02\x02\u0440\u0441\x03\x02\x02\x02\u0441" +
		"\u0442\x03\x02\x02\x02\u0442\u0443\x07\x8A\x02\x02\u0443m\x03\x02\x02" +
		"\x02\xBEtx}\x83\x87\x8E\x93\x9C\xA3\xAA\xAF\xB7\xBB\xC0\xC7\xD0\xD4\xD7" +
		"\xDC\xE0\xE5\xEC\xF0\xF6\xFB\u0101\u0107\u0109\u010F\u0114\u011A\u0120" +
		"\u0122\u0128\u0131\u0137\u013B\u013E\u0142\u0146\u0149\u014D\u0151\u0154" +
		"\u0159\u015E\u0169\u016D\u0171\u017A\u017E\u0185\u018A\u0190\u0194\u01A4" +
		"\u01AE\u01B4\u01B8\u01BA\u01BF\u01CA\u01CF\u01D3\u01DA\u01E0\u01E7\u01EC" +
		"\u01F1\u01F7\u01FC\u0201\u0206\u0208\u020A\u0212\u021A\u021E\u0224\u022A" +
		"\u0236\u023A\u0240\u0246\u0252\u0256\u025A\u025C\u0260\u0262\u0268\u026C" +
		"\u0272\u027C\u027E\u0284\u0286\u028A\u0298\u029A\u029F\u02A1\u02A5\u02AA" +
		"\u02AF\u02B5\u02BA\u02BD\u02C3\u02C6\u02C9\u02CC\u02CF\u02D3\u02D9\u02DC" +
		"\u02DF\u02E2\u02E5\u02E9\u02ED\u02F2\u02F5\u02F9\u02FF\u0303\u0305\u0308" +
		"\u030B\u0310\u0316\u031A\u0322\u0326\u032B\u032D\u0331\u0336\u0339\u033D" +
		"\u0343\u0346\u0349\u034F\u0352\u0358\u035C\u035E\u0361\u0364\u0368\u036D" +
		"\u0370\u0376\u037C\u0382\u0388\u038A\u038C\u039E\u03A3\u03AA\u03AE\u03B3" +
		"\u03B8\u03BB\u03BF\u03C4\u03C7\u03CB\u03D0\u03D3\u03D7\u03DD\u03E9\u03EE" +
		"\u03F4\u03FE\u0401\u0407\u0410\u0418\u041D\u0424\u0426\u042F\u0438\u0440";
	public static readonly _serializedATN: string = Utils.join(
		[
			siParser._serializedATNSegment0,
			siParser._serializedATNSegment1,
			siParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!siParser.__ATN) {
			siParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(siParser._serializedATN));
		}

		return siParser.__ATN;
	}

}

export class JInputContext extends ParserRuleContext {
	public DATABASE(): TerminalNode { return this.getToken(siParser.DATABASE, 0); }
	public jIdent(): JIdentContext {
		return this.getRuleContext(0, JIdentContext);
	}
	public jConnect(): JConnectContext {
		return this.getRuleContext(0, JConnectContext);
	}
	public EOF(): TerminalNode { return this.getToken(siParser.EOF, 0); }
	public FLAGS(): TerminalNode[];
	public FLAGS(i: number): TerminalNode;
	public FLAGS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.FLAGS);
		} else {
			return this.getToken(siParser.FLAGS, i);
		}
	}
	public PACKAGE(): TerminalNode | undefined { return this.tryGetToken(siParser.PACKAGE, 0); }
	public jPackageIdent(): JPackageIdentContext | undefined {
		return this.tryGetRuleContext(0, JPackageIdentContext);
	}
	public jTables(): JTablesContext[];
	public jTables(i: number): JTablesContext;
	public jTables(i?: number): JTablesContext | JTablesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JTablesContext);
		} else {
			return this.getRuleContext(i, JTablesContext);
		}
	}
	public jView(): JViewContext[];
	public jView(i: number): JViewContext;
	public jView(i?: number): JViewContext | JViewContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JViewContext);
		} else {
			return this.getRuleContext(i, JViewContext);
		}
	}
	public OUTPUT(): TerminalNode[];
	public OUTPUT(i: number): TerminalNode;
	public OUTPUT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.OUTPUT);
		} else {
			return this.getToken(siParser.OUTPUT, i);
		}
	}
	public jIdentOrString(): JIdentOrStringContext[];
	public jIdentOrString(i: number): JIdentOrStringContext;
	public jIdentOrString(i?: number): JIdentOrStringContext | JIdentOrStringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JIdentOrStringContext);
		} else {
			return this.getRuleContext(i, JIdentOrStringContext);
		}
	}
	public IMPORT(): TerminalNode[];
	public IMPORT(i: number): TerminalNode;
	public IMPORT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.IMPORT);
		} else {
			return this.getToken(siParser.IMPORT, i);
		}
	}
	public jString(): JStringContext[];
	public jString(i: number): JStringContext;
	public jString(i?: number): JStringContext | JStringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JStringContext);
		} else {
			return this.getRuleContext(i, JStringContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jInput; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJInput) {
			listener.enterJInput(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJInput) {
			listener.exitJInput(this);
		}
	}
}


export class JConnectContext extends ParserRuleContext {
	public SERVER(): TerminalNode { return this.getToken(siParser.SERVER, 0); }
	public jIdentOrString(): JIdentOrStringContext[];
	public jIdentOrString(i: number): JIdentOrStringContext;
	public jIdentOrString(i?: number): JIdentOrStringContext | JIdentOrStringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JIdentOrStringContext);
		} else {
			return this.getRuleContext(i, JIdentOrStringContext);
		}
	}
	public SCHEMA(): TerminalNode | undefined { return this.tryGetToken(siParser.SCHEMA, 0); }
	public USERID(): TerminalNode | undefined { return this.tryGetToken(siParser.USERID, 0); }
	public jIdent(): JIdentContext[];
	public jIdent(i: number): JIdentContext;
	public jIdent(i?: number): JIdentContext | JIdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JIdentContext);
		} else {
			return this.getRuleContext(i, JIdentContext);
		}
	}
	public PASSWORD(): TerminalNode | undefined { return this.tryGetToken(siParser.PASSWORD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jConnect; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJConnect) {
			listener.enterJConnect(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJConnect) {
			listener.exitJConnect(this);
		}
	}
}


export class JPackageIdentContext extends ParserRuleContext {
	public jIdent(): JIdentContext[];
	public jIdent(i: number): JIdentContext;
	public jIdent(i?: number): JIdentContext | JIdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JIdentContext);
		} else {
			return this.getRuleContext(i, JIdentContext);
		}
	}
	public POINT(): TerminalNode[];
	public POINT(i: number): TerminalNode;
	public POINT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.POINT);
		} else {
			return this.getToken(siParser.POINT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jPackageIdent; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJPackageIdent) {
			listener.enterJPackageIdent(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJPackageIdent) {
			listener.exitJPackageIdent(this);
		}
	}
}


export class JIdentOrStringContext extends ParserRuleContext {
	public jIdent(): JIdentContext | undefined {
		return this.tryGetRuleContext(0, JIdentContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(siParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jIdentOrString; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJIdentOrString) {
			listener.enterJIdentOrString(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJIdentOrString) {
			listener.exitJIdentOrString(this);
		}
	}
}


export class JIdentContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(siParser.IDENTIFIER, 0); }
	public LIDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(siParser.LIDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jIdent; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJIdent) {
			listener.enterJIdent(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJIdent) {
			listener.exitJIdent(this);
		}
	}
}


export class JTablesContext extends ParserRuleContext {
	public jTable(): JTableContext | undefined {
		return this.tryGetRuleContext(0, JTableContext);
	}
	public jTableImport(): JTableImportContext | undefined {
		return this.tryGetRuleContext(0, JTableImportContext);
	}
	public jProc(): JProcContext[];
	public jProc(i: number): JProcContext;
	public jProc(i?: number): JProcContext | JProcContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JProcContext);
		} else {
			return this.getRuleContext(i, JProcContext);
		}
	}
	public PARM(): TerminalNode[];
	public PARM(i: number): TerminalNode;
	public PARM(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.PARM);
		} else {
			return this.getToken(siParser.PARM, i);
		}
	}
	public jParm(): JParmContext[];
	public jParm(i: number): JParmContext;
	public jParm(i?: number): JParmContext | JParmContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JParmContext);
		} else {
			return this.getRuleContext(i, JParmContext);
		}
	}
	public jExtras(): JExtrasContext[];
	public jExtras(i: number): JExtrasContext;
	public jExtras(i?: number): JExtrasContext | JExtrasContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JExtrasContext);
		} else {
			return this.getRuleContext(i, JExtrasContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jTables; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJTables) {
			listener.enterJTables(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJTables) {
			listener.exitJTables(this);
		}
	}
}


export class JTableImportContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(siParser.IMPORT, 0); }
	public jIdentOrString(): JIdentOrStringContext {
		return this.getRuleContext(0, JIdentOrStringContext);
	}
	public LEFTBRACK(): TerminalNode | undefined { return this.tryGetToken(siParser.LEFTBRACK, 0); }
	public RIGHTBRACK(): TerminalNode | undefined { return this.tryGetToken(siParser.RIGHTBRACK, 0); }
	public jAlias(): JAliasContext | undefined {
		return this.tryGetRuleContext(0, JAliasContext);
	}
	public jIdent(): JIdentContext[];
	public jIdent(i: number): JIdentContext;
	public jIdent(i?: number): JIdentContext | JIdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JIdentContext);
		} else {
			return this.getRuleContext(i, JIdentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jTableImport; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJTableImport) {
			listener.enterJTableImport(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJTableImport) {
			listener.exitJTableImport(this);
		}
	}
}


export class JTableContext extends ParserRuleContext {
	public TABLE(): TerminalNode { return this.getToken(siParser.TABLE, 0); }
	public jIdent(): JIdentContext {
		return this.getRuleContext(0, JIdentContext);
	}
	public jAlias(): JAliasContext | undefined {
		return this.tryGetRuleContext(0, JAliasContext);
	}
	public CHECK(): TerminalNode | undefined { return this.tryGetToken(siParser.CHECK, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(siParser.STRING, 0); }
	public jComment(): JCommentContext[];
	public jComment(i: number): JCommentContext;
	public jComment(i?: number): JCommentContext | JCommentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JCommentContext);
		} else {
			return this.getRuleContext(i, JCommentContext);
		}
	}
	public OPTIONS(): TerminalNode[];
	public OPTIONS(i: number): TerminalNode;
	public OPTIONS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.OPTIONS);
		} else {
			return this.getToken(siParser.OPTIONS, i);
		}
	}
	public jField(): JFieldContext[];
	public jField(i: number): JFieldContext;
	public jField(i?: number): JFieldContext | JFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JFieldContext);
		} else {
			return this.getRuleContext(i, JFieldContext);
		}
	}
	public jString(): JStringContext[];
	public jString(i: number): JStringContext;
	public jString(i?: number): JStringContext | JStringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JStringContext);
		} else {
			return this.getRuleContext(i, JStringContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jTable; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJTable) {
			listener.enterJTable(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJTable) {
			listener.exitJTable(this);
		}
	}
}


export class JPackageFieldContext extends ParserRuleContext {
	public jPackageIdent(): JPackageIdentContext {
		return this.getRuleContext(0, JPackageIdentContext);
	}
	public jDatatype(): JDatatypeContext {
		return this.getRuleContext(0, JDatatypeContext);
	}
	public jAlias(): JAliasContext | undefined {
		return this.tryGetRuleContext(0, JAliasContext);
	}
	public DEFAULTV(): TerminalNode[];
	public DEFAULTV(i: number): TerminalNode;
	public DEFAULTV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.DEFAULTV);
		} else {
			return this.getToken(siParser.DEFAULTV, i);
		}
	}
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.STRING);
		} else {
			return this.getToken(siParser.STRING, i);
		}
	}
	public NULL(): TerminalNode[];
	public NULL(i: number): TerminalNode;
	public NULL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.NULL);
		} else {
			return this.getToken(siParser.NULL, i);
		}
	}
	public CALC(): TerminalNode[];
	public CALC(i: number): TerminalNode;
	public CALC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.CALC);
		} else {
			return this.getToken(siParser.CALC, i);
		}
	}
	public CHECK(): TerminalNode[];
	public CHECK(i: number): TerminalNode;
	public CHECK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.CHECK);
		} else {
			return this.getToken(siParser.CHECK, i);
		}
	}
	public jComment(): JCommentContext[];
	public jComment(i: number): JCommentContext;
	public jComment(i?: number): JCommentContext | JCommentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JCommentContext);
		} else {
			return this.getRuleContext(i, JCommentContext);
		}
	}
	public NOT(): TerminalNode[];
	public NOT(i: number): TerminalNode;
	public NOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.NOT);
		} else {
			return this.getToken(siParser.NOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jPackageField; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJPackageField) {
			listener.enterJPackageField(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJPackageField) {
			listener.exitJPackageField(this);
		}
	}
}


export class JFieldContext extends ParserRuleContext {
	public jIdent(): JIdentContext {
		return this.getRuleContext(0, JIdentContext);
	}
	public jDatatype(): JDatatypeContext {
		return this.getRuleContext(0, JDatatypeContext);
	}
	public jAlias(): JAliasContext | undefined {
		return this.tryGetRuleContext(0, JAliasContext);
	}
	public DEFAULTV(): TerminalNode[];
	public DEFAULTV(i: number): TerminalNode;
	public DEFAULTV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.DEFAULTV);
		} else {
			return this.getToken(siParser.DEFAULTV, i);
		}
	}
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.STRING);
		} else {
			return this.getToken(siParser.STRING, i);
		}
	}
	public NULL(): TerminalNode[];
	public NULL(i: number): TerminalNode;
	public NULL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.NULL);
		} else {
			return this.getToken(siParser.NULL, i);
		}
	}
	public CALC(): TerminalNode[];
	public CALC(i: number): TerminalNode;
	public CALC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.CALC);
		} else {
			return this.getToken(siParser.CALC, i);
		}
	}
	public CHECK(): TerminalNode[];
	public CHECK(i: number): TerminalNode;
	public CHECK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.CHECK);
		} else {
			return this.getToken(siParser.CHECK, i);
		}
	}
	public jComment(): JCommentContext[];
	public jComment(i: number): JCommentContext;
	public jComment(i?: number): JCommentContext | JCommentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JCommentContext);
		} else {
			return this.getRuleContext(i, JCommentContext);
		}
	}
	public NOT(): TerminalNode[];
	public NOT(i: number): TerminalNode;
	public NOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.NOT);
		} else {
			return this.getToken(siParser.NOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jField; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJField) {
			listener.enterJField(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJField) {
			listener.exitJField(this);
		}
	}
}


export class JAliasContext extends ParserRuleContext {
	public LEFTPAREN(): TerminalNode { return this.getToken(siParser.LEFTPAREN, 0); }
	public jIdent(): JIdentContext {
		return this.getRuleContext(0, JIdentContext);
	}
	public RIGHTPAREN(): TerminalNode { return this.getToken(siParser.RIGHTPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jAlias; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJAlias) {
			listener.enterJAlias(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJAlias) {
			listener.exitJAlias(this);
		}
	}
}


export class JDatatypeContext extends ParserRuleContext {
	public BLOB(): TerminalNode | undefined { return this.tryGetToken(siParser.BLOB, 0); }
	public jCharsize(): JCharsizeContext | undefined {
		return this.tryGetRuleContext(0, JCharsizeContext);
	}
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(siParser.BOOLEAN, 0); }
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(siParser.BYTE, 0); }
	public jEnumValue(): JEnumValueContext | undefined {
		return this.tryGetRuleContext(0, JEnumValueContext);
	}
	public jCharList(): JCharListContext | undefined {
		return this.tryGetRuleContext(0, JCharListContext);
	}
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(siParser.CHAR, 0); }
	public ANSICHAR(): TerminalNode | undefined { return this.tryGetToken(siParser.ANSICHAR, 0); }
	public jEnumChar(): JEnumCharContext | undefined {
		return this.tryGetRuleContext(0, JEnumCharContext);
	}
	public WCHAR(): TerminalNode | undefined { return this.tryGetToken(siParser.WCHAR, 0); }
	public WANSICHAR(): TerminalNode | undefined { return this.tryGetToken(siParser.WANSICHAR, 0); }
	public UTF8(): TerminalNode | undefined { return this.tryGetToken(siParser.UTF8, 0); }
	public SHORT(): TerminalNode | undefined { return this.tryGetToken(siParser.SHORT, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(siParser.INT, 0); }
	public LONG(): TerminalNode | undefined { return this.tryGetToken(siParser.LONG, 0); }
	public UID(): TerminalNode | undefined { return this.tryGetToken(siParser.UID, 0); }
	public DATE(): TerminalNode | undefined { return this.tryGetToken(siParser.DATE, 0); }
	public DATETIME(): TerminalNode | undefined { return this.tryGetToken(siParser.DATETIME, 0); }
	public TIME(): TerminalNode | undefined { return this.tryGetToken(siParser.TIME, 0); }
	public TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(siParser.TIMESTAMP, 0); }
	public AUTOTIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(siParser.AUTOTIMESTAMP, 0); }
	public TLOB(): TerminalNode | undefined { return this.tryGetToken(siParser.TLOB, 0); }
	public XML(): TerminalNode | undefined { return this.tryGetToken(siParser.XML, 0); }
	public BIGXML(): TerminalNode | undefined { return this.tryGetToken(siParser.BIGXML, 0); }
	public USERSTAMP(): TerminalNode | undefined { return this.tryGetToken(siParser.USERSTAMP, 0); }
	public SEQUENCE(): TerminalNode | undefined { return this.tryGetToken(siParser.SEQUENCE, 0); }
	public BIGSEQUENCE(): TerminalNode | undefined { return this.tryGetToken(siParser.BIGSEQUENCE, 0); }
	public IDENTITY(): TerminalNode | undefined { return this.tryGetToken(siParser.IDENTITY, 0); }
	public BIGIDENTITY(): TerminalNode | undefined { return this.tryGetToken(siParser.BIGIDENTITY, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(siParser.DOUBLE, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(siParser.FLOAT, 0); }
	public jFloatsize(): JFloatsizeContext | undefined {
		return this.tryGetRuleContext(0, JFloatsizeContext);
	}
	public MONEY(): TerminalNode | undefined { return this.tryGetToken(siParser.MONEY, 0); }
	public jLookup(): JLookupContext | undefined {
		return this.tryGetRuleContext(0, JLookupContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jDatatype; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJDatatype) {
			listener.enterJDatatype(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJDatatype) {
			listener.exitJDatatype(this);
		}
	}
}


export class JLookupContext extends ParserRuleContext {
	public EQUALS(): TerminalNode { return this.getToken(siParser.EQUALS, 0); }
	public LEFTPAREN(): TerminalNode | undefined { return this.tryGetToken(siParser.LEFTPAREN, 0); }
	public jIdent(): JIdentContext | undefined {
		return this.tryGetRuleContext(0, JIdentContext);
	}
	public RIGHTPAREN(): TerminalNode | undefined { return this.tryGetToken(siParser.RIGHTPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jLookup; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJLookup) {
			listener.enterJLookup(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJLookup) {
			listener.exitJLookup(this);
		}
	}
}


export class JEnumValueContext extends ParserRuleContext {
	public LEFTPAREN(): TerminalNode { return this.getToken(siParser.LEFTPAREN, 0); }
	public RIGHTPAREN(): TerminalNode { return this.getToken(siParser.RIGHTPAREN, 0); }
	public LINK(): TerminalNode | undefined { return this.tryGetToken(siParser.LINK, 0); }
	public jIdent(): JIdentContext[];
	public jIdent(i: number): JIdentContext;
	public jIdent(i?: number): JIdentContext | JIdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JIdentContext);
		} else {
			return this.getRuleContext(i, JIdentContext);
		}
	}
	public EQUALS(): TerminalNode[];
	public EQUALS(i: number): TerminalNode;
	public EQUALS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.EQUALS);
		} else {
			return this.getToken(siParser.EQUALS, i);
		}
	}
	public jNumber(): JNumberContext[];
	public jNumber(i: number): JNumberContext;
	public jNumber(i?: number): JNumberContext | JNumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JNumberContext);
		} else {
			return this.getRuleContext(i, JNumberContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.COMMA);
		} else {
			return this.getToken(siParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jEnumValue; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJEnumValue) {
			listener.enterJEnumValue(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJEnumValue) {
			listener.exitJEnumValue(this);
		}
	}
}


export class JFloatsizeContext extends ParserRuleContext {
	public LEFTBRACK(): TerminalNode | undefined { return this.tryGetToken(siParser.LEFTBRACK, 0); }
	public jNumber(): JNumberContext[];
	public jNumber(i: number): JNumberContext;
	public jNumber(i?: number): JNumberContext | JNumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JNumberContext);
		} else {
			return this.getRuleContext(i, JNumberContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(siParser.COMMA, 0); }
	public RIGHTBRACK(): TerminalNode | undefined { return this.tryGetToken(siParser.RIGHTBRACK, 0); }
	public LEFTPAREN(): TerminalNode | undefined { return this.tryGetToken(siParser.LEFTPAREN, 0); }
	public RIGHTPAREN(): TerminalNode | undefined { return this.tryGetToken(siParser.RIGHTPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jFloatsize; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJFloatsize) {
			listener.enterJFloatsize(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJFloatsize) {
			listener.exitJFloatsize(this);
		}
	}
}


export class JEnumCharContext extends ParserRuleContext {
	public LEFTBRACK(): TerminalNode | undefined { return this.tryGetToken(siParser.LEFTBRACK, 0); }
	public jNumber(): JNumberContext | undefined {
		return this.tryGetRuleContext(0, JNumberContext);
	}
	public RIGHTBRACK(): TerminalNode | undefined { return this.tryGetToken(siParser.RIGHTBRACK, 0); }
	public LEFTPAREN(): TerminalNode | undefined { return this.tryGetToken(siParser.LEFTPAREN, 0); }
	public RIGHTPAREN(): TerminalNode | undefined { return this.tryGetToken(siParser.RIGHTPAREN, 0); }
	public LINK(): TerminalNode | undefined { return this.tryGetToken(siParser.LINK, 0); }
	public jIdent(): JIdentContext[];
	public jIdent(i: number): JIdentContext;
	public jIdent(i?: number): JIdentContext | JIdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JIdentContext);
		} else {
			return this.getRuleContext(i, JIdentContext);
		}
	}
	public EQUALS(): TerminalNode[];
	public EQUALS(i: number): TerminalNode;
	public EQUALS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.EQUALS);
		} else {
			return this.getToken(siParser.EQUALS, i);
		}
	}
	public jAsciiChar(): JAsciiCharContext[];
	public jAsciiChar(i: number): JAsciiCharContext;
	public jAsciiChar(i?: number): JAsciiCharContext | JAsciiCharContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JAsciiCharContext);
		} else {
			return this.getRuleContext(i, JAsciiCharContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.COMMA);
		} else {
			return this.getToken(siParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jEnumChar; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJEnumChar) {
			listener.enterJEnumChar(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJEnumChar) {
			listener.exitJEnumChar(this);
		}
	}
}


export class JCharsizeContext extends ParserRuleContext {
	public LEFTBRACK(): TerminalNode | undefined { return this.tryGetToken(siParser.LEFTBRACK, 0); }
	public jNumber(): JNumberContext | undefined {
		return this.tryGetRuleContext(0, JNumberContext);
	}
	public RIGHTBRACK(): TerminalNode | undefined { return this.tryGetToken(siParser.RIGHTBRACK, 0); }
	public LEFTPAREN(): TerminalNode | undefined { return this.tryGetToken(siParser.LEFTPAREN, 0); }
	public RIGHTPAREN(): TerminalNode | undefined { return this.tryGetToken(siParser.RIGHTPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jCharsize; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJCharsize) {
			listener.enterJCharsize(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJCharsize) {
			listener.exitJCharsize(this);
		}
	}
}


export class JCharListContext extends ParserRuleContext {
	public LEFTBRACE(): TerminalNode { return this.getToken(siParser.LEFTBRACE, 0); }
	public RIGHTBRACE(): TerminalNode { return this.getToken(siParser.RIGHTBRACE, 0); }
	public jIdent(): JIdentContext[];
	public jIdent(i: number): JIdentContext;
	public jIdent(i?: number): JIdentContext | JIdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JIdentContext);
		} else {
			return this.getRuleContext(i, JIdentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.COMMA);
		} else {
			return this.getToken(siParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jCharList; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJCharList) {
			listener.enterJCharList(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJCharList) {
			listener.exitJCharList(this);
		}
	}
}


export class JNumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(siParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jNumber; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJNumber) {
			listener.enterJNumber(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJNumber) {
			listener.exitJNumber(this);
		}
	}
}


export class JParmContext extends ParserRuleContext {
	public jString(): JStringContext | undefined {
		return this.tryGetRuleContext(0, JStringContext);
	}
	public PARMSHOWS(): TerminalNode[];
	public PARMSHOWS(i: number): TerminalNode;
	public PARMSHOWS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.PARMSHOWS);
		} else {
			return this.getToken(siParser.PARMSHOWS, i);
		}
	}
	public PARMVIEWONLY(): TerminalNode[];
	public PARMVIEWONLY(i: number): TerminalNode;
	public PARMVIEWONLY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.PARMVIEWONLY);
		} else {
			return this.getToken(siParser.PARMVIEWONLY, i);
		}
	}
	public PARMSUPPLIED(): TerminalNode[];
	public PARMSUPPLIED(i: number): TerminalNode;
	public PARMSUPPLIED(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.PARMSUPPLIED);
		} else {
			return this.getToken(siParser.PARMSUPPLIED, i);
		}
	}
	public PARMCACHE(): TerminalNode[];
	public PARMCACHE(i: number): TerminalNode;
	public PARMCACHE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.PARMCACHE);
		} else {
			return this.getToken(siParser.PARMCACHE, i);
		}
	}
	public PARMREADER(): TerminalNode[];
	public PARMREADER(i: number): TerminalNode;
	public PARMREADER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.PARMREADER);
		} else {
			return this.getToken(siParser.PARMREADER, i);
		}
	}
	public PARMINSERT(): TerminalNode[];
	public PARMINSERT(i: number): TerminalNode;
	public PARMINSERT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.PARMINSERT);
		} else {
			return this.getToken(siParser.PARMINSERT, i);
		}
	}
	public PARMUPDATE(): TerminalNode[];
	public PARMUPDATE(i: number): TerminalNode;
	public PARMUPDATE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.PARMUPDATE);
		} else {
			return this.getToken(siParser.PARMUPDATE, i);
		}
	}
	public PARMDELETE(): TerminalNode[];
	public PARMDELETE(i: number): TerminalNode;
	public PARMDELETE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.PARMDELETE);
		} else {
			return this.getToken(siParser.PARMDELETE, i);
		}
	}
	public jIdent(): JIdentContext[];
	public jIdent(i: number): JIdentContext;
	public jIdent(i?: number): JIdentContext | JIdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JIdentContext);
		} else {
			return this.getRuleContext(i, JIdentContext);
		}
	}
	public SELECTALL(): TerminalNode[];
	public SELECTALL(i: number): TerminalNode;
	public SELECTALL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.SELECTALL);
		} else {
			return this.getToken(siParser.SELECTALL, i);
		}
	}
	public INSERT(): TerminalNode[];
	public INSERT(i: number): TerminalNode;
	public INSERT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.INSERT);
		} else {
			return this.getToken(siParser.INSERT, i);
		}
	}
	public UPDATE(): TerminalNode[];
	public UPDATE(i: number): TerminalNode;
	public UPDATE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.UPDATE);
		} else {
			return this.getToken(siParser.UPDATE, i);
		}
	}
	public DELETEONE(): TerminalNode[];
	public DELETEONE(i: number): TerminalNode;
	public DELETEONE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.DELETEONE);
		} else {
			return this.getToken(siParser.DELETEONE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jParm; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJParm) {
			listener.enterJParm(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJParm) {
			listener.exitJParm(this);
		}
	}
}


export class JExtrasContext extends ParserRuleContext {
	public jGrant(): JGrantContext | undefined {
		return this.tryGetRuleContext(0, JGrantContext);
	}
	public jKey(): JKeyContext | undefined {
		return this.tryGetRuleContext(0, JKeyContext);
	}
	public jLink(): JLinkContext | undefined {
		return this.tryGetRuleContext(0, JLinkContext);
	}
	public jView(): JViewContext | undefined {
		return this.tryGetRuleContext(0, JViewContext);
	}
	public jConst(): JConstContext | undefined {
		return this.tryGetRuleContext(0, JConstContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jExtras; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJExtras) {
			listener.enterJExtras(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJExtras) {
			listener.exitJExtras(this);
		}
	}
}


export class JConstContext extends ParserRuleContext {
	public CONST(): TerminalNode { return this.getToken(siParser.CONST, 0); }
	public jIdent(): JIdentContext[];
	public jIdent(i: number): JIdentContext;
	public jIdent(i?: number): JIdentContext | JIdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JIdentContext);
		} else {
			return this.getRuleContext(i, JIdentContext);
		}
	}
	public EQUALS(): TerminalNode[];
	public EQUALS(i: number): TerminalNode;
	public EQUALS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.EQUALS);
		} else {
			return this.getToken(siParser.EQUALS, i);
		}
	}
	public jString(): JStringContext[];
	public jString(i: number): JStringContext;
	public jString(i?: number): JStringContext | JStringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JStringContext);
		} else {
			return this.getRuleContext(i, JStringContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.COMMA);
		} else {
			return this.getToken(siParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jConst; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJConst) {
			listener.enterJConst(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJConst) {
			listener.exitJConst(this);
		}
	}
}


export class JGrantContext extends ParserRuleContext {
	public GRANT(): TerminalNode { return this.getToken(siParser.GRANT, 0); }
	public TO(): TerminalNode { return this.getToken(siParser.TO, 0); }
	public jPermission(): JPermissionContext[];
	public jPermission(i: number): JPermissionContext;
	public jPermission(i?: number): JPermissionContext | JPermissionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JPermissionContext);
		} else {
			return this.getRuleContext(i, JPermissionContext);
		}
	}
	public jUser(): JUserContext[];
	public jUser(i: number): JUserContext;
	public jUser(i?: number): JUserContext | JUserContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JUserContext);
		} else {
			return this.getRuleContext(i, JUserContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jGrant; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJGrant) {
			listener.enterJGrant(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJGrant) {
			listener.exitJGrant(this);
		}
	}
}


export class JPermissionContext extends ParserRuleContext {
	public ALL(): TerminalNode | undefined { return this.tryGetToken(siParser.ALL, 0); }
	public DELETE(): TerminalNode | undefined { return this.tryGetToken(siParser.DELETE, 0); }
	public INSERT(): TerminalNode | undefined { return this.tryGetToken(siParser.INSERT, 0); }
	public SELECT(): TerminalNode | undefined { return this.tryGetToken(siParser.SELECT, 0); }
	public UPDATE(): TerminalNode | undefined { return this.tryGetToken(siParser.UPDATE, 0); }
	public EXECUTE(): TerminalNode | undefined { return this.tryGetToken(siParser.EXECUTE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jPermission; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJPermission) {
			listener.enterJPermission(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJPermission) {
			listener.exitJPermission(this);
		}
	}
}


export class JUserContext extends ParserRuleContext {
	public jIdent(): JIdentContext {
		return this.getRuleContext(0, JIdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jUser; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJUser) {
			listener.enterJUser(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJUser) {
			listener.exitJUser(this);
		}
	}
}


export class JKeyContext extends ParserRuleContext {
	public KEY(): TerminalNode { return this.getToken(siParser.KEY, 0); }
	public jIdent(): JIdentContext {
		return this.getRuleContext(0, JIdentContext);
	}
	public OPTIONS(): TerminalNode[];
	public OPTIONS(i: number): TerminalNode;
	public OPTIONS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.OPTIONS);
		} else {
			return this.getToken(siParser.OPTIONS, i);
		}
	}
	public jModifier(): JModifierContext[];
	public jModifier(i: number): JModifierContext;
	public jModifier(i?: number): JModifierContext | JModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JModifierContext);
		} else {
			return this.getRuleContext(i, JModifierContext);
		}
	}
	public jColumn(): JColumnContext[];
	public jColumn(i: number): JColumnContext;
	public jColumn(i?: number): JColumnContext | JColumnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JColumnContext);
		} else {
			return this.getRuleContext(i, JColumnContext);
		}
	}
	public jString(): JStringContext[];
	public jString(i: number): JStringContext;
	public jString(i?: number): JStringContext | JStringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JStringContext);
		} else {
			return this.getRuleContext(i, JStringContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jKey; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJKey) {
			listener.enterJKey(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJKey) {
			listener.exitJKey(this);
		}
	}
}


export class JModifierContext extends ParserRuleContext {
	public UNIQUE(): TerminalNode | undefined { return this.tryGetToken(siParser.UNIQUE, 0); }
	public PRIMARY(): TerminalNode | undefined { return this.tryGetToken(siParser.PRIMARY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jModifier; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJModifier) {
			listener.enterJModifier(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJModifier) {
			listener.exitJModifier(this);
		}
	}
}


export class JColumnContext extends ParserRuleContext {
	public jIdent(): JIdentContext {
		return this.getRuleContext(0, JIdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jColumn; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJColumn) {
			listener.enterJColumn(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJColumn) {
			listener.exitJColumn(this);
		}
	}
}


export class JLinkContext extends ParserRuleContext {
	public LINK(): TerminalNode { return this.getToken(siParser.LINK, 0); }
	public jPackageIdent(): JPackageIdentContext {
		return this.getRuleContext(0, JPackageIdentContext);
	}
	public LEFTPAREN(): TerminalNode | undefined { return this.tryGetToken(siParser.LEFTPAREN, 0); }
	public RIGHTPAREN(): TerminalNode | undefined { return this.tryGetToken(siParser.RIGHTPAREN, 0); }
	public DELETE(): TerminalNode | undefined { return this.tryGetToken(siParser.DELETE, 0); }
	public UPDATE(): TerminalNode | undefined { return this.tryGetToken(siParser.UPDATE, 0); }
	public OPTIONS(): TerminalNode[];
	public OPTIONS(i: number): TerminalNode;
	public OPTIONS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.OPTIONS);
		} else {
			return this.getToken(siParser.OPTIONS, i);
		}
	}
	public jLinkColumn(): JLinkColumnContext[];
	public jLinkColumn(i: number): JLinkColumnContext;
	public jLinkColumn(i?: number): JLinkColumnContext | JLinkColumnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JLinkColumnContext);
		} else {
			return this.getRuleContext(i, JLinkColumnContext);
		}
	}
	public jIdent(): JIdentContext[];
	public jIdent(i: number): JIdentContext;
	public jIdent(i?: number): JIdentContext | JIdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JIdentContext);
		} else {
			return this.getRuleContext(i, JIdentContext);
		}
	}
	public CASCADE(): TerminalNode[];
	public CASCADE(i: number): TerminalNode;
	public CASCADE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.CASCADE);
		} else {
			return this.getToken(siParser.CASCADE, i);
		}
	}
	public jString(): JStringContext[];
	public jString(i: number): JStringContext;
	public jString(i?: number): JStringContext | JStringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JStringContext);
		} else {
			return this.getRuleContext(i, JStringContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jLink; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJLink) {
			listener.enterJLink(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJLink) {
			listener.exitJLink(this);
		}
	}
}


export class JLinkColumnContext extends ParserRuleContext {
	public jIdent(): JIdentContext {
		return this.getRuleContext(0, JIdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jLinkColumn; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJLinkColumn) {
			listener.enterJLinkColumn(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJLinkColumn) {
			listener.exitJLinkColumn(this);
		}
	}
}


export class JViewContext extends ParserRuleContext {
	public VIEW(): TerminalNode { return this.getToken(siParser.VIEW, 0); }
	public jIdent(): JIdentContext {
		return this.getRuleContext(0, JIdentContext);
	}
	public jOldViewCode(): JOldViewCodeContext | undefined {
		return this.tryGetRuleContext(0, JOldViewCodeContext);
	}
	public jNewViewCode(): JNewViewCodeContext | undefined {
		return this.tryGetRuleContext(0, JNewViewCodeContext);
	}
	public TO(): TerminalNode | undefined { return this.tryGetToken(siParser.TO, 0); }
	public OUTPUT(): TerminalNode | undefined { return this.tryGetToken(siParser.OUTPUT, 0); }
	public jUser(): JUserContext[];
	public jUser(i: number): JUserContext;
	public jUser(i?: number): JUserContext | JUserContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JUserContext);
		} else {
			return this.getRuleContext(i, JUserContext);
		}
	}
	public jViewAlias(): JViewAliasContext[];
	public jViewAlias(i: number): JViewAliasContext;
	public jViewAlias(i?: number): JViewAliasContext | JViewAliasContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JViewAliasContext);
		} else {
			return this.getRuleContext(i, JViewAliasContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jView; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJView) {
			listener.enterJView(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJView) {
			listener.exitJView(this);
		}
	}
}


export class JViewAliasContext extends ParserRuleContext {
	public jIdent(): JIdentContext {
		return this.getRuleContext(0, JIdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jViewAlias; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJViewAlias) {
			listener.enterJViewAlias(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJViewAlias) {
			listener.exitJViewAlias(this);
		}
	}
}


export class JLineContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(siParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jLine; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJLine) {
			listener.enterJLine(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJLine) {
			listener.exitJLine(this);
		}
	}
}


export class JStringContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(siParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jString; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJString) {
			listener.enterJString(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJString) {
			listener.exitJString(this);
		}
	}
}


export class JAsciiCharContext extends ParserRuleContext {
	public jString(): JStringContext {
		return this.getRuleContext(0, JStringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jAsciiChar; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJAsciiChar) {
			listener.enterJAsciiChar(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJAsciiChar) {
			listener.exitJAsciiChar(this);
		}
	}
}


export class JProcContext extends ParserRuleContext {
	public PROC(): TerminalNode | undefined { return this.tryGetToken(siParser.PROC, 0); }
	public SPROC(): TerminalNode | undefined { return this.tryGetToken(siParser.SPROC, 0); }
	public jStdProc(): JStdProcContext | undefined {
		return this.tryGetRuleContext(0, JStdProcContext);
	}
	public jNewProc(): JNewProcContext | undefined {
		return this.tryGetRuleContext(0, JNewProcContext);
	}
	public jUserProc(): JUserProcContext | undefined {
		return this.tryGetRuleContext(0, JUserProcContext);
	}
	public jOldData(): JOldDataContext | undefined {
		return this.tryGetRuleContext(0, JOldDataContext);
	}
	public jNewData(): JNewDataContext | undefined {
		return this.tryGetRuleContext(0, JNewDataContext);
	}
	public jIdlCode(): JIdlCodeContext | undefined {
		return this.tryGetRuleContext(0, JIdlCodeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jProc; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJProc) {
			listener.enterJProc(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJProc) {
			listener.exitJProc(this);
		}
	}
}


export class JStdProcContext extends ParserRuleContext {
	public INSERT(): TerminalNode | undefined { return this.tryGetToken(siParser.INSERT, 0); }
	public UPDATE(): TerminalNode | undefined { return this.tryGetToken(siParser.UPDATE, 0); }
	public BULKINSERT(): TerminalNode | undefined { return this.tryGetToken(siParser.BULKINSERT, 0); }
	public MAXTMSTAMP(): TerminalNode | undefined { return this.tryGetToken(siParser.MAXTMSTAMP, 0); }
	public BULKUPDATE(): TerminalNode | undefined { return this.tryGetToken(siParser.BULKUPDATE, 0); }
	public DELETEONE(): TerminalNode | undefined { return this.tryGetToken(siParser.DELETEONE, 0); }
	public DELETEALL(): TerminalNode | undefined { return this.tryGetToken(siParser.DELETEALL, 0); }
	public SELECTONE(): TerminalNode | undefined { return this.tryGetToken(siParser.SELECTONE, 0); }
	public SELECTONEBY(): TerminalNode | undefined { return this.tryGetToken(siParser.SELECTONEBY, 0); }
	public SELECTBY(): TerminalNode | undefined { return this.tryGetToken(siParser.SELECTBY, 0); }
	public SELECTALL(): TerminalNode | undefined { return this.tryGetToken(siParser.SELECTALL, 0); }
	public COUNT(): TerminalNode | undefined { return this.tryGetToken(siParser.COUNT, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(siParser.EXISTS, 0); }
	public MERGE(): TerminalNode | undefined { return this.tryGetToken(siParser.MERGE, 0); }
	public OPTIONS(): TerminalNode[];
	public OPTIONS(i: number): TerminalNode;
	public OPTIONS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.OPTIONS);
		} else {
			return this.getToken(siParser.OPTIONS, i);
		}
	}
	public RETURNING(): TerminalNode | undefined { return this.tryGetToken(siParser.RETURNING, 0); }
	public jRowCount(): JRowCountContext | undefined {
		return this.tryGetRuleContext(0, JRowCountContext);
	}
	public LEFTPAREN(): TerminalNode | undefined { return this.tryGetToken(siParser.LEFTPAREN, 0); }
	public STANDARD(): TerminalNode | undefined { return this.tryGetToken(siParser.STANDARD, 0); }
	public RIGHTPAREN(): TerminalNode | undefined { return this.tryGetToken(siParser.RIGHTPAREN, 0); }
	public jProcColumn(): JProcColumnContext[];
	public jProcColumn(i: number): JProcColumnContext;
	public jProcColumn(i?: number): JProcColumnContext | JProcColumnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JProcColumnContext);
		} else {
			return this.getRuleContext(i, JProcColumnContext);
		}
	}
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(siParser.ORDER, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(siParser.AS, 0); }
	public jIdent(): JIdentContext | undefined {
		return this.tryGetRuleContext(0, JIdentContext);
	}
	public OUTPUT(): TerminalNode | undefined { return this.tryGetToken(siParser.OUTPUT, 0); }
	public READONLY(): TerminalNode | undefined { return this.tryGetToken(siParser.READONLY, 0); }
	public jString(): JStringContext[];
	public jString(i: number): JStringContext;
	public jString(i?: number): JStringContext | JStringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JStringContext);
		} else {
			return this.getRuleContext(i, JStringContext);
		}
	}
	public FOR(): TerminalNode | undefined { return this.tryGetToken(siParser.FOR, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(siParser.IN, 0); }
	public jOutputType(): JOutputTypeContext | undefined {
		return this.tryGetRuleContext(0, JOutputTypeContext);
	}
	public jField(): JFieldContext[];
	public jField(i: number): JFieldContext;
	public jField(i?: number): JFieldContext | JFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JFieldContext);
		} else {
			return this.getRuleContext(i, JFieldContext);
		}
	}
	public jOrderColumn(): JOrderColumnContext[];
	public jOrderColumn(i: number): JOrderColumnContext;
	public jOrderColumn(i?: number): JOrderColumnContext | JOrderColumnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JOrderColumnContext);
		} else {
			return this.getRuleContext(i, JOrderColumnContext);
		}
	}
	public DESC(): TerminalNode | undefined { return this.tryGetToken(siParser.DESC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jStdProc; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJStdProc) {
			listener.enterJStdProc(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJStdProc) {
			listener.exitJStdProc(this);
		}
	}
}


export class JNewProcContext extends ParserRuleContext {
	public jIdent(): JIdentContext {
		return this.getRuleContext(0, JIdentContext);
	}
	public SELECT(): TerminalNode | undefined { return this.tryGetToken(siParser.SELECT, 0); }
	public SELECTONEBY(): TerminalNode | undefined { return this.tryGetToken(siParser.SELECTONEBY, 0); }
	public SELECTBY(): TerminalNode | undefined { return this.tryGetToken(siParser.SELECTBY, 0); }
	public DELETEBY(): TerminalNode | undefined { return this.tryGetToken(siParser.DELETEBY, 0); }
	public UPDATEFOR(): TerminalNode | undefined { return this.tryGetToken(siParser.UPDATEFOR, 0); }
	public UPDATEBY(): TerminalNode | undefined { return this.tryGetToken(siParser.UPDATEBY, 0); }
	public jOldCode(): JOldCodeContext | undefined {
		return this.tryGetRuleContext(0, JOldCodeContext);
	}
	public jNewCode(): JNewCodeContext | undefined {
		return this.tryGetRuleContext(0, JNewCodeContext);
	}
	public LEFTPAREN(): TerminalNode | undefined { return this.tryGetToken(siParser.LEFTPAREN, 0); }
	public STANDARD(): TerminalNode | undefined { return this.tryGetToken(siParser.STANDARD, 0); }
	public RIGHTPAREN(): TerminalNode | undefined { return this.tryGetToken(siParser.RIGHTPAREN, 0); }
	public INPUT(): TerminalNode | undefined { return this.tryGetToken(siParser.INPUT, 0); }
	public OUTPUT(): TerminalNode | undefined { return this.tryGetToken(siParser.OUTPUT, 0); }
	public jProcColumn(): JProcColumnContext[];
	public jProcColumn(i: number): JProcColumnContext;
	public jProcColumn(i?: number): JProcColumnContext | JProcColumnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JProcColumnContext);
		} else {
			return this.getRuleContext(i, JProcColumnContext);
		}
	}
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(siParser.ORDER, 0); }
	public UPDATE(): TerminalNode | undefined { return this.tryGetToken(siParser.UPDATE, 0); }
	public READONLY(): TerminalNode | undefined { return this.tryGetToken(siParser.READONLY, 0); }
	public jProcUpdateByColumn(): JProcUpdateByColumnContext[];
	public jProcUpdateByColumn(i: number): JProcUpdateByColumnContext;
	public jProcUpdateByColumn(i?: number): JProcUpdateByColumnContext | JProcUpdateByColumnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JProcUpdateByColumnContext);
		} else {
			return this.getRuleContext(i, JProcUpdateByColumnContext);
		}
	}
	public FOR(): TerminalNode | undefined { return this.tryGetToken(siParser.FOR, 0); }
	public jInputType(): JInputTypeContext | undefined {
		return this.tryGetRuleContext(0, JInputTypeContext);
	}
	public jField(): JFieldContext[];
	public jField(i: number): JFieldContext;
	public jField(i?: number): JFieldContext | JFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JFieldContext);
		} else {
			return this.getRuleContext(i, JFieldContext);
		}
	}
	public jOutputType(): JOutputTypeContext | undefined {
		return this.tryGetRuleContext(0, JOutputTypeContext);
	}
	public jPackageField(): JPackageFieldContext[];
	public jPackageField(i: number): JPackageFieldContext;
	public jPackageField(i?: number): JPackageFieldContext | JPackageFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JPackageFieldContext);
		} else {
			return this.getRuleContext(i, JPackageFieldContext);
		}
	}
	public IN(): TerminalNode | undefined { return this.tryGetToken(siParser.IN, 0); }
	public jOrderColumn(): JOrderColumnContext[];
	public jOrderColumn(i: number): JOrderColumnContext;
	public jOrderColumn(i?: number): JOrderColumnContext | JOrderColumnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JOrderColumnContext);
		} else {
			return this.getRuleContext(i, JOrderColumnContext);
		}
	}
	public DESC(): TerminalNode | undefined { return this.tryGetToken(siParser.DESC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jNewProc; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJNewProc) {
			listener.enterJNewProc(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJNewProc) {
			listener.exitJNewProc(this);
		}
	}
}


export class JProcColumnContext extends ParserRuleContext {
	public jIdent(): JIdentContext {
		return this.getRuleContext(0, JIdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jProcColumn; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJProcColumn) {
			listener.enterJProcColumn(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJProcColumn) {
			listener.exitJProcColumn(this);
		}
	}
}


export class JOrderColumnContext extends ParserRuleContext {
	public jIdent(): JIdentContext {
		return this.getRuleContext(0, JIdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jOrderColumn; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJOrderColumn) {
			listener.enterJOrderColumn(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJOrderColumn) {
			listener.exitJOrderColumn(this);
		}
	}
}


export class JProcUpdateByColumnContext extends ParserRuleContext {
	public jIdent(): JIdentContext {
		return this.getRuleContext(0, JIdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jProcUpdateByColumn; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJProcUpdateByColumn) {
			listener.enterJProcUpdateByColumn(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJProcUpdateByColumn) {
			listener.exitJProcUpdateByColumn(this);
		}
	}
}


export class JCommentContext extends ParserRuleContext {
	public COMMENT(): TerminalNode { return this.getToken(siParser.COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jComment; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJComment) {
			listener.enterJComment(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJComment) {
			listener.exitJComment(this);
		}
	}
}


export class JRowCountContext extends ParserRuleContext {
	public LEFTPAREN(): TerminalNode { return this.getToken(siParser.LEFTPAREN, 0); }
	public jNumber(): JNumberContext {
		return this.getRuleContext(0, JNumberContext);
	}
	public RIGHTPAREN(): TerminalNode { return this.getToken(siParser.RIGHTPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jRowCount; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJRowCount) {
			listener.enterJRowCount(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJRowCount) {
			listener.exitJRowCount(this);
		}
	}
}


export class JUserProcContext extends ParserRuleContext {
	public jIdent(): JIdentContext {
		return this.getRuleContext(0, JIdentContext);
	}
	public jOldCode(): JOldCodeContext | undefined {
		return this.tryGetRuleContext(0, JOldCodeContext);
	}
	public jNewCode(): JNewCodeContext | undefined {
		return this.tryGetRuleContext(0, JNewCodeContext);
	}
	public LEFTPAREN(): TerminalNode | undefined { return this.tryGetToken(siParser.LEFTPAREN, 0); }
	public STANDARD(): TerminalNode | undefined { return this.tryGetToken(siParser.STANDARD, 0); }
	public RIGHTPAREN(): TerminalNode | undefined { return this.tryGetToken(siParser.RIGHTPAREN, 0); }
	public jComment(): JCommentContext[];
	public jComment(i: number): JCommentContext;
	public jComment(i?: number): JCommentContext | JCommentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JCommentContext);
		} else {
			return this.getRuleContext(i, JCommentContext);
		}
	}
	public OPTIONS(): TerminalNode[];
	public OPTIONS(i: number): TerminalNode;
	public OPTIONS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.OPTIONS);
		} else {
			return this.getToken(siParser.OPTIONS, i);
		}
	}
	public INPUT(): TerminalNode | undefined { return this.tryGetToken(siParser.INPUT, 0); }
	public INOUT(): TerminalNode | undefined { return this.tryGetToken(siParser.INOUT, 0); }
	public OUTPUT(): TerminalNode | undefined { return this.tryGetToken(siParser.OUTPUT, 0); }
	public jString(): JStringContext[];
	public jString(i: number): JStringContext;
	public jString(i?: number): JStringContext | JStringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JStringContext);
		} else {
			return this.getRuleContext(i, JStringContext);
		}
	}
	public jInputType(): JInputTypeContext | undefined {
		return this.tryGetRuleContext(0, JInputTypeContext);
	}
	public jField(): JFieldContext[];
	public jField(i: number): JFieldContext;
	public jField(i?: number): JFieldContext | JFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JFieldContext);
		} else {
			return this.getRuleContext(i, JFieldContext);
		}
	}
	public jOutputType(): JOutputTypeContext[];
	public jOutputType(i: number): JOutputTypeContext;
	public jOutputType(i?: number): JOutputTypeContext | JOutputTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JOutputTypeContext);
		} else {
			return this.getRuleContext(i, JOutputTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jUserProc; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJUserProc) {
			listener.enterJUserProc(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJUserProc) {
			listener.exitJUserProc(this);
		}
	}
}


export class JOptSizeContext extends ParserRuleContext {
	public LEFTPAREN(): TerminalNode | undefined { return this.tryGetToken(siParser.LEFTPAREN, 0); }
	public jNumber(): JNumberContext | undefined {
		return this.tryGetRuleContext(0, JNumberContext);
	}
	public RIGHTPAREN(): TerminalNode | undefined { return this.tryGetToken(siParser.RIGHTPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jOptSize; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJOptSize) {
			listener.enterJOptSize(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJOptSize) {
			listener.exitJOptSize(this);
		}
	}
}


export class JInputTypeContext extends ParserRuleContext {
	public LEFTPAREN(): TerminalNode { return this.getToken(siParser.LEFTPAREN, 0); }
	public MULTIPLE(): TerminalNode | undefined { return this.tryGetToken(siParser.MULTIPLE, 0); }
	public RIGHTPAREN(): TerminalNode { return this.getToken(siParser.RIGHTPAREN, 0); }
	public jNumber(): JNumberContext | undefined {
		return this.tryGetRuleContext(0, JNumberContext);
	}
	public STANDARD(): TerminalNode | undefined { return this.tryGetToken(siParser.STANDARD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jInputType; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJInputType) {
			listener.enterJInputType(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJInputType) {
			listener.exitJInputType(this);
		}
	}
}


export class JOutputTypeContext extends ParserRuleContext {
	public LEFTPAREN(): TerminalNode { return this.getToken(siParser.LEFTPAREN, 0); }
	public SINGLE(): TerminalNode | undefined { return this.tryGetToken(siParser.SINGLE, 0); }
	public RIGHTPAREN(): TerminalNode { return this.getToken(siParser.RIGHTPAREN, 0); }
	public STANDARD(): TerminalNode | undefined { return this.tryGetToken(siParser.STANDARD, 0); }
	public UPDATE(): TerminalNode | undefined { return this.tryGetToken(siParser.UPDATE, 0); }
	public jNumber(): JNumberContext | undefined {
		return this.tryGetRuleContext(0, JNumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jOutputType; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJOutputType) {
			listener.enterJOutputType(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJOutputType) {
			listener.exitJOutputType(this);
		}
	}
}


export class JOldDataContext extends ParserRuleContext {
	public DATA(): TerminalNode { return this.getToken(siParser.DATA, 0); }
	public ENDDATA(): TerminalNode { return this.getToken(siParser.ENDDATA, 0); }
	public jLine(): JLineContext[];
	public jLine(i: number): JLineContext;
	public jLine(i?: number): JLineContext | JLineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JLineContext);
		} else {
			return this.getRuleContext(i, JLineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jOldData; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJOldData) {
			listener.enterJOldData(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJOldData) {
			listener.exitJOldData(this);
		}
	}
}


export class JNewDataContext extends ParserRuleContext {
	public SQLDATA(): TerminalNode { return this.getToken(siParser.SQLDATA, 0); }
	public ENDDATA(): TerminalNode { return this.getToken(siParser.ENDDATA, 0); }
	public CODELINE(): TerminalNode[];
	public CODELINE(i: number): TerminalNode;
	public CODELINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.CODELINE);
		} else {
			return this.getToken(siParser.CODELINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jNewData; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJNewData) {
			listener.enterJNewData(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJNewData) {
			listener.exitJNewData(this);
		}
	}
}


export class JIdlCodeContext extends ParserRuleContext {
	public IDLCODE(): TerminalNode { return this.getToken(siParser.IDLCODE, 0); }
	public ENDCODE(): TerminalNode { return this.getToken(siParser.ENDCODE, 0); }
	public CODELINE(): TerminalNode[];
	public CODELINE(i: number): TerminalNode;
	public CODELINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.CODELINE);
		} else {
			return this.getToken(siParser.CODELINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jIdlCode; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJIdlCode) {
			listener.enterJIdlCode(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJIdlCode) {
			listener.exitJIdlCode(this);
		}
	}
}


export class JOldCodeContext extends ParserRuleContext {
	public CODE(): TerminalNode { return this.getToken(siParser.CODE, 0); }
	public ENDCODE(): TerminalNode { return this.getToken(siParser.ENDCODE, 0); }
	public SQL(): TerminalNode | undefined { return this.tryGetToken(siParser.SQL, 0); }
	public jLine(): JLineContext[];
	public jLine(i: number): JLineContext;
	public jLine(i?: number): JLineContext | JLineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JLineContext);
		} else {
			return this.getRuleContext(i, JLineContext);
		}
	}
	public jIdent(): JIdentContext[];
	public jIdent(i: number): JIdentContext;
	public jIdent(i?: number): JIdentContext | JIdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JIdentContext);
		} else {
			return this.getRuleContext(i, JIdentContext);
		}
	}
	public jOptSize(): JOptSizeContext[];
	public jOptSize(i: number): JOptSizeContext;
	public jOptSize(i?: number): JOptSizeContext | JOptSizeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JOptSizeContext);
		} else {
			return this.getRuleContext(i, JOptSizeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jOldCode; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJOldCode) {
			listener.enterJOldCode(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJOldCode) {
			listener.exitJOldCode(this);
		}
	}
}


export class JOldViewCodeContext extends ParserRuleContext {
	public CODE(): TerminalNode { return this.getToken(siParser.CODE, 0); }
	public ENDCODE(): TerminalNode { return this.getToken(siParser.ENDCODE, 0); }
	public jLine(): JLineContext[];
	public jLine(i: number): JLineContext;
	public jLine(i?: number): JLineContext | JLineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JLineContext);
		} else {
			return this.getRuleContext(i, JLineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jOldViewCode; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJOldViewCode) {
			listener.enterJOldViewCode(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJOldViewCode) {
			listener.exitJOldViewCode(this);
		}
	}
}


export class JNewCodeContext extends ParserRuleContext {
	public SQLCODE(): TerminalNode { return this.getToken(siParser.SQLCODE, 0); }
	public ENDCODE(): TerminalNode { return this.getToken(siParser.ENDCODE, 0); }
	public CODELINE(): TerminalNode[];
	public CODELINE(i: number): TerminalNode;
	public CODELINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.CODELINE);
		} else {
			return this.getToken(siParser.CODELINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jNewCode; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJNewCode) {
			listener.enterJNewCode(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJNewCode) {
			listener.exitJNewCode(this);
		}
	}
}


export class JNewViewCodeContext extends ParserRuleContext {
	public SQLCODE(): TerminalNode { return this.getToken(siParser.SQLCODE, 0); }
	public ENDCODE(): TerminalNode { return this.getToken(siParser.ENDCODE, 0); }
	public CODELINE(): TerminalNode[];
	public CODELINE(i: number): TerminalNode;
	public CODELINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(siParser.CODELINE);
		} else {
			return this.getToken(siParser.CODELINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return siParser.RULE_jNewViewCode; }
	// @Override
	public enterRule(listener: siParserListener): void {
		if (listener.enterJNewViewCode) {
			listener.enterJNewViewCode(this);
		}
	}
	// @Override
	public exitRule(listener: siParserListener): void {
		if (listener.exitJNewViewCode) {
			listener.exitJNewViewCode(this);
		}
	}
}


