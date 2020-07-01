const container = document.querySelector("#container");

let form = document.querySelector("#form");
let heightValue;
let widthValue;
let color;
let item;
form.addEventListener("submit", function (e) {
  e.preventDefault();
  heightValue = document.querySelector("#grid-height").value;
  widthValue = document.querySelector("#grid-width").value;
  color = document.querySelector("#grid-color").value.trim();
  heightValue = parseInt(heightValue);
  widthValue = parseInt(widthValue);
  if (heightValue > 100) {
    alert(" Height can not be greater than 100");
    return false;
  } else if (heightValue <= 0) {
    alert(" Height can not be a negative number or 0");
    return false;
  } else if (widthValue > 100) {
    alert("Width can not be greater than 100");
    return false;
  } else if (widthValue <= 0) {
    alert(" Width can not be a negative number or 0");
    return false;
  }
  isValidHex = /^#(?:[0-9a-f]{3}){1,2}$/i;
  if (isValidHex.test(color)) {
    makeRows(heightValue, widthValue, color);
  } else {
    alert("Invalid CSS Hex Color, try: #ff5a5f (for example)");
  }
});

function makeRows(rows, cols, color) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.innerText = c + 1;
    cell.style.background = color;
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener("click", function () {
      if (cell.classList.contains("selected")) {
        cell.classList.remove("selected");
      } else {
        cell.classList.add("selected");
      }
    });
  }
}
