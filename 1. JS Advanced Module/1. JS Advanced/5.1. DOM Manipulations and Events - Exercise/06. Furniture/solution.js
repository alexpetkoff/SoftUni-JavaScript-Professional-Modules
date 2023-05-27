function solve() {
  let buttonGenerate = document.getElementsByTagName('button')[0];
  buttonGenerate.addEventListener('click', generate);
  //let textAreaGenerate = JSON.parse(buttonGenerate.previousElementSibling.value);

  let buttonBuy = document.getElementsByTagName('button')[1];
  buttonBuy.addEventListener('click', buy);
  let textAreaBuy = buttonBuy.previousElementSibling;

  function generate(event) {
    let textAreaGenerate = JSON.parse(buttonGenerate.previousElementSibling.value);
    let allItems = [];
    //loop through all textArea elements and pushing into array
    for(let i = 0; i < textAreaGenerate.length; i++) {
      let itemInfo = {
        img: textAreaGenerate[i].img,
        name: textAreaGenerate[i].name,
        price: textAreaGenerate[i].price,
        decFactor: textAreaGenerate[i].decFactor,
      }
      allItems.push(itemInfo);
    }
    //looping from the array of items, to create html elements....
    let tBody = document.getElementsByTagName('tbody')[0];
    for(let el of allItems) {
      let tr = document.createElement('tr');
      let input = document.createElement('input');
      input.type = 'checkbox';
      let td = document.createElement('td');

      for (let [key, value] of Object.entries(el)) {
        if (key === 'img') {
          let img = document.createElement('img');
          let td = document.createElement('td');
          img.src = value;
          td.appendChild(img);
          tr.appendChild(td);
        } else {
          let p = document.createElement('p');
          let td = document.createElement('td');
          p.textContent = value;
          td.appendChild(p);
          tr.appendChild(td);
        }
      }
      td.appendChild(input);
      tr.appendChild(td);
      tBody.appendChild(tr);
    }
  }

  function buy(event) {
    let tableRow = Array.from(document.querySelectorAll('tr'));
    let arrayFurniture = [];
    let totalPrice = 0;
    let totalFactor = 0;

    for(let i = 1; i < tableRow.length; i++) {

      let mark = tableRow[i].querySelector('td input');

      if(mark.checked) {
        let parent = mark.parentElement;
        let decFactorEl = parent.previousElementSibling;
        let decFactor = Number(decFactorEl.children[0].textContent);
        let priceEl = decFactorEl.previousElementSibling;
        let price = Number(priceEl.children[0].textContent);
        let nameEl = priceEl.previousElementSibling;
        let name = nameEl.children[0].textContent;
        arrayFurniture.push(name);
        totalPrice += price;
        totalFactor += decFactor;
      }
    }

    let avgFactor = totalFactor / arrayFurniture.length;
    textAreaBuy.textContent = `Bought furniture: ${arrayFurniture.join(', ')}\n` + 
    `Total price: ${(totalPrice).toFixed(2)}\n` + `Average decoration factor: ${avgFactor}`;
  }
}