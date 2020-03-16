// Generated from .\siParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
import { JNewViewCodeContext } from "./siParser";
import { JOldViewCodeContext } from "./siParser";
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
import { JOldCodeContext } from "./siParser";
import { JNewCodeContext } from "./siParser";
import { JOptSizeContext } from "./siParser";
import { JInputTypeContext } from "./siParser";
import { JOutputTypeContext } from "./siParser";
import { JOldDataContext } from "./siParser";
import { JNewDataContext } from "./siParser";
import { JIdlCodeContext } from "./siParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `siParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface siParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `siParser.jInput`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJInput?: (ctx: JInputContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jConnect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJConnect?: (ctx: JConnectContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jPackageIdent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJPackageIdent?: (ctx: JPackageIdentContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jIdentOrString`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJIdentOrString?: (ctx: JIdentOrStringContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jIdent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJIdent?: (ctx: JIdentContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jTables`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJTables?: (ctx: JTablesContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jTableImport`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJTableImport?: (ctx: JTableImportContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJTable?: (ctx: JTableContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jPackageField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJPackageField?: (ctx: JPackageFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJField?: (ctx: JFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJAlias?: (ctx: JAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jDatatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJDatatype?: (ctx: JDatatypeContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jLookup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJLookup?: (ctx: JLookupContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jEnumValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJEnumValue?: (ctx: JEnumValueContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jFloatsize`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJFloatsize?: (ctx: JFloatsizeContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jEnumChar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJEnumChar?: (ctx: JEnumCharContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jCharsize`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJCharsize?: (ctx: JCharsizeContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jCharList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJCharList?: (ctx: JCharListContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jNumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJNumber?: (ctx: JNumberContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jParm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJParm?: (ctx: JParmContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jExtras`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJExtras?: (ctx: JExtrasContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jConst`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJConst?: (ctx: JConstContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jGrant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJGrant?: (ctx: JGrantContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jPermission`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJPermission?: (ctx: JPermissionContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jUser`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJUser?: (ctx: JUserContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJKey?: (ctx: JKeyContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJModifier?: (ctx: JModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jColumn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJColumn?: (ctx: JColumnContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jLink`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJLink?: (ctx: JLinkContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jLinkColumn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJLinkColumn?: (ctx: JLinkColumnContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJView?: (ctx: JViewContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jNewViewCode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJNewViewCode?: (ctx: JNewViewCodeContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jOldViewCode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJOldViewCode?: (ctx: JOldViewCodeContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jViewAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJViewAlias?: (ctx: JViewAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jLine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJLine?: (ctx: JLineContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jString`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJString?: (ctx: JStringContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jAsciiChar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJAsciiChar?: (ctx: JAsciiCharContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jProc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJProc?: (ctx: JProcContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jStdProc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJStdProc?: (ctx: JStdProcContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jNewProc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJNewProc?: (ctx: JNewProcContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jProcColumn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJProcColumn?: (ctx: JProcColumnContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jOrderColumn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJOrderColumn?: (ctx: JOrderColumnContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jProcUpdateByColumn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJProcUpdateByColumn?: (ctx: JProcUpdateByColumnContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jComment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJComment?: (ctx: JCommentContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jRowCount`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJRowCount?: (ctx: JRowCountContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jUserProc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJUserProc?: (ctx: JUserProcContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jOldCode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJOldCode?: (ctx: JOldCodeContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jNewCode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJNewCode?: (ctx: JNewCodeContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jOptSize`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJOptSize?: (ctx: JOptSizeContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jInputType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJInputType?: (ctx: JInputTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jOutputType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJOutputType?: (ctx: JOutputTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jOldData`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJOldData?: (ctx: JOldDataContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jNewData`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJNewData?: (ctx: JNewDataContext) => Result;

	/**
	 * Visit a parse tree produced by `siParser.jIdlCode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJIdlCode?: (ctx: JIdlCodeContext) => Result;
}

