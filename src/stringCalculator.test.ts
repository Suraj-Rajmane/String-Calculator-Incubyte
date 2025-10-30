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
