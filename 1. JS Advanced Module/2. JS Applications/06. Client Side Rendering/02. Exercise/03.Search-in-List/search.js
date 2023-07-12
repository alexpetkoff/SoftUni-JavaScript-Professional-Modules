import { towns } from './towns.js';
import { html, render } from './node_modules/lit-html/lit-html.js';

const div = document.getElementById('towns');

const template = html`
   <ul>
      ${towns.map(town => html`
         <li>${town}</li>
      `)}
   </ul>
`;

render(template, div);

const button = document.querySelector('button');
button.addEventListener('click', search);

const liElements = Array.from(document.querySelectorAll('li'));

function search(e) {
   const value = document.getElementById('searchText').value;
   const result = document.getElementById('result');
   result.textContent = '';
   let counter = 0;

   liElements.forEach(li => {
      if (li.textContent.substring(0, value.length) === value) {
         counter++;
         li.classList.add('active');
      } else {
         li.classList.remove('active');
      }
   });

   result.textContent = `${counter} matches found`;
}