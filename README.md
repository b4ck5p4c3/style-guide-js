# B4CKSP4CE Code Style Guide

[![MPL-2.0 License](https://img.shields.io/github/license/b4ck5p4c3/style-guide?style=for-the-badge)](https://www.mozilla.org/en-US/MPL/2.0/)
[![NPM Version](https://img.shields.io/npm/v/%40bksp%2Fstyle-guide?style=for-the-badge)](https://npmjs.com/package/@bksp/style-guide)
[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-7fffff?style=for-the-badge&labelColor=ff80ff)](https://github.com/neostandard/neostandard)

## Introduction

This repository is the home of B4CKSP4CE's style guide, which includes configs for
popular linting and styling tools.

The following configs are available, and are designed to be used together.

- [ESLint](#eslint)
- [TypeScript](#typescript)

Install the package using your package manager of choice:

```sh
# Using pnpm
pnpm install --save-dev @bksp/style-guide
```

## Editorconfig

Editorconfig enforcing consistent coding styles across various editors and IDEs.
Copy the [.editorconfig](.editorconfig) file to the root of your project.

## ESLint

> Note: ESLint is a peer-dependency of this package, and should be installed
> at the root of your project.

```sh
# Install ESLint and TypeScript ESLint parser required for the shared config
pnpm install --save-dev eslint typescript-eslint
```

There are two ESLint configurations available:

- `@bksp/style-guide/eslint/node` - for generic JS/TS projects
- `@bksp/style-guide/eslint/next` - for Next.js projects

Re-export the desired configuration in your project's `eslint.config.mjs` file:

```js
// eslint.config.mjs
export { default } from '@bksp/style-guide/eslint/next'
```

You can extend this configuration to add project-specific rules.
Read more about it in [Configuring ESLint](https://eslint.org/docs/latest/use/configure/) documentation.

## TypeScript

Extend your `tsconfig.json` file with the shared TypeScript config:

```json
{
  "extends": "@bksp/style-guide/ts"
}
```

## Commit messages

Use whatever style you prefer, but **be consistent**.
We encourage you to use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

Example:

```plaintext
feat(recognition): add Digikey PN recognition (#123)

fix: incorrect part number recognition
```
