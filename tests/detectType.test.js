const detectType = require("../src/detectType.js");

test("Test detectType function", () => {
    expect(detectType(1)).toBe("number");
    expect(detectType(new Map())).toBe("map");
    expect(detectType([])).toBe("array");
    expect(detectType(new Date())).toBe("date");
    expect(detectType({})).toBe("object");
    expect(detectType(new WeakMap())).toBe("weakmap");
    expect(detectType("My Primitive String")).toBe("string");
    expect(detectType("My Object String")).toBe("string");


    // expect(detectType()).toBe();
});