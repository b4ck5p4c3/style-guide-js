import perfectionist from 'eslint-plugin-perfectionist'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import tseslint from 'typescript-eslint'

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  perfectionist.configs['recommended-natural'],
  ...tseslint.configs.strict,
  eslintPluginUnicorn.configs['flat/recommended'],
  {
    rules: {
      // That's simply not applicable.
      'unicorn/no-null': 'off',

      // It's quite rare to use process.exit, and most of
      // the time it's used in CLI tools where it's expected.
      'unicorn/no-process-exit': 'off',
    }
  }
]
