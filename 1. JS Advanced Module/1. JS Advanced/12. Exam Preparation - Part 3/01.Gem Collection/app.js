window.addEventListener("load", solve);

function solve() {

    let name = document.getElementById('gem-name');
    let color = document.getElementById('color');
    let carats = document.getElementById('carats');
    let price = document.getElementById('price');
    let type = document.getElementById('type');

    let addGem = document.getElementById('add-btn');
    addGem.addEventListener('click', addGems);

    function addGems(e) {

        if(name.value != '' && color.value != '' && carats.value != '' && price.value != '' && type.value != '') {

            let ul = document.getElementById('preview-list');

            let li = document.createElement('li');
            li.classList.add('gem-info');
            let article = document.createElement('article');
            let h4 = document.createElement('h4');
            h4.textContent = name.value;
            let pColor = document.createElement('p');
            pColor.textContent = `Color: ${color.value}`;
            let pCarat = document.createElement('p');
            pCarat.textContent = `Carats: ${carats.value}`;
            let pPrice = document.createElement('p');
            pPrice.textContent = `Price: ${price.value}$`;
            let pType = document.createElement('p');
            pType.textContent = `Type: ${type.value}`;

            let saveBtn = document.createElement('button');
            saveBtn.classList.add('save-btn');
            saveBtn.textContent = 'Save to Collection';

            let editBtn = document.createElement('button');
            editBtn.classList.add('edit-btn');
            editBtn.textContent = 'Edit Information';

            let cancelBtn = document.createElement('button');
            cancelBtn.classList.add('cancel-btn');
            cancelBtn.textContent = 'Cancel';
 
            ul.appendChild(li);
            li.appendChild(article);
            article.appendChild(h4);
            article.appendChild(pColor);
            article.appendChild(pCarat);
            article.appendChild(pPrice);
            article.appendChild(pType);
            
            li.appendChild(saveBtn);
            li.appendChild(editBtn);
            li.appendChild(cancelBtn);

            saveBtn.addEventListener('click', saveGem);
            editBtn.addEventListener('click', editGem);
            cancelBtn.addEventListener('click', cancelGem);

            name.value = '';
            color.value = '';
            carats.value = '';
            price.value = '';
            type.value = '';

            addGem.disabled = 'true';

        }
    }

    function editGem(e) {

        addGem.removeAttribute('disabled');

        let li = e.target.parentElement;
        let elements = li.children[0].children;
        
        name.value = elements[0].textContent;
        color.value = elements[1].textContent.substring(7);
        carats.value = elements[2].textContent.substring(8);
        price.value = elements[3].textContent.substring(7, elements[3].textContent.length - 1);
        type.value = elements[4].textContent.substring(6);

        li.remove();
    }
    
    function saveGem(e) {
        addGem.removeAttribute('disabled');
        
        let article = e.target.previousElementSibling;
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.classList.add('collection-item');
        p.textContent = `${article.children[0].textContent} - ${article.children[1].textContent}/ ${article.children[2].textContent}/ ${article.children[3].textContent}/ ${article.children[4].textContent}`;
        
        let ul = document.getElementById('collection');
        li.appendChild(p);
        ul.appendChild(li);

        e.target.parentElement.remove();
    }

    function cancelGem(e) {
        addGem.removeAttribute('disabled');
        e.target.parentElement.remove();
    }
}