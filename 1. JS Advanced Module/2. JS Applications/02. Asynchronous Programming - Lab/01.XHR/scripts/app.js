function loadRepos() {
  
   let url = 'https://api.github.com/users/testnakov/repos';
   
   let httpRequest = new XMLHttpRequest();

   httpRequest.addEventListener('readystatechange', loadFunc);
   httpRequest.open('GET', url);
   httpRequest.send();

   function loadFunc() {
      if(httpRequest.readyState === 4 && httpRequest.status === 200) {
         document.getElementById('res').textContent = httpRequest.responseText;
      }
   }

}