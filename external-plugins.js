module.exports = function externalPlugins(options = {}) {
  const { styledComponents, removePropTypes } = options;

  const styledComponentsEnable = !!styledComponents;
  const removePropTypesEnable = !!removePropTypes;

  const plugins = [
    require.resolve("@babel/plugin-transform-flow-strip-types"),
    require.resolve("babel-plugin-dynamic-import-node"),
    require.resolve("@babel/plugin-proposal-class-properties"),
    require.resolve("@babel/plugin-proposal-function-bind"),
    require.resolve("@babel/plugin-syntax-dynamic-import"),
    require.resolve("@babel/plugin-proposal-nullish-coalescing-operator"),
    require.resolve("@babel/plugin-proposal-optional-chaining")
  ];

  if (styledComponentsEnable) {
    const styledComponentsOptions =
      typeof styledComponents === "object" ? styledComponents : {};

    plugins.push([
      "babel-plugin-styled-components",
      Object.assign(
        {
          // For work with ssr need set ssr as option in .babelrc
          ssr: false,
          displayName: Boolean(options.development)
        },
        styledComponentsOptions
      )
    ]);
  }

  if (removePropTypesEnable) {
    const removePropTypesOptions =
      typeof removePropTypes === "object" ? removePropTypes : {};

    plugins.push([
      "babel-plugin-transform-react-remove-prop-types",
      Object.assign(
        {
          mode: "wrap",
          removeImport: true,
          ignoreFilenames: ["node_modules"]
        },
        removePropTypesOptions
      )
    ]);
  }

  return plugins;
};
