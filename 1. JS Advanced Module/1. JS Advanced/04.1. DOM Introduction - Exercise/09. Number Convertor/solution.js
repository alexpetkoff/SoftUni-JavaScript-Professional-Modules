function solve() {
    let menuToElement = document.getElementById("selectMenuTo");
  
    let numberInputElement = document.getElementById("input");
    let numberInputValue = numberInputElement.value;
  
    let resultElement = document.getElementById("result");
    let buttonElement = document.getElementsByTagName("button")[0];

    //Create option - Binary
    let binaryMenuElement = document.createElement("option");
    binaryMenuElement.textContent = "Binary";
    binaryMenuElement.value = "binary";
    menuToElement.appendChild(binaryMenuElement);

    //Create option Hexadecimal
    let hexadecimalMenuElement = document.createElement("option");
    hexadecimalMenuElement.textContent = "Hexadecimal";
    hexadecimalMenuElement.value = "hexadecimal";
    menuToElement.appendChild(hexadecimalMenuElement);
  
    let dict = {
      binary: Number(numberInputValue).toString(2),
      hexadecimal: Number(numberInputValue).toString(16).toUpperCase(),
    };

    buttonElement.addEventListener("click", (e) => {
      if (menuToElement.value === "binary") {
        resultElement.value = Number(numberInputElement.value).toString(2);
      } else if (menuToElement.value === "hexadecimal") {
        resultElement.value = Number(numberInputElement.value)
          .toString(16)
          .toUpperCase();
      }
    });
  }