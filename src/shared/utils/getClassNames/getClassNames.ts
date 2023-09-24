type Mods = Record<string, boolean | string>;

export const getClassNames = (
  cls: string,
  mods: Mods = {},
  additional: Array<string> = []
): string => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
};
