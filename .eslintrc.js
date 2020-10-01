module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2018,
        parser: 'babel-eslint',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        es6: true,
        browser: true,
    },
    reportUnusedDisableDirectives: true,
    extends: [
        'eslint:recommended',
        'react-app',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended'
    ],
    plugins: [
        'standard',
        'compat',
        'import',
        'promise',
        'unicorn',
    ],
    rules: {
        indent: [
            'warn',
            4,
            {
                SwitchCase: 1,
                ignoredNodes: [ 'TemplateLiteral' ],
                VariableDeclarator: 1,
            },
        ],
        'no-console': [
            'warn',
            {
                allow: [
                    'info',
                    'error',
                ],
            },
        ],
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'one-var': [
            'warn',
            {
                separateRequires: true,
                var: 'consecutive',
                let: 'consecutive',
                const: 'consecutive',
            },
        ],
        'function-call-argument-newline': [
            'warn',
            'always',
        ],
        'prefer-const': 'warn',
        'no-useless-rename': [
            'warn',
            {
                ignoreExport: true,
            },
        ],
        'rest-spread-spacing': [
            'warn',
            'always',
        ],
        'template-curly-spacing': [
            'warn',
            'always',
        ],
        'array-element-newline': [
            'warn',
            {
                minItems: 2,
                multiline: true,
            },
        ],
        'array-bracket-newline': [
            'warn',
            {
                minItems: 2,
                multiline: true,
            },
        ],
        'function-paren-newline': [
            'warn',
            'multiline-arguments',
        ],
        'brace-style': [
            'warn',
            '1tbs',
            {
                allowSingleLine: true,
            },
        ],
        'comma-style': [
            'warn',
            'first',
            {
                exceptions: {
                    ArrayExpression: true,
                    ObjectExpression: true,
                },
            },
        ],
        'comma-spacing': [
            'warn',
            {
                before: false,
                after: true,
            },
        ],
        quotes: [
            'warn',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],
        semi: [
            'warn',
            'always',
        ],
        'no-unreachable': 'warn',
        'no-confusing-arrow': 'warn',
        'no-constant-condition': 'warn',
        curly: [
            'warn',
            'multi-or-nest',
        ],
        'padding-line-between-statements': [
            'warn',
            {
                blankLine: 'always',
                prev: [
                    'const',
                    'let',
                    'var',
                ],
                next: '*',
            },
            {
                blankLine: 'any',
                prev: [
                    'const',
                    'let',
                    'var',
                ],
                next: [
                    'const',
                    'let',
                    'var',
                ],
            },
        ],
        'no-empty': 'warn',
        'no-return-await': 'warn',
        'no-multiple-empty-lines': [
            'warn',
            {
                max: 1,
                maxEOF: 1,
                maxBOF: 1,
            },
        ],
        'lines-around-comment': [
            'warn',
            {
                beforeBlockComment: false,
                afterBlockComment: false,
                beforeLineComment: false,
                afterLineComment: false,
                allowBlockStart: true,
                allowBlockEnd: true,
                allowObjectStart: true,
                allowObjectEnd: true,
                allowArrayStart: true,
                allowArrayEnd: true,
            },
        ],
        'no-inner-declarations': [
            'warn',
            'functions',
        ],
        'no-tabs': 'warn',
        'operator-linebreak': [
            'warn',
            'before',
        ],
        'block-spacing': [
            'warn',
            'always',
        ],
        'dot-location': [
            'warn',
            'property',
        ],
        'func-call-spacing': [
            'warn',
            'never',
        ],
        'key-spacing': [
            'warn',
            {
                beforeColon: false,
            },
        ],
        'new-cap': [
            'warn',
            {
                newIsCap: true,
            },
        ],
        'no-duplicate-imports': [
            'warn',
            {
                includeExports: true,
            },
        ],
        'no-floating-decimal': 'warn',
        'no-multi-spaces': 'warn',
        'no-return-assign': [
            'warn',
            'except-parens',
        ],
        'require-await': 'warn',
        'no-undef': 'warn',
        'no-undef-init': 'warn',
        'no-whitespace-before-property': 'warn',
        'object-property-newline': [
            'warn',
            {
                allowAllPropertiesOnSameLine: false,
            },
        ],
        'object-curly-newline': [
            'warn',
            {
                ObjectExpression: {
                    multiline: true,
                    minProperties: 1,
                },
                ObjectPattern: {
                    multiline: true,
                    minProperties: 2,
                },
                ImportDeclaration: {
                    multiline: true,
                    consistent: false,
                    minProperties: 3,
                },
                ExportDeclaration: {
                    multiline: true,
                    consistent: false,
                    minProperties: 2,
                },
            },
        ],
        'padded-blocks': [
            'warn',
            {
                switches: 'never',
                blocks: 'always',
            },
        ],
        'yield-star-spacing': [
            'warn',
            'both',
        ],
        'one-var-declaration-per-line': [
            'warn',
            'always',
        ],
        'space-infix-ops': 'warn',
        'require-atomic-updates': 'warn',
        'comma-dangle': [
            'warn',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                exports: 'always-multiline',
                imports: 'always-multiline',
                functions: 'only-multiline',
            },
        ],
        'dot-notation': 'warn',
        eqeqeq: [
            'warn',
            'always',
        ],
        camelcase: [
            'warn',
            {
                ignoreDestructuring: true,
            },
        ],
        'no-prototype-builtins': 'warn',
        'no-extra-semi': 'warn',
        'no-new-object': 'warn',
        'no-array-constructor': 'warn',
        'no-new-wrappers': 'warn',
        'no-mixed-spaces-and-tabs': 'warn',
        'array-bracket-spacing': [
            'warn',
            'always',
            {
                singleValue: true,
                objectsInArrays: false,
                arraysInArrays: true,
            },
        ],
        'computed-property-spacing': [
            'warn',
            'always',
        ],
        'space-in-parens': [
            1,
            'always',
        ],
        'object-curly-spacing': [
            'warn',
            'always',
        ],
        'keyword-spacing': [
            'warn',
            {
                after: false,
                overrides: {
                    const: {
                        after: true,
                    },
                    else: {
                        before: true,
                        after: true,
                    },
                    from: {
                        before: true,
                        after: true,
                    },
                    return: {
                        after: true,
                    },
                    default: {
                        after: true,
                    },
                    export: {
                        after: true,
                    },
                    import: {
                        after: true,
                    },
                    case: {
                        after: true,
                    },
                    try: {
                        after: true,
                    },
                    catch: {
                        before: true,
                        after: false,
                    },
                    finally: {
                        after: true,
                    },
                },
            },
        ],
        'arrow-parens': [
            'warn',
            'as-needed',
        ],
        'no-irregular-whitespace': 'warn',
        'space-unary-ops': [
            'warn',
            {
                words: true,
                nonwords: true,
            },
        ],
        'arrow-spacing': [
            1,
            {
                before: true,
                after: true,
            },
        ],
        'object-shorthand': [
            'warn',
            'always',
        ],
        'max-len': [
            'warn',
            1200,
            4,
            {
                ignoreUrls: true,
                ignoreTemplateLiterals: true,
                ignoreStrings: true,
            },
        ],
        'max-statements': [
            'warn',
            72,
            {
                ignoreTopLevelFunctions: true,
            },
        ],
        'lines-between-class-members': [
            'warn',
            'always',
            {
                exceptAfterSingleLine: true,
            },
        ],
        // Plugins
        // Standard
        'unicorn/prefer-includes': 'warn',
        'standard/computed-property-even-spacing': [
            'warn',
            'always',
        ],
        'standard/object-curly-even-spacing': [
            'warn',
            'either',
        ],
        // Import
        'import/order': 'warn',
        'import/first': 'warn',
        'import/namespace': [
            'warn',
            {
                allowComputed: true,
            },
        ],
        // XO
        'for-direction': 'warn',
        'getter-return': 'warn',
        'no-async-promise-executor': 'warn',
        'no-await-in-loop': 'warn',
        'no-compare-neg-zero': 'warn',
        'no-cond-assign': 'warn',
        'no-control-regex': 'warn',
        'no-dupe-args': 'warn',
        'no-dupe-else-if': 'warn',
        'no-dupe-keys': 'warn',
        'no-duplicate-case': 'warn',
        'no-empty-character-class': 'warn',
        'no-ex-assign': 'warn',
        'no-extra-boolean-cast': 'warn',
        'no-extra-parens': [
            'warn',
            'functions',
        ],
        'no-func-assign': 'warn',
        'no-import-assign': 'warn',
        'no-invalid-regexp': 'warn',
        'no-loss-of-precision': 'off',
        'no-misleading-character-class': 'warn',
        'no-obj-calls': 'warn',
        'no-promise-executor-return': 'off',
        'no-regex-spaces': 'warn',
        'no-setter-return': 'warn',
        'no-sparse-arrays': 'warn',
        'no-template-curly-in-string': 'warn',
        'no-unreachable-loop': 'off',
        'no-unsafe-finally': 'warn',
        'no-unsafe-negation': 'warn',
        'use-isnan': 'warn',
        'valid-typeof': [
            'warn',
            {
                requireStringLiterals: false,
            },
        ],
        'no-unexpected-multiline': 'warn',
        'accessor-pairs': [
            'warn',
            {
                enforceForClassMembers: true,
            },
        ],
        'array-callback-return': [
            'warn',
            {
                allowImplicit: true,
            },
        ],
        'block-scoped-var': 'warn',
        complexity: [
            'warn',
            40,
        ],
        'default-case': 'warn',
        'default-param-last': 'warn',
        'grouped-accessor-pairs': [
            'warn',
            'getBeforeSet',
        ],
        'guard-for-in': 'warn',
        'no-alert': 'warn',
        'no-caller': 'warn',
        'no-case-declarations': 'warn',
        'no-constructor-return': 'warn',
        'no-else-return': [
            'warn',
            {
                allowElseIf: false,
            },
        ],
        'no-empty-pattern': 'warn',
        'no-eq-null': 'warn',
        'no-eval': 'warn',
        'no-extend-native': 'warn',
        'no-extra-bind': 'warn',
        'no-extra-label': 'warn',
        'no-fallthrough': 'warn',
        'no-global-assign': 'warn',
        'no-implicit-coercion': [
            'warn',
            {
                allow: [
                    '!!',
                    '~',
                ],
            },
        ],
        'no-implicit-globals': 'warn',
        'no-implied-eval': 'warn',
        'no-iterator': 'warn',
        'no-labels': 'warn',
        'no-lone-blocks': 'warn',
        'no-multi-str': 'warn',
        'no-new-func': 'warn',
        'no-new': 'warn',
        'no-octal-escape': 'warn',
        'no-octal': 'warn',
        'no-proto': 'warn',
        'no-redeclare': 'warn',
        'no-script-url': 'warn',
        'no-self-assign': [
            'warn',
            {
                props: true,
            },
        ],
        'no-self-compare': 'warn',
        'no-sequences': 'warn',
        'no-throw-literal': 'warn',
        'no-unmodified-loop-condition': 'warn',
        'no-unused-expressions': 'warn',
        'no-unused-labels': 'warn',
        'no-useless-call': 'warn',
        'no-useless-concat': 'warn',
        'no-useless-escape': 'warn',
        'no-useless-return': 'warn',
        'no-void': 'warn',
        'no-with': 'warn',
        'prefer-promise-reject-errors': [
            'warn',
            {
                allowEmptyReject: true,
            },
        ],
        'prefer-regex-literals': 'warn',
        radix: 'warn',
        'wrap-iife': [
            'warn',
            'inside',
            {
                functionPrototypeMethods: true,
            },
        ],
        yoda: 'warn',
        'no-delete-var': 'warn',
        'no-label-var': 'warn',
        'no-restricted-globals': [
            'warn',
            'event',
        ],
        'no-shadow-restricted-names': 'warn',
        'no-unused-vars': [
            'warn',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: true,
                argsIgnorePattern: /^(_|\$)/.source,
                caughtErrors: 'all',
                caughtErrorsIgnorePattern: /^_$/.source,
            },
        ],
        'no-buffer-constructor': 'warn',
        'no-restricted-imports': [
            'warn',
            'domain',
            'freelist',
            'smalloc',
            'sys',
            'colors',
        ],
        'capitalized-comments': [
            'off',
            'always',
            {
                // You can also ignore this rule by wrapping the first word in quotes.
                // c8 => https://github.com/bcoe/c8
                ignorePattern: /pragma|ignore|prettier-ignore|webpack\w+:|c8/.source,
                ignoreInlineComments: true,
                ignoreConsecutiveComments: true,
            },
        ],
        'eol-last': 'warn',
        'func-name-matching': [
            'warn',
            {
                considerPropertyDescriptor: true,
            },
        ],
        'func-names': [
            'warn',
            'never',
        ],
        'jsx-quotes': 'warn',
        'max-depth': [
            'warn',
            {
                max: 7,
            },
        ],
        'max-nested-callbacks': [
            'warn',
            7,
        ],
        'max-params': [
            'warn',
            {
                max: 7,
            },
        ],
        'max-statements-per-line': 'warn',
        'new-parens': [
            'warn',
            'always',
        ],
        'no-lonely-if': 'warn',
        'no-mixed-operators': 'warn',
        'no-multi-assign': 'warn',
        'no-negated-condition': 'warn',
        'no-restricted-syntax': [
            'warn',
            'WithStatement',
        ],
        'no-trailing-spaces': 'warn',
        'no-unneeded-ternary': 'warn',
        'operator-assignment': [
            'warn',
            'always',
        ],
        'prefer-exponentiation-operator': 'warn',
        'quote-props': [
            'warn',
            'as-needed',
        ],
        'semi-spacing': [
            'warn',
            {
                before: false,
                after: true,
            },
        ],
        'space-before-blocks': [
            'warn',
            'always',
        ],
        'space-before-function-paren': [
            'warn',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'spaced-comment': [
            'warn',
            'always',
            {
                line: {
                    exceptions: [
                        '-',
                        '+',
                        '*',
                    ],
                    markers: [
                        '!',
                        '/',
                        '=>',
                    ],
                },
                block: {
                    exceptions: [
                        '-',
                        '+',
                        '*',
                    ],
                    markers: [
                        '!',
                        '*',
                    ],
                    balanced: true,
                },
            },
        ],
        'switch-colon-spacing': [
            'warn',
            {
                after: true,
                before: false,
            },
        ],
        'template-tag-spacing': [
            'warn',
            'never',
        ],
        'unicode-bom': [
            'warn',
            'never',
        ],
        'constructor-super': 'warn',
        'generator-star-spacing': [
            'warn',
            'both',
        ],
        'no-class-assign': 'warn',
        'no-const-assign': 'warn',
        'no-dupe-class-members': 'warn',
        'no-new-symbol': 'warn',
        'no-this-before-super': 'warn',
        'no-useless-computed-key': [
            'warn',
            {
                enforceForClassMembers: true,
            },
        ],
        'no-useless-constructor': 'warn',
        'require-yield': 'warn',
        'symbol-description': 'warn',
        // Compat
        'compat/compat': 'warn',
    },
};
