let myLibrary = [];

function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = function () {
                return `${title} by ${author}, ${pages} pages, ${read}.`;
        }
      
        this.dataindex = myLibrary.length;
}

const container = document.querySelector('.cardContainer');

function displaybooks() {
        while (container.firstChild) {
                container.removeChild(container.firstChild);
        }
for(let i = 0; i < myLibrary.length; i++) {
        let bookCard = document.createElement('div');
        bookCard.className = 'bookCard';
        let bookText = document.createElement('div');
        bookText.className = 'bookText';
        bookText.textContent = myLibrary[i].info();
        bookCard.appendChild(bookText);
        let bookOptions = document.createElement('div');
        bookOptions.className = 'bookOptions';
        let removeBook = document.createElement('button');
        removeBook.type = 'button';
        removeBook.className = 'removeBook'
        let removeIcon = document.createElement('img');
        removeIcon.src = 'pic.jpg';
        removeBook.appendChild(removeIcon)
        removeBook.addEventListener('click', () => {
                //.. container.removeChild (data-attribute of book)
        })
        bookOptions.appendChild(removeBook);
        bookCard.appendChild(bookOptions);

        container.appendChild(bookCard);
};
}

function addBookToLibrary() {
        let newBook = new Book(prompt('Title?', 'bloombergs crot'), prompt('Author?', 'mittle bloomborb'), 
                                prompt('Pages?', '345'), prompt('Read?', 'Not Read'));
        myLibrary.push(newBook);
        displaybooks();
}

/* addBookToLibrary(); */
const hobbit = new Book('The Hobbutt', 'J.R.R Tolkien', '295', 'read');
const book1 = new Book('Franz flavoured Chemistry', 'Franz Langmann', '500', 'Read');
const book2 = new Book ('Chrochet Cooking for Dummies', 'Ursula Bergman', '212', 'Not read');
const book3 = new Book('UX elderly restrooms', 'Jesus Santiago', '665', 'Read');
const book4 = new Book('Energetic Spring Rolling', 'Roger Fitwitzer', '320', 'Read');
        
myLibrary.push(hobbit);
myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);

displaybooks();



 // 2. Give us an array of the inventors first and last names
 //const info in Book constructor ?
 //  const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);