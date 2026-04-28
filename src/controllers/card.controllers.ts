import type { Request, Response } from "express";
import { isValidCardNumber } from "../utils/logic.js";

export const validateCard = (req: Request, res: Response) => {
    const { cardNumber } = req.body;

    // Guard clause: the API expects cardNumber in the request payload.
    if (!cardNumber) {
        return res.status(400).json({
            success: false,
            message: "cardNumber is required"
        });
    }

    // Enforce a strict input type before validation.
    if (typeof cardNumber !== "string") {
        return res.status(400).json({
            success: false,
            message: "cardNumber must be a string"
        });
    }

    // Delegate checksum validation to the Luhn logic helper.
    const isValid = isValidCardNumber(cardNumber);

    return res.status(200).json({
        success: true,
        data: {
            cardNumber,
            isValid
        }
    });
};
