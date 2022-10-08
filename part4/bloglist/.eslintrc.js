module.exports = {
   env: {
      node: true,
      commonjs: true,
      es2021: true,
   },
   extends: 'eslint:recommended',
   overrides: [],
   parserOptions: {
      ecmaVersion: 'latest',
   },
   rules: {
      indent: ['error', 3],
      'linebreak-style': 0,
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      eqeqeq: 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
   },
};
