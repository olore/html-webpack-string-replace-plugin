String Replace for the HTML Webpack Plugin
==========================================
[![npm version](https://badge.fury.io/js/html-webpack-string-replace-plugin.svg)](https://badge.fury.io/js/html-webpack-string-replace-plugin)

This webpack plugin is to be used in conjunction with html-webpack-plugin. It provides a way for us to use webpack to copy HTML files and perform string manipulations


## Installation

Install the plugin with npm:
```shell
$ npm install -D html-webpack-string-replace-plugin
```

## Usage

Require the plugin in your webpack config:
```javascript
const HtmlWebpackStringReplacePlugin = require('html-webpack-string-replace-plugin');
```

Add the plugin to your webpack config as follows:

```javascript
plugins: [
    new HtmlWebpackPlugin({
      "template": "./src/login.html",
      "filename": "./login.html",
    }),

    new HtmlWebpackStringReplacePlugin({
      '_VERSION_': '1.0',
      '_CDN_': 'https://some-cdn',
    })
]
```
