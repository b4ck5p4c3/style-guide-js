import perfectionist from 'eslint-plugin-perfectionist'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import tseslint from 'typescript-eslint'

export default [
  perfectionist.configs['recommended-natural'],
  tseslint.configs.strict,
  eslintPluginUnicorn.configs['flat/recommended'],
]
