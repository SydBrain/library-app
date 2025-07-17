import { initialBooks } from "./data/initialBooks.js";
import { Book } from "./model/book.js";
import { 
  addBookBtn, 
  addBookForm, 
  openBookDialog, 
  closeBookDialog, 
  createBookCard,
  closeDialogBtn,
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
closeDialogBtn.addEventListener('click', closeBookDialog);

addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);   
    const data = Object.fromEntries(formData.entries());
    const newBook = new Book(data);

    addBookToLibrary(newBook);
    createBookCard(newBook);

    closeBookDialog();
    
    addBookForm.reset();
});

libraryContainer.addEventListener('click', (e) => {
  if (e.target.dataset.action === 'delete-book') {
    const card = e.target.closest('.book-card');
    const id = card.dataset.id;

    const index = myLibrary.findIndex(book => book.id === id);
    if (index !== -1) {
      myLibrary.splice(index, 1);
    }

    card.remove();
  }
});

// Initialization
initialBooks.forEach(book => {
    const newBook = new Book(book);
    addBookToLibrary(newBook);
    createBookCard(newBook);
});

