// Dynamically insert current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically insert last modification date
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;
