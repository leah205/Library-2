const newBookBtn = document.querySelector('.new-book');
const bookLog = document.querySelector('.book-log');
const bookForm = document.querySelector('.book-form');
const submitFormBtn = document.querySelector('.book-form button');

const myLibrary = [];
//rating?
//filters for display books like if its been read
//read just gives attribute of checked 
function Book(name, author, pages, read){
    this.name = name;
    this.author = author;
    this.pages= pages;
    this.read = read;
};

function addBookToLibrary(name, author, pages, read){
    let book = new Book(name, author, pages, read)
    myLibrary.push(book);
}

addBookToLibrary('My Year of Rest and Relaxation', 'Otessa Moshfegh', 288, false);
addBookToLibrary('Red Rising', 'Pierce Brown', 400, true);

function displayBooks(){
    myLibrary.forEach((book) => {
        displayBook(book);
        console.log('hi');
    });
}

function displayBook(book){
    const bookContainer = document.createElement('div');
    
    bookContainer.appendChild(createBookName(book.name));
    bookContainer.appendChild(createBookAuthor(book.author));
    bookContainer.appendChild(createBookPages(book.pages));
    //bookContainer.appendChild(createReadLabel());
    bookContainer.appendChild(createBookRead(book.read));
  
    bookLog.appendChild(bookContainer);
}

function createBookName(name){
    const bookName = document.createElement('h2');
    bookName.textContent = name;
    return bookName;
}

function createBookAuthor(author){
    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = author;
    return bookAuthor;
}

function createBookPages(pages){
    const bookPages = document.createElement('p');
    bookPages.textContent = `${pages} pages`;
    return bookPages;
}

function createBookRead(read){
    const bookReadContainer = document.createElement("div");

    const readLabel = document.createElement('label');
    readLabel.textContent = "read:";
    readLabel.setAttribute("for", "isRead");

    const bookRead = document.createElement('input');
    bookRead.setAttribute('type', 'checkbox');
    bookRead.setAttribute("id", "isread");
    if(read) bookRead.setAttribute('checked','');
    bookReadContainer.appendChild(readLabel);
    bookReadContainer.appendChild(bookRead);

    return bookReadContainer;
}



displayBooks();


newBookBtn.addEventListener('click', () => {
    bookForm.classList.remove('no-display');
})

submitFormBtn.addEventListener('click', () =>{
    bookForm.classList.add('no-display');
})


