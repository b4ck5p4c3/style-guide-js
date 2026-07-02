import reactHooks from 'eslint-plugin-react-hooks'
import { defineConfig } from 'eslint/config'
import neostandard, { resolveIgnoresFromGitignore } from 'neostandard'
import reactYouMightNotNeedAnEffect from 'eslint-plugin-react-you-might-not-need-an-effect'

import base from './base.mjs'

const neo = neostandard({
  env: ['browser'],
  ignores: resolveIgnoresFromGitignore(),
  ts: true,
})

/**
 * @type {import('eslint').Linter.Config}
 */
export default defineConfig(
  neo,
  base,
  reactHooks.configs['recommended-latest'],
  reactYouMightNotNeedAnEffect.configs.strict
)
