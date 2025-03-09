# Artiste-peintre [![main workflow](https://github.com/Kuchengeschmack/artiste-peintre/actions/workflows/main.yml/badge.svg)](https://github.com/Kuchengeschmack/artiste-peintre/actions)

## Description 🔍

Art portfolio for artist Marie-Cécile Caron.

![demo](https://github.com/user-attachments/assets/168a6ec1-693e-4f36-9ad6-efda9d3fb96c)

## How-to 🤔

### Install and serve

You must have [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en) and [PnPM](https://pnpm.io/) installed on your PC.

Open a shell terminal in your dev folder and type :

```sh
# Clone the project
git clone https://github.com/Kuchengeschmack/artiste-peintre.git
# Go to project folder
cd artiste-peintre
# Install dependencies
pnpm install
# Build and serve on http://localhost:4200
pnpm start
```

## Workflow 🤓

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) are to be used in this project.

Branches are created from the `main` branch :

```sh
git switch main
git switch --create <my-branch>
```

Branches are then merged into `main` without fast-forward :

```sh
git switch main
git merge --no-ff <my-branch>
git branch --delete <my-branch>
```

When ready, create a release using :

```sh
pnpm release
```

Then follow the prompt. Project's `package.json` and `CHANGELOG.md` files shall be updated automatically and committed on the fly. The corresponding commit shall be automatically tagged with version number.

## Feedback 🔂

Feel free to address any issues using the [Issues](https://github.com/Kuchengeschmack/artiste-peintre/issues) tab of this Github repo.
