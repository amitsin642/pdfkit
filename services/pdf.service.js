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
      doc.text("THIS Dealership Agreement (hereinafter referred to as the ", { continued: true });

      bold();
      doc.text("\"Agreement\"", { continued: true });

      normal();
      doc.text(") is made on this ___ day of ______, 2026 (hereinafter referred to as the ", { continued: true });

      bold();
      doc.text("\"Execution Date\"", { continued: true });

      normal();
      doc.text(") at _________.", { align: "justify" });

      doc.moveDown(2);


    // =========================
    // BY AND BETWEEN
    // =========================
    bold();
    doc.text("BY AND BETWEEN", { align: "center" });
    doc.moveDown(1);

    bold();
    doc.text("QUANTIQUE METADATA PRIVATE LIMITED (CIN: U72900DL2020PTC360461)", { 
      align: "justify",
      continued: true 
    });

    normal();
    doc.text("a company duly incorporated under the Companies Act, 2013 and having its registered office at 12, First Floor, Hargovind Enclave, Karkardooma, Metro Pillar 118, East Delhi, Delhi, India, 110092, acting through its Director, Mr. Ahamed Mohideen Mohamed Muzha Thamim (hereinafter referred to as the \"Company\", which expression shall, unless it be inconsistent to the context or meaning thereof, be deemed to include its successors, representatives in interest and permitted assign) of the FIRST PART;", 
    { align: "justify" });

    doc.moveDown(2);

    bold();
      doc.text("AND", { align: "center" });
      doc.moveDown(1);

    doc.text(
      "__________________, a (Company/LLP/Partnership/Proprietorship) duly incorporated under the provisions of the ___________________ and having its registered office at __________________, acting through its Director/Partner/Authorized Signatory ________________ (hereinafter referred to as the “Dealer”, which expression shall, unless it be inconsistent to the context or meaning thereof, be deemed to include its successors, representatives in interest and permitted assign) of the SECOND PART.",
      { align: "justify" },
    );

    doc.moveDown(2);

    // WHEREAS

    bold();
    doc.text("WHEREAS",{ align: "center" });
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

    // =========================
    // CLAUSE 2 – Platform Access and Usage
    // =========================
    renderClauseHeading(doc, 2, "Platform Access and Usage");

    renderSubClause(
      doc,
      "2.1",
      "The access to the Platform granted to the Dealer under this Agreement is limited, non-exclusive, non-transferable, revocable, and password-protected, and shall be used strictly for the purposes permitted under this Agreement.",
    );

    renderSubClause(
      doc,
      "2.2",
      "The Dealer shall not, directly or indirectly:",
    );

    // Bulleted restrictions under 2.2
    renderBulletPoint(
      doc,
      "copy, reproduce, modify, reverse engineer, decompile, or otherwise attempt to derive the source code of the Platform;",
    );

    renderBulletPoint(
      doc,
      "extract, scrape, or misuse any data available on or through the Platform; or",
    );

    renderBulletPoint(
      doc,
      "permit any unauthorised person to access or use the Platform.",
    );

    doc.moveDown(0.5);

    renderSubClause(
      doc,
      "2.3",
      "The Dealer shall be solely responsible for maintaining the confidentiality and security of its access credentials and for all activities carried out through its account on the Platform.",
    );

    renderSubClause(
      doc,
      "2.4",
      "Without prejudice to any other rights or remedies available under this Agreement, the Company may, at its sole discretion, suspend, restrict, or revoke the Dealer’s access to the Platform, in whole or in part, in the event of any breach, suspected misuse, or non-compliance with this Agreement.",
    );

    renderSubClause(
      doc,
      "2.5",
      "Suspension or restriction of access to the Platform shall not relieve the Dealer of its obligations under this Agreement, nor shall it be construed as a waiver of the Company’s right to terminate this Agreement or seek any other remedy available under law or equity.",
    );

    doc.moveDown(2);

    // =========================
    // CLAUSE 3 – Responsibilities of the Parties
    // =========================
    renderClauseHeading(doc, 3, "Responsibilities of the Parties");

    // 3.1
    renderSubClause(
      doc,
      "3.1",
      "The Dealer hereby acknowledges and agrees that, within the purview of this Agreement and in consideration of the access granted to the Platform and EW Policies, the Dealer shall be solely responsible for the following:",
    );

    // 3.1.1 – 3.1.5
    renderNestedSubClause(
      doc,
      "3.1.1",
      "EW Policies, ensuring no EW Polices are sold outside of the prescribed Platform.",
    );

    renderNestedSubClause(
      doc,
      "3.1.2",
      "The Dealer shall actively engage with the Customers, providing information on the EW Policies that is strictly accurate, non-misleading, and consistent with the Company's official documentation and terms. The Dealer shall not make any representations or warranties that are not expressly contained in the relevant EW Policy documentation.",
    );

    renderNestedSubClause(
      doc,
      "3.1.3",
      "The Dealer shall ensure that all sales activities, marketing, and Customer interactions related to the Services comply fully with all applicable central, state, and local laws, rules, and applicable regulations, including but not limited to consumer protection and applicable data protection laws.",
    );

    renderNestedSubClause(
      doc,
      "3.1.4",
      "The Dealer shall maintain accurate and complete records of every transaction with respect to sale of EW Policies under this Agreement and shall grant the Company or its nominated third-party auditor full access to these records, and relevant premises upon reasonable notice, to verify compliance with this Agreement.",
    );

    renderNestedSubClause(
      doc,
      "3.1.5",
      "The Dealer shall promptly, and in any event within seven (7) business day of becoming aware, escalate to the Company any complaints, disputes, or issues related to the EW Policy terms, claims processing, or Platform functionality. The Dealer shall not make any commitments, representations, or assurances to the Customer regarding the resolution of such matters without prior written consent from the Company.",
    );

    // 3.2
    renderSubClause(
      doc,
      "3.2",
      "The Company agrees to undertake the following responsibilities in support of the Services, subject to the Dealer's full compliance with this Agreement:",
    );

    // 3.2.1 – 3.2.2
    renderNestedSubClause(
      doc,
      "3.2.1",
      "The Company shall use commercially reasonable efforts to maintain the functionality and accessibility of the Platform, allowing the Dealer to promote, and sell its EW Policies. This obligation is subject to scheduled maintenance, upgrades, and Force Majeure events.",
    );

    renderNestedSubClause(
      doc,
      "3.2.2",
      "The Company shall be responsible for the creation, administration, and servicing of its EW Policies sold through the Platform, including but not limited to, handling of claims and providing official policy documentation to the Dealer for onward transmission to the Customer.",
    );

    doc.moveDown(2);

    // =========================
    // CLAUSE 4 – Financial Covenants
    // =========================
    renderClauseHeading(doc, 4, "Financial Covenants");

    renderSubClause(
      doc,
      "4.1",
      "The Parties hereby agree that all gross proceeds, fees, charges, and payments collected from the Dealer's Customers for the purchase of the EW Policies via the Platform (the \"Gross Revenue\") shall be remitted directly and exclusively to the Company's designated bank account and within the timeline specified by the Company.",
    );

    renderSubClause(
      doc,
      "4.2",
      'The Company shall pay the Dealer a commission on the successful, valid, and fully-paid sale of the EW Policies to the Customers, as determined by the mutually agreed upon Commission rate between the Parties (the "Commission").',
    );

    renderSubClause(
      doc,
      "4.3",
      "The Dealer shall submit an invoice to the Company on a monthly basis for the Commission, which shall be calculated based on the successful sales of the EW Policies. The Company shall remit the agreed Commission within seven (7) days from the date of receipt of a valid and undisputed invoice, subject to the Company’s verification, satisfaction, and compliance by the Dealer with all terms and conditions of this Agreement.",
    );

    renderSubClause(
      doc,
      "4.4",
      "Notwithstanding any other provision herein, the Company’s obligation to remit the Commission is expressly subordinate to and limited by its absolute and perpetual right of set-off. The Company reserves the right, at its sole discretion and without prior notice to the Dealer, to deduct from the Commission any amounts owed by the Dealer to the Company.",
    );

    renderSubClause(
      doc,
      "4.5",
      "The Dealer shall maintain complete and accurate records, books, and supporting documentation evidencing each sale and the corresponding Commission claim. Such records shall be retained for a minimum period as required under applicable law or as reasonably requested by the Company, and shall be made available for inspection or verification upon request.",
    );

    doc.moveDown(2);

    // =========================
    // CLAUSE 5 – Obligations of the Dealer with Respect to the Claims
    // =========================
    renderClauseHeading(
      doc,
      5,
      "Obligations of the Dealer with Respect to the Claims",
    );

    // Intro / definition paragraph (unnumbered, but aligned like sub-clause text)
    renderSubClause(
      doc,
      "",
      "For the purposes of this Clause, “EW Policy Issuer” shall mean the insurer or entity issuing the extended warranty policy.",
    );

    // 5.1
    renderSubClause(
      doc,
      "5.1",
      "The Dealer agrees and undertakes that all claims raised by Customers in relation to the EW Policy shall be initiated, recorded, and processed exclusively through the Platform, in the manner prescribed by the Company from time to time.",
    );

    // 5.2
    renderSubClause(
      doc,
      "5.2",
      "While addressing any claim under the EW Policy, the Dealer shall comply with the following obligations:",
    );

    // Bullets under 5.2
    renderBulletPoint(
      doc,
      "promptly notify and intimate the Company and the EW Policy Issuer of the receipt of such claim, along with all requisite information and documentation as may be required.",
    );

    renderBulletPoint(
      doc,
      "obtain prior approval from the EW Policy Issuer and the Company, before initiating any repair, replacement, or other fulfilment action under the EW Policy.",
    );

    renderBulletPoint(
      doc,
      "undertake repairs or fulfil the EW Policy strictly in accordance with the approval granted and the scope permitted under the EW Policy, and not otherwise.",
    );

    doc.moveDown(0.5);

    // 5.3
    renderSubClause(
      doc,
      "5.3",
      "The Dealer shall raise invoices to the respective EW Policy Issuer in relation to repairs or services rendered under the EW Policy only after the relevant claim has been duly approved and successfully processed on the Platform, and strictly in the manner and format prescribed by the Company and EW Policy Issuer.",
    );

    // 5.4
    renderSubClause(
      doc,
      "5.4",
      "The Dealer agrees that any deviation from the procedure set out herein or from the terms of the EW Policy shall be at the sole risk and cost of the Dealer, and the Company and/or the EW Policy Issuer shall not be liable for any payments, reimbursements, or obligations arising from such deviation.",
    );

    doc.moveDown(2);

    // =========================
    // CLAUSE 6 – Term
    // =========================
    renderClauseHeading(doc, 6, "Term");

    renderSubClause(
      doc,
      "6.1",
      "This Agreement shall come into effect from __________ 2026 (the “Effective Date”) and shall remain in force unless terminated by either Party in accordance with the provisions of this Agreement (the “Term”).",
    );

    renderSubClause(
      doc,
      "6.2",
      "Notwithstanding the above, all rights and obligations of the Parties in respect to the Term of this Agreement shall survive and remain enforceable until fully performed or otherwise lawfully discharged.",
    );

    doc.moveDown(2);

    // =========================
    // CLAUSE 7 – Termination
    // =========================
    renderClauseHeading(doc, 7, "Termination");

    // 7.1
    renderSubClause(
      doc,
      "7.1",
      "The Company shall have the right to terminate this Agreement, in whole or in part, at any time, without assigning any cause, by providing fifteen (15) days’ prior written notice to the Dealer.",
    );

    // 7.2
    renderSubClause(
      doc,
      "7.2",
      "The Dealer shall be entitled to terminate this Agreement by a notice, the period of which shall not be less than thirty (30) days.",
    );

    // 7.3
    renderSubClause(
      doc,
      "7.3",
      "Additionally, the Company shall be entitled to immediately terminate this Agreement, without any liability, and without prior notice in any of the following events:",
    );

    // 7.3.1 – 7.3.5
    renderNestedSubClause(
      doc,
      "7.3.1",
      "If the Dealer, in the opinion of the Company, is acting in any manner detrimental to the interests of the Company, or is incapable of carrying out its duties hereinabove mentioned.",
    );

    renderNestedSubClause(
      doc,
      "7.3.2",
      "If the Dealer is declared insolvent, enters liquidation (whether voluntary or involuntary), or becomes subject to any bankruptcy, reorganization, or similar proceedings.",
    );

    renderNestedSubClause(
      doc,
      "7.3.3",
      "If the Dealer damages or causes to damage the reputation of the Company or its Customers.",
    );

    renderNestedSubClause(
      doc,
      "7.3.4",
      "If the Dealer commits a material breach of any provision of this Agreement.",
    );

    renderNestedSubClause(
      doc,
      "7.3.5",
      "If the Dealer makes any unauthorized use or disclosure of the Company’s Confidential Information or Intellectual Property.",
    );

    doc.moveDown(2);

    // =========================
    // CLAUSE 8 – Post Termination Obligations
    // =========================
    renderClauseHeading(doc, 8, "Post Termination Obligations");

    // 8.1
    renderSubClause(
      doc,
      "8.1",
      "Upon termination or expiration of this Agreement, the Dealer shall immediately cease all the Services and activities related to the Company, including the access to the Platform, promotion and sale of the EW Policies, except as required for any necessary transition assistance as agreed in writing by the Company. The Dealer shall not be entitled to any extra payment or Commission for such transition assistance.",
    );

    // 8.2
    renderSubClause(
      doc,
      "8.2",
      "The Dealer shall, within seven (7) days of the effective date of termination, either:",
    );

    // Bullets under 8.2
    renderBulletPoint(
      doc,
      "Return to the Company all documents, materials, equipment, and property belonging to the Company, including but not limited to Confidential Information, Intellectual Property (specifically access codes/logins for the Platform), reports, data, records, and work products; or",
    );

    renderBulletPoint(
      doc,
      "Destroy such materials if instructed in writing by the Company and provide written certification, signed by the Dealer, confirming their complete and permanent destruction.",
    );

    doc.moveDown(0.5);

    // 8.3
    renderSubClause(
      doc,
      "8.3",
      "The Dealer shall immediately cease using the Company’s trademarks, logos, trade names, proprietary information, Confidential Information, and any other Intellectual Property associated with the Platform or EW Policies. The Dealer shall not claim any association with the Company post-termination under any circumstance without prior written consent from the Company.",
    );

    // 8.4
    renderSubClause(
      doc,
      "8.4",
      "Notwithstanding termination or expiration of this Agreement, the EW Policies validly sold by the Dealer prior to the effective date of termination shall remain valid and enforceable in accordance with their respective terms until expiry, and the rights of Customers thereunder shall not be affected.",
    );

    // 8.5
    renderSubClause(
      doc,
      "8.5",
      "All claims pending as on, or arising after, the effective date of termination in respect of Existing Policies shall be handled, processed, approved or rejected solely by the Company and/or the EW Policy Issuer in accordance with the applicable EW Policy terms. Post-termination, the Dealer shall have no authority to approve, reject, commit to, or make any representation regarding any such claims, except for limited documentation or information transfer expressly required by the Company during a transition period not exceeding thirty (30) days.",
    );

    // 8.6
    renderSubClause(
      doc,
      "8.6",
      "The Dealer shall not be entitled to any commission, fee, or incentive in respect of claims, renewals, extensions, upgrades, or any services provided after termination. All Customers to whom EW Policies were sold during the Term shall, for post-termination purposes, be deemed to be customers of the Company and/or the EW Policy Issuer, and the Dealer shall have no ownership, proprietary right, or continuing interest therein.",
    );

    // 8.7
    renderSubClause(
      doc,
      "8.7",
      "Post-termination, all communications with Customers in relation to Existing Policies shall be undertaken solely by the Company and/or the EW Policy Issuer, and the Dealer shall not solicit, contact, or offer any renewal, extension, or modification of Existing Policies.",
    );

    // 8.8
    renderSubClause(
      doc,
      "8.8",
      "All clauses of this Agreement including this clause which are express, or which by implication are intended to survive the termination of this Agreement shall so survive and continue in full force and effect notwithstanding the termination or expiration of this Agreement.",
    );

    doc.moveDown(2);

    // =========================
    // CLAUSE 9 – Representations and Warranties
    // =========================
    renderClauseHeading(doc, 9, "Representations and Warranties");

    // Intro paragraph (unnumbered, aligned like sub-clause text)
    renderSubClause(
      doc,
      "",
      "The Dealer represents and warrants to the Company as of the Effective Date and throughout the Term of this Agreement as follows:",
    );

    // 9.1
    renderSubClause(
      doc,
      "9.1",
      "The Dealer is in full compliance with all applicable laws, regulations, and statutes in India as may be applicable to its business operations.",
    );

    // 9.2
    renderSubClause(
      doc,
      "9.2",
      "The Dealer has the full power, capacity, and legal authority to enter into this Agreement and perform its obligations hereunder.",
    );

    // 9.3
    renderSubClause(
      doc,
      "9.3",
      "The Dealer acknowledges and confirms that it is not a party to any agreement, and knows of no law, regulation, or order, that would prohibit it from entering into and performing its obligations under this Agreement, or that would otherwise conflict with the terms of this Agreement.",
    );

    // 9.4
    renderSubClause(
      doc,
      "9.4",
      "The Dealer agrees to promptly notify the Company of any claim, action, or litigation that could affect the rights or obligations under this Agreement or the Dealer's ability to perform its obligations under this Agreement.",
    );

    // 9.5
    renderSubClause(
      doc,
      "9.5",
      "As of the date of this Agreement, there is no litigation, proceeding, or dispute pending or threatened against the Dealer, the adverse determination of which may have a material adverse effect on the Dealer's ability to perform its obligations under this Agreement.",
    );

    // 9.6
    renderSubClause(
      doc,
      "9.6",
      "It shall not misuse, reverse engineer, or permit unauthorised access to the Platform or the Company’s Intellectual Property, and shall ensure that its personnel comply with the Company’s guidelines and instructions in this regard.",
    );

    // 9.7
    renderSubClause(
      doc,
      "9.7",
      "The Dealer shall ensure that no employee, agent, or representative makes any oral or written statement regarding the coverage, eligibility, pricing, or claim process of the EW Policies that is not explicitly contained in the Company's current, pre-approved official documentation.",
    );

    // 9.8
    renderSubClause(
      doc,
      "9.8",
      "The Dealer acknowledges that any misrepresentation or breach of the warranties provided in this Clause shall constitute a material breach of this Agreement, entitling the Company to terminate the Agreement immediately without liability and to seek any applicable legal remedies, including damages and indemnification.",
    );

    doc.moveDown(2);

    // =========================
    // CLAUSE 10 – Confidentiality
    // =========================
    renderClauseHeading(doc, 10, "Confidentiality");

    // 10.1
    renderSubClause(
      doc,
      "10.1",
      "For the purposes of this Agreement, the “Confidential Information” means any non-public, proprietary, or sensitive information, whether written, oral, electronic, or in any other form, disclosed by the Company (the “Disclosing Party”) to the Dealer (the “Receiving Party”) in connection with this Agreement, and in reference to the Services. The Confidential Information shall include, but is not limited to, Platform, business plans, Customer data, trade secrets, technical information, financial data, strategies, and any other information that is designated as confidential or which by its nature should reasonably be understood to be confidential.",
    );

    // 10.2
    renderSubClause(doc, "10.2", "Obligations of Confidentiality:");

    // Bullets under 10.2
    renderBulletPoint(
      doc,
      "The Receiving Party agrees to maintain the confidentiality of the Confidential Information and shall not disclose it to any third party without the prior written consent of the Disclosing Party, except as expressly permitted under this Agreement.",
    );

    renderBulletPoint(
      doc,
      "The Receiving Party shall use the Confidential Information solely for the purpose of performing its obligations under this Agreement and for no other purpose.",
    );

    renderBulletPoint(
      doc,
      "The Receiving Party shall take all reasonable measures to protect the Confidential Information, including implementing security procedures and limiting access to its employees, agents, or contractors on a need-to-know basis.",
    );

    renderBulletPoint(
      doc,
      "The Receiving Party shall use all reasonable steps to ensure that Confidential Information received under the Agreement is not disclosed by its employees or agents in violation of this Clause, and is used solely for the purposes of this Agreement and not for any other purpose whatsoever.",
    );

    renderBulletPoint(
      doc,
      "The Receiving Party shall not publicize or disclose to any third party the contents of this Agreement without prior written consent from the Disclosing Party.",
    );

    doc.moveDown(0.5);

    // 10.3
    renderSubClause(
      doc,
      "10.3",
      "Upon the termination or expiration of this Agreement, or upon written request from the Disclosing Party, the Receiving Party shall, within fifteen (15) days, return or permanently destroy (at the Disclosing Party’s discretion) all the Confidential Information, including all copies, extracts, and summaries thereof, in any form or medium. The Receiving Party shall confirm such return or destruction in writing, at the request of the Disclosing Party. If retention is required by applicable law or regulation, the Receiving Party shall notify the Disclosing Party in writing of such requirement, and shall continue to treat the retained Confidential Information in accordance with this Clause.",
    );

    // 10.4
    renderSubClause(
      doc,
      "10.4",
      "The Receiving Party acknowledges and agrees that any unauthorized retention, use, disclosure, or misuse of the Confidential Information shall constitute a material breach of this Agreement and shall cause irreparable harm to the Disclosing Party, for which monetary damages may be inadequate. The Receiving Party shall be liable to indemnify and hold harmless the Disclosing Party from and against any and all claims, losses, liabilities, damages, costs, and expenses (including reasonable legal fees) arising out of or in connection with any such breach.",
    );

    // 10.5
    renderSubClause(
      doc,
      "10.5",
      "This confidentiality obligation as stated in this Clause shall remain in effect for a period of 3 (three) years after the termination of this Agreement.",
    );

    doc.moveDown(2);

    // =========================
    // CLAUSE 11 – Intellectual Property Rights
    // =========================
    renderClauseHeading(doc, 11, "Intellectual Property Rights");

    // 11.1
    renderSubClause(
      doc,
      "11.1",
      "“Intellectual Property” or “Company IP” shall mean all trade names, trademarks, brands, logos, get-up, style, livery, patents, registered designs, unregistered design rights, database rights, copyrights, rights in trademarks and service marks (whether registered or not), goodwill, rights in confidential information, know-how, proprietary software, technology, source code, and proprietary Platform, systems, tools, interfaces, or applications (whether web-based, mobile, or otherwise), and any associated or similar rights (including, in all cases, applications for and rights to apply for registration thereof).",
    );

    // 11.2
    renderSubClause(
      doc,
      "11.2",
      "The Company hereby grants to the Dealer a strictly limited, non-exclusive, non-transferable, non-sublicensable, and revocable license to access and use the Company IP solely for the purpose of promoting, marketing and selling the EW Policies, and for performing the Services as expressly agreed under this Agreement.",
    );

    // 11.3
    renderSubClause(
      doc,
      "11.3",
      "The Dealer expressly agrees and covenants that the license granted herein does not confer any right to:",
    );

    // Bullets under 11.3
    renderBulletPoint(
      doc,
      "Modify, reproduce, distribute, lease, sell, or create derivative works based on the Platform, the EW Policies, or any part of the Company IP;",
    );

    renderBulletPoint(
      doc,
      "Reverse engineer, decompile, or disassemble the Platform or any proprietary technology of the Company;",
    );

    renderBulletPoint(
      doc,
      "Use the Company IP for any purpose other than performing the Dealer’s obligations under this Agreement, including (without limitation) developing, marketing, or selling any competing products, services, or platforms; or",
    );

    renderBulletPoint(
      doc,
      "Obtain, register, or attempt to obtain or register any intellectual property rights in or to the Company IP.",
    );

    doc.moveDown(0.5);

    // 11.4
    renderSubClause(
      doc,
      "11.4",
      "The Company shall at all times retain full ownership, title, and control over all Intellectual Property owned, developed, or created by it prior to, or independently of, this Agreement. Nothing contained herein shall be construed as granting the Dealer any right, title, license, or interest in or to the Company IP, except as expressly and strictly permitted for the limited purpose of performing the Services during the Term of this Agreement.",
    );

    // 11.5
    renderSubClause(
      doc,
      "11.5",
      "In the event of any breach or unauthorized use of the Company IP by the Dealer, the Company reserves the right to take immediate legal action and seek appropriate remedies, including (without limitation) injunctive relief, damages, and termination of this Agreement. The Dealer shall indemnify and hold harmless the Company against any losses, damages, liabilities, or expenses arising from or in connection with such unauthorized use.",
    );

    // 11.6
    renderSubClause(
      doc,
      "11.6",
      "The obligations set out in this Clause shall survive the termination or expiration of this Agreement for a period of three (3) years, or for such longer period as may be required to protect the Company’s Intellectual Property rights.",
    );

    doc.moveDown(2);

    // =========================
    // CLAUSE 12 – Data Protection
    // =========================
    renderClauseHeading(doc, 12, "Data Protection");

    // 12.1
    renderSubClause(
      doc,
      "12.1",
      "For the purposes of this Clause, the following definitions shall apply:",
    );

    // Bullets under 12.1 (definitions)
    renderBulletPoint(
      doc,
      "“Personal Data” means any data about or relating to an identified or identifiable natural person, as defined under the Digital Personal Data Protection Act, 2023 (the “DPDP Act”), the Information Technology Act, 2000, and the rules and regulations made thereunder, including “Sensitive Personal Data or Information (SPDI)”.",
    );

    renderBulletPoint(
      doc,
      "“Processing” means any operation or set of operations performed on Personal Data, including collection, recording, organization, structuring, storage, adaptation, alteration, retrieval, consultation, use, disclosure, dissemination, restriction, erasure, or destruction.",
    );

    doc.moveDown(0.5);

    // 12.2
    renderSubClause(
      doc,
      "12.2",
      "Each Party shall strictly comply with all applicable data protection laws in India, including but not limited to the DPDP Act, the Information Technology Act, 2000, and the rules and regulations made thereunder, when Processing Personal Data under this Agreement.",
    );

    // 12.3
    renderSubClause(
      doc,
      "12.3",
      "Each Party agrees to notify the other Party forthwith but in no event exceeding Forty-Eight (48) hours after becoming aware of any Data Breach (meaning any unauthorized Processing, use, disclosure, or access) of Personal Data related to this Agreement. The notifying Party shall further agree to cooperate fully with the other Party, at the breaching Party’s expense, in mitigating the breach, investigating its cause, and fulfilling any mandatory notification requirements under applicable law.",
    );

    // 12.4
    renderSubClause(
      doc,
      "12.4",
      "Personal Data shared between the Parties shall only be Processed for specific, legitimate purposes directly related to the objectives of this Agreement, and shall not be further Processed in a manner incompatible with those purposes, unless prior written consent is obtained from the relevant Data Principal.",
    );

    // 12.5
    renderSubClause(
      doc,
      "12.5",
      "Personal Data shall be retained only as long as necessary to fulfil the purposes for which it was collected, or as required by Indian law. Upon termination or expiration of this Agreement, each Party shall securely delete or return all Personal Data received from the other Party, unless retention is strictly required by any statutory or regulatory obligation.",
    );

    // 12.6
    renderSubClause(
      doc,
      "12.6",
      "Each Party agrees to implement and maintain appropriate technical and organizational measures to ensure a level of security appropriate to the risk of Processing, which shall include, but not be limited to, encryption, access controls, regular security testing, and comprehensive employee training on data protection practices.",
    );

    // 12.7
    renderSubClause(
      doc,
      "12.7",
      "The Dealer shall indemnify, defend, and hold harmless the Company and its affiliates from any claims, liabilities, penalties, or expenses (including reasonable attorney’s fees) arising out of the Dealer's material breach of this Clause or any failure to comply with applicable data protection laws.",
    );

    doc.moveDown(2);

    // =========================
    // CLAUSE 13 – Indemnification
    // =========================
    renderClauseHeading(doc, 13, "Indemnification");

    // 13.1
    renderSubClause(
      doc,
      "13.1",
      "Each Party (the “Indemnifying Party”) shall indemnify, defend, and hold harmless the other Party, its directors, officers, employees, agents, and representatives (collectively, the “Indemnified Parties”) from and against any and all claims, demands, actions, damages, losses, liabilities, penalties, costs, and expenses (including reasonable legal fees and litigation costs) arising out of or in connection with:",
    );

    // Bullets under 13.1
    renderBulletPoint(
      doc,
      "any breach of the representations, warranties, obligations, or covenants made by the Indemnifying Party under this Agreement;",
    );

    renderBulletPoint(
      doc,
      "any act of negligence, wilful misconduct, or omission by the Indemnifying Party, its employees, agents, or subcontractors;",
    );

    renderBulletPoint(
      doc,
      "any actual or alleged infringement of any intellectual property rights of a third party caused by or resulting from the Services, deliverables, or materials provided by the Indemnifying Party; or",
    );

    renderBulletPoint(
      doc,
      "any failure by the Indemnifying Party to comply with applicable laws, rules, or regulations, including without limitation those relating to data protection, labour and employment laws, and statutory or regulatory compliance.",
    );

    doc.moveDown(0.5);

    // 13.2
    renderSubClause(
      doc,
      "13.2",
      "The Indemnified Party shall promptly notify the Indemnifying Party in writing of any claim in respect of which indemnity is sought, and the Indemnifying Party shall have the right to assume control of the defence and settlement of such claim, provided that no settlement that imposes any liability or obligation on the Indemnified Party may be entered into without the prior written consent of the Indemnified Party.",
    );

    // 13.3
    renderSubClause(
      doc,
      "13.3",
      "The Indemnified Party shall provide reasonable assistance and cooperation in the defence of any indemnified claim, at the cost of the Indemnifying Party.",
    );

    doc.moveDown(2);

    // =========================
    // CLAUSE 14 – Liability
    // =========================
    renderClauseHeading(doc, 14, "Liability");

    // Paragraph 1 (unnumbered)
    renderSubClause(
      doc,
      "",
      "Under no circumstance shall the total aggregate liability of the Company whether arising in contract, tort, statutory duty, or otherwise under this Agreement, exceed an amount equivalent to the average Commission paid or payable to the Dealer during the immediately preceding one (1) month of the claim.",
    );

    // Paragraph 2 (unnumbered)
    renderSubClause(
      doc,
      "",
      "The Dealer’s liability shall extend to all direct, indirect, incidental, consequential, special, or exemplary damages, including but not limited to lost profits, lost data, loss of goodwill, or business interruption, arising from any breach, negligence, wilful misconduct, or fraud under this Agreement.",
    );

    doc.moveDown(2);

    // =========================
    // CLAUSE 15 – Relationship
    // =========================
    renderClauseHeading(doc, 15, "Relationship");

    // Single unnumbered paragraph
    renderSubClause(
      doc,
      "",
      "The Parties acknowledge and agree that the relationship established by this Agreement is that of an independent contractor. Nothing in this Agreement shall constitute a partnership, joint venture, employment or agency between the Parties. Notwithstanding any provision of this Agreement, neither Party has the power nor the right to bind, commit or pledge the credit of the other Party. Both Parties are separate entities and each retains full control over their respective operations. Neither Party shall be responsible for, or be bound by the actions of the other Party outside of this Agreement.",
    );

    doc.moveDown(2);

    // =========================
    // CLAUSE 16 – Force Majeure
    // =========================
    renderClauseHeading(doc, 16, "Force Majeure");

    // 16.1
    renderSubClause(
      doc,
      "16.1",
      "Any delay or failure by a Party to this Agreement to perform an obligation under this Agreement shall not constitute a breach of this Agreement to the extent that it is caused by a Force Majeure Event.",
    );

    // 16.2
    renderSubClause(
      doc,
      "16.2",
      "For the purposes of this Agreement, a “Force Majeure Event” means any event including Acts of God or such other events beyond the reasonable control of the affected Party including government action, orders, terrorist activities, lightning, earthquake, tempest, cyclone, flood, volcanic eruption or fire or other casualty or accident or landslide, war or other violence or any cyber-attack or situations like COVID-19 or other pandemic or epidemic or technological disruptions or any change in government policies directly or indirectly interrupting the performance of the affected Party in terms of this Agreement and which event prevents the affected Party from performing its obligations under this Agreement and which act or event is beyond the reasonable control and not arising out of the fault of the affected Party and the affected Party has been unable to overcome such act or event by the exercise of due diligence and reasonable efforts, skill and care, including through expenditure of reasonable sums of money. The affected Party agrees to give the other Party prompt written notice of the occurrence of any such condition, the nature thereof, and the extent to which the affected Party will be unable to perform its obligations hereunder. Upon cessation of such condition, the affected Party shall promptly resume performance hereunder.",
    );

    // 16.3
    renderSubClause(
      doc,
      "16.3",
      "In case Force Majeure Event continues for more than thirty (30) days, either Party may terminate this Agreement by providing written notice to the other Party. The notice must specify the duration of the Force Majeure Event and the inability to perform obligations under this Agreement.",
    );

    doc.moveDown(2);

    // =========================
    // CLAUSE 17 – Governing Law
    // =========================
    renderClauseHeading(doc, 17, "Governing Law");

    renderSubClause(
      doc,
      "",
      "This Agreement will be subject to the laws of India. The courts at Mumbai shall have exclusive jurisdiction over all matters arising pursuant to this Agreement.",
    );

    doc.moveDown(2);

    // =========================
    // CLAUSE 18 – Dispute Resolution
    // =========================
    renderClauseHeading(doc, 18, "Dispute Resolution");

    // 18.1
    renderSubClause(
      doc,
      "18.1",
      "The Parties shall attempt to resolve any dispute, claim, controversy or difference arising out of or in connection with this Agreement, including any question regarding its existence, validity, invalidity, breach or termination or any dispute regarding any non-contractual obligations arising out of or in connection with this Agreement (the “Dispute”), in the first instance through amicable discussions.",
    );

    // 18.2
    renderSubClause(
      doc,
      "18.2",
      "If the Dispute is not resolved through amicable discussions within 30 (Thirty) calendar days following delivery by a Party to the Dispute of a notice of Dispute or such longer period as the Parties to the Dispute shall agree in writing, the Dispute shall finally be referred to and settled by arbitration by a sole arbitrator. The sole arbitrator shall be mutually appointed by the Parties. In the event the Parties are not able to mutually appoint the sole arbitrator, then the same shall be appointed as per Arbitration and Conciliation Act, 1996. The arbitration proceedings shall be held in accordance with the Arbitration and Conciliation Act, 1996 or any subsequent enactment or amendment thereto. The decision of the arbitrator shall be final and binding upon the Parties. The venue and seat of arbitration proceedings shall be in Mumbai. All arbitration proceedings shall be conducted in English.",
    );

    // 18.3
    renderSubClause(
      doc,
      "18.3",
      "The Parties shall ensure that the obligations under this Agreement shall continue without disruption during the pendency of arbitral proceedings.",
    );

    // 18.4
    renderSubClause(
      doc,
      "18.4",
      "Nothing shall preclude a Party from seeking interim or permanent equitable or injunctive relief, or both, from the competent courts, having jurisdiction to grant relief on any disputes or differences arising from this Agreement. The pursuit of equitable or injunctive relief shall not be a waiver of the duty of the Parties to pursue any remedy (including for monetary damages) through the arbitration described in this Clause.",
    );

    doc.moveDown(2);

    // =========================
    // CLAUSE 19 – Non-Compete
    // =========================
    renderClauseHeading(doc, 19, "Non-Compete");

    // Paragraph 1
    renderSubClause(
      doc,
      "",
      "The Dealer acknowledges that during the Term of this Agreement it shall have access to the Company’s Confidential Information, proprietary business information, technical details and commercial strategies. Accordingly, during the subsistence of this Agreement, the Dealer shall not, without the prior written consent of the Company, directly or indirectly engage in any activity that involves the misuse, unauthorised disclosure, or exploitation of the Company’s Confidential Information or that seeks to replicate or compete with the Company’s Platform or EW Policies using such information.",
    );

    // Paragraph 2
    renderSubClause(
      doc,
      "",
      "Nothing contained herein shall restrict the Dealer, after termination or expiration of this Agreement, from carrying on its independent business activities, provided that the Dealer shall not use or disclose the Company’s Confidential Information or represent any association with the Company.",
    );

    doc.moveDown(2);

    // =========================
    // CLAUSE 20 – Non-Solicitation
    // =========================
    renderClauseHeading(doc, 20, "Non-Solicitation");

    // Single unnumbered paragraph
    renderSubClause(
      doc,
      "",
      "During the Term of this Agreement, and until 2 (two) years thereafter, the Dealer shall not solicit or obtain or source or employ, whether directly or indirectly or through any third party, services of any of the employees or staff or contractors of the Company.",
    );

    doc.moveDown(2);

    // =========================
    // CLAUSE 21 – Notices
    // =========================
    renderClauseHeading(doc, 21, "Notices");

    // Intro paragraph
    renderSubClause(
      doc,
      "",
      "All notices, demands and other communications given to or made by either party to the other in connection with this Agreement shall be made in writing and addressed to the following authorised representatives and shall be served through speed post or by email only:",
    );

    // Dealer address block
    renderSubClause(
      doc,
      "",
      "When addressed to the Dealer:\n" +
        "Name:\n" +
        "Designation:\n" +
        "Address:\n" +
        "Mobile:\n" +
        "Email:",
    );

    doc.moveDown(0.5);

    // Company address block
    renderSubClause(
      doc,
      "",
      "When addressed to the Company:\n" +
        "Name: Mr. Ahamed Mohideen Mohamed Muzha Thamim\n" +
        "Designation: Director\n" +
        "Address: 409, Dilkap Center, Andheri Kurla, New Link Rd, Next to Akruti Orchid Park, Andheri East, Mumbai, Maharashtra 400072\n" +
        "Mobile: 9677177750\n" +
        "Email: thamim@quantique.ai",
    );

    doc.moveDown(1);

    // Closing paragraph
    renderSubClause(
      doc,
      "",
      "All notices shall be in writing by way of an email or by facsimile (followed by a confirmation letter by registered mail) or by way of a registered mail.",
    );

    doc.moveDown(2);

    // =========================
    // CLAUSE 22 – Miscellaneous
    // =========================
    renderClauseHeading(doc, 22, "Miscellaneous");

    renderSubClause(
      doc,
      "22.1",
      "Assignment: The Dealer shall not assign its rights and obligations under this Agreement without the Company’s consent, provided that the Company may assign any of its rights under this Agreement to any of its Affiliates without obtaining the prior written consent of the Dealer.",
    );

    renderSubClause(
      doc,
      "22.2",
      "Amendment: No variation or amendment of this Agreement shall be binding on any Party unless such variation or amendment is in writing and signed by each Party.",
    );

    renderSubClause(
      doc,
      "22.3",
      "Survival: Any obligation undertaken hereunder by either Party that, by its nature or its terms, is intended to extend beyond the Term shall survive the termination thereof.",
    );

    renderSubClause(
      doc,
      "22.4",
      "Entire Agreement: This Agreement cancels and supersedes all previous agreements and arrangements, written or oral, between the Dealer and the Company and relating to the subject matter hereof and constitutes the entire arrangement between the Dealer and the Company, and there are no understandings, representations or warranties expressed or implied not specifically set forth herein.",
    );

    renderSubClause(
      doc,
      "22.5",
      "Severability: If any provision of this Agreement is determined to be illegal, invalid, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect. The parties shall negotiate in good faith to replace any invalid provision with a valid one that most closely reflects the original intent.",
    );

    renderSubClause(
      doc,
      "22.6",
      "Waiver: A waiver of any right or remedy under this Agreement or by law is only effective if given in writing and shall not be deemed a waiver of any subsequent breach or default. A failure or delay by a Party to exercise any right or remedy provided under this Agreement or by law shall not constitute a waiver of that or any other right or remedy, nor shall it prevent or restrict any further exercise of that or any other right or remedy.",
    );

    renderSubClause(
      doc,
      "22.7",
      "Further Assurances: Each Party shall, at the request and cost of the other, use all reasonable endeavours to promptly do or procure the doing of all such further acts, and execute and deliver or procure the valid execution and delivery of all such documents, as may from time to time be necessary in the requesting Party’s reasonable opinion to give full effect to this Agreement and to secure to the requesting Party the full benefit of the assets, rights, remedies and benefits conferred on it by this Agreement.",
    );

    renderSubClause(
      doc,
      "22.8",
      "Third Party Rights: Except as expressly provided in this Agreement, a person who is not a Party to this Agreement may not enforce any of its terms. For the avoidance of doubt, this Agreement may be amended or rescinded by agreement between the Parties without the consent of any third party.",
    );

    renderSubClause(
      doc,
      "22.9",
      "Counterparts: This Agreement may be executed in one or more counterparts, each of which shall be deemed an original but all of which together shall constitute one and the same instrument. This Agreement, when executed in counterparts, shall be deemed to have been executed and delivered as a single instrument and shall be effective as of the date of the last signature provided.",
    );

    renderSubClause(
      doc,
      "22.10",
      "Representative: Each Party represents and warrants to the other Party that its representative executing this Agreement on its behalf is its duly appointed and acting representative and has the legal capacity required under applicable law to enter into this Agreement and bind it.",
    );

    renderSubClause(
      doc,
      "22.11",
      "Non-Disparagement: The Dealer agrees that, during the Term of this Agreement and for a period of twelve (12) months following its termination or expiration, it shall not, directly or indirectly, make or publish any statement, whether oral or written, or engage in any conduct, that is defamatory, disparaging, or otherwise prejudicial to the business, reputation, services, officers, directors, employees, clients, or affiliates of the Company.",
    );

    doc.moveDown(2);

    doc.addPage();
    doc.x = doc.page.margins.left;

    doc
      .font("Times-Roman")
      .fontSize(11)
      .text(
        "IN WITNESS WHEREOF the Parties hereto have hereunto and to a duplicate hereof set the hands of the respective authorised officials on the day and year first hereinabove written.",
        {
          align: "justify",
        },
      );

    doc.moveDown(2);
    const pageWidth = doc.page.width;
    const marginLeft = doc.page.margins.left;
    const marginRight = doc.page.margins.right;
    const usableWidth = pageWidth - marginLeft - marginRight;

    const tableTopY = doc.y;
    const rowHeight = 120;
    const colWidth = usableWidth / 2;

    // Draw table borders
    doc.rect(marginLeft, tableTopY, usableWidth, rowHeight).stroke();

    doc
      .moveTo(marginLeft + colWidth, tableTopY)
      .lineTo(marginLeft + colWidth, tableTopY + rowHeight)
      .stroke();

    doc
      .font("Times-Roman")
      .fontSize(10)
      .text(
        "[Authorized Representative Name]\n[Partner/Director/Authorized Representative]",
        marginLeft + 10,
        tableTopY + rowHeight - 45,
        {
          width: colWidth - 20,
          align: "center",
        },
      );

    doc
      .font("Times-Bold")
      .fontSize(10)
      .text(
        "QUANTIQUE METADATA PRIVATE LIMITED",
        marginLeft + colWidth + 10,
        tableTopY + 15,
        {
          width: colWidth - 20,
          align: "center",
        },
      );

    doc
      .font("Times-Roman")
      .fontSize(10)
      .text(
        "Mr. Ahamed Mohideen Mohamed Muzha Thamim\nDirector",
        marginLeft + colWidth + 10,
        tableTopY + rowHeight - 45,
        {
          width: colWidth - 20,
          align: "center",
        },
      );

    doc
      .font("Times-Bold")
      .fontSize(10)
      .text(
        "QUANTIQUE METADATA PRIVATE LIMITED",
        marginLeft + colWidth + 10,
        tableTopY + 15,
        {
          width: colWidth - 20,
          align: "center",
        },
      );

    doc
      .font("Times-Roman")
      .fontSize(10)
      .text(
        "Mr. Ahamed Mohideen Mohamed Muzha Thamim\nDirector",
        marginLeft + colWidth + 10,
        tableTopY + rowHeight - 45,
        {
          width: colWidth - 20,
          align: "center",
        },
      );

    doc.moveDown(8);

    const witnessX = marginLeft + colWidth + 20;

    doc.font("Times-Bold").fontSize(11).text("WITNESS 1:", witnessX);

    doc.moveDown(1);

    doc.font("Times-Bold").fontSize(11).text("WITNESS 2:", witnessX);

    doc
      .font("Times-Roman")
      .fontSize(11)
      .text("Sana Inamdar", witnessX + 70, doc.y - 14);

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
  const maxWidth = doc.page.width - doc.page.margins.right - textX;

  // Measure text height
  const textHeight = doc.heightOfString(text, {
    width: maxWidth,
    align: "justify",
  });

  const requiredHeight = Math.max(textHeight, 15);
  const remainingHeight = doc.page.height - doc.page.margins.bottom - doc.y;

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

const renderBulletPoint = (doc, text) => {
  const startX = doc.page.margins.left + 30; // align under sub-clause text
  const bulletX = startX;
  const textX = startX + 15;
  const maxWidth = doc.page.width - doc.page.margins.right - textX;

  // Measure height
  const textHeight = doc.heightOfString(text, {
    width: maxWidth,
    align: "justify",
  });

  const remainingHeight = doc.page.height - doc.page.margins.bottom - doc.y;

  if (textHeight > remainingHeight) {
    doc.addPage();
    doc.x = doc.page.margins.left;
  }

  const y = doc.y;

  // Bullet
  doc.font("Times-Roman").fontSize(11).text("•", bulletX, y);

  // Bullet text
  doc.font("Times-Roman").fontSize(11).text(text, textX, y, {
    width: maxWidth,
    align: "justify",
  });

  doc.moveDown(0.5);
};

const renderNestedSubClause = (doc, number, text) => {
  const startX = doc.page.margins.left;
  const numberX = startX + 30; // indent under 3.1 / 3.2
  const textX = numberX + 35; // text indent
  const maxWidth = doc.page.width - doc.page.margins.right - textX;

  // Measure height
  const textHeight = doc.heightOfString(text, {
    width: maxWidth,
    align: "justify",
  });

  const remainingHeight = doc.page.height - doc.page.margins.bottom - doc.y;

  if (textHeight > remainingHeight) {
    doc.addPage();
    doc.x = startX;
  }

  const y = doc.y;

  // Nested clause number (3.1.1 etc.)
  doc.font("Times-Roman").fontSize(11).text(number, numberX, y);

  // Clause text
  doc.font("Times-Roman").fontSize(11).text(text, textX, y, {
    width: maxWidth,
    align: "justify",
  });

  doc.moveDown(0.8);
};
