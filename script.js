import { initialBooks } from "./books.js"

// Initialization

const myLibrary = [];

initialBooks.forEach(book => {
    book.id = crypto.randomUUID();
    myLibrary.push(book)
});


console.log(myLibrary);

class Book {
    constructor(title, author, pages, description, hasBeenRead) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.description = description;
        this.hasBeenRead = hasBeenRead;
    }
};

function addBookToLibrary(book) {

    if (book instanceof Book) {
        myLibrary.push(book);
    } else {
        throw new Error("Only instances of Book can be added to the library!");
    }

};

