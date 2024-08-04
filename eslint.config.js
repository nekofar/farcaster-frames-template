import javascriptEslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginJsdoc from 'eslint-plugin-jsdoc'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginRegexp from 'eslint-plugin-regexp'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import globals from 'globals'
import typescriptEslint from 'typescript-eslint'

export default typescriptEslint.config(
  {
    // config with just ignores is the replacement for `.eslintignore`
    ignores: ['**/build/**', '**/dist/**', '**/.wrangler/**'],
  },
  javascriptEslint.configs.recommended,
  eslintPluginJsdoc.configs['flat/recommended-typescript-error'],
  eslintPluginRegexp.configs['flat/recommended'],
  ...typescriptEslint.configs.strictTypeChecked,
  ...typescriptEslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    plugins: {
      '@typescript-eslint': typescriptEslint.plugin,
      unicorn: eslintPluginUnicorn,
      prettier: eslintPluginPrettier,
    },
    languageOptions: {
      parser: typescriptEslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      ...eslintPluginUnicorn.rules.recommended,
    },
  },
  {
    files: ['**/*.js'],
    ...typescriptEslint.configs.disableTypeChecked,
  },
  eslintConfigPrettier, // eslint-config-prettier last
)
