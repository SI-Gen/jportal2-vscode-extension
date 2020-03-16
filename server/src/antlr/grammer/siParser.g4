parser grammar siParser;
options { tokenVocab=siLexer; }

// Parser starting point
	jInput	: DATABASE jIdent 
			( FLAGS ( jString )+ )*
			( PACKAGE jPackageIdent )?
			( ( OUTPUT jIdentOrString | IMPORT jIdentOrString ) )* 
			jConnect 
			( jTables )+ 
			( jView )* 
			EOF;
// This is only used for table generation code.
	jConnect	:	SERVER 
					jIdentOrString
					( SCHEMA jIdentOrString )?
					( USERID jIdent PASSWORD jIdent )?;
// A package can contain dotted notation
	jPackageIdent	: jIdent ( POINT jIdent )*;
// The server may be a standard variable or a string
	jIdentOrString	: jIdent | STRING;
// Identifiers may be DEF keywords if they are escaped using L'x'
	jIdent :	IDENTIFIER | LIDENTIFIER;

	jTables	:	( jTable ( jExtras )* | jTableImport ) 
				( jProc )*
				( PARM jParm )*;

	jTableImport :	IMPORT jIdentOrString 
					( LEFTBRACK ( jIdent )+ RIGHTBRACK )?
					( jAlias )?;

	jTable	:	TABLE jIdent ( jAlias )? 
				( CHECK STRING )?
				( jComment )*
				( OPTIONS ( jString )+ )*
				( jField )*;

	jPackageField :	jPackageIdent 
					( jAlias )? 
					jDatatype 
					( DEFAULTV STRING | ( NOT )? NULL | CALC | CHECK STRING )* 
					( jComment )*;

	jField : jIdent 
			( jAlias )?
			jDatatype
			( DEFAULTV STRING | ( NOT )? NULL | CALC | CHECK STRING )*
			( jComment )*;

	jAlias : LEFTPAREN jIdent RIGHTPAREN;

	jDatatype :	BLOB ( jCharsize )?
		|	BOOLEAN
		|	BYTE ( jEnumValue | jCharList )?
		|	CHAR ( jCharsize )? ( jCharList )?
		|	ANSICHAR ( jEnumChar )?
		|	WCHAR ( jCharsize )? ( jCharList )?
		|	WANSICHAR ( jEnumChar )?
		|	UTF8 ( jCharsize )? ( jCharList )?
		|	SHORT ( jEnumValue | jCharList )?
		|	INT ( jEnumValue | jCharList )?
		|	LONG
		|	UID
		|	DATE
		|	DATETIME
		|	TIME
		|	TIMESTAMP
		|	AUTOTIMESTAMP
		|	TLOB ( jCharsize )?
		|	XML ( jCharsize )?
		|	BIGXML ( jCharsize )?
		|	USERSTAMP
		|	SEQUENCE
		|	BIGSEQUENCE
		|	IDENTITY
		|	BIGIDENTITY
		|	( DOUBLE | FLOAT ) ( jFloatsize )?
		|	MONEY
		|	jLookup;

	jLookup	: EQUALS ( LEFTPAREN jIdent RIGHTPAREN )?;
	
	jEnumValue : LEFTPAREN 
				( ( LINK jIdent )? ( jIdent EQUALS jNumber ( COMMA )? )+ ) 
				RIGHTPAREN;
	
	jFloatsize : LEFTBRACK jNumber COMMA jNumber RIGHTBRACK
				|	LEFTPAREN jNumber COMMA jNumber RIGHTPAREN;

	jEnumChar :	( LEFTBRACK jNumber RIGHTBRACK )
				| ( LEFTPAREN 
					( jNumber | ( LINK jIdent )? 
					( jIdent EQUALS jAsciiChar ( COMMA )? )+ )
					RIGHTPAREN
				)
				|	jNumber;

	jCharsize : ( LEFTBRACK jNumber RIGHTBRACK )
				| ( LEFTPAREN jNumber RIGHTPAREN )
				| jNumber;

	jCharList :	LEFTBRACE
				( jIdent ( COMMA )? )+
				RIGHTBRACE;

	jNumber	: NUMBER;

	jParm :	( jString )?
			( 
				PARMSHOWS ( jIdent )+
				| PARMVIEWONLY
				| PARMSUPPLIED ( jIdent )+
				| PARMCACHE ( jIdent | SELECTALL ) ( jIdent )*
				| PARMREADER ( jIdent | SELECTALL ) 
				| PARMINSERT ( jIdent | INSERT )
				| PARMUPDATE ( jIdent | UPDATE )
				| PARMDELETE ( jIdent | DELETEONE ) 
			)*;

	jExtras	: jGrant
			| jKey
			| jLink
			| jView
			| jConst;

	jConst	:	CONST jIdent
				( jIdent EQUALS jString ( COMMA )? )+;

	jGrant	:	GRANT ( jPermission )+ TO ( jUser )+;

	jPermission	:	ALL
				|	DELETE
				|	INSERT
				|	SELECT
				|	UPDATE
				|	EXECUTE;

	jUser : jIdent;

	jKey : KEY jIdent ( OPTIONS ( jString )+ )* ( jModifier )* ( jColumn )+;

	jModifier : UNIQUE
			 | PRIMARY;

	jColumn	: jIdent;

	jLink : LINK jPackageIdent 
		( LEFTPAREN ( jIdent )+ RIGHTPAREN )? 
		( DELETE ( CASCADE )? )? 
		( UPDATE ( CASCADE )? )? 
		( OPTIONS ( jString )+ )* 
		( jLinkColumn )+;

	jLinkColumn	: jIdent;

	jView : VIEW jIdent 
			( TO ( jUser )+ )?
			( OUTPUT ( jViewAlias )+ )?
			( jOldViewCode | jNewViewCode );

	jViewAlias : jIdent;

	jLine : STRING;

	jString	: STRING;

	jAsciiChar : jString;

	jProc : ( PROC | SPROC ) 
			 ( jStdProc | ( jNewProc | jUserProc ) )
			 | ( jOldData | jNewData | jIdlCode );

	jStdProc : (
					INSERT ( RETURNING )?
					| UPDATE 
					| BULKINSERT ( jRowCount )?
					| MAXTMSTAMP
					| BULKUPDATE ( jRowCount )?
					| DELETEONE ( LEFTPAREN STANDARD RIGHTPAREN )?
					| DELETEALL
					| SELECTONE ( ( FOR )? ( UPDATE | READONLY ) )?
					| SELECTONEBY ( jProcColumn )+ 
						( ( IN )? ORDER )? 
						( ( FOR )? ( UPDATE | READONLY ) )? 
						( AS jIdent )? 
					| SELECTBY ( jProcColumn )+
						( ( IN )? ORDER )? 
						( ( FOR )? ( UPDATE | READONLY ) )? 
						( AS jIdent )? 
						( OUTPUT ( jOutputType )? 
						( jField )* )? 
					| SELECTALL 
						( ( IN )? ORDER ( jOrderColumn )* ( DESC )? )? 
						( ( FOR )? ( UPDATE | READONLY ) )? 
					| COUNT 
					| EXISTS 
					| MERGE 
				) 
				( OPTIONS ( jString )+ )*;

	jNewProc : jIdent 
			( 
				SELECT ( LEFTPAREN STANDARD RIGHTPAREN )? 
				( INPUT ( jInputType )? ( jField )+ )? 
				( OUTPUT ( jOutputType )? ( jPackageField )* )?
				( jOldCode | jNewCode ) 
				| SELECTONEBY ( jProcColumn )+
					( ( FOR )? ( UPDATE | READONLY ) )? 
				| SELECTBY ( jProcColumn )+ 
					( ( IN )? ORDER ( jOrderColumn )* ( DESC )? )? 
					( ( FOR )? ( UPDATE | READONLY ) )? 
					( OUTPUT ( jOutputType )? ( jField )* )? 
				| DELETEBY ( jProcColumn )+ 
				| UPDATEFOR ( jProcColumn )+ 
				| UPDATEBY ( ( jProcUpdateByColumn )+ ( FOR ( jProcColumn )+ )? ) 
			);

	jProcColumn	: jIdent;

	jOrderColumn : jIdent;

	jProcUpdateByColumn	: jIdent;

	jComment : COMMENT;

	jRowCount :	LEFTPAREN jNumber RIGHTPAREN;

	jUserProc :	jIdent ( LEFTPAREN STANDARD RIGHTPAREN )? 
			( jComment )* 
			( OPTIONS ( jString )+ )*
			( INPUT ( jInputType )? ( jField )* )?
			( INOUT ( jOutputType )? ( jField )* )? 
			( OUTPUT ( jOutputType )? ( jField )* )?
			( jOldCode | jNewCode );

	jOptSize : ( LEFTPAREN jNumber RIGHTPAREN )?;

	jInputType : LEFTPAREN MULTIPLE RIGHTPAREN
		|	LEFTPAREN jNumber RIGHTPAREN
		|	LEFTPAREN STANDARD RIGHTPAREN;

	jOutputType	: LEFTPAREN SINGLE ( STANDARD )? RIGHTPAREN
		|	LEFTPAREN SINGLE ( UPDATE )? RIGHTPAREN
		|	LEFTPAREN jNumber RIGHTPAREN
		|	LEFTPAREN STANDARD ( SINGLE )? RIGHTPAREN;

	jOldData : DATA 
			( jLine )*
			ENDDATA;

	jNewData : SQLDATA ( CODELINE )+ ENDDATA;

	jIdlCode : IDLCODE ( CODELINE )+ ENDCODE;


	jOldCode : ( SQL )? CODE 
			( jLine | jIdent jOptSize )*
			ENDCODE;

	jOldViewCode : 	CODE 
				( jLine )* 
				ENDCODE;

	jNewCode : SQLCODE
			   (CODELINE)+
			   ENDCODE;

	jNewViewCode : SQLCODE 
					(CODELINE)+
					ENDCODE;
