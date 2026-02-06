import express from "express";
import { generateAgreementPdf } from "../controllers/pdf.controller.js";

const router = express.Router();

router.get("/dealership-agreement", generateAgreementPdf);

export default router;
