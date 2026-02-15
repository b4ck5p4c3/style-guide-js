import nextVitals from 'eslint-config-next/core-web-vitals'
import { defineConfig } from 'eslint/config'
import neostandard, { resolveIgnoresFromGitignore } from 'neostandard'

import base from './base.mjs'

const neo = neostandard({
  env: ['node', 'browser'],
  ignores: resolveIgnoresFromGitignore(),
  ts: true,
})

export default defineConfig(
  neo,
  base,
  ...nextVitals
)
