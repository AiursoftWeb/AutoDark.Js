# AutoDark.js

[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://gitlab.aiursoft.cn/aiursoft/autodark.js/-/blob/master/LICENSE)
[![Pipeline stat](https://gitlab.aiursoft.cn/aiursoft/autodark.js/badges/master/pipeline.svg)](https://gitlab.aiursoft.cn/aiursoft/autodark.js/-/pipelines)
[![ManHours](https://manhours.aiursoft.cn/r/gitlab.aiursoft.cn/aiursoft/autodark.js.svg)](https://gitlab.aiursoft.cn/aiursoft/autodark.js/-/commits/master?ref_type=heads)
[![npm](https://img.shields.io/npm/v/@aiursoft/autodark.js?color=blue)](https://www.npmjs.com/package/@aiursoft/autodark.js)
[![npm](https://img.shields.io/npm/dm/@aiursoft/autodark.js)](https://www.npmjs.com/package/@aiursoft/autodark.js)

@aiursoft/autodark.js is a JavaScript library for detecting user's system dark mode and auto switch your website's theme.

## Installation

Run the following command to install the most recent version of chess.js from
NPM:

```sh
npm install @aiursoft/autodark.js
```

## Importing

### Import (as ESM)

```js
import { autoTheme } from '@aiursoft/autodark.js';
autoTheme()
```

ECMAScript modules (ESM) can be directly imported in a browser:

```html
<script type="module">
  import { autoTheme } from '@aiursoft/autodark.js';
  autoTheme()
</script>
```

### Import (as CommonJS)

```js
const { autoTheme } = require('@aiursoft/autodark.js');
autoTheme()
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