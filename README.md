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
- [ClangFormat](#clangformat)

Install the package using your package manager of choice:

```sh
# Using pnpm
pnpm install --save-dev @bksp/style-guide
```

## Editorconfig

The `.editorconfig` file is a simple way to enforce consistent coding styles across various editors and IDEs.
It is recommended to use the following configuration:

```ini
root = true

[*]
end_of_line = lf
insert_final_newline = true

[*.{js,jsx,cjs,mjs,ts,tsx,json,yml,yaml,env}]
charset = utf-8
indent_style = space
indent_size = 2
```

## ESLint

> Note: ESLint is a peer-dependency of this package, and should be installed
> at the root of your project.

```sh
# Install ESLint and TypeScript ESLint parser required for the shared config
pnpm install --save-dev eslint typescript-eslint
```

There are two ESLint configurations available:

- `@bksp/style-guide/eslint/node` - for generic Node.js projects
- `@bksp/style-guide/eslint/next` - for Next.js projects

Re-export the desired configuration in your project's `eslint.config.mjs` file:

```js
// eslint.config.mjs
import next from '@bksp/style-guide/eslint/next'
export default next;
```

You can extend this configuration to add project-specific rules.
Read more about it in [Configuring ESLint](https://eslint.org/docs/latest/use/configure/) documentation.

## TypeScript

Please use [`@tsconfig/strictest`](https://www.npmjs.com/package/@tsconfig/strictest) directly in your projects:

```json
{
  "extends": "@tsconfig/strictest"
}
```

## ClangFormat

Please use Google C/C++ code style.

You can copy `.clang-format` file from this repo to your project, and setup your IDE to use it (by default VSCode and CLion use or advertise to use it if it is present).

## Commitlint

> [!NOTE]
> Use whatever style you prefer, but **be consistent**.
> We may suggest using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

Previously, we enforced Conventional Commits with hooks and commitlint.
This are long gone.

## Credits

This project was initially inspired by [Vercel Style Guide](https://github.com/vercel/style-guide).
Thanks for sharing this amazing piece of work!
