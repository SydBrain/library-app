const addBookBtn = document.getElementById('addBookBtn');
const addBookDialog = document.getElementById('addBookDialog');
const addBookForm = document.getElementById('addBookForm');

function openBookDialog() {
    addBookDialog.showModal();
}

function closeBookDialog() {
    addBookDialog.close();
}