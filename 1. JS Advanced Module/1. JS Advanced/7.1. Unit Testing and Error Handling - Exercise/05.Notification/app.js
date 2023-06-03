function notify(message) {
  
    const divNotification = document.getElementById('notification');
    divNotification.addEventListener('click', () => {
      divNotification.style.display = 'none';
    });
    divNotification.textContent = message;
    return divNotification.style.display = 'block';

}