module.exports = {
    extends: [
        'react-app',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    rules: {
        'prettier/prettier': [
            'warn',
            {
                tabWidth: 4,
                semi: true,
                singleQuote: true,
                useTabs: false,
                bracketSpacing: true,
                endOfLine: 'auto',
            },
        ],
        'import/order': [
            'warn',
            {
                groups: ['builtin', 'external', 'internal'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: '@mui/**',
                        group: 'external',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'never',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'import/no-anonymous-default-export': [
            'warn',
            {
                allowArray: true,
                allowArrowFunction: true,
                allowAnonymousClass: true,
                allowAnonymousFunction: true,
                allowCallExpression: true,
                allowLiteral: true,
                allowObject: true,
            },
        ],
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': 'warn',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                moduleDirectory: ['node_modules', 'src/'],
            },
        },
    },
    parser: '@typescript-eslint/parser',
};
