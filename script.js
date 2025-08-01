document.getElementById("ndaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const discloser = document.getElementById("discloser").value;
  const receiver = document.getElementById("receiver").value;
  const date = document.getElementById("agreementDate").value;
  const duration = document.getElementById("duration").value;
  const purpose = document.getElementById("purpose").value;

  const ndaText = `
NON-DISCLOSURE AGREEMENT

This Non-Disclosure Agreement ("Agreement") is entered into on ${date}, between ${discloser} ("Disclosing Party") and ${receiver} ("Receiving Party").

1. Purpose: The Disclosing Party intends to disclose confidential information to the Receiving Party for the purpose of ${purpose}.
2. Confidentiality: The Receiving Party agrees to keep all information confidential and not to disclose it to third parties.
3. Duration: This Agreement shall remain in effect for a period of ${duration}.
4. Governing Law: This Agreement shall be governed by the laws of India.

IN WITNESS WHEREOF, the parties have executed this Agreement as of the date first above written.
  `;

  document.getElementById("output").value = ndaText;
});
