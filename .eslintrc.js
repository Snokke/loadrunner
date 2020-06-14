module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    semi: 'error',
    'max-lines': ['error', 300],
    complexity: ['error', 6],
    'max-nested-callbacks': ['error', 2],
    'max-depth': ['error', 3],
    'no-unused-vars': 'error',
    'max-lines-per-function': ['error', 40],
    'no-underscore-dangle': 'off',
    'linebreak-style': 'off',
    'no-undef': 'off',
    'no-multi-assign': 'off',
    'max-len': ['error', 120],
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'padded-blocks': 'off',
  },
};
