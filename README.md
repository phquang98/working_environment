# Working Environment Basic Setup 001

This branch holds code for basic setup with specific technologies.

## Technologies

- HTML/SCSS/JS
- ESLint
- Prettier
- AirBNB Style Guide

## How to use

- Clone this repo to your machine, take note of the branch you are cloning
- Go to the location of your project, then run these commands below
- Run `npm i` to install all deps in `package.json`
- if errors occur, you can do manually by:
  - run `npm init` to initiate `package.json` file
  - run `npx install-peerdeps --dev eslint-config-airbnb-base` for airbnb setup
  - run `npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node` for npm, eslint and node setup
- Test by turn on `envi_test.js`, if VSCode show errors and warning -> good to go
- If you want to write SCSS, first run `npm run sass` -> from now on, when done writing in scss folder, code will be auto compiled to css in dist folder

_Important environment setup files:_

- `eslintrc.json`: applies basic rules from ESLint and other rulesets
  - `extends`: ?
  - `plugins`: ?
  - `envi`: declares that this project works on where, e.g if work on browser -> global variable `document` will be known -> no error
  - `rules`: check these rules at [main page](https://eslint.org/) (type the error into the search bar)
  - the values for the attributes are: `error`, `warn` and `off`

- `.prettierrc.json`: applies basic syntax rules and preferences, e.g strings should use single/double quote, tabs are 2/4, ...
  - Check how can you setup rules [here](https://prettier.io/docs/en/options.html)

- `package.json`: **You should changes some values inside here based on your project.**
  - Script for SCSS:
    - `-w`: watch the folders/files contains scss code
    - `-o`: output to desired folder, here are dist/css/
    - `--recursive`: prevent partial and auto-reload

## Note

If your README.md file got editted by Prettier, paste this line above the part you dont want Prettier: `<!-- prettier-ignore -->`
