// const myLibrary = [];

// function Book(title, author, genre, numPages, isRead) {
//     this.title = title;
//     this.author = author;
//     this.genre = genre;
//     this.numPages = numPages;
//     this.isRead = function() {
//         if (isRead === true) {
//             return "This books has been read.";
//         } else if (isRead === false) {
//             return "This book is waiting to be read. Quick, pick it up!";
//         }
//     }
//     this.info = function() {
//         return `${this.title} by ${this.author} has ${numPages} pages and is a ${genre} story.`;
//     }
// }

// function addBookToLibrary(title, author, genre, numPages, isRead) {
//     let newBook = new Book(title, author, genre, numPages, isRead);
//     myLibrary.push(new Book);
//     return newBook;
// }

// const book1 = new Book("The Garden of Evening Mists", "Tan Twan Eng", "historical fiction", 348, true);
// const book2 = new Book("The Gift of Rain", "Tan Twan Eng", "historical fiction", 508, true);
// const book3 = new Book("Au revoir là-Haut", "Pierre Lemaitre", "historical fiction", 624, true);
// const book4 = new Book("Le grand monde", "Pierre Lemaitre", "historical fiction", 756, false);
// const book5 = new Book("The Three-Body Problem", "Ci Xin Liu", "science-fiction", 424, true);
// const book6 = new Book("The Dark Forest", "Ci Xin Liu", "science-fiction", 550, true);
// const book7 = new Book("Un si bel horizon", "Françoise Bourdin", "fitcion", 285, false);
// const book8 = new Book("Face à la mer", "Françoise Bourdin", "fitcion", 334, false);

const bookshelf = document.querySelector("#bookshelf");
console.log(bookshelf);

function createBook(title, author, genre, numPages, isRead) {
    const book = document.createElement("div");
    book.className = "card";

    const titleEntry = document.createElement("h3");
    titleEntry.textContent = `Title: ${title}`;

    const authorEntry = document.createElement("p");
    authorEntry.textContent = `Author: ${author}`;

    const genreEntry = document.createElement("p");
    genreEntry.textContent = `Genre: ${genre}`;

    const pageEntry = document.createElement("p");
    pageEntry.textContent = `${numPages} pages`;

    const readEntry = document.createElement("p");
    readEntry.textContent = isRead;

    book.appendChild(titleEntry);
    book.appendChild(authorEntry);
    book.appendChild(genreEntry);
    book.appendChild(pageEntry);
    book.appendChild(readEntry);

    return book;
}

bookshelf.appendChild(createBook("Wild Swans", "Jung Chang", "historical fiction", 670, true));
bookshelf.appendChild(createBook("The Garden of Evening Mists", "Tan Twan Eng", "historical fiction", 348, true));
bookshelf.appendChild(createBook("The Gift of Rain", "Tan Twan Eng", "historical fiction", 508, true));
bookshelf.appendChild(createBook("Au revoir là-Haut", "Pierre Lemaitre", "historical fiction", 624, true));
bookshelf.appendChild(createBook("Le grand monde", "Pierre Lemaitre", "historical fiction", 756, false));
bookshelf.appendChild(createBook("The Three-Body Problem", "Ci Xin Liu", "science-fiction", 424, true));
bookshelf.appendChild(createBook("The Dark Forest", "Ci Xin Liu", "science-fiction", 550, true));
bookshelf.appendChild(createBook("Un si bel horizon", "Françoise Bourdin", "fitcion", 285, false));
bookshelf.appendChild(createBook("Face à la mer", "Françoise Bourdin", "fitcion", 334, false));