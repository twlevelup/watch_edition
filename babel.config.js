module.exports = function (api) {
  api.cache(true);

  const presets = [ ["@babel/preset-env", {"modules": false}] ];
  const plugins = [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-syntax-class-properties",
    "transform-class-properties",
    "@babel/plugin-syntax-dynamic-import",
    ["@babel/plugin-transform-modules-commonjs", {
      "allowTopLevelThis": true
    }]
  ];

  return {
    presets,
    plugins
  };
}
