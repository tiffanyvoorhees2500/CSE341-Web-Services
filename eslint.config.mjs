import globals from 'globals';
import pluginJs from '@eslint/js';
import airbnbConfig from 'eslint-config-airbnb';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

// Get the rules from Airbnb and Prettier configurations
const airbnbRules = airbnbConfig.rules || {};
const prettierRules = prettierConfig.rules || {};

export default [
  {
    files: ['**/*.js'],
    languageOptions: { sourceType: 'commonjs' },
    plugins: {
      prettier: prettierPlugin, // Define the prettier plugin here
    },
    rules: {
      ...airbnbRules, // Include Airbnb rules directly
      ...prettierRules, // Include Prettier rules directly
      'no-unused-vars': 'warn',
      'no-undef': 'off',
    },
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
];
