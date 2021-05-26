# Welcome to the boilerplate.

## Getting Started

1. Clone this repo.
2. Run `npm install`
3. Run `npm run dev`
4. Go to `http://localhost:3000`
5. Enjoy.

## Features

- Next.js without create-nextjs-app.
- React/Redux
- Jest testing
- Winston logging
- Custom express server (with start/stop commands)
- Handles IPC signals for shutdown
- Typescript
- Storybook
- Separate config (app.config)
- Header/footer wrapper component.
- 80% code coverage threshold set in Jest config.
- Prettier
- VSCode and EditorConfig provided.
- Conventional commits (enforced via Husky commit-msg hook)
- Pre-commit eslint fix.
- Pre-push test, coverage, lint and audit.

## Notes for developers

![conventional-commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-brightgreen.svg)

This repo requires the use of [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). If you're not using these in your commit message, it will not allow a commit. Please be aware of this when writing your commit messages.

Simply put, conventional commits follow the rule of `noun(scope): description`. The scope is optional, but recommended.

Accepted nouns are:
```
build
chore
ci
docs
feat
fix
perf
refactor
revert
style
test
```
The only ones that would correlate with [Semantic Versioning](https://semver.org/) would be __fix__ (PATCH) and __feat__ (MINOR). For a __breaking change__, you should append a `!` after the type/scope.

Some examples of SemVer commits:

```
PATCH Change -> fix(alert): fixed a bug in alerts ref #133

MINOR Change -> feat(banner): created a new banner component ref #134

MAJOR Change -> feat(redux)!: changes to the store configuration ref #135
```
