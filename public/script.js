
async function checkHealth() {
  const status = document.getElementById("health-status");
  const message = document.getElementById("health-message");

  try {
    const response = await fetch("/health");
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Health check failed");
    }

    status.textContent = "● Healthy";
    status.style.color = "#55e6a5";
    message.textContent = data.message;
  } catch (error) {
    status.textContent = "● Unavailable";
    status.style.color = "#ff7777";
    message.textContent = "Unable to connect to backend";
  }
}

checkHealth();
