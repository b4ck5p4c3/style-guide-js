import node from './eslint/node.mjs'

/**
 * @type {import('eslint').Linter.Config}
 */
export default [
  ...node,
  {
    files: ['**/*.mjs'],
    rules: {
      'jsdoc/check-tag-names': 'off',
    }
  }
]
