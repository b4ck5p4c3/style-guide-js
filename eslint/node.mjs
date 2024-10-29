import neostandard, { resolveIgnoresFromGitignore } from 'neostandard'
import tseslint from 'typescript-eslint'

import base from './base.mjs'

const neo = neostandard({
  env: ['node'],
  ignores: resolveIgnoresFromGitignore(),
  ts: true,
})

export default tseslint.config(
  ...base,
  ...neo
)
