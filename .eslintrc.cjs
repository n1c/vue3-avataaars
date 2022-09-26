/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': ['error', 'never'],
    'no-plusplus': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/max-attributes-per-line': [
      'error', {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
};
