function solve() {

  let objectAnswers = {
    'onclick': true,
    'onmouseclick': false,
    'JSON.toString()': false,
    'JSON.stringify()': true,
    'A programming API for HTML and XML documents': true,
    'The DOM is your source HTML': false
  }
  let counter = 0;
  let correctAnswers = 0;
  let quiz = Array.from(document.querySelectorAll('section'));
  quiz.forEach((section) => {
    section.addEventListener('click', checkingFunc);
  });
  
  function checkingFunc(event) {
    let clicked = event.target;

    if (clicked.classList.value === 'answer-text') {
      if (objectAnswers[clicked.innerText]) {
        counter++;
        correctAnswers++;
        this.style.display = 'none';
        this.nextElementSibling.style.display = 'block';
      } else {
        counter++;
        this.style.display = 'none';
        this.nextElementSibling.style.display = 'block';
      }
    } 
    if(counter === 3) {
      let ul = document.getElementById('results');
      ul.style.display = 'block';
      let li = ul.children[0];
      let h1 = li.children[0];
    
      if(correctAnswers === 3) {
        h1.textContent = 'You are recognized as top JavaScript fan!';
      } else {
        h1.textContent = `You have ${correctAnswers} right answers`;
      }
    }
  }
}