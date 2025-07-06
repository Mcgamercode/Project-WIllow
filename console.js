
function checkPassword() {
  const input = document.getElementById('terminalInput').value;
  const msg = document.getElementById('terminalMsg');
  if (input === "Challenger3210$") {
    msg.textContent = "Access Granted. Welcome, MikeyMic ⚡";
    console.log("MikeyMic was here ⚡");
  } else {
    msg.textContent = "Access Denied. Intrusion Logged.";
  }
}
