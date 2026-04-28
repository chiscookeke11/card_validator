import { isValidCardNumber } from "../utils/logic.js";
describe("Card validation", () => {
    it("should validate a correct card", () => {
        expect(isValidCardNumber("4539578763621486")).toBe(true);
    });
    it("should reject invalid card", () => {
        expect(isValidCardNumber("1234567890123456")).toBe(false);
    });
});
//# sourceMappingURL=card.test.js.map