// Change text content
document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("text").textContent = "The text has been changed dynamically!";
});

// Modify CSS style
document.getElementById("changeStyleBtn").addEventListener("click", function () {
  document.body.style.backgroundColor = "#000000";
  document.getElementById("main-heading").style.color = "#A020F0";
});

// Add/Remove element
let boxExists = false;
document.getElementById("toggleElementBtn").addEventListener("click", function () {
  const container = document.getElementById("container");

  if (!boxExists) {
    const box = document.createElement("div");
    box.id = "dynamicBox";
    box.textContent = "I'm a new box!";
    box.style.padding = "20px";
    box.style.marginTop = "10px";
    box.style.backgroundColor = "#23ff82";
    box.style.borderRadius = "8px";
    container.appendChild(box);
  } else {
    const box = document.getElementById("dynamicBox");
    if (box) container.removeChild(box);
  }

  boxExists = !boxExists;
});
