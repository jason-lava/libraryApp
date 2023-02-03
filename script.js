class Book {
    constructor(title = 'Unknown', author = 'Unknown', pages = '0', read = false) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
        }
}

class Library {
    constructor() {
      this.books = []
    }
    addBook(newBook) {
        this.books.push(newBook)
      }
}

const library = new Library()

// take form data and transfer into Book constructor to make Book
const getBookFromForm = () => {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').checked
    document.getElementById('addBookForm').style.display = 'none'
    addBookForm.onsubmit = addBook
    return new Book(title, author, pages, read)
}

// take newly created Book, add to Library
const addBook = (e) => {
    e.preventDefault()
    const newBook = getBookFromForm()
    library.addBook(newBook)
    buildBook()
    clearForm()
}

// take min, max of numbers to get whole integer in range
// will determine book sizes, then push into randomColor function for final book color depending on switch case
function randomSize(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min) + min)
}

function randomColor(randomSize) {
    switch(randomSize) {
        case 1:
            return 'rgb(220, 20, 60)' // crimson red
        case 2:
            return 'rgb(255, 140, 0)' // dark orange
        case 3:
            return 'rgb(255, 215, 0)' // gold
        case 4:
            return 'rgb(65, 105, 225)' // royal blue
        case 5:
            return 'rgb(245, 255, 250)' // mint cream
        case 6:
            return 'rgb(34, 139, 34)' // forest green
        case 7:
            return 'rgb(0, 128, 128)' // teal
        case 8:
            return 'rgb(221, 160, 221)' // plum
        case 9:
            return 'rgb(205, 133, 63)' // peru
        case 10:
            return 'rgb(176, 196, 222)' // light steel blue
        default: 
            return 'rgb(0, 0, 0)' // black
    }
}

let counter = 0

// take the Book from Library, "put on shelf" with random size and color for fun
function buildBook() {
    // loop through all books add XXX, sizing, and colors, then add the book details to the form
    for (let i = counter; counter < library.books.length; counter++) {
        const bookHTML = document.querySelector('.book')
        
        bookHTML.className = `book${i}`

        bookHTML.style.setProperty('--book-height', randomSize(120, 160) + 'px')
        bookHTML.style.setProperty('--book-width', randomSize(30, 35) + 'px')
        bookHTML.style.setProperty('background-color', randomColor(randomSize(1, 11)))

        const bookTitle = document.querySelector('.bookTitle')
        bookTitle.className = `bookTitle${i}`
        bookTitle.id = `bookTitle${i}`
        bookTitle.innerText = library.books[i].title
        
        if (library.books[i].title.length < 10)  {
            bookTitle.style.fontSize = '20px'
        } else if (library.books[i].title.length < 15)  {
            bookTitle.style.fontSize = '18px'
        } else {
            bookTitle.style.fontSize = '12px'
        }

        // define constants for eventListener
        const detailsTitle = document.getElementById('detailsTitle')
        const detailsAuthor = document.getElementById('detailsAuthor')
        const detailsPages = document.getElementById('detailsPages')
        const detailsRead = document.getElementById('detailsRead')
        
        // add eventListener to each book to push the books info into the Details pop-up
        const allBooksHTML = document.getElementById(`bookTitle${i}`)

        allBooksHTML.addEventListener('click', () => {
                console.log(allBooksHTML)
                console.log(allBooksHTML.innerText)

                detailsTitle.innerText = 'Title: ' + library.books[i].title
                detailsAuthor.innerText = 'Author: ' + library.books[i].author
                detailsPages.innerText = 'Pages: '  + library.books[i].pages
                detailsRead.innerText = 'Read: ' + library.books[i].read
        });
    }
}


// form, Book details => open and close them upon button press
function openForm() {
    document.getElementById('details').style.display = 'block'
    document.getElementById('addBookForm').style.display = 'none'
}
  
function closeMe() {
    document.getElementById('details').style.display = 'none'
    document.getElementById('addBookForm').style.display = 'none'
}

function openAddBook() {
    document.getElementById('addBookForm').style.display = 'block'
    document.getElementById('details').style.display = 'none'
}

function clearForm() {
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('pages').value = ''
    document.getElementById('read').checked = false
}