function Book(title, author, genre, numPages, isRead) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.numPages = numPages;
    this.isRead = isRead;
    this.toggleRead = () => {
        this.isRead = !this.isRead;
    };
}

function addBookToLibrary(title, author, genre, numPages, isRead) {
    const newBook = new Book(title, author, genre, numPages, isRead);
    myLibrary.push(newBook);
}

function updateBookshelf() {
    let bookshelf = document.querySelector("#bookshelf");
    while (bookshelf.firstChild) {
        bookshelf.removeChild(bookshelf.lastChild);
    }
    for (i = 0; i < myLibrary.length; i++) {
        createBookCard(myLibrary[i], i);
    }
}

function createBookCard(book, idx) {
    let eachBook = document.createElement("div");

    let title = document.createElement("h3");
    title.textContent = `${book.title}`;
    eachBook.appendChild(title);

    let author = document.createElement("h4");
    author.textContent = `by ${book.author}`;
    eachBook.appendChild(author);

    let genre = document.createElement("p");
    genre.textContent = `${book.genre}`;
    eachBook.appendChild(genre);

    let numPages = document.createElement("p");
    numPages.textContent = `${book.numPages} pages`;
    eachBook.appendChild(numPages);

    let isRead = document.createElement("p");
    if (book.isRead === true) {
        isRead.textContent = `I've read this book.`;
    } else {
        isRead.textContent = `I haven't read this book.`;
    }
    eachBook.appendChild(isRead);

    let removeBtn = document.createElement("button");
    removeBtn.textContent = `Remove Book`;
    removeBtn.addEventListener("click", () => {
        removeBook(idx);
    });
    eachBook.appendChild(removeBtn);

    let toggleReadBtn = document.createElement("button");
    if (book.isRead === true) {
        toggleReadBtn.textContent = `Haven't read`;
    } else if (book.isRead === false) {
        toggleReadBtn.textContent = `Have read`;
    }
    toggleReadBtn.addEventListener("click", () => {
        toggleReadBook(idx);
    });
    eachBook.appendChild(toggleReadBtn);

    let bookshelf = document.querySelector("#bookshelf");
    bookshelf.appendChild(eachBook);
}

function removeBook(idx) {
    myLibrary.splice(idx, 1);
    updateBookshelf();
}

function toggleReadBook(idx) {
    myLibrary[idx].toggleRead();
    updateBookshelf();
}

const dialog = document.querySelector("dialog");
const form = document.querySelector("form");
const showForm = document.querySelector("#showForm");
const cancelBtn = document.querySelector("#cancelBtn");

showForm.addEventListener("click", () => {
    dialog.showModal();
});

cancelBtn.addEventListener("click", () => {
    dialog.close();
    form.reset();
})

addBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const genre = document.querySelector("#genre").value;
    const numPages = document.querySelector("#numPages").value;
    const isReadText = document.querySelector("#isRead").value;
    if (isReadText === "Yes") {
        isRead = true;
    } else if (isReadText === "No") {
        isRead = false;
    }
    if (title ===  null || title === "" || author === null || author === "" || numPages === null || numPages === "") {
        alert("Please complete all of the fields.");
        return false;
    }
    dialog.close();
    form.reset();
    addBookToLibrary(title, author, genre, numPages, isRead);
    updateBookshelf();
});

let myLibrary = [
    new Book("The Garden of Evening Mists", "Tan Twan Eng", "Historical Fiction", 348, true),
    new Book("The Gift of Rain", "Tan Twan Eng", "Historical Fiction", 508, true),
    new Book("Au revoir là-haut", "Pierre Lemaitre", "Historical Fiction", 624, true),
    new Book("Le grand monde", "Pierre Lemaitre", "Historical Fiction", 756, false),
    new Book("The Three-Body Problem", "Ci Xin Liu", "Science-Fiction", 424, true),
    new Book("The Dark Forest", "Ci Xin Liu", "Science-Fiction", 550, true),
    new Book("Un si bel horizon", "Françoise Bourdin", "Drama", 285, false),
    new Book("Face à la mer", "Françoise Bourdin", "Drama", 334, false),
];

updateBookshelf();

console.log(myLibrary);