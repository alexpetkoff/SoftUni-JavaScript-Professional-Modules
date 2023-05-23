function solve() {
  const text = document.querySelector('textarea');
  const arraySplitText = text.value.split('.');
  const formatedSplitText = arraySplitText.filter((el) => el.length > 0);

  let divResult = '';
  let currentParagraphArray = [];
  let count = 1;
  for(let i = 0; i < formatedSplitText.length; i++) {
    
    currentParagraphArray.push(formatedSplitText[i]);
    if(count == 3 || i === (formatedSplitText.length - 1)) {
      let currentParagraphText = currentParagraphArray.join('.');
      divResult += `<p>${currentParagraphText + '.'}</p>`;
      currentParagraphArray = [];
      count = 0;
    }
    count++;
  }
  document.getElementById('output').innerHTML = divResult;
}