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
  - _Future commands to manually install modules for this repo here_
  - run `npx install-peerdeps --dev eslint-config-airbnb` for airbnb setup
  - run `npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node eslint-plugin-react-native` for npm, eslint, node and react-native setup
- Test by turn on `App.js` with prewritten error code, if VSCode show errors and warning -> good to go

_Important environment setup files:_

<!-- prettier-ignore -->
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

nhap
co expo cli, ban dang dung 3.4
first test with web, cmd danh ?, xong danh `w`, neu duoc se mo cong localhost:19006, doi gia tri trong app.js se thay
co the view bang devices trong wifi network bang cach danh dia chi may dev (tim bang ipconfig) (192.168.0.gido:ten_cong) (dia chi On Your Network: http://192.168.56.1:19006/ xuat ra boi expo la sai)

gio test tren physical devices
danh lenh expo start/npm start de mo cua so metro bundle thuong mo cong 19002 tren web browser co san thuong la firefox
chuyen android phone sang developer mode + chon che do chap nhan debugging qua USB tren dt neu co, sau do cam dt vao may

make sure your computer has adb installed to connect pc to android devices, if pc has android studio -> chances that already have adb
they are usually store here `C:\Users\Admin\AppData\Local\Android\Sdk\platform-tools`
envi_path must have
android home | C:\Users\Admin\AppData\Local\Android\Sdk
path | C:\Users\Admin\AppData\Local\Android\Sdk\platform-tools

plugin only 1 device at a time
now can debug wirelessly (make sure phone in same network domain)

then type `adb devices` -> show name of plugged in devices

https://facebook.github.io/react-native/docs/getting-started
https://facebook.github.io/react-native/docs/running-on-device.html#running-your-app-on-ios-devices
https://developer.android.com/studio/command-line/adb
