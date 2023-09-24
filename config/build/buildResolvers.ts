import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers({ paths }: BuildOptions): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    modules: [paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {
      "@app": paths.app,
      "@widgets": paths.widgets,
      "@features": paths.features,
      "@pages": paths.pages,
      "@shared": paths.shared,
    },
  };
}
