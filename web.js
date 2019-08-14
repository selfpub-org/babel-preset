const browsers = require("./browsers");
const externalPlugins = require("./external-plugins");

module.exports = function webPreset(context, options) {
  const opts = options || {};
  const dev = opts.development;
  const debug = opts.debug || false;
  const builtins = opts.useBuiltIns || "usage";
  const modules = opts.modules || false;
  const useBuiltIns = builtins || false;
  const development = typeof dev === "boolean" ? dev : false;

  return {
    presets: [
      require("@babel/preset-flow"),
      [
        require("@babel/preset-env"),
        {
          modules,
          useBuiltIns,
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
