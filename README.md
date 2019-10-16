# Working Environment Basic Setup 002

This branch holds code for basic setup with specific technologies.

## Technologies

<!-- prettier-ignore -->
- React Native for Android
- ESLint
- Prettier
- AirBNB Style Guide

## How to use

<!-- prettier-ignore -->
- Clone this repo to your machine, take note of the branch you are cloning
- Go to the location of your project, then run these commands below
- Run `npm i` to install all deps in `package.json`
- if errors occur, you can do manually by:
  - run `npm init` to initiate `package.json` file
  - run `npx install-peerdeps --dev eslint-config-airbnb` for airbnb with react setup
  - run `npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node eslint-plugin-react-native` for npm, eslint, node and react-native setup
- Test by turn on `App.js` with prewritten error code, if VSCode show errors and warning -> good to go

_Important environment setup files of this repo:_

<!-- prettier-ignore -->
- `eslintrc.json`: applies basic rules from ESLint and other rulesets
  - `extends`: ?
  - `plugins`: ?
  - `env`: declares that this project works on where, e.g if work on browser -> global variable `document` will be known -> no error
  - `parserOptions`: defines what ECMA syntax you are writing, what is the sourceType ? and support for JSX or not, [read more](https://eslint.org/docs/user-guide/configuring)
  - `rules`: check these rules at [main page](https://eslint.org/) (type the error into the search bar)
    - the values for the attributes are: `error`, `warn` and `off`
- `.prettierrc.json`: applies basic syntax rules and preferences, e.g strings should use single/double quote, tabs are 2/4, ...
  - Check how can you setup rules [here](https://prettier.io/docs/en/options.html)
- `package.json`: **You should changes some values inside here based on your project.**

_Basic tasks to run React Native App on Android:_

- have an Android device with USB connecting to dev machine (1 Android device plugged in only)
  - device must be in Developer Mode (7 taps ...) and toggle on the USB debugging option
  - make sure device and dev machine are on the same network
  - download Expo Client app to device if
- computer should have Android Studio -> will probably have [adb](https://developer.android.com/studio/command-line/adb)
  - should have this environment variable `Variable: ANDROID_HOME | Value: C:\Users\...\Android\Sdk`
  - and this `Variable: Path | Value ...,C:\Users\...\Android\Sdk\platform-tools`
  - check device connected by typing to cmd: `adb devices` -> should show your device ID
- run project (`npm start`/`expo start`)
  - scan the QR code, change Connection to Tunnle if not work
  - or in VSCode terminal, type `a` to auto install app to connected device
  - app can be tested using web browser by running as web app, then try to connect to your dev machine (`ipconfig`) using any devices in network, e.g `192.168.x.y:app_port_here`

## Note

If your README.md file got editted by Prettier, paste this line above the part you dont want Prettier: `<!-- prettier-ignore -->`

## External links

<https://facebook.github.io/react-native/docs/getting-started>\
<https://facebook.github.io/react-native/docs/running-on-device.html#running-your-app-on-ios-devices>
