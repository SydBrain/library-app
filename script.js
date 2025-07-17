import { initialBooks } from "./books.js";

// ===== DOM Elements =====
const addBookBtn = document.getElementById('addBookBtn');
const addBookDialog = document.getElementById('addBookDialog');
const addBookForm = document.getElementById('addBookForm');

// ===== Data Store =====
const myLibrary = [];

// ===== Book Class =====
class Book {
    constructor({title, author, pages, description, hasBeenRead, imageUrl = ""}) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = Number(pages); 
        this.description = description;
        this.hasBeenRead = hasBeenRead === "true"; 
        this.imageUrl = imageUrl;
    }
}

// ===== Functions =====
function addBookToLibrary(book) {
    if (book instanceof Book) {
        myLibrary.push(book);
    } else {
        throw new Error("Only instances of Book can be added to the library!");
    }
}

function openBookDialog() {
    addBookDialog.showModal();
}

function closeBookDialog() {
    addBookDialog.close();
}

// ===== Event Listeners =====
addBookBtn.addEventListener('click', openBookDialog);

addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);   
    const data = Object.fromEntries(formData.entries());
    const newBook = new Book(data);

    addBookToLibrary(newBook);

    closeBookDialog();
    
    addBookForm.reset();
});

// ===== Initialization =====
initialBooks.forEach(bookData => {
    const book = new Book(
        bookData.title,
        bookData.author,
        bookData.pages,
        bookData.description,
        bookData.hasBeenRead,
        bookData.imageUrl
    );
    myLibrary.push(book);
});

console.log("Initial library:", myLibrary);
