function search() {

   let search = document.getElementById('searchText').value;
   let arrayTown = document.getElementsByTagName('li');
   let result = document.getElementById('result');
   let sumOfMatches = 0;

   for (let el of arrayTown) {
      console.log(el)
      let town = el.textContent.toLowerCase();
      let searchToLowerCase = search.toLowerCase();

      if (town.includes(searchToLowerCase)) {
         el.style.fontWeight = "bold";
         el.style.textDecoration = "underline";
         sumOfMatches++;
      } else {
         el.style.fontWeight = "";
         el.style.textDecoration = "";
      }
   }
   result.textContent = `${sumOfMatches} matches found`;
}
