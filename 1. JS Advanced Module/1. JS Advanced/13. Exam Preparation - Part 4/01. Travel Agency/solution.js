window.addEventListener('load', solution);

function solution() {

  let fullName = document.getElementById('fname');
  let email = document.getElementById('email');
  let phone = document.getElementById('phone');
  let address = document.getElementById('address');
  let postalCode = document.getElementById('code');

  let submitBtn = document.getElementById('submitBTN');
  submitBtn.addEventListener('click', submitInfo);
  let editBtn = document.getElementById('editBTN');
  editBtn.addEventListener('click', editInfo);
  let continueBtn = document.getElementById('continueBTN');
  continueBtn.addEventListener('click', continueFunc);

  let div = document.getElementById('block');
  console.log(div.children)


  function submitInfo() {

    if (fullName.value === '' || email.value === '') {

      return;

    } else {

      let ul = document.getElementById('infoPreview');

      let liName = document.createElement('li');
      liName.textContent = `Full Name: ${fullName.value}`;
      let liEmail = document.createElement('li');
      liEmail.textContent = `Email: ${email.value}`;
      let liPhone = document.createElement('li');
      liPhone.textContent = `Phone Number: ${phone.value}`;
      let liAddress = document.createElement('li');
      liAddress.textContent = `Address: ${address.value}`;
      let liPostal = document.createElement('li');
      liPostal.textContent = `Postal Code: ${postalCode.value}`;

      ul.appendChild(liName);
      ul.appendChild(liEmail);
      ul.appendChild(liPhone);
      ul.appendChild(liAddress);
      ul.appendChild(liPostal);

      fullName.value = '';
      email.value = '';
      phone.value = '';
      address.value = '';
      postalCode.value = '';

      submitBtn.disabled = true;
      editBtn.disabled = false;
      continueBtn.disabled = false;

    }

  }

  function editInfo() {

    let ul = document.getElementById('infoPreview');
    let arrayLiElements = Array.from(ul.children);

    fullName.value = arrayLiElements[0].textContent.substring(11);
    email.value = arrayLiElements[1].textContent.substring(7);
    phone.value = arrayLiElements[2].textContent.substring(14);
    address.value = arrayLiElements[3].textContent.substring(9);
    postalCode.value = arrayLiElements[4].textContent.substring(13);

    arrayLiElements.forEach(el => el.remove());
    submitBtn.disabled = false;
    editBtn.disabled = true;
    continueBtn.disabled = true;

  }

  function continueFunc() {

    let div = document.getElementById('block');
    div.innerHTML = '';

    let h3 = document.createElement('h3');
    h3.textContent = "Thank you for your reservation!";
    div.appendChild(h3);

  }

}