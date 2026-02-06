import PDFDocument from "pdfkit";

export const buildAgreementPdf = () => {
  const doc = new PDFDocument({
    size: "A4",
    margins: {
      top: 50,
      bottom: 50,
      left: 50,
      right: 50,
    },
  });

  const buffers = [];
  doc.on("data", buffers.push.bind(buffers));

  return new Promise((resolve, reject) => {
    doc.on("end", () => resolve(Buffer.concat(buffers)));
    doc.on("error", reject);

    const normal = () => doc.font("Times-Roman").fontSize(11);
    const bold = () => doc.font("Times-Bold").fontSize(11);
    const heading = () => doc.font("Times-Bold").fontSize(13);

    // =========================
    // TITLE
    // =========================
    heading();
    doc.text("DEALERSHIP AGREEMENT", { align: "center" });
    doc.moveDown(2);

    // =========================
    // INTRO
    // =========================
    normal();
    doc.text(
      "THIS Dealership Agreement (hereinafter referred to as the “Agreement”) is made on this ___ day of ______, 2026 (hereinafter referred to as the “Execution Date”) at _________.",
      { align: "justify" },
    );

    doc.moveDown(2);

    // =========================
    // BY AND BETWEEN
    // =========================
    bold();
    doc.text("BY AND BETWEEN");
    doc.moveDown(1);

    normal();
    doc.text(
      "QUANTIQUE METADATA PRIVATE LIMITED (CIN: U72900DL2020PTC360461) a company duly incorporated under the Companies Act, 2013 and having its registered office at 12, First Floor, Hargovind Enclave, Karkardooma, Metro Pillar 118, East Delhi, Delhi, India, 110092, acting through its Director, Mr. Ahamed Mohideen Mohamed Muzha Thamim (hereinafter referred to as the “Company”, which expression shall, unless it be inconsistent to the context or meaning thereof, be deemed to include its successors, representatives in interest and permitted assign) of the FIRST PART;",
      { align: "justify" },
    );

    doc.moveDown(2);

    doc.text(
      "AND __________________, a (Company/LLP/Partnership/Proprietorship) duly incorporated under the provisions of the ___________________ and having its registered office at __________________, acting through its Director/Partner/Authorized Signatory ________________ (hereinafter referred to as the “Dealer”, which expression shall, unless it be inconsistent to the context or meaning thereof, be deemed to include its successors, representatives in interest and permitted assign) of the SECOND PART.",
      { align: "justify" },
    );

    doc.moveDown(2);

    // =========================
    // WHEREAS
    // =========================
    bold();
    doc.text("WHEREAS");
    doc.moveDown(1);

    renderWhereasPoint(
      doc,
      "A",
      "The Company is engaged in the business of offering specialized products, skills, expertise, software, and information technology (IT) services, including but not limited to business promotion and IT solutions for companies and organizations.",
    );

    renderWhereasPoint(
      doc,
      "B",
      "The Dealer is an independent entity engaged in the business of selling two-wheeler vehicles;",
    );

    renderWhereasPoint(
      doc,
      "C",
      "The Company is the sole and exclusive owner of its proprietary digital platform (the “Platform”) for the complete management and servicing of extended warranty products (the “EW Policies”) for two-wheeler vehicles, which the Dealer seeks to leverage to offer an ancillary service to its end customers (the “Customer(s)”);",
    );

    renderWhereasPoint(
      doc,
      "D",
      "The Parties therefore desire to collaborate, where the Company shall grant the Dealer a non-exclusive, revocable right to access the Platform and sell the EW Policies listed on it to the Customers, and the Dealer shall provide the necessary sales and promotional support for the same.",
    );

    doc.moveDown(2);
    doc.x = doc.page.margins.left;

    // =========================
    // NOW THEREFORE CLAUSE
    // =========================
    doc.moveDown(1);

    doc
      .font("Times-Bold")
      .fontSize(11)
      .text(
        "NOW THEREFORE, IN CONSIDERATION OF THE PREMISES AND MUTUAL COVENANTS AND AGREEMENTS HEREIN CONTAINED, AND OTHER GOOD AND VALUABLE CONSIDERATION, THE RECEIPT AND SUFFICIENCY OF WHICH ARE HEREBY ACKNOWLEDGED, THE PARTIES HERETO AGREE AS FOLLOWS:",
        {
          align: "justify",
        },
      );

    doc.moveDown(2);

    // =========================
    // CLAUSE 1 – Scope of Services
    // =========================
    renderClauseHeading(doc, 1, "Scope of Services");

    renderSubClause(
      doc,
      "1.1",
      "The Company hereby grants to the Dealer, and the Dealer hereby accepts, non-transferable, and revocable right to access and use the Platform solely for the purpose of promoting, marketing, and selling the proprietary EW Policies for two-wheeler vehicles to the Dealer's Customers, strictly in accordance with the terms, specifications and procedures dictated by the Company through the Platform or as otherwise communicated.",
    );

    renderSubClause(
      doc,
      "1.2",
      "The Dealer shall perform its Service obligations using the current, pre-approved EW Policies provided by the Company and shall strictly adhere to the pricing, eligibility and service terms defined and updated by the Company from time to time.",
    );

    renderSubClause(
      doc,
      "1.3",
      "The Dealer shall not offer, nor make any attempt to offer, any customised or altered services, products, or extended warranty programs outside of the specific EW Policies available on the Platform. The Dealer shall not make any promises or representations that exceed or deviate from the terms of the listed EW Policies.",
    );

    renderSubClause(
      doc,
      "1.4",
      "The Company reserves the sole right, at any time and without prior consent from the Dealer, to increase, decrease, alter, or discontinue the scope of the Services, including any change to the EW Policies, pricing, eligibility criteria, or the functionalities of the Platform. The Dealer shall not change or modify, or request the Company to change or modify the Services under this Agreement which substantially changes the standard of Services as agreed at the time of signing of this Agreement, and in case of any such unauthorized modifications to the Services, the Company shall not be liable for any issue arising from such unauthorized modifications, or for any commitment(s) that the Dealer makes with respect to special interfacing, compatibility or suitability of Service(s) and support.",
    );

    renderSubClause(
      doc,
      "1.5",
      "The Dealer acknowledges and agrees that the Company is solely providing access to its Platform and related tools, and shall not be responsible for the accuracy, completeness, or correctness of any data, information, or content entered, uploaded, or processed through the Platform. The responsibility for verifying, validating, and ensuring the accuracy and integrity of all data and outputs generated using the Platform shall rest entirely with the Dealer. The Company shall have no liability for any errors, omissions, or inaccuracies arising from data provided or managed by the Dealer.",
    );

    renderSubClause(
      doc,
      "1.6",
      "The Dealer shall indemnify, defend, and hold harmless the Company, its affiliates, and officers from and against any losses, claims, liabilities, or damages arising out of or in connection with any unauthorized representations, alterations, or deviations made by the Dealer from the Platform, the Services, the listed EW Policies, or terms as determined by the Company.",
    );

    renderSubClause(
      doc,
      "1.7",
      "The Parties agree that the privacy policy and terms and conditions available on the Platform’s website shall apply to this Agreement. The Parties further acknowledge that such privacy policy and terms and conditions may be amended or updated by the Company from time to time at its sole discretion, and the continued use of the Platform by the Dealer shall constitute acceptance of such amendments.",
    );

    doc.moveDown(2);

    // END PDF
    doc.end();
  });
};

const renderWhereasPoint = (doc, label, text) => {
  const startX = doc.page.margins.left;
  const textX = startX + 20;
  const maxWidth = doc.page.width - doc.page.margins.right - textX;

  const y = doc.y;

  // Marker (A., B., C.)
  doc.font("Times-Bold").text(`${label}.`, startX, y);

  // Clause text
  doc.font("Times-Roman").text(text, textX, y, {
    width: maxWidth,
    align: "justify",
  });

  // 🔑 IMPORTANT: manually move cursor below the block
  doc.y = doc.y + 5;
};

const renderClauseHeading = (doc, number, title) => {
  doc.x = doc.page.margins.left;
  doc.font("Times-Bold").fontSize(12).text(`${number}. ${title}`);
  doc.moveDown(1);
};

const renderSubClause = (doc, number, text) => {
  const startX = doc.page.margins.left;
  const numberX = startX;
  const textX = startX + 30;
  const maxWidth =
    doc.page.width - doc.page.margins.right - textX;

  // Measure text height
  const textHeight = doc.heightOfString(text, {
    width: maxWidth,
    align: "justify",
  });

  const requiredHeight = Math.max(textHeight, 15);
  const remainingHeight =
    doc.page.height - doc.page.margins.bottom - doc.y;

  // Page break BEFORE rendering if needed
  if (requiredHeight > remainingHeight) {
    doc.addPage();
    doc.x = startX;
  }

  const y = doc.y;

  // Clause number
  doc.font("Times-Roman").fontSize(11).text(number, numberX, y);

  // Clause text
  doc.font("Times-Roman").fontSize(11).text(text, textX, y, {
    width: maxWidth,
    align: "justify",
  });

  // 🔑 Let PDFKit naturally advance Y
  doc.moveDown(1);
};

