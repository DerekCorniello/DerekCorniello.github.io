import js from '@eslint/js';
import globals from 'globals';
import vuePlugin from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
    {
        ignores: ['node_modules/**', '.nuxt/**', '.output/**', 'dist/**'],
    },

    js.configs.recommended,

    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parser: tsParser,
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            indent: ['error', 4],
            'no-console': 'warn',
            'no-debugger': 'error',
            'no-undef': 'off',
        },
    },

    {
        files: ['**/*.vue'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parser: vueParser,
            parserOptions: {
                parser: tsParser,
                sourceType: 'module',
                extraFileExtensions: ['.vue'],
            },
        },
        plugins: {
            vue: vuePlugin,
            '@typescript-eslint': tsPlugin,
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            ...vuePlugin.configs['flat/recommended'].rules,
            indent: 'off',
            'vue/html-indent': ['error', 4],
            'vue/script-indent': ['error', 4, { baseIndent: 1, switchCase: 1 }],
            'no-console': 'warn',
            'no-debugger': 'error',
            'no-undef': 'off',
        },
    },

    eslintConfigPrettier,
];