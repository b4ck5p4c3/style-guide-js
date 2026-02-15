import { defineConfig } from 'eslint/config'

import node from './node.mjs'

export default defineConfig(
  node,
  {
    rules: {
      // Nest is still CJS-flavoured, so we can't use top-level await
      'unicorn/prefer-top-level-await': 'off',
    }
  },
  {
    files: ['**/*.module.ts'],
    rules: {
      // Allow empty classes for Nest modules, which are just containers for metadata
      '@typescript-eslint/no-extraneous-class': 'off',
    }
  }
)
