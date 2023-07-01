function attachEvents() {
    
    const submit = document.getElementById('submit');
    submit.addEventListener('click', submitMessage);
    const refresh = document.getElementById('refresh');
    refresh.addEventListener('click', refreshMessages);

    async function submitMessage(event) {
        const name = document.querySelector('[name="author"]').value;
        const message = document.querySelector('[name="content"]').value;

        await fetch('http://localhost:3030/jsonstore/messenger', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                author: name,
                content: message
            })
        });
    }

    async function refreshMessages(event) {
        const textarea = document.querySelector('textarea');
        const response = await fetch('http://localhost:3030/jsonstore/messenger');
        const data = await response.json();
        textarea.value = '';

        const result = [];
        Object.values(data).forEach(message => {
            result.push(`${message.author}: ${message.content}`);
        });
        textarea.value = result.join('\n');
    }

}

attachEvents();