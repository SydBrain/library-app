// DOM ELEMENTS
const addBookBtn = document.getElementById('addBookBtn');
const closeDialogBtn = document.getElementById('closeDialogBtn');

const addBookDialog = document.getElementById('addBookDialog');
const addBookForm = document.getElementById('addBookForm');
const libraryContainer = document.getElementById('libraryContainer');


// FUNCTIONS
function openBookDialog() {
    addBookDialog.showModal();
}

function closeBookDialog() {
    addBookDialog.close();
}

function createBookCard(book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.dataset.id = book.id;
    libraryContainer.appendChild(bookCard);

    const bookCover = document.createElement('img');
    bookCover.src = book.imageUrl;
    bookCard.appendChild(bookCover);

    const bookTitle = document.createElement('h3');
    bookTitle.innerText = book.title;
    bookCard.appendChild(bookTitle);

    const bookAuthor = document.createElement('p');
    bookAuthor.innerText = `by ${book.author}`;
    bookCard.appendChild(bookAuthor);

    const bookDescription = document.createElement('p');
    bookDescription.innerText = book.description;
    bookCard.appendChild(bookDescription);

    const bookPages = document.createElement('p');
    bookPages.innerText = `# ${book.pages} pages`;
    bookCard.appendChild(bookPages);

    const bookHasBeenRead = document.createElement('p');
    bookHasBeenRead.innerText = `Read: ${book.bookHasBeenRead ? 'Yes' : 'No'}`;
    bookCard.appendChild(bookHasBeenRead);

    const deleteBookBtn = document.createElement('button');
    deleteBookBtn.classList.add('delete-book-btn');
    deleteBookBtn.innerText = `Delete`;
    deleteBookBtn.setAttribute('data-action', 'delete-book');
    bookCard.appendChild(deleteBookBtn);
}

export {
    addBookBtn,
    closeDialogBtn,
    addBookForm,
    libraryContainer,
    createBookCard,
    openBookDialog,
    closeBookDialog,
};