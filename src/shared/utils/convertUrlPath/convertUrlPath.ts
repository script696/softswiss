export const convertUrlPath = (path: string, target: "toUrl" | "fromUrl") => {
  if (target === "toUrl") {
    return path.replace("/", "-");
  } else {
    return path.replace("-", "/");
  }
};
