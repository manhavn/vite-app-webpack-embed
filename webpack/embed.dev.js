/* eslint-disable no-undef */
// noinspection JSCheckFunctionSignatures,JSValidateTypes

const { merge } = require("webpack-merge");
const Dotenv = require("dotenv-webpack");

require("dotenv").config();

const chunkLoadingGlobal = process.env.SDK_NAME?.toString() + "-embed-dev";
const filename = process.env.SDK_EMBED_NAME?.toString() || "embed.js";

module.exports = merge(require("./webpack.app.js"), {
  entry: "./src/embed.dev.js",
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename,
    chunkLoadingGlobal,
  },
  plugins: [new Dotenv()],
});
