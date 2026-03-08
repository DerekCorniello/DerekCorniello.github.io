module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
  },
  plugins: ['vue', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    // enforce 4-space indentation throughout the project
    indent: ['error', 4],
    'vue/html-indent': ['error', 4],
    'vue/script-indent': ['error', 4, { baseIndent: 1 }],
    // preferences
    'no-console': 'warn',
    'no-debugger': 'error',
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        // the vue/script-indent rule complains about script setup blocks; keep it permissive there
        'vue/script-indent': ['error', 4, { baseIndent: 1, switchCase: 1 }],
      },
    },
  ],
}
