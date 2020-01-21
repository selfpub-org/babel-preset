module.exports = function externalPlugins(options = {}) {
  const { styledComponents, removePropTypes } = options;

  const styledComponentsEnable = !!styledComponents;
  const styledComponentsOptions =
    typeof styledComponents === "object" ? styledComponents : {};

  const removePropTypesEnable = !!removePropTypes;
  const removePropTypesOptions =
    typeof removePropTypes === "object" ? removePropTypes : {};

  return [
    require.resolve("@babel/plugin-transform-flow-strip-types"),
    require.resolve("babel-plugin-dynamic-import-node"),
    require.resolve("@babel/plugin-proposal-class-properties"),
    require.resolve("@babel/plugin-proposal-function-bind"),
    require.resolve("@babel/plugin-syntax-dynamic-import"),
    require.resolve("@babel/plugin-proposal-nullish-coalescing-operator"),
    require.resolve("@babel/plugin-proposal-optional-chaining"),

    styledComponentsEnable && [
      "babel-plugin-styled-components",
      Object.assign(
        {
          // For work with ssr need set ssr as option in .babelrc
          ssr: false,
          displayName: Boolean(options.development)
        },
        styledComponentsOptions
      )
    ],

    removePropTypesEnable && [
      require("babel-plugin-transform-react-remove-prop-types"),
      Object.assign(
        {
          mode: "wrap",
          removeImport: true,
          ignoreFilenames: ["node_modules"]
        },
        removePropTypesOptions
      )
    ]
  ];
};
