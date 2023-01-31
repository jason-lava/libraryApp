class Book {
    constructor(title, author, pages, read) {
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

const getBookFromForm = () => {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').checked
    document.getElementById('addBookForm').style.display = 'none'
    return new Book(title, author, pages, read)
}

const addBook = (e) => {
    e.preventDefault()
    const newBook = getBookFromForm()
    library.addBook(newBook)
    console.log(library)
}

addBookForm.onsubmit = addBook

// set the book sizes - height/width - and colors dynamically 
function randomBookSize() {
    function randomSize(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max-min) + min)
    }

    function randomColor(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max-min) + min)
    }

    for (let i=1; i < 31; i++) {
        const bookHTML = document.querySelector('.book')
        
        bookHTML.className += `${i}`
        
        bookHTML.style.setProperty('--book-height', randomSize(120, 160) + 'px')
        bookHTML.style.setProperty('--book-width', randomSize(30, 35) + 'px')


        randomBookColor(randomColor(1, 11))

        function randomBookColor(randomColor) {
            switch(randomColor) {
                // crimson red
                case 1:
                    bookHTML.style.setProperty('background-color', 'rgb(220, 20, 60)')
                    break
                // dark orange
                case 2:
                    bookHTML.style.setProperty('background-color', 'rgb(255, 140, 0)')
                    break
                // gold
                case 3:
                    bookHTML.style.setProperty('background-color', 'rgb(255, 215, 0)')
                    break
                // royal blue
                case 4:
                    bookHTML.style.setProperty('background-color', 'rgb(65, 105, 225)')
                    break
                // mint cream
                case 5:
                    bookHTML.style.setProperty('background-color', 'rgb(245, 255, 250)')
                    break
                // forest green
                case 6:
                    bookHTML.style.setProperty('background-color', 'rgb(34, 139, 34)')
                    break
                // teal
                case 7:
                    bookHTML.style.setProperty('background-color', 'rgb(0, 128, 128)')
                    break
                // plum
                case 8:
                    bookHTML.style.setProperty('background-color', 'rgb(221, 160, 221)')
                    break
                // peru
                case 9:
                    bookHTML.style.setProperty('background-color', 'rgb(205, 133, 63)')
                    break
                // light steel blue
                case 10:
                    bookHTML.style.setProperty('background-color', 'rgb(176, 196, 222)')
                    break
                default: 
                // black
                    bookHTML.style.setProperty('background-color', 'rgb(0, 0, 0)')
            }
        }
    }
    
}

randomBookSize()

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