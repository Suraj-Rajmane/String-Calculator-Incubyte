import { it, expect, describe } from "vitest";
import stringCalculator from "./stringCalculator";

describe("Basic Functionality", () => {
  it("should evaluate '' to 0", () => {
    expect(stringCalculator("")).toBe(0);
  });

  it("should evaluate '35' to 35", () => {
    expect(stringCalculator("35")).toBe(35);
  });
});

describe("Comma Separator", () => {
  it("should evaluate '1,2' to 3", () => {
    expect(stringCalculator("1,2")).toBe(3);
  });

  it("should evaluate '1,2,3,4,5' to 15", () => {
    expect(stringCalculator("1,2,3,4,5")).toBe(15);
  });
});

describe("Newline Separator", () => {
  it("should evaluate '1\n2\n3' to 6", () => {
    expect(stringCalculator("1\n2\n3")).toBe(6);
  });
});

describe("Mixed Separator(, and \n)", () => {
  it("should evaluate '1\n2,3\n4' to 10", () => {
    expect(stringCalculator("1\n2,3\n4")).toBe(10);
  });
});

describe("Custom Separator", () => {
  it("should evaluate '//;\n1;2;3;4' to 10", () => {
    expect(stringCalculator("//;\n1;2;3;4")).toBe(10);
  });
});

describe("Negative numbers are not allowed", () => {
  it("when one negative number is added", () => {
    expect(() => stringCalculator("-1,2")).toThrowError(
      "negatives not allowed => -1"
    );
  });

  it("when multiple negative numbers are added", () => {
    expect(() => stringCalculator("1,-2,3,-4")).toThrowError(
      "negatives not allowed => -2,-4"
    );
  });
});
