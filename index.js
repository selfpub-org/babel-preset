/* global require, module, process */
"use strict";

const modernTargets = {
  browsers: [
    "last 2 Chrome versions",
    "not Chrome < 60",
    "last 2 Safari versions",
    "not Safari < 10.1",
    "last 2 iOS versions",
    "not iOS < 10.3",
    "last 2 Firefox versions",
    "not Firefox < 54",
    "last 2 Edge versions",
    "not Edge < 15",
  ],
};

module.exports = function(context, options) {
  const modules = options.modules || false;
  const useBuiltIns = options.useBuiltIns || false;
  const targets = options.targets || modernTargets;
  const development =
    typeof options.development === "boolean" ? options.development : false;

  return {
    presets: [
      [
        require("@babel/preset-env"),
        {
          modules,
          useBuiltIns,
          targets,
        },
      ],
      [require("@babel/preset-react"), { development }],
    ],
    plugins: [
      require("@babel/plugin-transform-modules-commonjs"),
      require("@babel/plugin-proposal-class-properties"),
      require("@babel/plugin-proposal-export-default-from"),
      require("@babel/plugin-proposal-function-bind"),
      require("@babel/plugin-proposal-throw-expressions"),
      require("@babel/plugin-syntax-dynamic-import"),
    ].filter(Boolean),
  };
};
