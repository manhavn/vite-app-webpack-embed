/* eslint-disable no-undef */
// noinspection NodeCoreCodingAssistance

const path = require("path");
const { DefinePlugin } = require("webpack");

module.exports = {
  output: {
    path: path.join(__dirname, "../dist"),
    publicPath: "/",
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "../src"),
    },
    extensions: ["", ".ts", ".tsx", ".js", ".jsx", ".vue", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "esbuild-loader",
        options: {
          loader: "jsx",
        },
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
};
