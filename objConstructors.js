let myLibrary = [];

// New book btn -- effects
let newBookBtn = document.getElementById('new-book');
let newBookForm = document.getElementById('book-form');

newBookBtn.addEventListener('click', () => {
    newBookForm.style.display = 'block';
});

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        let status = this.read ? "read" : "not read yet";
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${status}`);
    }
}

function addBookToLibrary(event) {
    // below code = allows for new book to be added now -- with no storage configs yet *(has some errorcodes? - but working)
    event.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value === 'Yes' ? true : false;

    myLibrary.push(new book(title, author, pages, read));
    displayBooks();
}

function displayBooks() {
    let table = document.getElementById("book-table");
    let tableBody = table.getElementsByTagName("tbody")[0];
    tableBody.innerHTML = ""; // Clear the table body   

    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];

        // Create new row for book
        let row = tableBody.insertRow();

        // Create cells - title, author, pages, read
        let titleCell = row.insertCell();
        let authorCell = row.insertCell();
        let pagesCell = row.insertCell();
        let readCell = row.insertCell();

        // Fill cells with book info
        titleCell.innerHTML = book.title;
        authorCell.innerHTML = book.author;
        pagesCell.innerHTML = book.pages;
        readCell.innerHTML = book.read ? 'True' : 'False';
    }
}

function initializeLibrary() {
    myLibrary.push(new book("The Hobbit", "J.R.R. Tolkien", 295, false));
    myLibrary.push(new book("The Lord of the Rings", "J.R.R. Tolkien", 1178, true));
    myLibrary.push(new book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 309, true));
    displayBooks();
}

