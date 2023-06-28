# Contributing to @warp-ds/fonts

Welcome to the [@warp-ds/fonts](https://github.com/warp-ds/fonts) repository!
We're glad you're interested in contributing.

This repository is maintained by the [Warp Core Team](https://github.com/orgs/warp-ds/teams/warp-core-team)
and is home to the [@warp-ds/fonts](https://www.npmjs.com/package/@warp-ds/fonts),
which consist of a collection of fonts and font definitions used by all brands within the Nordic Marketplaces.

To get an overview of the project, read the [README](README.md).


## Development Setup

To get started with developing [@warp-ds/fonts](https://github.com/warp-ds/fonts), follow the instructions below.
This will walk you through setting up your development environment.


### Cloning the repository

Start by cloning the repository to your dev environment by running:

```sh
git clone https://github.com/warp-ds/fonts
```


### pnpm

We use [pnpm](https://pnpm.io/) as package manager for Node.js.
Install it by running:

```sh
npm install -g pnpm
```


### Dependencies

Install dependencies by running:

```sh
pnpm i
```

## Contributing

### Branching

There are two branches to keep in mind:
- `next` : used for pre-releases.
- `main` : the main branch, used for stable releases.

When adding a new feature, fixing a bug, or adding to the repository in any other way,
you should always do this in a feature branch that is branched off the `next` branch.

### Committing

It is important to follow [Conventional Commits](https://www.conventionalcommits.org/) when making changes ([Commitizen](#commitizen) to the rescue),
as this is used in the [automated release process](#releases).

### Pull Request

When your changes are ready for pull request, this should be opened against the `next` branch.
Add the [Warp Core Team](https://github.com/orgs/warp-ds/teams/warp-core-team) as reviewer.

Pull request to the `next` branch should always be set to *squash*.
Make sure that the squash commit message follows the instructions in the [Committing](#committing) section before squash merging the pull request.

### Commitizen

We use [commitizen](https://github.com/commitizen/cz-cli) to ensure coherent commit message structure.
This is used to automatically generate change logs and handle versioning when [releasing](#releases).

```sh
npm install -g commitizen
```

When installed, you should be able to type `cz` or `git cz` in your terminal to commit your changes (replacing
`git commit`).

[![Add and commit with Commitizen](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)


## Releases

This project uses [Semantic Release](https://github.com/semantic-release/semantic-release) to automate package
publishing when making changes to the `main` or `next` branch.

Please note that the version published will depend on your commit message structure.
Make sure to review and follow the instructions in the [Committing](#committing) section before committing.

Before a new release we develop against a `next` branch which is constantly published to NPM and our CDN using a `next` tag (e.g. `1.0.3-next.1`).
If needed the `next` version of the package can be installed while waiting for the main release.

A stable release from the `main` branch is basically done by just opening a pull request from `next` to `main` and then making sure to *merge* commit the pull request.
Never squash to `main` to prevent losing history and commit messages from all commits to `next`.

To avoid git history divergence between `next` and `main`,
when a stable release from `main` results in a semantic-release-bot commit being pushed to `main`,
a GitHub action automatically rebase `next` to `origin/main` after every release from `main`.

( For reference, see this rfc in Fabric-ds: [RFC: Fabric Releases and Release Schedule](https://github.com/fabric-ds/issues/blob/779d59723993c13d62374516259602d967da56ca/rfcs/0004-releases.md) )

## Eik aliases

Upon every main release the assets are published to our CDN (Eik) and can be accessed by the exact package version, e.g. `https://assets.finn.no/pkg/@warp-ds/fonts/1.0.3/finn-no.css` or by an alias, e.g. `https://assets.finn.no/pkg/@warp-ds/fonts/v1/finn-no.css`. To make the alias point at the latest version, we need to manually update it after each main release. Use Eik CLI tool for this purpose:
```sh
npx @eik/cli pkg-alias @warp-ds/fonts <version> <alias>
```

```sh
npx @eik/cli pkg-alias @warp-ds/fonts 1.0.4 1
```

## License

@warp-ds/fonts is [Apache-2.0 licensed](https://github.com/warp-ds/fonts/blob/main/LICENSE).
By contributing to @warp-ds/fonts, you agree that your contributions will be licensed under its Apache-2.0 license.