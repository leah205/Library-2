const newBookBtn = document.querySelector('.new-book');
const bookLog = document.querySelector('.book-log');
const bookForm = document.querySelector('.book-form');
const submitFormBtn = document.querySelector('.book-form button');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector("#pages");
const selectRead = document.querySelector("#read");

const myLibrary = [];
//rating?
//filters for display books like if its been read
//read just gives attribute of checked 
//required fields
//cancel button for book form
//fix that it gets unchecked when reload
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

function displayBooks(){
    myLibrary.forEach((book) => {
        displayBook(book);
    });
}

function displayBook(book){
    const bookContainer = document.createElement('div');
    
    bookContainer.appendChild(createBookName(book.name));
    bookContainer.appendChild(createBookAuthor(book.author));
    bookContainer.appendChild(createBookPages(book.pages));
    bookContainer.appendChild(createBookRead(book.read, book));
    bookContainer.appendChild(createDeleteButton(book));
  
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

function createBookRead(read,book){
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

    bookRead.addEventListener('click', () =>{
        toggleBookRead(book);
    })

    return bookReadContainer;
};

function createDeleteButton(book){
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "x";
    deleteBtn.addEventListener('click', () =>{
        deleteBtn.parentElement.remove();
        myLibrary.splice(myLibrary.indexOf(book),1);
        }
    );
    return deleteBtn;

 }


newBookBtn.addEventListener('click', () => {
    bookForm.classList.remove('no-display');
})

submitFormBtn.addEventListener('click', () =>{
    bookForm.classList.add('no-display');
    addBookToLibrary(title.value, author.value, pages.value, Boolean(selectRead.selectedIndex));
    removeChildren(bookLog);
    resetForm()
    displayBooks();

});

function isInvalid(form){
    if(!(title.value && author.value && pages.value)){
        return true;
    }
};
function indicateRequired(element){
    console.log(element);
    element.classList.add('invalid');
}

function removeChildren(container){
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
};

function resetForm(){
    title.value = "";
    author.value = "";
    pages.value = "";
};

function toggleBookRead(book){
    book.read = !book.read;
}


