function create(words) {
   //take the major Div element
   let majorDiv = document.getElementById('content');

   //forEach for every element we need to create and append
   words.forEach((section) => {
      let div = document.createElement('div');
      let p = document.createElement('p');
      majorDiv.appendChild(div);
      div.appendChild(p);
      p.textContent = `${section}`;
      p.style.display = 'none';
   });

   //taking the newly appended collection
   let divsCollection = document.querySelectorAll('div div');

   //adding eventListener to divsCollection each div
   for(let el of divsCollection) {
      el.addEventListener('click', function(e) {
         let targetDiv = e.target;
         let getParagraph = targetDiv.querySelector('p');
         getParagraph.style.display = 'block';
      });
   }
}