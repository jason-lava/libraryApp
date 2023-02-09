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
let deleteThisBook = ''

// take the Book from Library, "put on shelf" with random size and color for fun

function buildBook() {
    for (let i = counter; counter < library.books.length; counter++) {
        const bookAll = document.querySelector('.book')
        bookAll.className = `book${i}`

        bookAll.style.setProperty('--book-height', randomSize(150, 175) + 'px')
        bookAll.style.setProperty('--book-width', randomSize(30, 35) + 'px')
        bookAll.style.setProperty('background-color', randomColor(randomSize(1, 11)))

        const bookTitle = document.querySelector('.bookTitle')
        bookTitle.innerText = library.books[i].title
        bookTitle.className = `bookTitle${i}`
        bookTitle.id = `bookTitle${i}`

        const bookAuthor = document.querySelector('.bookAuthor')
        bookAuthor.innerText = library.books[i].author
        bookAuthor.className = `bookAuthor${i}`
        bookAuthor.id = `bookAuthor${i}`

        const bookPages= document.querySelector('.bookPages')
        bookPages.innerText = library.books[i].pages
        bookPages.className = `bookPages${i}`
        bookPages.id = `bookPages${i}`

        const bookRead = document.querySelector('.bookRead')
        bookRead.innerText = library.books[i].read
        bookRead.className = `bookRead${i}`
        bookRead.id = `bookRead${i}`

        if (library.books[i].title.length < 10)  {
            bookTitle.style.fontSize = '18px'
        } else if (library.books[i].title.length < 15)  {
            bookTitle.style.fontSize = '16px'
        }  else if (library.books[i].title.length < 20)  {
            bookTitle.style.fontSize = '14px'
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

            deleteThisBook = document.getElementById(`bookTitle${i}`).innerText
            // deleteThisTitle = document.getElementById(`bookTitle${i}`).innerText
            // deleteThisAuthor = document.getElementById(`bookTitle${i}`).innerText
            // deleteThisPages = document.getElementById(`bookTitle${i}`).innerText
            // deleteThisRead = document.getElementById(`bookTitle${i}`).innerText

            const index = library.books.findIndex(books => books.title === document.getElementById(`bookTitle${i}`).innerText)
            console.log(document.getElementById(`bookTitle${i}`).innerText)
            console.log(index)

            // const index = library.books.findIndex(books => {
            //     console.log(deleteThisBook == document.getElementById(`bookTitle${i}`).innerText)
            // })

            detailsTitle.innerText = 'Title: ' + document.getElementById(`bookTitle${i}`).innerText
            detailsAuthor.innerText = 'Author: ' + document.getElementById(`bookAuthor${i}`).innerText
            detailsPages.innerText = 'Pages: '  + document.getElementById(`bookPages${i}`).innerText
            if (document.getElementById(`bookRead${i}`).innerText === true) {
                detailsRead.innerText = 'Nice, you\'ve read this book!'
            } else {
                detailsRead.innerText = 'Add this book to your reading list!'
            }
        })
        // console.log(bookAll)
    }
}

function openAddBook() {
    if (counter === 30) {
        return alert('\nGreat job - your library is full!\n\nContinue reading more books while we build a bigger library for you.')
    } else {
        document.getElementById('addBookForm').style.display = 'block'
        document.getElementById('details').style.display = 'none'
    }
}

// REMOVE BOOK  
function removeBook() {
    
    document.querySelector(`.book${bookIndex}`).className = `book inactive`
    document.querySelector(`.bookTitle${bookIndex}`).className = `bookTitle`

    library.books.splice(bookIndex, 1)

    counter = library.books.length
    
    // console.table(library.books)
    console.log(counter, bookIndex)

    // buildBook()
    closeMe()
}

const fillUpLibrary = () => {
    if (counter === 30) {
        return alert('\nGreat job - your library is full!\n\nContinue reading more books while we build a bigger library for you.')
    } else {
    for (let i = counter; i < 30; i++) {
        const newBook = new Book(defaultBooks[i].title, defaultBooks[i].author, defaultBooks[i].pages, defaultBooks[i].read)
        library.addBook(newBook)
        buildBook()
        }    
    }
    closeMe()
    clearForm()
    counter === 30
}

const emptyLibrary = () => {
    for (let i = 0; i < counter; i++) {
        const emptyBooks = document.querySelector(`.book${i}`)
        const emptyBooksTitle = document.querySelector(`.bookTitle${i}`)
        emptyBooks.className = `book inactive`
        emptyBooksTitle.className = `bookTitle`
    }    
    library.books = []
    closeMe()
    clearForm()
    counter = 0
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


function clearForm() {
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('pages').value = ''
    document.getElementById('read').checked = false
}




let defaultBooks = [
    {title: 'Atlas Shrugged', author: 'Ayn Rand', pages: 1069, read: false}, 
    {title: 'Why Nations Fail', author: 'Daron Acemoglu', pages: 482, read: false}, 
    {title: 'Antifragile', author: 'Nassim Nicholas Taleb', pages: 423, read: false}, 
    {title: 'Never Eat Alone', author: 'Keith Ferrazzi', pages: 367, read: false}, 
    {title: 'Mastery', author: 'Robert Greene', pages: 311, read: false}, 
    {title: 'The Black Swan', author: 'Nassim Nicholas Taleb', pages: 310, read: false}, 
    {title: 'Fanatical Prospecting', author: 'Jeb Blount', pages: 304, read: false}, 
    {title: 'The Innovators DNA', author: 'Jeff Dyer', pages: 268, read: false}, 
    {title: 'The Product Book', author: 'Product School', pages: 300, read: false}, 
    {title: 'The Lean Startup', author: 'Eric Ries', pages: 290, read: false}, 
    {title: 'Ham On Rye', author: 'Charles Bukowski', pages: 283, read: false}, 
    {title: 'The Innovators Dilemma', author: 'Clayton Christensen', pages: 270, read: false}, 
    {title: 'First, Break All The Rules', author: 'Jim Harter', pages: 267, read: false}, 
    {title: 'Good To Great', author: 'Jim Collins', pages: 260, read: false}, 
    {title: 'The Millionaire Next Door', author: 'Thomas J. Stanley', pages: 250, read: false}, 
    {title: 'The Mystery Of Capital', author: 'Hernando De Soto', pages: 228, read: false}, 
    {title: 'Leadership BS', author: 'Jeffrey Pfeffer', pages: 220, read: false}, 
    {title: 'The Elephant & The Dragon', author: 'Robyn Meredith', pages: 216, read: false}, 
    {title: 'The Ideal Team Player', author: 'Patrick Lencioni', pages: 215, read: false}, 
    {title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', pages: 200, read: false}, 
    {title: 'Odisea Del Norte', author: 'Mario Bencastro', pages: 195, read: false}, 
    {title: 'El Alquimista', author: 'Paulo Coelho', pages: 188, read: false}, 
    {title: 'The Art Of War', author: 'Sun Tzu', pages: 172, read: false}, 
    {title: 'The Great Degeneration', author: 'Nial Ferguson', pages: 153, read: false}, 
    {title: 'The Prince', author: 'Nicoli Machiavelli', pages: 124, read: false}, 
    {title: 'Los Cuatro Acuerdos', author: 'Dr. Miguel Ruiz', pages: 118, read: false}, 
    {title: 'Meditations', author: 'Marcus Aurelius', pages: 99, read: false},
    {title: 'Boyd', author: 'Robert Coram', pages: 449, read: false},
    {title: 'A Wrinkle In Time', author: 'Madeleine L\'Engle', pages: 416, read: false}, 
    {title: '1984', author: 'George Orwell', pages: 328, read: false}
]