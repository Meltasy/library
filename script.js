class Book {
    constructor(title, author, genre, numPages, isRead) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.numPages = numPages;
        this.isRead = isRead;
    };
    toggleRead() {
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
const titleInput = form.querySelector("#title");
const authorInput = form.querySelector("#author");
const genreInput = form.querySelector("#genre");
const numPagesInput = form.querySelector("#numPages");
const isReadInput = form.querySelector("#isRead");
const titleError = form.querySelector("#title + span.error");
const authorError = form.querySelector("#author + span.error");
const genreError = form.querySelector("#genre + span.error");
const numPagesError = form.querySelector("#numPages + span.error");
const isReadError = form.querySelector("#isRead + span.error");

function showErrorMsg() {
    if (titleInput.validity.valueMissing) {
        titleError.textContent = "Please complete the title.";
        titleError.className = "error active";
    }
    if (titleInput.validity.patternMismatch) {
        titleError.textContent = "Please use the Roman alphabet.";
        titleError.className = "error active";
    }
    if (authorInput.validity.valueMissing) {
        authorError.textContent = "Please complete the author.";
        authorError.className = "error active";
    }
    if (authorInput.validity.patternMismatch) {
        authorError.textContent = "Please use the Roman alphabet.";
        authorError.className = "error active";
    }
    if (genreInput.validity.valueMissing) {
        genreError.textContent = "Please choose a genre.";
        genreError.className = "error active";
    }
    if (numPagesInput.validity.rangeUnderflow) {
        numPagesError.textContent = "The number must be more than 10.";
        numPagesError.className = "error active";
    }
    if (numPagesInput.validity.rangeOverflow) {
        numPagesError.textContent = "The number must be less than 2000.";
        numPagesError.className = "error active";
    }
    if (numPagesInput.validity.valueMissing) {
        numPagesError.textContent = "Please enter a number.";
        numPagesError.className = "error active";
    }
    if (isReadInput.validity.valueMissing) {
        isReadError.textContent = "Please answer the question.";
        isReadError.className = "error active";
    }
}

function removeErrorMsg() {
    titleError.textContent = "";
    titleError.className = "error";
    authorError.textContent = "";
    authorError.className = "error";
    genreError.textContent = "";
    genreError.className = "error";
    numPagesError.textContent = "";
    numPagesError.className = "error";
    isReadError.textContent = "";
    isReadError.className = "error";
}

titleInput.addEventListener("input", () => {
    if (titleInput.validity.valid) {
        removeErrorMsg();
    } else {
        showErrorMsg();
    }
});

authorInput.addEventListener("input", () => {
    if (authorInput.validity.valid) {
        removeErrorMsg();
    } else {
        showErrorMsg();
    }
});

genreInput.addEventListener("input", () => {
    if (genreInput.validity.valid) {
        removeErrorMsg();
    } else {
        showErrorMsg();
    }
});

numPagesInput.addEventListener("input", () => {
    if (numPagesInput.validity.valid) {
        removeErrorMsg();
    } else {
        showErrorMsg();
    }
});

isReadInput.addEventListener("input", () => {
    if (isReadInput.validity.valid) {
        removeErrorMsg();
    } else {
        showErrorMsg();
    }
});

showForm.addEventListener("click", () => {
    dialog.showModal();
});

cancelBtn.addEventListener("click", () => {
    dialog.close();
    form.reset();
    removeErrorMsg();
})

addBtn.addEventListener("click", (event) => {
    if (!titleInput.validity.valid || !authorInput.validity.valid || !genreInput.validity.valid || !numPagesInput.validity.valid || !isReadInput.validity.valid) {
        showErrorMsg();
        event.preventDefault();
    } else {
        event.preventDefault();
        const title = titleInput.value;
        const author = authorInput.value;
        const genre = genreInput.value;
        const numPages = numPagesInput.value;
        const isReadText = isReadInput.value;
        if (isReadText === "Yes") {
            isRead = true;
        } else if (isReadText === "No") {
            isRead = false;
        }
        dialog.close();
        form.reset();
        removeErrorMsg();
        addBookToLibrary(title, author, genre, numPages, isRead);
        updateBookshelf();
    }
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