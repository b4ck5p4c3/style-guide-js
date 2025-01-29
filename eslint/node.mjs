import neostandard, { resolveIgnoresFromGitignore } from 'neostandard'
import { config } from 'typescript-eslint'

import base from './base.mjs'

const neo = neostandard({
  env: ['node'],
  ignores: resolveIgnoresFromGitignore(),
  ts: true,
})

export default config(
  base,
  neo
)
