import { FlatCompat } from '@eslint/eslintrc'
import neostandard, { resolveIgnoresFromGitignore } from 'neostandard'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { config } from 'typescript-eslint'

import base from './base.mjs'

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const neo = neostandard({
  env: ['node', 'browser'],
  ignores: resolveIgnoresFromGitignore(),
  ts: true,
})

export default config(
  neo,
  base,
  ...compat.config('plugin:@next/next/recommended')
)
