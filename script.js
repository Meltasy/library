let myLibrary = [
    new Book("The Garden of Evening Mists", "Tan Twan Eng", "historical fiction", 348, true),
    new Book("The Gift of Rain", "Tan Twan Eng", "historical fiction", 508, true),
    new Book("Au revoir là-Haut", "Pierre Lemaitre", "historical fiction", 624, true),
    new Book("Le grand monde", "Pierre Lemaitre", "historical fiction", 756, false),
    new Book("The Three-Body Problem", "Ci Xin Liu", "science-fiction", 424, true),
    new Book("The Dark Forest", "Ci Xin Liu", "science-fiction", 550, true),
    new Book("Un si bel horizon", "Françoise Bourdin", "fitcion", 285, false),
    new Book("Face à la mer", "Françoise Bourdin", "fitcion", 334, false),
];

// let getNewBook = document.querySelector(".getNewBook");

// getNewBook.addEventListener("submit", (event) => {
//     event.preventDefault();
//     let newBook = new Book ({
//         id: newId,
//         title: getTitle.value,
//         author: getAuthor.value,
//         genre: getGenre.value,
//         numPages: getNumPages.value,
//         isRead: getIsRead.value,
//     });
// });

// let myLibrary = [];

function Book(title, author, genre, numPages, isRead) {
// function Book(id, title, author, genre, numPages, isRead) {
    // this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.numPages = numPages;
    this.isRead = function() {
        if (isRead === true) {
            return "This books has been read.";
        } else if (isRead === false) {
            return "This book is waiting to be read. Quick, pick it up!";
        }
    }
    this.info = function() {
        return `${this.title} by ${this.author} has ${numPages} pages and is a ${genre} story.`;
    }
}

function addBookToLibrary() {
    // let id = myLibrary.forEach(getId);
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const genre = document.querySelector("#genre").value;
    const numPages = document.querySelector("#numPages").value;
    const isRead = document.querySelector("input[name=isRead]:checked").value;
    // let newBook = new Book(id, title, author, genre, numPages, isRead);
    const newBook = new Book(title, author, genre, numPages, isRead);
    myLibrary.push(newBook);
    updateBookshelf();
}

function updateBookshelf() {
    let bookshelf = document.querySelector("#bookshelf");
    while (bookshelf.firstChild) {
        bookshelf.removeChild(bookshelf.lastChild);
    }
    for (i = 0; i < myLibrary.length; i++) {
        createBook(myLibrary[i]);
    }
}

function createBook(newBook) {
    let bookshelf = document.querySelector("#bookshelf");
    let eachBook = document.createElement("div");
    // const id = document.createElement("p");
    // id.textContent = `${newBook.id}`;
    let title = document.createElement("h3");
    title.textContent = `${newBook.title}`;
    let author = document.createElement("h4");
    author.textContent = `by ${newBook.author}`;
    let genre = document.createElement("p");
    genre.textContent = `${newBook.genre}`;
    let numPages = document.createElement("p");
    numPages.textContent = `${newBook.numPages} pages`;
    let isRead = document.createElement("p");
    isRead.textContent = `${newBook.isRead()}`;
    eachBook.appendChild(title);
    eachBook.appendChild(author);
    eachBook.appendChild(genre);
    eachBook.appendChild(numPages);
    eachBook.appendChild(isRead);
    bookshelf.appendChild(eachBook);
}

updateBookshelf();

console.log(myLibrary);