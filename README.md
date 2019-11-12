# Working Environment Basic Setup

Last update: 12/11/2019

Basic setup for working environment with different mix of technologies.
On each branch of this repo holds a basic setup that you can download to immediately start working.

## VSCode Extensions and Configurations

Use Material Theme High Contrast with some custom personal changes.

### Configurations

```json
// contents in setting.json
{
  "workbench.colorTheme": "Material Theme High Contrast",
  "todohighlight.keywords": [
    {
      "text": "Remarks",
      "color": "#ffffff",
      "backgroundColor": "#24663B",
      "overviewRulerColor": "grey"
    },
    {
      "text": "Links",
      "color": "#ffffff",
      "backgroundColor": "#24003B",
      "overviewRulerColor": "grey"
    }, //24333b
    {
      "text": "Tips",
      "color": "#000000",
      "backgroundColor": "#2EFF43",
      "overviewRulerColor": "2EFF43"
    }, //24333b
    {
      "text": "Notes",
      "color": "#ffffff",
      "backgroundColor": "#5ED3FF",
      "overviewRulerColor": "grey"
    }, //24333b
    {
      "text": "RN",
      "color": "#000",
      "backgroundColor": "#87EB81",
      "overviewRulerColor": "grey"
    } //24333b
  ],
  "window.zoomLevel": 0,
  "workbench.iconTheme": "material-icon-theme",
  "editor.lineHeight": 0,
  "editor.fontSize": 13,
  "editor.formatOnSave": true,
  "files.insertFinalNewline": true,
  "markdownlint.config": {
    "MD036": false,
    "MD025": false
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

### Extensions

```script
// type this in Powershell (VSCode must be in Environment Path): code --list-extensions | % { "code --install-extension $_" }
code --install-extension AlanWalk.markdown-toc
code --install-extension bierner.markdown-emoji
code --install-extension bierner.markdown-preview-github-styles
code --install-extension CoenraadS.bracket-pair-colorizer
code --install-extension DavidAnson.vscode-markdownlint
code --install-extension dbaeumer.vscode-eslint
code --install-extension dsznajder.es7-react-js-snippets
code --install-extension Equinusocio.vsc-material-theme
code --install-extension esbenp.prettier-vscode
code --install-extension fosshaas.fontsize-shortcuts
code --install-extension Leopotam.csharpfixformat
code --install-extension mdickin.markdown-shortcuts
code --install-extension ms-vscode.csharp
code --install-extension msjsdiag.debugger-for-chrome
code --install-extension octref.vetur
code --install-extension PKief.material-icon-theme
code --install-extension ritwickdey.LiveServer
code --install-extension sidthesloth.html5-boilerplate
code --install-extension wayou.vscode-todo-highlight
code --install-extension yzhang.markdown-all-in-one
```

## Globally installed packages

```script
// use this (npm must be in Environment Path): npm list -g --depth 0
+-- @vue/cli@3.10.0
+-- eslint@6.2.1
+-- expo-cli@3.4.0
+-- gatsby-cli@2.7.42
`-- react-native-cli@2.0.1
```

## Note

This repo is aimed towards users on Windows 10 machine, using VSCode as an IDE and majoring in Web Development.
