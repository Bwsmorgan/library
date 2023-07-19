let myLibrary = [];
const submitBtn = document.querySelector("#submit_new_book");
let dataSetCount = 1;


function Books (title, author, pages, read){

    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function(){
        return (`${title} by ${author}, ${pages} pages, ${read}`)
    }
}


function addBookToLibrary (bookObject) {
    myLibrary.push(bookObject)
    return myLibrary.slice(-1)

}

function updateLibrary (libraryArray) {

    for (const book of libraryArray) {

        const row = document.createElement("tr")
        row.setAttribute("id", `${dataSetCount}`)
        row.setAttribute("data-count", `${dataSetCount}`)
        row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.pages}</td><td>${book.read}</td>`


        document.getElementById("myLibrary").appendChild(row)
        
        // innerHTML += `<tr data-count=${dataSetCount} ><td>${book.title}</td><td>${book.author}</td><td>${book.pages}</td><td>${book.read}</td></tr>`;      

        console.log(row.dataset.count)
        
        dataSetCount += 1;
    }
    
}

function openNewBookForm () {
    document.getElementById("newBookForm").style.display = "block";

}

submitBtn.addEventListener("click", closeNewBookForm)

function closeNewBookForm (e){

    e.preventDefault()

    const title = document.querySelector("#book_title").value;
    const author = document.querySelector("#book_author").value;
    const pages = document.querySelector("#book_pages").value;
    const read = document.querySelector("#read_book").value;

    console.log(title);
    let newBook = new Books(title, author, pages, read);
    console.log(newBook);
    
    let newLibrary = addBookToLibrary(newBook);
    console.log(newLibrary[2]);
    updateLibrary(newLibrary);
    
    document.getElementById("newBookForm").style.display = "none";
    
}



book1 = new Books('Harry Potter', 'J.K Rawlings', '500', 'yes');
// console.log(myBook.info());

book2 = new Books('Handmaids Tale', 'Margret Atwood', '400', 'yes')

addBookToLibrary(book1)
addBookToLibrary(book2)

// console.log(myLibrary[0])
// addBookToLibrary(myFavouriteBook)

updateLibrary(myLibrary)

// console.log(Object.getPrototypeOf(myBook) === Books.prototype)
// console.log(Object.getPrototypeOf(myFavouriteBook) === Object.getPrototypeOf(myBook))
// console.log(myBook.__proto__ === Books.prototype)

// console.log(myBook.valueOf())

// console.log(Object.prototype.hasOwnProperty('valueOf'))
// console.log(Object.getPrototypeOf(Object.prototype))