export type BuildType = "production" | "development";

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
  app: string;
  widgets: string;
  features: string;
  pages: string;
  shared: string;
}

export interface BuildOptions {
  mode: BuildType;
  paths: BuildPaths;
  port: number;
  isDevMod: boolean;
}

export interface BuildEnv {
  mode: BuildType;
  port: number;
}
