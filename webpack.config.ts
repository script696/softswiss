import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths, BuildType } from "./config/build/types/config";
import path from "path";

export const PATHS: BuildPaths = {
  src: path.resolve(__dirname, "src"),
  entry: path.resolve(__dirname, "src", "index.tsx"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
  app: path.resolve(__dirname, "src/app"),
  widgets: path.resolve(__dirname, "src", "widgets"),
  features: path.resolve(__dirname, "src", "features"),
  pages: path.resolve(__dirname, "src/pages"),
  shared: path.resolve(__dirname, "src/shared"),
};

export default (env: BuildEnv) => {
  const PORT = env.port || 3000;
  const MODE: BuildType = env.mode || "development";
  const isDevMod = MODE === "development";

  const config: webpack.Configuration = buildWebpackConfig({
    mode: MODE,
    paths: PATHS,
    port: PORT,
    isDevMod,
  });
  return config;
};
