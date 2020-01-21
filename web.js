const browsers = require("./browsers");
const externalPlugins = require("./external-plugins");

module.exports = function webPreset(context, options) {
  const opts = options || {};
  const dev = opts.development;
  const debug = opts.debug || false;
  const development = typeof dev === "boolean" ? dev : false;

  // In the test environment `modules` is often needed to be set to true, babel
  // figures that out by itself using the `'auto'` option. In production/development
  // this option is set to `false` so that webpack can handle import/export with
  // tree-shaking. For more info see:
  // https://github.com/babel/babel/blob/master/packages/babel-preset-env/src/normalize-options.js#L172
  const modules = opts.modules || "auto";

  return {
    presets: [
      require("@babel/preset-flow"),
      [
        require("@babel/preset-env"),
        {
          modules,
          targets: {
            browsers: opts.browsers || browsers
          },
          debug
        }
      ],
      [require("@babel/preset-react"), { development }]
    ],
    plugins: externalPlugins(opts)
  };
};
