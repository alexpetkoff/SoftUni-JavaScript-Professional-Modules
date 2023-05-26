function solve() {
   let productsList = document.getElementsByClassName('product');
   let checkOutButton = document.getElementsByClassName('checkout')[0];
   checkOutButton.addEventListener('click', checkout);

   for(let div of Array.from(productsList)) {
      div.addEventListener('click', addElement);
   }

   let totalPrice = 0;
   let textArea = document.querySelector('textarea');
   let text = ``;
   let list = {};

   function addElement(event) {
      let select = event.target;
      let parent = select.parentElement;
      let name = parent.previousElementSibling.children[0].textContent;
      let price = parent.nextElementSibling.textContent;
   
      if(event.target.classList[0] === 'add-product') {
         price = +price;
         totalPrice += price;
         price = price.toFixed(2)
         text += `Added ${name} for ${price} to the cart.\n`;
         textArea.textContent = text;
         list[name] = [];
      }
   }

   function checkout(e) {
      let products = [];
      for(let key of Object.keys(list)) {
         products.push(key);
      }
      let productsText = products.join(', ');
      text += `You bought ${productsText} for ${totalPrice.toFixed(2)}.`;
      textArea.textContent = text;

      let allButtons = document.getElementsByTagName('button');
      for(let button of allButtons) {
         button.disabled = 'true';
      }
   }
}