import reactHooks from 'eslint-plugin-react-hooks'
import neostandard, { resolveIgnoresFromGitignore } from 'neostandard'
import { config } from 'typescript-eslint'

import base from './base.mjs'

const neo = neostandard({
  env: ['browser'],
  ignores: resolveIgnoresFromGitignore(),
  ts: true,
})

export default config(
  neo,
  base,
  reactHooks.configs['recommended-latest']
)
