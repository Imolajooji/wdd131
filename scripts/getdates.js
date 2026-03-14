// Dynamically insert current year
const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

// Dynamically insert last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
