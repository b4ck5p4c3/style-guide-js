import { defineConfig, globalIgnores } from 'eslint/config'

/**
 * @type {import('eslint').Linter.Config}
 */
import node from './eslint/node.mjs'

export default defineConfig([
  node,
  // Skip linting of test fixtures as they are intentionally invalid.
  globalIgnores([
    '**/tests/fixtures/**',
  ])
])
