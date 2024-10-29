import { FlatCompat } from '@eslint/eslintrc'
import neostandard, { resolveIgnoresFromGitignore } from 'neostandard'
import path from 'path'
import { fileURLToPath } from 'url'

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

/**
 * @type {import('eslint').Linter.Config}
 */
export default [
  ...neo,
  ...base,
  ...compat.extends('plugin:@next/next/recommended'),
  ...compat.extends('plugin:@next/next/core-web-vitals')
]
