window.addEventListener('load', solve);

function solve() {

        let carModelInput = document.getElementById('car-model');
        let carYearInput = document.getElementById('car-year');
        let carPartInput = document.getElementById('part-name');
        let carPartNumInput = document.getElementById('part-number');
        let carCondInput = document.getElementById('condition');

        let nextBtn = document.getElementById('next-btn');

        nextBtn.addEventListener('click', getInfo);

        function getInfo(event) {
                event.preventDefault();
                let model = carModelInput.value;
                let year = carYearInput.value;
                let part = carPartInput.value;
                let partNum = carPartNumInput.value;
                let condition = carCondInput.value;

                if (model == '' || year == '' || part == '' || partNum == '' || condition == '' || Number(year) < 1980 || Number(year) > 2023) {
                        return;
                }

                let ul = document.getElementsByClassName('info-list')[0];
                let li = document.createElement('li');
                li.classList = 'part-content';

                let article = document.createElement('article');
                let pModel = document.createElement('p');
                let pYear = document.createElement('p');
                let pName = document.createElement('p');
                let pNum = document.createElement('p');
                let pCond = document.createElement('p');

                let buttonEdit = document.createElement('button');
                buttonEdit.classList = 'edit-btn';
                let buttonCtn = document.createElement('button');
                buttonCtn.classList = 'continue-btn';

                ul.appendChild(li);
                li.appendChild(article);
                li.appendChild(buttonEdit);
                li.appendChild(buttonCtn);

                article.appendChild(pModel);
                article.appendChild(pYear);
                article.appendChild(pName);
                article.appendChild(pNum);
                article.appendChild(pCond);

                pModel.textContent = `Car Model: ${model}`;
                pYear.textContent = `Car Year: ${year}`;
                pName.textContent = `Part Name: ${part}`;
                pNum.textContent = `Part Number: ${partNum}`;
                pCond.textContent = `Condition: ${condition}`;

                buttonEdit.textContent = 'Edit';
                buttonCtn.textContent = 'Continue';

                let completeImg = document.getElementById('complete-img');
                completeImg.style.visibility = 'hidden';
                let paragr = document.getElementById('complete-text');
                paragr.textContent = '';

                carModelInput.value = '';
                carYearInput.value = '';
                carPartInput.value = '';
                carPartNumInput.value = '';
                carCondInput.value = '';

                nextBtn.disabled = true;

                buttonEdit.addEventListener('click', (e) => {

                        carModelInput.value = model;
                        carYearInput.value = year;
                        carPartInput.value = part;
                        carPartNumInput.value = partNum;
                        carCondInput.value = condition;

                        li.remove();

                        nextBtn.disabled = false;
                });

                buttonCtn.addEventListener('click', (e) => {

                        let ulConfirm = document.getElementsByClassName('confirm-list')[0];
                        ulConfirm.appendChild(li);

                        let buttonConfirm = document.createElement('button');
                        buttonConfirm.classList = 'confirm-btn';
                        let buttonCancel = document.createElement('button');
                        buttonCancel.classList = 'cancel-btn';

                        li.lastElementChild.remove();
                        li.lastElementChild.remove();

                        li.appendChild(buttonConfirm);
                        li.appendChild(buttonCancel);

                        buttonConfirm.textContent = 'Confirm';
                        buttonCancel.textContent = 'Cancel';


                        buttonConfirm.addEventListener('click', (e) => {
                                li.remove();
                                nextBtn.disabled = false;
                                completeImg.style.visibility = 'visible';
                                paragr.textContent = 'Part is Ordered!';
                        });

                        buttonCancel.addEventListener('click', (e) => {
                                li.remove();
                                nextBtn.disabled = false;
                        });

                });
        }

};