let myLibrary = [];
const submitBtn = document.querySelector("#submit_new_book");
const exitFormBtn = document.querySelector("#exit_btn")
let dataSetCount = 1;

// Books.prototype.changeReadStatus = function(checkboxID) {

//     let checkbox = document.getElementById(`checkbox${checkboxID}`)

//     if (checkbox.checked === true) {
//         this.read = "yes"
//         console.log(this.read)
//     }
//     else{
//         this.read = "no"
//         console.log(this.read)
//     }
// }    



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
        row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.pages}</td><td>
        <input type="checkbox"
               id="checkbox${dataSetCount}" onclick="readStatus(this.id)"
        />
                
        </td><td><button type="submit" id=${dataSetCount} onclick="deleteBookFromLibrary(this.id)">Delete</button></td>`


        document.getElementById("myLibrary").appendChild(row)
        
        // innerHTML += `<tr data-count=${dataSetCount} ><td>${book.title}</td><td>${book.author}</td><td>${book.pages}</td><td>${book.read}</td></tr>`;      

        console.log(row.dataset.count)
        console.log(myLibrary);
        
        dataSetCount += 1;
    }
    
}

function openNewBookForm () {
    document.getElementById("newBookForm").style.display = "block";

}

submitBtn.addEventListener("click", submitNewBookForm)

function submitNewBookForm (e){

    e.preventDefault()

    const title = document.querySelector("#book_title").value;
    const author = document.querySelector("#book_author").value;
    const pages = document.querySelector("#book_pages").value;
    const read = document.querySelector("#read_book").value;

    let newBook = new Books(title, author, pages, read);
    
    let newLibrary = addBookToLibrary(newBook);

    updateLibrary(newLibrary);
    
    document.getElementById("newBookForm").style.display = "none";
    
}

function deleteBookFromLibrary(button_id) {

    console.log(button_id)
    const selectedRow = document.getElementById(`${button_id}`)

    
    delete selectedRow.remove()
    
    //Removes the deleted row from our library array
    myLibrary.splice(myLibrary[`${button_id}`], 1);
    console.log(myLibrary);

}


function readStatus(checkbox_id) {
    console.log(`${checkbox_id}`)
    let checkbox = document.getElementById(`${checkbox_id}`)
    console.log(checkbox.checked)
    console.log(this.author)
}

exitFormBtn.addEventListener("click", exitForm)

function exitForm(e) {

    e.preventDefault()

    console.log("exited")
    document.getElementById("newBookForm").style.display = "none";
   
    console.log(myLibrary)

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