# Aiursoft AutoDark.js

[![Pipeline](https://badge-proxy.aiursoft.com/aiursoft/autodark.js/badges/master/pipeline.svg)](https://gitlab.aiursoft.com/aiursoft/autodark.js/-/pipelines) [![npm](https://img.shields.io/npm/v/@aiursoft/autodark.js)](https://www.npmjs.com/package/@aiursoft/autodark.js)

Detect the system color scheme and apply a Bootstrap 4.6.2 theme.

<a name="autodarkjs"></a> <a name="install"></a>

## Overview

### What is AutoDark.js?

Detect the system color scheme and apply a Bootstrap 4.6.2 theme.

## Installation

Install the package in your project:

```bash
npm install @aiursoft/autodark.js
```

Requires a browser with ES modules and `matchMedia` change events, Bootstrap 4.6.2 and the package stylesheet. Bootstrap 4.6.2 is the tested Bootstrap version. Node.js is needed to install or build the package, not to run the deployed browser assets.

## Usage

Save the following as `index.html` beside `node_modules/` and serve that directory over HTTP with your existing static-file server:

```html
<!doctype html>
<html lang="en">
  <meta charset="utf-8" />
  <title>AutoDark example</title>
  <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css" />
  <link rel="stylesheet" href="./node_modules/@aiursoft/autodark.js/dist/css/autodark.min.css" />
  <body class="bg-light">
    <main class="container"><h1>System theme</h1></main>
    <script type="module">
      import { autoTheme } from './node_modules/@aiursoft/autodark.js/dist/esm/autodark.js'
      autoTheme()
    </script>
  </body>
</html>
```

The page follows the operating system color scheme. Theme changes are applied automatically.

Requires Bootstrap 4.6.2 and the package stylesheet. See [usage](docs/usage.md) for the HTML setup.

```js
import { autoTheme } from './node_modules/@aiursoft/autodark.js/dist/esm/autodark.js'
autoTheme()
```

### Theme selection

Use `switchTheme` when the application chooses the theme explicitly:

```js
import { switchTheme } from './node_modules/@aiursoft/autodark.js/dist/esm/autodark.js'
switchTheme('dark')
switchTheme('light')
```

`autoTheme()` applies the current preference, listens for light-preference changes and applies it again on window load. Call it once after the DOM is available. Automatic selection also sets the body text color to white or black.

### Custom theme rules

The package exports mutable `darkThemeSettings` and `lightThemeSettings` maps. Each selector maps to an array of `classToAdd` and `classToRemove` rules. Set both directions before applying a theme:

```js
import {
  darkThemeSettings,
  lightThemeSettings,
  autoTheme,
} from './node_modules/@aiursoft/autodark.js/dist/esm/autodark.js'
darkThemeSettings['.custom-panel'] = [{ classToAdd: ['bg-dark'], classToRemove: ['bg-light'] }]
lightThemeSettings['.custom-panel'] = [{ classToAdd: ['bg-light'], classToRemove: ['bg-dark'] }]
autoTheme()
```

## Configuration

The library is configured through JavaScript; it has no configuration file or environment variables.

**Default rules**

Rules cover `body`, `table`, `.navbar`, `.modal-content`, `.container-fluid`, `.list-group-item`, `.content-wrapper`, `.card`, `.bg-dark`, `.bg-light`, `.bg-white` and `.bg`. They add and remove Bootstrap light/dark classes; navbar rules also adjust borders and shadows. The complete default maps are in [src/autodark.ts](src/autodark.ts).

**Resources and precedence**

Load Bootstrap CSS before `autodark.min.css`. Bootstrap widgets additionally need their own JavaScript dependencies; theme switching itself does not require jQuery or Bootstrap JavaScript. Explicit `switchTheme` calls apply immediately; later system or load events from `autoTheme` can apply the system preference again. There is no persisted user preference or teardown API.

## Development

Use Node.js 20 or a newer supported LTS release. The current build is verified with Node.js 24.

From the repository root, install the locked dependencies, run the existing checks and create a package:

```bash
npm ci
npm run check
npm pack
```

The existing checks run ESLint, Prettier and the production build. `npm pack` creates a local archive; it does not publish a release.

## Documentation

See [usage](docs/usage.md) for the existing HTML setup and Bootstrap integration.

## How to contribute

There are many ways to contribute to the project: logging bugs, submitting pull requests, reporting issues, and creating suggestions.

Even if you have push rights on the repository, you should create a personal fork and create feature branches there when you need them. This keeps the main repository clean and your workflow cruft out of sight.

We're also interested in your feedback on the future of this project. You can submit a suggestion or feature request through the issue tracker. To make this process more effective, we're asking that these include more information to help define them more clearly.

## License

Licensed under the [MIT License](LICENSE).
