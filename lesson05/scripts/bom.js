document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('favchap');
    const button = document.querySelector('button');
    const list = document.getElementById('list');

    button.addEventListener('click', function() {
        const chapter = input.value.trim();
        if (chapter !== '') {
            const li = document.createElement('li');
            const deleteButton = document.createElement('button');
            li.textContent = chapter;
            deleteButton.textContent = '❌';
            deleteButton.classList.add('delete');

            deleteButton.addEventListener('click', function() {
                li.remove();
                input.focus();
            });

            li.appendChild(deleteButton);
            list.appendChild(li);
            input.value = '';
            input.focus();
        } else {
            alert('Please enter a chapter.');
        }
    });
});
