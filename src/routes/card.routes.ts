import { Router } from "express";
import { validateCard } from "../controllers/card.controllers.js";

const router = Router();

// POST /api/validate-card -> validates a card number using Luhn checksum logic.
router.post("/validate-card", validateCard);

export default router;
