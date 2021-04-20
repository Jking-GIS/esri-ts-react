module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
    es2021: true,
  },
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },

  extends: [
    // 'standard',
    // 'standard-with-typescript',
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'react-app/jest',
  ],
  rules: {
    'array-bracket-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    indent: ['error', 2, { MemberExpression: 1 }],
    'max-len': ['error', { code: 90, comments: 120 }],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: true },
    ],
    'prefer-const': 'off',
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'always'],
  },
  ignorePatterns: ['node_modules'],
};
