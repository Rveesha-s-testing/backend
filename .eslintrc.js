module.exports = {
  env: { node: true, es2021: true, jest: true },
  extends: ['eslint:recommended', 'airbnb-base'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  rules: {
    'no-console': 'warn',
    'import/prefer-default-export': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
};