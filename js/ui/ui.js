// DOM ELEMENTS
const addBookBtn = document.getElementById('addBookBtn');
const addBookDialog = document.getElementById('addBookDialog');
const addBookForm = document.getElementById('addBookForm');


// FUNCTIONS
function openBookDialog() {
    addBookDialog.showModal();
}

function closeBookDialog() {
    addBookDialog.close();
}

export {
  addBookBtn,
  addBookForm,
  openBookDialog,
  closeBookDialog,
};