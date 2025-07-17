import { initialBooks } from "./data/initialBooks.js";
import { Book } from "./model/book.js";
import { 
  addBookBtn, 
  addBookForm, 
  openBookDialog, 
  closeBookDialog 
} from "./ui/ui.js";

// Data Store
const myLibrary = [];

// Functions 
function addBookToLibrary(book) {
    if (book instanceof Book) {
        myLibrary.push(book);
    } else {
        throw new Error("Only instances of Book can be added to the library!");
    }
}

// Event Listeners 
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

// Initialization
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
