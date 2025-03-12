const camelCase = require("../src/camelCase.js");

test("Test camelCase function", () => {
    expect(camelCase("hello world")).toBe("helloWorld");
    expect(camelCase("hello   world    ")).toBe("helloWorld");
    expect(camelCase("hello   world  hi   ")).toBe("helloWorldHi");
});
