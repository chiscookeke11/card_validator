

import { isValidCardNumber } from "../utils/logic.js";
export const validateCard = (req, res) => {
    const { cardNumber } = req.body;

    // Guard clause: request must include a card number.
    if (!cardNumber) {
        return res.status(400).json({
            success: false,
            message: "cardNumber is required"
        });
    }

    // Guard clause: we only accept a string payload for validation.
    if (typeof cardNumber !== "string") {
        return res.status(400).json({
            success: false,
            message: "cardNumber must be a string"
        });
    }

    // Delegate validation logic to utility so controller stays focused on HTTP behavior.
    const isValid = isValidCardNumber(cardNumber);

    return res.status(200).json({
        success: true,
        data: {
            cardNumber,
            isValid
        }
    });
};
