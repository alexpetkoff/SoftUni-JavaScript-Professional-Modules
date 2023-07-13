import { html , render } from './node_modules/lit-html/lit-html.js'

renderTable();
solve();

async function renderTable() {

   const tbody = document.querySelector('tbody')
   const response = await fetch('http://localhost:3030/jsonstore/advanced/table');
   const data = await response.json();

   const template = html`
         ${Object.values(data).map((p) => {
           return html`
            <tr>
                <td>${p.firstName} ${p.lastName}</td>
                <td>${p.email}</td>
                <td>${p.course}</td>
            </tr>`
         })}`;

   render(template, tbody);

}

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick(e) {
      const value = e.target.previousElementSibling.value.toLowerCase();
      const tdValues = document.querySelectorAll('td');

      Array.from(tdValues).forEach(td => {
         const tr = td.parentElement;
         tr.classList.remove('select');
      });

      Array.from(tdValues).forEach(td => {
         let tdVal = td.textContent.toLowerCase();
         const tr = td.parentElement;

         if(tdVal.includes(value)) {
            tr.classList.add('select');
         }
      });
   }
}
