import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import Dotenv from "dotenv-webpack";
const path = require("path");

export function buildPlugins({
  paths,
  isDevMod,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const envPath = isDevMod ? "../../.env.development" : "../../.env.production";

  const plugins = [
    new Dotenv({ path: path.resolve(__dirname, envPath) }),
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDevMod),
    }),
  ];

  if (isDevMod) {
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
  }

  return plugins;
}
