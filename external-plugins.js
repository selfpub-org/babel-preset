/* global require, module, process */
module.exports = function externalPlugins(options) {
  return [
    require.resolve("@babel/plugin-proposal-class-properties"),
    require.resolve("@babel/plugin-proposal-function-bind"),
    require.resolve("@babel/plugin-syntax-dynamic-import"),
  ];
};
