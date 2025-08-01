function getResponse() {
  const userInput = document.getElementById("userInput").value.toLowerCase();
  const responseBox = document.getElementById("response");

  if (userInput.includes("nda")) {
    responseBox.innerHTML = "Here's a standard NDA clause: Both parties agree not to disclose confidential information.";
  } else if (userInput.includes("service agreement")) {
    responseBox.innerHTML = "A service agreement defines the terms of service, duration, payment, and responsibilities.";
  } else {
    responseBox.innerHTML = "Sorry, I don’t understand your question yet.";
  }
}
