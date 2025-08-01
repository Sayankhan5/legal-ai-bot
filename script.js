// script.js
const templates = {
  "NDA (Non-Disclosure Agreement)": `NON-DISCLOSURE AGREEMENT ("Agreement")

This Agreement is entered into on [Date] by and between:

1. [Disclosing Party Name], having its registered address at [Address] ("Disclosing Party"), and
2. [Receiving Party Name], having its registered address at [Address] ("Receiving Party").

WHEREAS, the Disclosing Party possesses certain confidential and proprietary information, and the Receiving Party desires to obtain and maintain the confidentiality of such information.

NOW, THEREFORE, in consideration of the mutual promises and covenants contained herein, the parties agree as follows:

1. Definition of Confidential Information: Includes but is not limited to trade secrets, technical data, financial information, etc.
2. Obligation of Confidentiality: The Receiving Party shall keep all Confidential Information strictly confidential.
3. Exclusions: Confidential Information does not include data that is publicly known or rightfully obtained by the Receiving Party without breach.
4. Term: This Agreement shall remain in effect for a period of 5 years from the date of execution.
5. Return of Materials: All documents shall be returned or destroyed upon request.
6. No License: This Agreement does not grant any license or rights.
7. Remedies: Breach shall entitle the Disclosing Party to equitable relief including injunction and damages.
8. Third-Party Developers: Receiving Party shall ensure any third-party developer complies with confidentiality obligations.
9. Cloud Storage: Data hosted on platforms like AWS/GCP/Azure must comply with applicable security standards.
10. Cross-border Data Transfer: Parties must comply with applicable data protection and export control laws.
11. Liquidated Damages: Breach may result in liquidated damages of INR 10,00,000 or actual proven damages, whichever is higher.

IN WITNESS WHEREOF, the parties have executed this Agreement as of the date first above written.

_______________________        _______________________
[Disclosing Party Name]        [Receiving Party Name]
(Signature)                    (Signature)
`,

  "Service Agreement": `SERVICE AGREEMENT

This Service Agreement ("Agreement") is made on [Date] between:

1. [Service Provider Name], located at [Address] ("Service Provider"), and
2. [Client Name], located at [Address] ("Client").

WHEREAS, the Client wishes to engage the Service Provider to perform certain services, the parties agree as follows:

1. Services Provided: The Service Provider agrees to perform the services described in Schedule A.
2. Payment: The Client shall pay the Service Provider the amount of [Fee] in accordance with Schedule B.
3. Term: This Agreement shall commence on [Start Date] and continue until [End Date], unless terminated earlier.
4. Confidentiality: Each party agrees to maintain the confidentiality of information shared.
5. Intellectual Property: All work produced shall be the property of the Client unless otherwise agreed.
6. Liability: The Service Provider shall not be liable for indirect or consequential damages.
7. Termination: Either party may terminate the agreement with 30 days written notice.

IN WITNESS WHEREOF, the parties execute this Agreement:

_______________________        _______________________
[Service Provider Name]        [Client Name]
(Signature)                    (Signature)
`,

  "Partnership Letter": `PARTNERSHIP LETTER OF INTENT

This Letter of Intent ("LOI") is made on [Date] between:

1. [Partner A Name], having its principal office at [Address], and
2. [Partner B Name], having its principal office at [Address].

WHEREAS, the parties desire to form a business partnership for [Purpose of Partnership].

1. Purpose: The purpose of this partnership is to [Purpose Description].
2. Contributions: Each party shall contribute resources as mutually agreed.
3. Profit Sharing: Profits and losses shall be shared in proportion to their capital contribution.
4. Term: This LOI is valid for [X] months from the date of execution.
5. Non-binding: This LOI is a non-binding expression of intent and not a legal partnership agreement.

SIGNED:

_______________________        _______________________
[Partner A Name]              [Partner B Name]
(Signature)                    (Signature)
`
};

document.getElementById("docType").addEventListener("change", function() {
  const selectedTemplate = this.value;
  document.getElementById("output").value = templates[selectedTemplate] || "";
});

document.getElementById("copyBtn").addEventListener("click", function() {
  const textArea = document.getElementById("output");
  textArea.select();
  textArea.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Text copied to clipboard!");
});
