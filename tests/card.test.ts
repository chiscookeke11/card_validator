import { isValidCardNumber } from "../src/utils/logic";

describe("Card validation", () => {
  it("should validate a correct card", () => {
    expect(isValidCardNumber("4539578763621486")).toBe(true);
  });

  it("should reject invalid card", () => {
    expect(isValidCardNumber("1234567890123456")).toBe(false);
  });
});