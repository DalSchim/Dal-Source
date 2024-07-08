import median from "../src/median.js";

test("median", () => {
    expect(median([1, 2, 3, 4, 5])).toBe(3);
})