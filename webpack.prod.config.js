var path = require("path");

module.exports = {
  entry: [
    "./scripts/app.setup.js",
    "./scripts/app.module.js",
    "./scripts/app.config.js",
    "./scripts/home.controller.js"
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jshint-loader'

      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['ng-annotate', 'babel?presets[]=es2015']
      }
    ]
  },
  watch: false
};
