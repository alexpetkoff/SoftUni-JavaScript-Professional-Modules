function solve() {
   let productsList = document.getElementsByClassName('product');

   for(let div of productsList) {
      div.addEventListener('click', addElement);
   }

   function addElement(event) {
      let name;
      if(event.target.classList[0] === 'add-product') {
         console.log(productsList);
      }

      // let button = event.target;
      // console.log(button);
      
   }
}