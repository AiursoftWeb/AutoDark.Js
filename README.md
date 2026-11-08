# AutoDark.Js

[![Pipeline](https://badge-proxy.aiursoft.com/aiursoft/autodark.js/badges/master/pipeline.svg)](https://gitlab.aiursoft.com/aiursoft/autodark.js/-/pipelines) [![npm](https://img.shields.io/npm/v/@aiursoft/autodark.js)](https://www.npmjs.com/package/@aiursoft/autodark.js)

Detect the system color scheme and apply a Bootstrap 4.6.2 theme.

## Install

```bash
npm install @aiursoft/autodark.js
```

## Usage

Requires Bootstrap 4.6.2 and the package stylesheet. See [usage](docs/usage.md) for the HTML setup.

```js
import { autoTheme } from './node_modules/@aiursoft/autodark.js/dist/esm/autodark.js'
autoTheme()
```

## Development

Use Node.js 20 or a newer supported LTS release.

```bash
npm ci
npm run check
npm pack
```
