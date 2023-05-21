import { it, expect, describe } from "vitest";

import { cleanNumbers, transformToNumber } from "./numbers";

describe("transformToNumber", () => {
  it("should transform a string number to a number of type number", () => {
    const input = "1";

    const result = transformToNumber(input);

    expect(result).toBeTypeOf("number");
  });

  it("should transform a string number to a number of type number", () => {
    const input = "1";

    const result = transformToNumber(input);

    expect(result).toBe(+input);
  });

  it("should yield NaN for non-transformable values", () => {
    const input = "invalid";
    const input2 = {};

    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
});

describe("cleanNumbers", () => {
  it("should return an array if number valus if an array string number is provided", () => {
    const numbers = ["1", "2"];
    const result = cleanNumbers(numbers);
    //expect(result[0]).toBeTypeOf("number");

    //if you want to compare it to an array you have to use toEqual
    expect(result).toEqual([1, 2]);
  });
  it("should throw an error if an array with at least one empty string is provided", () => {
    const numberValues = ["", 1];
    const cleanFn = () => cleanNumbers(numberValues);
    expect(cleanFn).toThrow();
  });
});
