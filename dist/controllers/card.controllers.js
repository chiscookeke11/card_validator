import { isValidCardNumber } from "../utils/logic.js";
export const validateCard = (req, res) => {
    const { cardNumber } = req.body;
    if (!cardNumber) {
        return res.status(400).json({
            success: false,
            message: "cardNumber is required"
        });
    }
    if (typeof cardNumber !== "string") {
        return res.status(400).json({
            success: false,
            message: "cardNumber must be a string"
        });
    }
    const isValid = isValidCardNumber(cardNumber);
    return res.status(200).json({
        success: true,
        data: {
            cardNumber,
            isValid
        }
    });
};
//# sourceMappingURL=card.controllers.js.map