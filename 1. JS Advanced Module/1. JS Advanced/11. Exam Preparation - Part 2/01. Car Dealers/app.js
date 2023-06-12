window.addEventListener("load", solve);

function solve() {
  let totalProfitNum = 0;
  let totalProfit = document.getElementById('profit');

  let make = document.getElementById('make');
  let model = document.getElementById('model');
  let prodYear = document.getElementById('year');
  let fuelType = document.getElementById('fuel');
  let originalCost = document.getElementById('original-cost');
  let sellingPrice = document.getElementById('selling-price');

  let publishBtn = document.getElementById('publish');
  publishBtn.addEventListener('click', publishFunc);

  function publishFunc(event) {
    event.preventDefault();

    let tbody = document.getElementById('table-body');
    let tr = document.createElement('tr');
    tr.classList.add('row');

    if(make.value != '' && model.value != '' && originalCost.value != '' &&
       sellingPrice.value != '' && prodYear.value != '' && fuelType.value != '' && (Number(originalCost.value) <= Number(sellingPrice.value))) {

      tr.innerHTML = 
      `<td>${make.value}</td>
       <td>${model.value}</td>
       <td>${prodYear.value}</td>
       <td>${fuelType.value}</td>
       <td>${originalCost.value}</td>
       <td>${sellingPrice.value}</td>
      `;
      tbody.appendChild(tr);
      
      make.value = '';
      model.value = '';
      prodYear.value = '';
      fuelType.value = '';
      originalCost.value = '';
      sellingPrice.value = '';

      let td = document.createElement('td');
      let editBtn = document.createElement('button');
      editBtn.classList.add('action-btn', 'edit');
      editBtn.textContent = 'Edit';
      let sellBtn = document.createElement('button');
      sellBtn.classList.add('action-btn', 'sell');
      sellBtn.textContent = 'Sell';

      td.appendChild(editBtn);
      td.appendChild(sellBtn);
      tr.appendChild(td);

      editBtn.addEventListener('click', editFunc);
      sellBtn.addEventListener('click', sellFunc);
      
    }
    
    function editFunc(event) {
      let tableRow = event.target.parentElement.parentElement;
      
      make.value = tableRow.children[0].textContent;
      model.value = tableRow.children[1].textContent;
      prodYear.value = tableRow.children[2].textContent;
      fuelType.value = tableRow.children[3].textContent;
      originalCost.value = tableRow.children[4].textContent;
      sellingPrice.value = tableRow.children[5].textContent;
      
      tableRow.remove();

    }

    function sellFunc(event) {

      let tr = event.target.parentElement.parentElement
      let ul = document.getElementById('cars-list');
      let li = document.createElement('li');
      li.classList.add('each-list');

      li.innerHTML = `
        <span>${tr.children[0].textContent} ${tr.children[1].textContent}</span>
        <span>${tr.children[2].textContent}</span>
        <span>${Number(tr.children[5].textContent) - Number(tr.children[4].textContent)}</span>
      `
      ul.appendChild(li);
      tr.remove();
      totalProfitNum += Number(tr.children[5].textContent) - Number(tr.children[4].textContent);
      totalProfit.textContent = `${totalProfitNum.toFixed(2)}`;

    }

  }

}
