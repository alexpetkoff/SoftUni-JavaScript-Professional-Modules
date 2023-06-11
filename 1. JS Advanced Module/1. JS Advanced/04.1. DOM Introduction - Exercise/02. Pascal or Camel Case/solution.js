function solve() {

  let paramOne = document.getElementById('text').value;
  let paramTwo = document.getElementById('naming-convention').value;
  let lowerCase = paramOne.toLowerCase();
  let final = '';
  let cases = {
    'Camel Case': () => {
      let wordsArr = lowerCase.split(' ');
      final += wordsArr[0];
      for (let i = 1; i < wordsArr.length; i++) {
        final += wordsArr[i].slice(0,1).toUpperCase() + wordsArr[i].slice(1);
      }
    },
    'Pascal Case': () => {
      let wordsArr = lowerCase.split(' ');
      for (let i = 0; i < wordsArr.length; i++) {
        final += wordsArr[i].slice(0,1).toUpperCase() + wordsArr[i].slice(1);
      }
    },
  }

  if(cases[paramTwo]) {
    cases[paramTwo]();
    document.getElementById('result').textContent = final;
  } else {
    final = 'Error!';
    document.getElementById('result').textContent = final;
  }

}