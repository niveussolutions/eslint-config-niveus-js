module.exports = {
    root:true,
    env: {
      browser: true,
      commonjs: true,
      es2021: true,
      jest: true,
    
      node:true
    },
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    
    plugins: ["react","jest"],
    "settings": {
      "react": {
        "version": "detect" 
      }
    },
    
    rules: {
      
      "indent": ["error", 2],
      "linebreak-style": ["error", "unix"],
      "quotes": [
        "error",
        "single",
        {
          avoidEscape: true,
          allowTemplateLiterals: false,
        },
      ],
      "semi": ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      "comma-style": ["error", "last"],
      "no-multi-spaces": [
        "error",
        {
          ignoreEOLComments: false,
        },
      ],
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "req|res|next|^__|[iI]ignore$",
          varsIgnorePattern: "^__|[iI]ignore$",
          destructuredArrayIgnorePattern: "^__|[iI]ignore$",
          caughtErrorsIgnorePattern: "[iI]ignore$",
        },
      ],
      "prefer-const": [
        "warn",
        {
          destructuring: "any",
          ignoreReadBeforeAssign: false,
        },
      ],
      "no-console": "off",
      "no-duplicate-imports": "error",
      "space-infix-ops": [
        "error",
        {
          int32Hint: false,
        },
      ],
      "arrow-spacing": [
        "error",
        {
          before: true,
          after: true,
        },
      ],
      "comma-spacing": [
        "error",
        {
          before: false,
          after: true,
        },
      ],
      "space-before-function-paren": [
        "error",
        {
          anonymous: "always",
          named: "never",
          asyncArrow: "always",
        },
      ],
      "func-call-spacing": ["error", "never"],
      "space-in-parens": [
        "error",
        "never",
        {
          exceptions: [],
        },
      ],
      "function-call-argument-newline": ["error", "consistent"],
      "space-before-blocks": [
        "error",
        {
          functions: "always",
          classes: "always",
        },
      ],
      "keyword-spacing": [
        "error",
        {
          overrides: {
            else: {
              before: true,
            },
          },
        },
      ],
      "brace-style": ["error", "1tbs"],
      "object-curly-newline": [
        "error",
        {
          consistent: true,
        },
      ],
      "max-lines": [
        "error",
        {
          max: 500,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
      "max-len": [
        "error",
        {
          code: 120,
          ignoreTrailingComments: true,
          ignoreUrls: true,
          ignoreRegExpLiterals: true,
        },
      ],
      "eol-last": 
      [
        "error", "always"
      ],
      "id-length": ["error", 
      {
         min: 2, max: 30 
      }],
      "max-lines-per-function": ["error",
       { 
        max: 50  
      } ],
      "no-var": "warn", // Warns about the use of var keyword
      "no-redeclare": ["warn", 
      { 
        "builtinGlobals": true 
      }], // Warns about redeclaring variables (including var)
      "no-shadow": ["warn",
       { 
        "builtinGlobals": false,
         "hoist": "functions" 
      }], // Warns about variable shadowing (including var)
      "block-scoped-var": "warn", // Warns about block-scoped variables (var should not be block-scoped)
      "no-unused-vars": "warn", // Warns about unused variables
      "no-implicit-coercion": "warn", // Warns about implicit type coercion
      "no-use-before-define": ["warn",
      {
        "functions": false,
        "classes": false,
        "variables": false
      }], // Warns about the use of variables, functions, and classes before they are defined
      "array-callback-return": "warn", // Warns about missing return statements in array methods
      "init-declarations": ["warn", "always"], // Warns about uninitialized variables (var without assignment)
      "no-loop-func": "warn", // Warns about functions declared inside loops using var
      "no-trailing-spaces": "error", // Error for trailing spaces at the end of lines
      "newline-before-return": "error", // Error for a newline before the return statement
      "newline-per-chained-call": ["error",
      {
        "ignoreChainWithDepth": 2
      }], // Error for a newline per chained method call
      "object-property-newline": ["error",
      {
        "allowAllPropertiesOnSameLine": true
      }], // Error for a newline after each property in object literals
      "operator-linebreak": ["error", "before"], // Error for placing line breaks before operators
      "spaced-comment": ["error", "always"], // Error for spaces after the // or /* in a comment
      "key-spacing": ["error",
      {
        "beforeColon": false,
        "afterColon": true,
        "mode": "strict"
      }], // Error for spacing between keys and values in object literals
      "no-multiple-empty-lines": ["error",
      {
        "max": 2,
        "maxEOF": 1
      }] ,
      "jest/no-identical-title": "error",
      "jest/valid-title": "error",
      "react/react-in-jsx-scope": "off"
  
    },
  };