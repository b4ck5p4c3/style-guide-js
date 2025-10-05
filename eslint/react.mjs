import { defineConfig } from 'eslint/config'
import reactHooks from 'eslint-plugin-react-hooks'
import neostandard, { resolveIgnoresFromGitignore } from 'neostandard'

import base from './base.mjs'

const neo = neostandard({
  env: ['browser'],
  ignores: resolveIgnoresFromGitignore(),
  ts: true,
})

export default defineConfig(
  neo,
  base,
  reactHooks.configs['recommended-latest']
)
