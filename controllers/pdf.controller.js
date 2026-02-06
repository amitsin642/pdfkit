import { buildAgreementPdf } from "../services/pdf.service.js";

export const generateAgreementPdf = async (req, res) => {
  try {
    const pdfBuffer = await buildAgreementPdf();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Dealership_Agreement.pdf"
    );

    res.send(pdfBuffer);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "fail",
      message: "PDF generation failed",
    });
  }
};
