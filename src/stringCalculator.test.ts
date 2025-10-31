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
