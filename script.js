let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function() {
        const info = `${title} by ${author} is ${pages} pages long and you have ${read} it.`
        console.log(info)
    }
}

function addBookToLibrary() {
    // do stuff
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read')
const goodToGreat = new Book('Good To Great', 'Jim Collins', 260, 'not read')

Book.prototype.showTitleAndAuthor = function() {
    console.log('I am ' + this.author + ' and I wrote a book called ' + this.title + '. It is ' + this.pages + ' long and you have ' + this.read + ' my book.')
}





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
        bookHTML.style.setProperty('--book-width', randomSize(30, 45) + 'px')

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