# @selfpub/babel-preset

[![NpmLicense](https://img.shields.io/npm/l/@selfpub/babel-preset.svg)][https://www.npmjs.com/package/@selfpub/babel-preset]
[![NPM version](https://img.shields.io/npm/v/@selfpub/babel-preset/latest.svg)][https://www.npmjs.com/package/@selfpub/babel-preset]

Selfpub’s config for Babel transforms.

## Install

Install this package, as well as the parts of Babel you wish to use:

**With Yarn**

```bash
yarn add --dev --exact @babel/core @selfpub/babel-preset
```

**With npm**

```bash
npm install @babel/core @selfpub/babel-preset --save-dev --save-exact
```

**If you have dependencies on babel 6 use this way for install**

**With Yarn**

```bash
yarn add --dev @babel/core @selfpub/babel-preset 'babel-core@^7.0.0-bridge' @babel/core
```

**With npm**

```bash
npm install @babel/core @selfpub/babel-preset 'babel-core@^7.0.0-bridge' --save-dev --save-exact
```
## Usage

### Via .babelrc (Recommended)

Then, in your Babel configuration, set this package as the babel preset you’d like to use:

```
{
  "presets": [
    "@selfpub/babel-preset"
  ]
}
```

### Via CLI

```
$ babel script.js --presets @selfpub/babel-preset
```

### Via Node API

```js
require('@babel/core').transform('code', {
  presets: ['@selfpub/babel-preset'],
});
```

## Presets

This packages comes with several different presets for you to use, depending on your project:

- `@selfpub/babel-preset`: A preset to use for JavaScript that is meant to run in browsers.
  This preset accepts an options object. The following options are allowed:

    - `modules`, a boolean indicating whether native ES2015 modules should be transpiled to CommonJS equivalents. Set this option to `false` when you are using a bundler like Rollup or Webpack 2:

      ```json
      {
        "babel": {
          "presets": [
            ["@selfpub/babel-preset", {"modules": false}]
          ]
        }
      }
      ```

    - `browsers`, a [browserslist](https://github.com/ai/browserslist) string or array, which specifies which browsers to transpile for. Defaults to the list found in `browsers.js`.
    
      Defaults values: 
      
      ```json
      [
        "last 2 Chrome versions",
        "not Chrome < 60",
        "last 2 Safari versions",
        "not Safari < 10.1",
        "last 2 iOS versions",
        "not iOS < 10.3",
        "last 2 Firefox versions",
        "not Firefox < 54",
        "last 2 Edge versions",
        "not Edge < 15"
      ]
      ```
      Config example:
      
      ```json
      {
        "babel": {
          "presets": [
            ["@selfpub/babel-preset", {
              "browsers": ["last 5 versions"]
            }]
          ]
        }
      }
      ```

    - `debug`, a boolean (defaults to `false`) to turn on `@babel/preset-env` debugging
     
      ```json
      {
        "babel": {
          "presets": [
            ["@selfpub/babel-preset", {
              "debug": true
            }]
          ]
        }
      }
      ```
