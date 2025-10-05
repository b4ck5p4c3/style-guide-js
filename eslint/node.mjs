import { defineConfig } from 'eslint/config'
import neostandard, { resolveIgnoresFromGitignore } from 'neostandard'

import base from './base.mjs'

const neo = neostandard({
  env: ['node'],
  ignores: resolveIgnoresFromGitignore(),
  ts: true,
})

export default defineConfig(
  base,
  neo
)
