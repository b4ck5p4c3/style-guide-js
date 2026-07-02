import { ESLint, Linter } from 'eslint'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

import bun from '../eslint/bun.mjs'
import nest from '../eslint/nest.mjs'
import node from '../eslint/node.mjs'
import react from '../eslint/react.mjs'

/**
 * List of shared configs to test.
 *
 * - `base` is skipped as it was never meant to be used directly,
 *   heavily depending on being extended by neostandard and other configs.
 *
 * - `next` is skipped as it requires Next.js and eslint-plugin-next to be installed,
 *   which is too much of a hassle for a simple test suite like this.
 */
const configs = { bun, nest, node, react }

const repoRoot = fileURLToPath(new URL('..', import.meta.url))
const fixturePath = (name: string) => fileURLToPath(new URL(`fixtures/${name}`, import.meta.url))

async function lint (config: Linter.Config | Linter.Config[], fixtureName: string) {
  const filePath = fixturePath(fixtureName)
  const code = await readFile(filePath, 'utf8')
  const eslint = new ESLint({
    cwd: repoRoot,
    overrideConfig: config,
    overrideConfigFile: true,
  })

  const result = await eslint.lintText(code, { filePath })

  return result[0]?.messages ?? []
}

for (const [name, config] of Object.entries(configs)) {
  void test(`${name}: accepts valid TypeScript`, async () => {
    const messages = await lint(config, 'valid.ts')

    assert.deepEqual(messages, [])
  })

  void test(`${name}: flags unused variables`, async () => {
    const messages = await lint(config, 'unused-var.ts')

    assert.ok(
      messages.some((message) => message.ruleId === '@typescript-eslint/no-unused-vars'),
      `expected @typescript-eslint/no-unused-vars, got: ${JSON.stringify(messages)}`
    )
  })

  void test(`${name}: flags floating promises via type-aware linting`, async () => {
    const messages = await lint(config, 'floating-promise.ts')

    assert.ok(
      messages.some((message) => message.ruleId === '@typescript-eslint/no-floating-promises'),
      `expected @typescript-eslint/no-floating-promises, got: ${JSON.stringify(messages)}`
    )
  })

  void test(`${name}: flags max-len stylistic violations`, async () => {
    const messages = await lint(config, 'max-length.ts')

    assert.ok(
      messages.some((message) => message.ruleId === '@stylistic/max-len'),
      `expected max-len, got: ${JSON.stringify(messages)}`
    )
  })
}
