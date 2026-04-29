import { isValidCardNumber } from "../utils/logic.js"


// Test case: checks if a valid card number passes validation
describe("Card validation", () => {
  it("should validate a correct card", () => {

    // Example of a valid card number (passes Luhn algorithm)
    expect(isValidCardNumber("4539578763621486")).toBe(true);
  });



  it("should reject invalid card", () => {

    // Test case: checks if an invalid card number fails validation
    expect(isValidCardNumber("1234567890123456")).toBe(false);
  });
});
