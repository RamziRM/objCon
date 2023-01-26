let myLibrary = [];

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
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;
}

function displayBooks () {
    
}