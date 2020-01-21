# Changelog

## Release v1.2.0

**Changes:**
- unused code removed
- added plugin @babel/plugin-proposal-nullish-coalescing-operator
- added plugin @babel/plugin-proposal-optional-chaining
- added plugin babel-plugin-styled-components
- added plugin babel-plugin-transform-react-remove-prop-types

**NPM package:** https://www.npmjs.com/package/@selfpub/babel-preset/v/1.2.0

## Release v1.1.1

**Changes:**
- remove useBultins options

**NPM package:** https://www.npmjs.com/package/@selfpub/babel-preset/v/1.1.1

## Release v1.1.0

**Changes:**
- chore: Update packages  [f3bc06c](https://github.com/selfpub-org/eslint-config/commit/f3bc06c)
- fix: Add babel plugins in package  [aa451d5](https://github.com/selfpub-org/eslint-config/commit/aa451d5)
- fix: Eslint errors  [dd134f2](https://github.com/selfpub-org/eslint-config/commit/dd134f2)

**NPM package:** https://www.npmjs.com/package/@selfpub/babel-preset/v/1.1.0


## 1.0.0 (2018-11-10) :tada: :tada: :tada: First Major Release

**Changes:**
- Add options for configuring:
    * `modules`, a boolean indicating whether native ES2015 modules should be transpiled to CommonJS equivalents. Set this option to `false` when you are using a bundler like Rollup or Webpack 2:
    * `browsers`, a [browserslist](https://github.com/ai/browserslist) string or array, which specifies which browsers to transpile for. Defaults to the list found in `browsers.js`.

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
    * `debug`, a boolean (defaults to `false`) to turn on `@babel/preset-env` debugging

- Update dependencies list
- Add docs for module

**NPM package:** https://www.npmjs.com/package/@selfpub/babel-preset/v/1.0.0


## 0.0.2 (2018-10-10)

### Fix

* Re-configure dependencies
* Add @selfpub/eslinf-config


## 0.0.1 (2018-10-10)

### Feature

* Realise first version babel config

