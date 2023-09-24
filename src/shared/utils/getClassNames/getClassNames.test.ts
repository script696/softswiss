import { getClassNames } from "@shared/utils";

describe("classnames", () => {
  test("with only one param", () => {
    expect(getClassNames("someClass")).toBe("someClass");
  });

  test("with additional class", () => {
    const expected = "someClass class1 class2";
    expect(getClassNames("someClass", {}, ["class1", "class2"])).toBe(expected);
  });

  test("with mods", () => {
    const expected = "someClass class1 class2 hovered scrollable";
    expect(
      getClassNames("someClass", { hovered: true, scrollable: true }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });

  test("with mods fasle", () => {
    const expected = "someClass class1 class2 hovered";
    expect(
      getClassNames("someClass", { hovered: true, scrollable: false }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });
});
