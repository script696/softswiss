import { BuildOptions } from "./types/config";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    allowedHosts: "all",
    port: options.port,
    open: false,
    historyApiFallback: true,
  };
}
