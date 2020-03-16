// Generated from siParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { JInputContext } from "./siParser";
import { JConnectContext } from "./siParser";
import { JPackageIdentContext } from "./siParser";
import { JIdentOrStringContext } from "./siParser";
import { JIdentContext } from "./siParser";
import { JTablesContext } from "./siParser";
import { JTableImportContext } from "./siParser";
import { JTableContext } from "./siParser";
import { JPackageFieldContext } from "./siParser";
import { JFieldContext } from "./siParser";
import { JAliasContext } from "./siParser";
import { JDatatypeContext } from "./siParser";
import { JLookupContext } from "./siParser";
import { JEnumValueContext } from "./siParser";
import { JFloatsizeContext } from "./siParser";
import { JEnumCharContext } from "./siParser";
import { JCharsizeContext } from "./siParser";
import { JCharListContext } from "./siParser";
import { JNumberContext } from "./siParser";
import { JParmContext } from "./siParser";
import { JExtrasContext } from "./siParser";
import { JConstContext } from "./siParser";
import { JGrantContext } from "./siParser";
import { JPermissionContext } from "./siParser";
import { JUserContext } from "./siParser";
import { JKeyContext } from "./siParser";
import { JModifierContext } from "./siParser";
import { JColumnContext } from "./siParser";
import { JLinkContext } from "./siParser";
import { JLinkColumnContext } from "./siParser";
import { JViewContext } from "./siParser";
import { JViewAliasContext } from "./siParser";
import { JLineContext } from "./siParser";
import { JStringContext } from "./siParser";
import { JAsciiCharContext } from "./siParser";
import { JProcContext } from "./siParser";
import { JStdProcContext } from "./siParser";
import { JNewProcContext } from "./siParser";
import { JProcColumnContext } from "./siParser";
import { JOrderColumnContext } from "./siParser";
import { JProcUpdateByColumnContext } from "./siParser";
import { JCommentContext } from "./siParser";
import { JRowCountContext } from "./siParser";
import { JUserProcContext } from "./siParser";
import { JOptSizeContext } from "./siParser";
import { JInputTypeContext } from "./siParser";
import { JOutputTypeContext } from "./siParser";
import { JOldDataContext } from "./siParser";
import { JNewDataContext } from "./siParser";
import { JIdlCodeContext } from "./siParser";
import { JOldCodeContext } from "./siParser";
import { JOldViewCodeContext } from "./siParser";
import { JNewCodeContext } from "./siParser";
import { JNewViewCodeContext } from "./siParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `siParser`.
 */
export interface siParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `siParser.jInput`.
	 * @param ctx the parse tree
	 */
	enterJInput?: (ctx: JInputContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jInput`.
	 * @param ctx the parse tree
	 */
	exitJInput?: (ctx: JInputContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jConnect`.
	 * @param ctx the parse tree
	 */
	enterJConnect?: (ctx: JConnectContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jConnect`.
	 * @param ctx the parse tree
	 */
	exitJConnect?: (ctx: JConnectContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jPackageIdent`.
	 * @param ctx the parse tree
	 */
	enterJPackageIdent?: (ctx: JPackageIdentContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jPackageIdent`.
	 * @param ctx the parse tree
	 */
	exitJPackageIdent?: (ctx: JPackageIdentContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jIdentOrString`.
	 * @param ctx the parse tree
	 */
	enterJIdentOrString?: (ctx: JIdentOrStringContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jIdentOrString`.
	 * @param ctx the parse tree
	 */
	exitJIdentOrString?: (ctx: JIdentOrStringContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jIdent`.
	 * @param ctx the parse tree
	 */
	enterJIdent?: (ctx: JIdentContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jIdent`.
	 * @param ctx the parse tree
	 */
	exitJIdent?: (ctx: JIdentContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jTables`.
	 * @param ctx the parse tree
	 */
	enterJTables?: (ctx: JTablesContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jTables`.
	 * @param ctx the parse tree
	 */
	exitJTables?: (ctx: JTablesContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jTableImport`.
	 * @param ctx the parse tree
	 */
	enterJTableImport?: (ctx: JTableImportContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jTableImport`.
	 * @param ctx the parse tree
	 */
	exitJTableImport?: (ctx: JTableImportContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jTable`.
	 * @param ctx the parse tree
	 */
	enterJTable?: (ctx: JTableContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jTable`.
	 * @param ctx the parse tree
	 */
	exitJTable?: (ctx: JTableContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jPackageField`.
	 * @param ctx the parse tree
	 */
	enterJPackageField?: (ctx: JPackageFieldContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jPackageField`.
	 * @param ctx the parse tree
	 */
	exitJPackageField?: (ctx: JPackageFieldContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jField`.
	 * @param ctx the parse tree
	 */
	enterJField?: (ctx: JFieldContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jField`.
	 * @param ctx the parse tree
	 */
	exitJField?: (ctx: JFieldContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jAlias`.
	 * @param ctx the parse tree
	 */
	enterJAlias?: (ctx: JAliasContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jAlias`.
	 * @param ctx the parse tree
	 */
	exitJAlias?: (ctx: JAliasContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jDatatype`.
	 * @param ctx the parse tree
	 */
	enterJDatatype?: (ctx: JDatatypeContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jDatatype`.
	 * @param ctx the parse tree
	 */
	exitJDatatype?: (ctx: JDatatypeContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jLookup`.
	 * @param ctx the parse tree
	 */
	enterJLookup?: (ctx: JLookupContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jLookup`.
	 * @param ctx the parse tree
	 */
	exitJLookup?: (ctx: JLookupContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jEnumValue`.
	 * @param ctx the parse tree
	 */
	enterJEnumValue?: (ctx: JEnumValueContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jEnumValue`.
	 * @param ctx the parse tree
	 */
	exitJEnumValue?: (ctx: JEnumValueContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jFloatsize`.
	 * @param ctx the parse tree
	 */
	enterJFloatsize?: (ctx: JFloatsizeContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jFloatsize`.
	 * @param ctx the parse tree
	 */
	exitJFloatsize?: (ctx: JFloatsizeContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jEnumChar`.
	 * @param ctx the parse tree
	 */
	enterJEnumChar?: (ctx: JEnumCharContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jEnumChar`.
	 * @param ctx the parse tree
	 */
	exitJEnumChar?: (ctx: JEnumCharContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jCharsize`.
	 * @param ctx the parse tree
	 */
	enterJCharsize?: (ctx: JCharsizeContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jCharsize`.
	 * @param ctx the parse tree
	 */
	exitJCharsize?: (ctx: JCharsizeContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jCharList`.
	 * @param ctx the parse tree
	 */
	enterJCharList?: (ctx: JCharListContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jCharList`.
	 * @param ctx the parse tree
	 */
	exitJCharList?: (ctx: JCharListContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jNumber`.
	 * @param ctx the parse tree
	 */
	enterJNumber?: (ctx: JNumberContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jNumber`.
	 * @param ctx the parse tree
	 */
	exitJNumber?: (ctx: JNumberContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jParm`.
	 * @param ctx the parse tree
	 */
	enterJParm?: (ctx: JParmContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jParm`.
	 * @param ctx the parse tree
	 */
	exitJParm?: (ctx: JParmContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jExtras`.
	 * @param ctx the parse tree
	 */
	enterJExtras?: (ctx: JExtrasContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jExtras`.
	 * @param ctx the parse tree
	 */
	exitJExtras?: (ctx: JExtrasContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jConst`.
	 * @param ctx the parse tree
	 */
	enterJConst?: (ctx: JConstContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jConst`.
	 * @param ctx the parse tree
	 */
	exitJConst?: (ctx: JConstContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jGrant`.
	 * @param ctx the parse tree
	 */
	enterJGrant?: (ctx: JGrantContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jGrant`.
	 * @param ctx the parse tree
	 */
	exitJGrant?: (ctx: JGrantContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jPermission`.
	 * @param ctx the parse tree
	 */
	enterJPermission?: (ctx: JPermissionContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jPermission`.
	 * @param ctx the parse tree
	 */
	exitJPermission?: (ctx: JPermissionContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jUser`.
	 * @param ctx the parse tree
	 */
	enterJUser?: (ctx: JUserContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jUser`.
	 * @param ctx the parse tree
	 */
	exitJUser?: (ctx: JUserContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jKey`.
	 * @param ctx the parse tree
	 */
	enterJKey?: (ctx: JKeyContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jKey`.
	 * @param ctx the parse tree
	 */
	exitJKey?: (ctx: JKeyContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jModifier`.
	 * @param ctx the parse tree
	 */
	enterJModifier?: (ctx: JModifierContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jModifier`.
	 * @param ctx the parse tree
	 */
	exitJModifier?: (ctx: JModifierContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jColumn`.
	 * @param ctx the parse tree
	 */
	enterJColumn?: (ctx: JColumnContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jColumn`.
	 * @param ctx the parse tree
	 */
	exitJColumn?: (ctx: JColumnContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jLink`.
	 * @param ctx the parse tree
	 */
	enterJLink?: (ctx: JLinkContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jLink`.
	 * @param ctx the parse tree
	 */
	exitJLink?: (ctx: JLinkContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jLinkColumn`.
	 * @param ctx the parse tree
	 */
	enterJLinkColumn?: (ctx: JLinkColumnContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jLinkColumn`.
	 * @param ctx the parse tree
	 */
	exitJLinkColumn?: (ctx: JLinkColumnContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jView`.
	 * @param ctx the parse tree
	 */
	enterJView?: (ctx: JViewContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jView`.
	 * @param ctx the parse tree
	 */
	exitJView?: (ctx: JViewContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jViewAlias`.
	 * @param ctx the parse tree
	 */
	enterJViewAlias?: (ctx: JViewAliasContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jViewAlias`.
	 * @param ctx the parse tree
	 */
	exitJViewAlias?: (ctx: JViewAliasContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jLine`.
	 * @param ctx the parse tree
	 */
	enterJLine?: (ctx: JLineContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jLine`.
	 * @param ctx the parse tree
	 */
	exitJLine?: (ctx: JLineContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jString`.
	 * @param ctx the parse tree
	 */
	enterJString?: (ctx: JStringContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jString`.
	 * @param ctx the parse tree
	 */
	exitJString?: (ctx: JStringContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jAsciiChar`.
	 * @param ctx the parse tree
	 */
	enterJAsciiChar?: (ctx: JAsciiCharContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jAsciiChar`.
	 * @param ctx the parse tree
	 */
	exitJAsciiChar?: (ctx: JAsciiCharContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jProc`.
	 * @param ctx the parse tree
	 */
	enterJProc?: (ctx: JProcContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jProc`.
	 * @param ctx the parse tree
	 */
	exitJProc?: (ctx: JProcContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jStdProc`.
	 * @param ctx the parse tree
	 */
	enterJStdProc?: (ctx: JStdProcContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jStdProc`.
	 * @param ctx the parse tree
	 */
	exitJStdProc?: (ctx: JStdProcContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jNewProc`.
	 * @param ctx the parse tree
	 */
	enterJNewProc?: (ctx: JNewProcContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jNewProc`.
	 * @param ctx the parse tree
	 */
	exitJNewProc?: (ctx: JNewProcContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jProcColumn`.
	 * @param ctx the parse tree
	 */
	enterJProcColumn?: (ctx: JProcColumnContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jProcColumn`.
	 * @param ctx the parse tree
	 */
	exitJProcColumn?: (ctx: JProcColumnContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jOrderColumn`.
	 * @param ctx the parse tree
	 */
	enterJOrderColumn?: (ctx: JOrderColumnContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jOrderColumn`.
	 * @param ctx the parse tree
	 */
	exitJOrderColumn?: (ctx: JOrderColumnContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jProcUpdateByColumn`.
	 * @param ctx the parse tree
	 */
	enterJProcUpdateByColumn?: (ctx: JProcUpdateByColumnContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jProcUpdateByColumn`.
	 * @param ctx the parse tree
	 */
	exitJProcUpdateByColumn?: (ctx: JProcUpdateByColumnContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jComment`.
	 * @param ctx the parse tree
	 */
	enterJComment?: (ctx: JCommentContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jComment`.
	 * @param ctx the parse tree
	 */
	exitJComment?: (ctx: JCommentContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jRowCount`.
	 * @param ctx the parse tree
	 */
	enterJRowCount?: (ctx: JRowCountContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jRowCount`.
	 * @param ctx the parse tree
	 */
	exitJRowCount?: (ctx: JRowCountContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jUserProc`.
	 * @param ctx the parse tree
	 */
	enterJUserProc?: (ctx: JUserProcContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jUserProc`.
	 * @param ctx the parse tree
	 */
	exitJUserProc?: (ctx: JUserProcContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jOptSize`.
	 * @param ctx the parse tree
	 */
	enterJOptSize?: (ctx: JOptSizeContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jOptSize`.
	 * @param ctx the parse tree
	 */
	exitJOptSize?: (ctx: JOptSizeContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jInputType`.
	 * @param ctx the parse tree
	 */
	enterJInputType?: (ctx: JInputTypeContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jInputType`.
	 * @param ctx the parse tree
	 */
	exitJInputType?: (ctx: JInputTypeContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jOutputType`.
	 * @param ctx the parse tree
	 */
	enterJOutputType?: (ctx: JOutputTypeContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jOutputType`.
	 * @param ctx the parse tree
	 */
	exitJOutputType?: (ctx: JOutputTypeContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jOldData`.
	 * @param ctx the parse tree
	 */
	enterJOldData?: (ctx: JOldDataContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jOldData`.
	 * @param ctx the parse tree
	 */
	exitJOldData?: (ctx: JOldDataContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jNewData`.
	 * @param ctx the parse tree
	 */
	enterJNewData?: (ctx: JNewDataContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jNewData`.
	 * @param ctx the parse tree
	 */
	exitJNewData?: (ctx: JNewDataContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jIdlCode`.
	 * @param ctx the parse tree
	 */
	enterJIdlCode?: (ctx: JIdlCodeContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jIdlCode`.
	 * @param ctx the parse tree
	 */
	exitJIdlCode?: (ctx: JIdlCodeContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jOldCode`.
	 * @param ctx the parse tree
	 */
	enterJOldCode?: (ctx: JOldCodeContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jOldCode`.
	 * @param ctx the parse tree
	 */
	exitJOldCode?: (ctx: JOldCodeContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jOldViewCode`.
	 * @param ctx the parse tree
	 */
	enterJOldViewCode?: (ctx: JOldViewCodeContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jOldViewCode`.
	 * @param ctx the parse tree
	 */
	exitJOldViewCode?: (ctx: JOldViewCodeContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jNewCode`.
	 * @param ctx the parse tree
	 */
	enterJNewCode?: (ctx: JNewCodeContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jNewCode`.
	 * @param ctx the parse tree
	 */
	exitJNewCode?: (ctx: JNewCodeContext) => void;

	/**
	 * Enter a parse tree produced by `siParser.jNewViewCode`.
	 * @param ctx the parse tree
	 */
	enterJNewViewCode?: (ctx: JNewViewCodeContext) => void;
	/**
	 * Exit a parse tree produced by `siParser.jNewViewCode`.
	 * @param ctx the parse tree
	 */
	exitJNewViewCode?: (ctx: JNewViewCodeContext) => void;
}

