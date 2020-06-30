const container = document.querySelector("#container");

let form = document.querySelector("#form");
let heightValue;
let widthValue;
let color;
form.addEventListener("submit", function (e) {
  e.preventDefault();
  heightValue = document.querySelector("#grid-height").value;
  widthValue = document.querySelector("#grid-width").value;
  color = document.querySelector("#grid-color").value.trim();
  heightValue = parseInt(heightValue);
  widthValue = parseInt(widthValue);
  if (heightValue >= 100) {
    alert(" Height cant be greater than 100");
    return false;
  } else if (heightValue < 0) {
    alert(" Height cant be a negative number");
    return false;
  } else if (widthValue >= 100) {
    alert("Width cant be greater than 100");
    return false;
  } else if (widthValue < 0) {
    alert(" Width cant be a negative number");
    return false;
  }
  makeRows(heightValue, widthValue, color);
});

function makeRows(rows, cols, color) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.innerText = c + 1;

    container.appendChild(cell).className = "grid-item";
    isValidHex = /^#(?:[0-9a-f]{3}){1,2}$/i;
    if (isValidHex.test(color)) {
      cell.style.background = color;
    } else {
      alert("Invalid CSS Hex Color");
      return false;
    }
    cell.addEventListener("click", function () {
      if (cell.classList.contains("selected")) {
        cell.classList.remove("selected");
      } else {
        cell.classList.add("selected");
      }
    });
  }
}
