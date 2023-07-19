let myLibrary = [];

function Books (title, author, pages, read){

    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function(){
        return (`${title} by ${author}, ${pages} pages, ${read}`)
    }
}


function addBooksToLibrary (bookObject) {
    return myLibrary.push(bookObject)

}

function displayBookInfo (libraryArray) {

    for (const book of libraryArray) {

        document.getElementById("myLibrary").innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.pages}</td><td>${book.read}</td></tr>`
    }

}

function openNewBookForm () {
    document.getElementById("newBookForm").style.display = "block";

}

function closeNewBookForm (){
    document.getElementById("newBookForm").style.display = "none"
}



myBook = new Books('Harry Potter', 'J.K Rawlings', '500', 'yes');
// console.log(myBook.info());

myFavouriteBook = new Books('Handmaids Tale', 'Margret Atwood', '400', 'yes')

addBooksToLibrary(myBook)
console.log(myLibrary[0])
addBooksToLibrary(myFavouriteBook)

displayBookInfo(myLibrary)

// console.log(Object.getPrototypeOf(myBook) === Books.prototype)
// console.log(Object.getPrototypeOf(myFavouriteBook) === Object.getPrototypeOf(myBook))
// console.log(myBook.__proto__ === Books.prototype)

// console.log(myBook.valueOf())

// console.log(Object.prototype.hasOwnProperty('valueOf'))
// console.log(Object.getPrototypeOf(Object.prototype))