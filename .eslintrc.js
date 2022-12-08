module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      modules: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['import', 'react-hooks', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/display-name': 0,
    'no-undef': 0, // for the sake of using global typings, and ts will fail on undefined.
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 'warn',
    'import/no-unresolved': 0, // ts handles this
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        trailingComma: 'all',
        semi: true,
        printWidth: 100,
        tabWidth: 2,
      },
    ],
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'import/named': 0,
    'import/order': [
      1,
      {
        groups: [['builtin', 'external'], ['internal'], ['parent'], ['sibling', 'index']],
        pathGroups: [
          { pattern: '@components/**', group: 'internal' },
          { pattern: '@containers/**', group: 'internal' },
          { pattern: '@components', group: 'internal' },
          { pattern: '@containers', group: 'internal' },
        ],
        'newlines-between': 'always',
      },
    ]
  },
};
