/* eslint-disable no-undef */
// noinspection JSCheckFunctionSignatures,JSValidateTypes

const { merge } = require("webpack-merge");
const Dotenv = require("dotenv-webpack");

const dotConfig = {
  path: process.env.SET_ENV_STAGING ? "./.env.staging" : "./.env.production",
};
require("dotenv").config(dotConfig);

const chunkLoadingGlobal = process.env.SDK_NAME?.toString() + "-embed";
const filename = process.env.SDK_EMBED_NAME?.toString() || "embed.js";

module.exports = merge(require("./webpack.app.js"), {
  entry: "./src/embed.js",
  mode: "production",
  devtool: false,
  output: {
    filename,
    chunkLoadingGlobal,
  },
  plugins: [new Dotenv(dotConfig)],
});
