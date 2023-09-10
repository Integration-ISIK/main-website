# Integration Main Website

Source code for the main website for Integration, the annual techno-cultural-sports fest of the students of Indian Statistical Institute, Kolkata.

Maintained by the Digital Infrastructure Committee.

## Branches

-   `main` - The live, production site deployed at https://integrationfest.in.
-   `staging` - The staging branch for all changes. All contributions first end up here.

## Technologies

The website is built using [SvelteKit](https://kit.svelte.dev/), and uses [Firebase](https://firebase.google.com/) for essentially all backend functions.
We use [Cloudflare Pages](https://pages.cloudflare.com/) to deploy our website, and [Bun](https://bun.sh/) for local development and testing.

## Contributing

### Setting up a development environment

1. Fork this repository.
2. Clone this repository locally and `cd` to it.
3. Install [Bun](https://bun.sh/).
4. Install `firebase-tools` globally on your system using `npm i -g firebase-tools`.
5. Install dependencies using `bun i`.
6. Create a new branch based off `staging` for your changes.
7. To start a dev server, run `bun dev`.

### Development for Cloud Functions

[Firebase Cloud Functions](https://firebase.google.com/docs/functions) doesn't support Bun as a runtime yet. Nevertheless, the emulators work just fine with Bun for local development. However, the `/functions` directory still maintains `npm`-based dependency management so that we can deploy successfully.

### Code formatting using Prettier

The project ships with the recommended Prettier configuration, contributions not following those guidelines will be rejected. Check using `bun lint`. We recommend enabling `editor.formatOnSave`, but to format manually you can always run `bun format`.
