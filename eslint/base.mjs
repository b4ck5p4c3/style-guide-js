import perfectionist from 'eslint-plugin-perfectionist'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  // Enable TypeScript linting.
  tseslint.configs.strict,

  // Sort imports in a natural order.
  perfectionist.configs['recommended-natural'],

  // Enable the recommended Unicorn rules.
  eslintPluginUnicorn.configs['flat/recommended'],
  {
    rules: {
      // Increase line length a little bit
      '@stylistic/max-len': ['error', {
        code: 120,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
      }],

      // That's simply not applicable.
      'unicorn/no-null': 'off',

      // It's quite rare to use process.exit, and most of
      // the time it's used in CLI tools where it's expected.
      'unicorn/no-process-exit': 'off'
    }
  }
)
