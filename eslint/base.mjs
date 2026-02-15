import perfectionist from 'eslint-plugin-perfectionist'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import { defineConfig } from 'eslint/config'
import { plugins } from 'neostandard'

export default defineConfig(
  // Enable TypeScript linting.
  plugins['typescript-eslint'].configs.strict,

  // Sort imports in a natural order.
  perfectionist.configs['recommended-natural'],

  // Enable the recommended Unicorn rules.
  eslintPluginUnicorn.configs['recommended'],
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

      // Allow use of void operator as a statement.
      // This is useful for highlighting side effects of expressions,
      // such as promises that are intentionally not awaited.
      'no-void': ['error', { allowAsStatement: true }],

      // That's simply not applicable.
      'unicorn/no-null': 'off',

      // It's quite rare to use process.exit, and most of
      // the time it's used in CLI tools where it's expected.
      'unicorn/no-process-exit': 'off'
    }
  }
)
