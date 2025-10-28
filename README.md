# AutoDark.js

[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://gitlab.aiursoft.com/aiursoft/autodark.js/-/blob/master/LICENSE) [![Pipeline stat](https://gitlab.aiursoft.com/aiursoft/autodark.js/badges/master/pipeline.svg)](https://gitlab.aiursoft.com/aiursoft/autodark.js/-/pipelines) [![ManHours](https://manhours.aiursoft.com/r/gitlab.aiursoft.com/aiursoft/autodark.js.svg)](https://gitlab.aiursoft.com/aiursoft/autodark.js/-/commits/master?ref_type=heads) [![npm](https://img.shields.io/npm/v/@aiursoft/autodark.js?color=blue)](https://www.npmjs.com/package/@aiursoft/autodark.js) [![npm](https://img.shields.io/npm/dm/@aiursoft/autodark.js)](https://www.npmjs.com/package/@aiursoft/autodark.js)

`@aiursoft/autodark.js` is a JavaScript library for detecting user's system dark mode and auto switch your website's theme.

## Installation

Run the following command to install the most recent version of `@aiursoft/autodark.js` from npm:

```sh
npm install @aiursoft/autodark.js
```

Bootstrap 4.6.2 is the only version that is tested. To use this project, you need to use bootstrap 4.6.2 in your project.

## Importing

## Reference CSS

You also need to reference the CSS file in your HTML:

```html
<link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css" />
<link rel="stylesheet" href="./node_modules/@aiursoft/autodark.js/dist/css/autodark.min.css" />
```

## Reference JavaScript

You also need to reference bootstrap's JavaScript file:

```html
<script src="./node_modules/jquery/dist/jquery.min.js" defer></script>
<script src="./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js" defer></script>
<script type="module">
  import { autoTheme } from './node_modules/@aiursoft/autodark.js/dist/esm/autodark.js'
  autoTheme()
</script>
```

## How to build locally

```bash
npm install
npm run build
```

## How to contribute

There are many ways to contribute to the project: logging bugs, submitting pull requests, reporting issues, and creating suggestions.

Even if you with push rights on the repository, you should create a personal fork and create feature branches there when you need them. This keeps the main repository clean and your workflow cruft out of sight.

We're also interested in your feedback on the future of this project. You can submit a suggestion or feature request through the issue tracker. To make this process more effective, we're asking that these include more information to help define them more clearly.
