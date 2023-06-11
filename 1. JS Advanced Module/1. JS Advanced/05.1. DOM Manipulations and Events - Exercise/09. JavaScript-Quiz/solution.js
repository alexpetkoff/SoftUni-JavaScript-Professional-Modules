function solve() {
    let answers = {
        "onclick": true,
        "JSON.stringify()": true,
        "A programming API for HTML and XML documents": true
    }

    const sections = Array.from(document.querySelectorAll('section'));
    let index = 0;
    let correctAnswers = 0;
    const buttons = Array.from(document.querySelectorAll('.answer-wrap'));

    buttons.forEach((button) => {
        button.addEventListener('click', function (event) {
            const clicked = event.target;
            if(answers.hasOwnProperty(clicked.textContent.trim())) {
                correctAnswers++;
            }
            sections[index].style.display = 'none';
            index++;

            index !== 3 ?
                sections[index].style.display = 'block' :
                finalResult();
        });
    });

    function finalResult() {
        document.querySelector('#results').style.display = 'block';
        let textResult = '';
        correctAnswers === 3 ?
            (textResult = 'You are recognized as top JavaScript fan!'):
            (textResult = `You have ${correctAnswers} right answers`);
        document.querySelector('ul > li > h1').textContent = textResult;
    }
}