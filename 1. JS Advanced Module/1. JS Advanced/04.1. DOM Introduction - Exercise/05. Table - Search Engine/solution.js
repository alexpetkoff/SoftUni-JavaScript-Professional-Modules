function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let tableRows = document.querySelectorAll('tbody tr');
      let searchPhrase = document.querySelector('#searchField').value;

      for(let element of tableRows) {
         let text = element.textContent;
         if (text.includes(searchPhrase)) {
            element.setAttribute("class", "select");
         } else {
            element.removeAttribute("class");
         }
      }
   }
}