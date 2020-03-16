import {
  CompletionItem,
  CompletionItemKind,
  Position,
  InsertTextFormat,
  MarkupContent,
  MarkupKind,
  TextEdit,
  Hover
} from 'vscode-languageserver';

export interface AutoCompleteItem {
  label: string;
  kind: CompletionItemKind;
  data: number;
  detail: string;
  documentation: MarkupContent;
  insertTextFormat: 1 | 2;
  textEdit: TextEdit;
}

const AutoComplete: AutoCompleteItem[] = [
  {
    // --------------------------------------------------------------------------------
    // DATABASE DEFINITION
    // --------------------------------------------------------------------------------
    label: 'DATABASE',
    kind: CompletionItemKind.Keyword,
    data: 0,
    detail: 'DATABASE DatabaseName',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [
        'Define a new `DATABASE` and specify the database name',
        '***',
        '**The `DATABASE` keyword is mandatory and must be first in any SI file**'
      ].join('\n')
    },
    insertTextFormat: InsertTextFormat.Snippet,
    textEdit: {
      newText: 'DATABASE ${1:DatabaseName}',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'FLAGS',
    kind: CompletionItemKind.Keyword,
    data: 1,
    detail: 'FLAGS "Flags"',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [
        'Define a set of  `FLAGS` for the database specified. ',
        '***',
        '**The `FLAGS` keyword is optional**'
      ].join('\n')
    },
    insertTextFormat: InsertTextFormat.Snippet,
    textEdit: {
      newText: 'FLAGS "${1:Flags}"',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'PACKAGE',
    kind: CompletionItemKind.Keyword,
    data: 2,
    detail: 'PACKAGE Name',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [
        'Define a `PACKAGE` and specify the package name',
        '***',
        'Package name is a dot separated name, for example:',
        '```si',
        'PACKAGE bbdservicebus.py_node_base.db',
        '```',
        '**The `PACKAGE` keyword is optional**'
      ].join('\n')
    },
    insertTextFormat: InsertTextFormat.Snippet,
    textEdit: {
      newText: 'PACKAGE ${1:PackageName}',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'OUTPUT',
    kind: CompletionItemKind.Keyword,
    data: 3,
    detail: 'OUTPUT OutputName',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [
        'Define the `OUTPUT` name',
        '***',
        '*NOTE: `OUTPUT` and `IMPORT` cannot be specified together*'
      ].join('\n')
    },
    insertTextFormat: InsertTextFormat.Snippet,
    textEdit: {
      newText: 'OUTPUT ${1:OutputName}',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'IMPORT',
    kind: CompletionItemKind.Keyword,
    data: 3,
    detail: 'IMPORT ImportName',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [
        'Define the `IMPORT` name',
        '***',
        '*NOTE: `IMPORT` and `OUTPUT` cannot be specified together*'
      ].join('\n')
    },
    insertTextFormat: InsertTextFormat.Snippet,
    textEdit: {
      newText: 'IMPORT ${1:ImportName}',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'SERVER',
    kind: CompletionItemKind.Keyword,
    data: 4,
    detail: 'SERVER ServerName USERID UserID PASSWORD Passwd',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [
        'Define the name of the `SERVER` to connect to and optionally provide a `USERID` and `PASSWORD`',
        '***',
        '**The `SERVER` keyword is mandatory**'
      ].join('\n')
    },
    insertTextFormat: InsertTextFormat.Snippet,
    textEdit: {
      newText: 'SERVER ${1:ServerName} USERID ${2:ID} PASSWORD ${3:Passwd}',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'SCHEMA',
    kind: CompletionItemKind.Keyword,
    data: 5,
    detail: 'SCHEMA Name',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [
        'Define the name of the `SCHEMA` to use',
        '***',
        '**The `SCHEMA` keyword is optional**'
      ].join('\n')
    },
    insertTextFormat: InsertTextFormat.Snippet,
    textEdit: {
      newText: 'SCHEMA ${1:SchemaName}',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'TABLE',
    kind: CompletionItemKind.Keyword,
    data: 6,
    detail: 'TABLE TableName (Alias) CHECK "CheckString" OPTIONS "OptionList"',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [
        'Define a new `TABLE` by specifying its name, alias, `CHECK` and `OPTIONS`',
        '***',
        'For example:',
        '```si',
        'TABLE FileTransactions (transactionAlias) CHECK "standard" OPTIONS "autoincrement:1 1"',
        '```',
        '**The `TABLE` keyword is mandatory and each SI file can only contain one table definition.**',
        '**Alias, `CHECK` and `OPTIONS` are optional**'
      ].join('\n')
    },
    insertTextFormat: InsertTextFormat.Snippet,
    textEdit: {
      newText: 'TABLE ${1:TableName} OPTIONS "${2:OptionList}"',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  // --------------------------------------------------------------------------------

  // --------------------------------------------------------------------------------
  // TABLE COLUMN TYPES
  // --------------------------------------------------------------------------------
  {
    label: 'ANSICHAR',
    kind: CompletionItemKind.Keyword,
    data: 101,
    detail: 'ANSICHAR (EnumChar)',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [
        'Define table column of type `ANISCHAR` and optionally specify the *size* of the column or define an enum of values',
        '***',
        'The column size is optional and can be enclosed in round or square brackets for example:',
        '```si',
        'ColumnName ANSICHAR(10)',
        'ColumnName ANSICHAR[10]',
        '```',
        '`ANSICHAR` also provides the capability to define enum values, for example:',
        '```si',
        "ColumnName ANSICHAR (Normal='N', Error='E', Fail='F')\",",
        '```'
      ].join('\n')
    },
    insertTextFormat: InsertTextFormat.Snippet,
    textEdit: {
      newText: 'ANSICHAR (${1:EnumChar})',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'WANSICHAR',
    kind: CompletionItemKind.Keyword,
    data: 102,
    detail: 'WANSICHAR (EnumChar)',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [
        'Define table column of type `WANISCHAR` and optionally specify the *size* of the column or define an enum of values',
        '***',
        'The column size is optional and can be enclosed in round or square brackets for example:',
        '```si',
        'ColumnName WANSICHAR(10)',
        'ColumnName WANSICHAR[10]',
        '```',
        '`WANSICHAR` also provides the capability to define enum values, for example:',
        '```si',
        "ColumnName WANSICHAR (Normal='N', Error='E', Fail='F')\",",
        '```'
      ].join('\n')
    },
    insertTextFormat: InsertTextFormat.Snippet,
    textEdit: {
      newText: 'ANSICHAR (${1:EnumChar})',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'BLOB',
    kind: CompletionItemKind.Keyword,
    data: 103,
    detail: 'BLOB (Size)',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [
        'Define table column of type `BLOB` and optionally specify the *size* of the column.',
        '***',
        'Column size can be enclosed in round or square brackets or separated from the data type by a space for example:',
        '```si',
        'ColumnName BLOB(10)',
        'ColumnName BLOB[10]',
        'ColumnName BLOB 10',
        '```'
      ].join('\n')
    },
    insertTextFormat: InsertTextFormat.Snippet,
    textEdit: {
      newText: 'BLOB (${1:Size})',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'BOOLEAN',
    kind: CompletionItemKind.Keyword,
    data: 104,
    detail: 'Define table column of type BOOLEAN',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [''].join('\n')
    },
    insertTextFormat: InsertTextFormat.PlainText,
    textEdit: {
      newText: 'BOOLEAN',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'CHAR',
    kind: CompletionItemKind.Keyword,
    data: 105,
    detail: 'CHAR (Size) {Value1, Value2}',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [
        'Define table column of type `CHAR` and optionally specify the *size* of the column or provide a list of acceptable values.',
        '***',
        'Size can be enclosed in round or square brackets or separated from the data type by a space, for example',
        '```si',
        'ColumnName CHAR(10)',
        'ColumnName CHAR[10]',
        'ColumnName CHAR 10',
        '```',
        'Optionally, a list of values can be supplied enclosed in curly braces and separated by a space for example:',
        '```si',
        'ColumnName CHAR(10) {Hello, World}',
        '```',
      ].join('\n')
    },
    insertTextFormat: InsertTextFormat.Snippet,
    textEdit: {
      newText: 'CHAR (${1:Size})',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'WCHAR',
    kind: CompletionItemKind.Keyword,
    data: 106,
    detail: 'WCHAR (Size)',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [
        'Define table column of type `WCHAR` and optionally specify the *size* of the column or provide a list of acceptable values.',
        '***',
        'Size can be enclosed in round or square brackets or separated from the data type by a space, for example',
        '```si',
        'ColumnName WCHAR(10)',
        'ColumnName WCHAR[10]',
        'ColumnName WCHAR 10',
        '```',
        'Optionally, a list of values can be supplied enclosed in curly braces and separated by a space for example:',
        '```si',
        'ColumnName WCHAR(10) {Hello, World}',
        '```',
      ].join('\n')
    },
    insertTextFormat: InsertTextFormat.Snippet,
    textEdit: {
      newText: 'WCHAR (${1:Size})',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'DATE',
    kind: CompletionItemKind.Keyword,
    data: 107,
    detail: 'Define table column of type DATE',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [''].join('\n')
    },
    insertTextFormat: InsertTextFormat.PlainText,
    textEdit: {
      newText: 'DATE',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'DATETIME',
    kind: CompletionItemKind.Keyword,
    data: 108,
    detail: 'Define table column of type DATETIME',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [''].join('\n')
    },
    insertTextFormat: InsertTextFormat.PlainText,
    textEdit: {
      newText: 'DATETIME',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'DOUBLE',
    kind: CompletionItemKind.Keyword,
    data: 109,
    detail: 'DOUBLE (Precision, Scale)',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [
        'Define table column of type `DOUBLE` and specify the *precision* and *scale* of the column.',
        '***',
        'The precision and scale of the column can be enclosed in round or square brackets, for example:',
        '```si',
        'ColumnName DOUBLE(10,2)',
        'ColumnName DOUBLE[10,2]',
        '```'
      ].join('\n')
    },
    insertTextFormat: InsertTextFormat.Snippet,
    textEdit: {
      newText: 'FLOAT (${1:Precision}, ${2:Scale})',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'FLOAT',
    kind: CompletionItemKind.Keyword,
    data: 110,
    detail: 'FLOAT (Precision, Scale)',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [
        'Define table column of type `FLOAT` and specify the *precision* and *scale* of the column.',
        '***',
        'The precision and scale of the column can be enclosed in round or square brackets, for example:',
        '```si',
        'ColumnName FLOAT(10,2)',
        'ColumnName FLOAT[10,2]',
        '```'
      ].join('\n')
    },
    insertTextFormat: InsertTextFormat.Snippet,
    textEdit: {
      newText: 'FLOAT (${1:Precision}, ${2:Scale})',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'IDENTITY',
    kind: CompletionItemKind.Keyword,
    data: 111,
    detail: 'Define table column of type IDENTITY',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [''].join('\n')
    },
    insertTextFormat: InsertTextFormat.PlainText,
    textEdit: {
      newText: 'IDENTITY',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'BIGIDENTITY',
    kind: CompletionItemKind.Keyword,
    data: 112,
    detail: 'Define table column of type BIGIDENTITY',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [''].join('\n')
    },
    insertTextFormat: InsertTextFormat.PlainText,
    textEdit: {
      newText: 'IDENTITY',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'INT',
    kind: CompletionItemKind.Keyword,
    data: 113,
    detail: 'INT (Hello=1, World=2) | {Value1, Value2}',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [
        'Define table column of type `INT` and optionally specify a list of enum values *OR* a list of accepted values',
        '***',
        'An example of a `INT` column with enum values:',
        '```si',
        'ColumnName INT (Hello=1, World=2)',
        '```',
        'An example of a `INT` column with acceptable values:',
        '```si',
        'ColumnName INT {Hello, World}',
        '```',
      ].join('\n')
    },
    insertTextFormat: InsertTextFormat.PlainText,
    textEdit: {
      newText: 'INT',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'LONG',
    kind: CompletionItemKind.Keyword,
    data: 114,
    detail: 'Define table column of type LONG',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [''].join('\n')
    },
    insertTextFormat: InsertTextFormat.PlainText,
    textEdit: {
      newText: 'LONG',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'MONEY',
    kind: CompletionItemKind.Keyword,
    data: 115,
    detail: 'Define table column of type MONEY',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [''].join('\n')
    },
    insertTextFormat: InsertTextFormat.PlainText,
    textEdit: {
      newText: 'MONEY',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'SEQUENCE',
    kind: CompletionItemKind.Keyword,
    data: 116,
    detail: 'Define table column of type SEQUENCE',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [''].join('\n')
    },
    insertTextFormat: InsertTextFormat.PlainText,
    textEdit: {
      newText: 'SEQUENCE',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'BIGSEQUENCE',
    kind: CompletionItemKind.Keyword,
    data: 117,
    detail: 'Define table column of type BIGSEQUENCE',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [''].join('\n')
    },
    insertTextFormat: InsertTextFormat.PlainText,
    textEdit: {
      newText: 'BIGSEQUENCE',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'SHORT',
    kind: CompletionItemKind.Keyword,
    data: 118,
    detail: 'SHORT (Hello=1, World=2) | {Value1, Value2}',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [
        'Define table column of type `SHORT` and optionally specify a list of enum values *OR* a list of accepted values',
        '***',
        'An example of a `SHORT` column with enum values:',
        '```si',
        'ColumnName SHORT (Hello=1, World=2)',
        '```',
        'An example of a `SHORT` column with acceptable values:',
        '```si',
        'ColumnName SHORT {Hello, World}',
        '```',
      ].join('\n')
    },
    insertTextFormat: InsertTextFormat.PlainText,
    textEdit: {
      newText: 'SHORT',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'TIME',
    kind: CompletionItemKind.Keyword,
    data: 119,
    detail: 'Define table column of type TIME',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [''].join('\n')
    },
    insertTextFormat: InsertTextFormat.PlainText,
    textEdit: {
      newText: 'TIME',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'TIMESTAMP',
    kind: CompletionItemKind.Keyword,
    data: 120,
    detail: 'Define table column of type TIMESTAMP',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [''].join('\n')
    },
    insertTextFormat: InsertTextFormat.PlainText,
    textEdit: {
      newText: 'TIMESTAMP',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'AUTOTIMESTAMP',
    kind: CompletionItemKind.Keyword,
    data: 121,
    detail: 'Define table column of type AUTOTIMESTAMP',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [''].join('\n')
    },
    insertTextFormat: InsertTextFormat.PlainText,
    textEdit: {
      newText: 'AUTOTIMESTAMP',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'TLOB',
    kind: CompletionItemKind.Keyword,
    data: 122,
    detail: 'TLOB (Size)',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [
        'Define table column of type `TLOB` and optionally specify the *size* of the column.',
        '***',
        'Column size can be enclosed in round or square brackets or separated from the data type by a space for example:',
        '```si',
        'ColumnName TLOB(10)',
        'ColumnName TLOB[10]',
        'ColumnName TLOB 10',
        '```'
      ].join('\n')
    },
    insertTextFormat: InsertTextFormat.Snippet,
    textEdit: {
      newText: 'TLOB (${1:Size})',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'UID',
    kind: CompletionItemKind.Keyword,
    data: 123,
    detail: 'Define table column of type UID',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [''].join('\n')
    },
    insertTextFormat: InsertTextFormat.PlainText,
    textEdit: {
      newText: 'UID',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'USERSTAMP',
    kind: CompletionItemKind.Keyword,
    data: 124,
    detail: 'Define table column of type USERSTAMP',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [''].join('\n')
    },
    insertTextFormat: InsertTextFormat.PlainText,
    textEdit: {
      newText: 'USERSTAMP',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'XML',
    kind: CompletionItemKind.Keyword,
    data: 125,
    detail: 'XML (Size)',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [
        'Define table column of type `XML` and optionally specify the *size* of the column.',
        '***',
        'Column size can be enclosed in round or square brackets or separated from the data type by a space for example:',
        '```si',
        'ColumnName XML(10)',
        'ColumnName XML[10]',
        'ColumnName XML 10',
        '```'
      ].join('\n')
    },
    insertTextFormat: InsertTextFormat.Snippet,
    textEdit: {
      newText: 'XML (${1:Size})',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'BIGXML',
    kind: CompletionItemKind.Keyword,
    data: 126,
    detail: 'BIGXML (Size)',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [
        'Define table column of type `BIGXML` and optionally specify the *size* of the column.',
        '***',
        'Column size can be enclosed in round or square brackets or separated from the data type by a space for example:',
        '```si',
        'ColumnName BIGXML(10)',
        'ColumnName BIGXML[10]',
        'ColumnName BIGXML 10',
        '```'
      ].join('\n')
    },
    insertTextFormat: InsertTextFormat.Snippet,
    textEdit: {
      newText: 'BIGXML (${1:Size})',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'BYTE',
    kind: CompletionItemKind.Keyword,
    data: 127,
    detail: 'BYTE (Hello=1, World=2) | {Value1, Value2}',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [
        'Define table column of type `BYTE` and optionally specify a list of enum values *OR* a list of accepted values',
        '***',
        'An example of a `BYTE` column with enum values:',
        '```si',
        'ColumnName BYTE (Hello=1, World=2)',
        '```',
        'An example of a `BYTE` column with acceptable values:',
        '```si',
        'ColumnName BYTE {Hello, World}',
        '```',
      ].join('\n')
    },
    insertTextFormat: InsertTextFormat.PlainText,
    textEdit: {
      newText: 'BYTE',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'UTF8',
    kind: CompletionItemKind.Keyword,
    data: 128,
    detail: 'UTF8 (Size) {Value1, Value2}',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [
        'Define table column of type `UTF8` and optionally specify the *size* of the column or provide a list of acceptable values.',
        '***',
        'Size can be enclosed in round or square brackets or separated from the data type by a space, for example',
        '```si',
        'ColumnName UTF8(10)',
        'ColumnName UTF8[10]',
        'ColumnName UTF8 10',
        '```',
        'Optionally, a list of values can be supplied enclosed in curly braces and separated by a space for example:',
        '```si',
        'ColumnName UTF8(10) {Hello, World}',
        '```',
      ].join('\n')
    },
    insertTextFormat: InsertTextFormat.Snippet,
    textEdit: {
      newText: 'UTF8 (${1:Size})',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  // --------------------------------------------------------------------------------

  // --------------------------------------------------------------------------------
  // Extra definitions
  // --------------------------------------------------------------------------------
  {
    label: 'KEY',
    kind: CompletionItemKind.Keyword,
    data: 201,
    detail: 'KEY KeyName OPTIONS "OptionList" modifier columns',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [
        'Define a new `KEY` by specifying the key name, `OPTIONS`, modifier and column name(s) on which this key applies',
        '***',
        '- `OPTIONS` are a list of options to apply to the key, separated as by a space, as a string for example: "Option 1 Option 2"',
        '- Modifier can only contain the keywords `PRIMARY` or `UNIQUE`',
        '- Column names must be separated by a space. One or more column names can be given',
        '- An example key definition is as follows:',
        '```si',
        'KEY PKEY OPTIONS "option1 option2" PRIMARY column1 column2 column3',
        '```',
        'Key name and at least one column are mandatory when specifying a key, `OPTIONS` and modifier are optional'
      ].join('\n')
    },
    insertTextFormat: InsertTextFormat.Snippet,
    textEdit: {
      newText: 'KEY ${1:KeyName} ${2:Modifier} ${3:Columns}',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'GRANT',
    kind: CompletionItemKind.Keyword,
    data: 202,
    detail: 'GRANT Permission(s) TO User(s)',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [
        '`GRANT` permission(s) to a user(s)',
        '***',
        '- Permission is the permission(s) to grant to a user(s). One or more permission may be specified, separated by a space. Valid permissions are:',
        ' - `ALL`, `DELETE`, `SELECT`, `UPDATE` and `EXECUTE`',
        '- User is the user(s) to grant permission(s) to. One or more users may be specified separated by a space',
        'An example `GRANT` definition is as follows:',
        '```si',
        'GRANT DELETE TO Foo',
        '```',
        'When granting permissions to a user, at least *one* permission and *user* must be specified'
      ].join('\n')
    },
    insertTextFormat: InsertTextFormat.Snippet,
    textEdit: {
      newText: 'GRANT ${1:Permission} TO ${2:User}',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  // LINK jPackageIdent 
	// 	( LEFTPAREN ( jIdent )+ RIGHTPAREN )? 
	// 	( DELETE ( CASCADE )? )? 
	// 	( UPDATE ( CASCADE )? )? 
	// 	( OPTIONS ( jString )+ )* 
	// 	( jLinkColumn )+;
  // {
  //   label: 'LINK',
  //   kind: CompletionItemKind.Keyword,
  //   data: 203,
  //   detail: 'LINK Link.Name (Column) DELETE CASCADE UPDATE CASCADE OPTIONS "options" Column1 Column2',
  //   documentation: {
  //     kind: MarkupKind.Markdown,
  //     value: [
  //       '`GRANT` permission(s) to a user(s)',
  //       '***',
  //       '- Permission is the permission(s) to grant to a user(s). One or more permission may be specified, separated by a space. Valid permissions are:',
  //       ' - `ALL`, `DELETE`, `SELECT`, `UPDATE` and `EXECUTE`',
  //       '- User is the user(s) to grant permission(s) to. One or more users may be specified separated by a space',
  //       'An example `GRANT` definition is as follows:',
  //       '```si',
  //       'GRANT DELETE TO Foo',
  //       '```',
  //       'When granting permissions to a user, at least *one* permission and *user* must be specified'
  //     ].join('\n')
  //   },
  //   documentation:
  //     'LinkName is the name of the link\nColumnList is a space separated list of one or more columns to link to',
  //   insertTextFormat: InsertTextFormat.Snippet,
  //   textEdit: {
  //     newText: 'LINK ${1:LinkName} ${2:ColumnList}',
  //     range: {
  //       start: {
  //         character: 0,
  //         line: 0
  //       },
  //       end: {
  //         character: 0,
  //         line: 0
  //       }
  //     }
  //   }
  // },
  // --------------------------------------------------------------------------------

  // --------------------------------------------------------------------------------
  // Standard Proc Keywords
  // --------------------------------------------------------------------------------
  {
    label: 'INSERT',
    kind: CompletionItemKind.Keyword,
    data: 301,
    detail: 'Standard procedure keyword',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [
        'Create the standard procedure `INSERT` and optionally specify the `RETURNING` keyword',
        '***',
        'An example `INSERT` definition is as follows:',
        '```si',
        'PROC INSERT RETURNING',
        '```'
      ].join('\n')
    },
    insertTextFormat: InsertTextFormat.Snippet,
    textEdit: {
      newText: 'INSERT ${1:RETURNING}',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'UPDATE',
    kind: CompletionItemKind.Keyword,
    data: 302,
    detail: 'Create the standard procedure UPDATE',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [''].join('\n')
    },
    insertTextFormat: InsertTextFormat.PlainText,
    textEdit: {
      newText: 'UPDATE',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'BULKINSERT',
    kind: CompletionItemKind.Keyword,
    data: 303,
    detail: 'BULKINSERT (RowCount)',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [
        'Create the standard procedure `BULKINSERT` and optionally specify the rows affected',
        '***',
        'An example `BULKINSERT` definition is as follows:',
        '```si',
        'PROC BULKINSERT (100)',
        '```'
      ].join('\n')
    },
    insertTextFormat: InsertTextFormat.Snippet,
    textEdit: {
      newText: 'BULKINSERT (${1:RowCount})',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'MAXTMSTAMP',
    kind: CompletionItemKind.Keyword,
    data: 304,
    detail: 'Create the standard procedure MAXTMSTAMP',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [''].join('\n')
    },
    insertTextFormat: InsertTextFormat.PlainText,
    textEdit: {
      newText: 'MAXTMSTAMP',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'BULKUPDATE',
    kind: CompletionItemKind.Keyword,
    data: 305,
    detail: 'BULKUPDATE (RowCount)',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [
        'Create the standard procedure `BULKUPDATE` and optionally specify the rows affected',
        '***',
        'An example `BULKUPDATE` definition is as follows:',
        '```si',
        'PROC BULKUPDATE (100)',
        '```'
      ].join('\n')
    },
    insertTextFormat: InsertTextFormat.Snippet,
    textEdit: {
      newText: 'BULKUPDATE (${1:RowCount})',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'DELETEONE',
    kind: CompletionItemKind.Keyword,
    data: 306,
    detail: 'DELETEONE (STANDARD)',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [
        'Create the standard procedure `DELETEONE` and optionally specify the `STANDARD` keyword in round brackets',
        '***',
        'An example `DELETEONE` definition is as follows:',
        '```si',
        'PROC DELETEONE (STANDARD)',
        '```'
      ].join('\n')
    },
    insertTextFormat: InsertTextFormat.Snippet,
    textEdit: {
      newText: 'DELETEONE ${1:(STANDARD)}',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'DELETEALL',
    kind: CompletionItemKind.Keyword,
    data: 307,
    detail: 'Create the standard procedure DELETEALL',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [''].join('\n')
    },
    insertTextFormat: InsertTextFormat.PlainText,
    textEdit: {
      newText: 'DELETEALL',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    // TODO: SELECTONE((FOR) ? (UPDATE | READONLY) ) ?
    label: 'SELECTONE',
    kind: CompletionItemKind.Keyword,
    data: 308,
    detail: 'Create the standard procedure SELECTONE',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [''].join('\n')
    },
    insertTextFormat: InsertTextFormat.PlainText,
    textEdit: {
      newText: 'SELECTONE',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    // TODO:
    // SELECTONEBY(jProcColumn) +
    // ((IN) ? ORDER ) ?
    // ((FOR) ? (UPDATE | READONLY) ) ?
    // (AS jIdent )?
    label: 'SELECTONEBY',
    kind: CompletionItemKind.Keyword,
    data: 309,
    detail: 'Create the standard procedure SELECTONEBY',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [''].join('\n')
    },
    insertTextFormat: InsertTextFormat.PlainText,
    textEdit: {
      newText: 'SELECTONEBY',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    // TODO:
    // SELECTBY(jProcColumn) +
    // ((IN) ? ORDER ) ?
    // ((FOR) ? (UPDATE | READONLY) ) ?
    // (AS jIdent )?
    // (OUTPUT(jOutputType) ?
    // (jField) * ) ?
    label: 'SELECTBY',
    kind: CompletionItemKind.Keyword,
    data: 310,
    detail: 'Create the standard procedure SELECTBY',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [''].join('\n')
    },
    insertTextFormat: InsertTextFormat.PlainText,
    textEdit: {
      newText: 'SELECTBY',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    // TODO:
    // SELECTALL
    // ((IN) ? ORDER(jOrderColumn) * (DESC) ? ) ?
    // ((FOR) ? (UPDATE | READONLY) ) ?
    label: 'SELECTALL',
    kind: CompletionItemKind.Keyword,
    data: 311,
    detail: 'Create the standard procedure SELECTALL',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [''].join('\n')
    },
    insertTextFormat: InsertTextFormat.PlainText,
    textEdit: {
      newText: 'SELECTALL',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'COUNT',
    kind: CompletionItemKind.Keyword,
    data: 312,
    detail: 'Create the standard procedure COUNT',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [''].join('\n')
    },
    insertTextFormat: InsertTextFormat.PlainText,
    textEdit: {
      newText: 'COUNT',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'EXISTS',
    kind: CompletionItemKind.Keyword,
    data: 313,
    detail: 'Create the standard procedure EXISTS',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [''].join('\n')
    },
    insertTextFormat: InsertTextFormat.PlainText,
    textEdit: {
      newText: 'EXISTS',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'MERGE',
    kind: CompletionItemKind.Keyword,
    data: 314,
    detail: 'Create the standard procedure MERGE',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [''].join('\n')
    },
    insertTextFormat: InsertTextFormat.PlainText,
    textEdit: {
      newText: 'MERGE',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  {
    label: 'PROC',
    kind: CompletionItemKind.Keyword,
    data: 315,
    detail: 'Creates a standard procedure',
    documentation: {
      kind: MarkupKind.Markdown,
      value: [
        'Create a standard procedure by specifying a standard procedure keyword',
        '***',
        'Standard procedure keywords are one of the following:',
        '- INSERT',
        '- UPDATE',
        '- BULKINSERT',
        '- MAXTMSTAMP',
        '- BULKUPDATE',
        '- DELETEONE',
        '- DELETEALL',
        '- SELECTONE',
        '- SELECTONEBY',
        '- SELECTBY',
        '- SELECTALL ',
        '- COUNT',
        '- EXISTS',
        '- MERGE'
      ].join('\n')
    },
    insertTextFormat: InsertTextFormat.Snippet,
    textEdit: {
      newText: 'PROC ${1:Keyword}',
      range: {
        start: {
          character: 0,
          line: 0
        },
        end: {
          character: 0,
          line: 0
        }
      }
    }
  },
  // TODO: User defined procedure
  // {
  //   label: 'PROC',
  //   kind: CompletionItemKind.Keyword,
  //   data: 316,
  //   detail: 'Creates a user defined procedure',
  //   documentation: {
  //     kind: MarkupKind.Markdown,
  //     value: [
  //       'Specify a standard procedure',
  //       '***',
  //       'An example `INSERT` definition is as follows:',
  //       '```si',
  //       'PROC INSERT RETURNING',
  //       '```'
  //     ].join('\n')
  //   },
  //   insertTextFormat: InsertTextFormat.Snippet,
  //   textEdit: {
  //     newText: 'PROC ${1:Keyword}',
  //     range: {
  //       start: {
  //         character: 0,
  //         line: 0
  //       },
  //       end: {
  //         character: 0,
  //         line: 0
  //       }
  //     }
  //   }
  // },
  // TODO: New procedure
  // {
  //   label: 'PROC',
  //   kind: CompletionItemKind.Keyword,
  //   data: 316,
  //   detail: 'Creates a user defined procedure',
  //   documentation: {
  //     kind: MarkupKind.Markdown,
  //     value: [
  //       'Specify a standard procedure',
  //       '***',
  //       'An example `INSERT` definition is as follows:',
  //       '```si',
  //       'PROC INSERT RETURNING',
  //       '```'
  //     ].join('\n')
  //   },
  //   insertTextFormat: InsertTextFormat.Snippet,
  //   textEdit: {
  //     newText: 'PROC ${1:Keyword}',
  //     range: {
  //       start: {
  //         character: 0,
  //         line: 0
  //       },
  //       end: {
  //         character: 0,
  //         line: 0
  //       }
  //     }
  //   }
  // },
  // VIEW jIdent 
	// ( TO ( jUser )+ )?
	// ( OUTPUT ( jViewAlias )+ )?
  // ( jOldViewCode | jNewViewCode );
  // {
  //   label: 'VIEW',
  //   kind: CompletionItemKind.Keyword,
  //   data: 316,
  //   detail: 'Creates a VIEW',
  //   documentation: {
  //     kind: MarkupKind.Markdown,
  //     value: [''].join('\n')
  //   },
  //   insertTextFormat: InsertTextFormat.Snippet,
  //   textEdit: {
  //     newText: 'VIEW',
  //     range: {
  //       start: {
  //         character: 0,
  //         line: 0
  //       },
  //       end: {
  //         character: 0,
  //         line: 0
  //       }
  //     }
  //   }
  // },
  // --------------------------------------------------------------------------------
];

export function getAutoComplete(): CompletionItem[] {
  return AutoComplete;
}

export function getKeyWordDetailsByWord(word: string): Hover {
  let hover: Hover = {
    contents: ''
  };
  for (let i = 0; i < AutoComplete.length; i++) {
    if (word.toUpperCase() === AutoComplete[i].label) {
        hover.contents = AutoComplete[i].documentation;
        break;
    }
  }
  return hover;
}

export function getCompletionItemByWord(
  word: string,
  position: Position
): CompletionItem | undefined {
  for (let i = 0; i < AutoComplete.length; i++) {
    let item: CompletionItem;
    if (word.toUpperCase() === AutoComplete[i].label) {
      item = AutoComplete[i];
      if (item.textEdit != undefined) {
        item.textEdit.range.start = position;
        item.textEdit.range.end = position;
      }
      return item;
    }
  }
  return undefined;
}

export function getKeyWordDetailsById(id: number): string {
  return String(AutoComplete[id].detail);
}