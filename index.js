let myLibrary = [];

function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.dataindex = myLibrary.length;
}
Book.prototype.readit = function() {
        if ( this.read == 'not read' ) {
                this.read = 'read';
        } else this.read = 'not read';
        reloadDisplay();
}
Book.prototype.info = function() {
        this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
        }
}

const cardContainer = document.querySelector('.cardContainer');

function displaybooks() {
        while (cardContainer.firstChild) {
                cardContainer.removeChild(cardContainer.firstChild);
        }
for(let i = 0; i < myLibrary.length; i++) {
        let bookCard = document.createElement('div');
        bookCard.classList.toggle('bookCard');
        let bookText = document.createElement('div');
        bookText.classList.toggle('bookText');
        bookText.textContent = myLibrary[i].info();
        bookCard.appendChild(bookText);
        let bookOptions = document.createElement('div');
        bookOptions.classList.toggle('bookOptions');
        let removeBook = document.createElement('button');
        removeBook.type = 'button';
        removeBook.classList.toggle('removeBook');
        let removeIcon = document.createElement('img');
        removeIcon.src = 'pic.jpg';
        removeBook.appendChild(removeIcon);
        removeBook.addEventListener('click', () => {
                //.. cardContainer.removeChild (data-attribute of book)
        myLibrary.splice(myLibrary.findIndex(item => item.dataindex === i), 1);
        displaybooks();
        })

        let readButton = document.createElement('button');
// change into toggle switch later:

// Style 'read' class, style default beforehand. Then toggle read class as needed
        readButton.type = 'button';
        readButton.classList.toggle('removeBook');
        let readIcon = document.createElement('img');
        readIcon.src = 'book.svg';
        readButton.appendChild(readIcon);
        readButton.addEventListener('click', () => {
                myLibrary[i].readit();
                if (readButton.classList.contains('read')) {
                readButton.classList.toggle('read');
                }
        })
        bookOptions.appendChild(readButton);

        bookOptions.appendChild(removeBook);
        bookCard.appendChild(bookOptions);

        cardContainer.appendChild(bookCard);
};
}

function addBookToLibrary(title, author, pages, read) {
        let newBook = new Book(title, author, pages, read);
        myLibrary.push(newBook);
        displaybooks();
}


displaybooks();

function createForm() {

let submitNew = null;

function showForm() {
        const container = document.querySelector('.container');

        let formOverlay = document.createElement('div');
        let formOuter = document.createElement('div');
        formOverlay.setAttribute('id', 'formOverlay');
        formOuter.setAttribute('id', 'formOuter');

        let formElement = document.createElement('form');
        formElement.action = './';
        formElement.method = 'post';

        let fieldset = document.createElement('fieldset');
        let legend = document.createElement('legend');
        legend.textContent = 'Enter book details';

        let bookForm = document.createElement('div');
        bookForm.setAttribute('id', 'bookForm');

        let formItem1 = document.createElement('div');
        formItem1.classList.toggle('formItem');
        let ftitlelabel = document.createElement('label');
        ftitlelabel.setAttribute('for', 'ftitle');
        ftitlelabel.textContent = 'Title';
        let ftitleinput = document.createElement('input');
        ftitleinput.setAttribute('type', 'text');
        ftitleinput.setAttribute('id', 'ftitle');
        ftitleinput.setAttribute('name', 'ftitle');

        formItem1.appendChild(ftitlelabel);
        formItem1.appendChild(ftitleinput);
        bookForm.appendChild(formItem1);


        let formItem2 = document.createElement('div');
        formItem2.classList.toggle('formItem'); 
        let fauthorlabel = document.createElement('label');
        fauthorlabel.setAttribute('for', 'fauthor');
        fauthorlabel.textContent = 'Author';
        let fauthorinput = document.createElement('input');
        fauthorinput.setAttribute('type', 'text');
        fauthorinput.setAttribute('id', 'fauthor');
        fauthorinput.setAttribute('name', 'fauthor');

        formItem2.appendChild(fauthorlabel);
        formItem2.appendChild(fauthorinput);
        bookForm.appendChild(formItem2);

        let formItem3 = document.createElement('div');
        formItem3.classList.toggle('formItem');
        let fpageslabel = document.createElement('label');
        fpageslabel.setAttribute('for', 'fpages');
        fpageslabel.textContent = 'Nr. Pages';
        let fpagesinput = document.createElement('input');
        fpagesinput.setAttribute('type', 'tel');
        fpagesinput.setAttribute('id', 'fpages');
        fpagesinput.setAttribute('name', 'fpages');

        formItem3.appendChild(fpageslabel);
        formItem3.appendChild(fpagesinput);
        bookForm.appendChild(formItem3);

        

        let formReaditem= document.createElement('div');
        formReaditem.classList = 'formItem Select';
        let freadinput = document.createElement('input');
        freadinput.setAttribute('type', 'checkbox');
        freadinput.setAttribute('id', 'fread');
        freadinput.setAttribute('name', 'fread');
        freadinput.setAttribute('value', 'read');
        let freadlabel = document.createElement('label');
        freadlabel.setAttribute('for', 'fread');
        freadlabel.textContent = 'Read?';

        formReaditem.appendChild(freadinput);
        formReaditem.appendChild(freadlabel);
        bookForm.appendChild(formReaditem);
/* 
        let spacer = document.createElement('div');
        spacer.classList.toggle('spacer');
        formRadio.appendChild(spacer);

        let radio2input = document.createElement('input');
        radio2input.setAttribute('type', 'radio');
        radio2input.setAttribute('id', 'fnotread');
        radio2input.setAttribute('name', 'fnotread');
        radio2input.setAttribute('value', 'notread');
        radio2input.setAttribute('checked', 'checked');
        let radio2label = document.createElement('label');
        radio2label.setAttribute('for', 'fread');
        radio2label.textContent = 'Not Read'; */

/* Radio label left-side spacing different from original */
       /*  formRadio.appendChild(radio2input);
        formRadio.appendChild(radio2label);
        bookForm.appendChild(formRadio); */

        /* put submit button in .formItem div? */

        submitNew = document.createElement('input');
        submitNew.setAttribute('id', 'addBookSubmit');
        submitNew.setAttribute('type', 'submit');
        submitNew.setAttribute('value', 'Submit');
        bookForm.appendChild(submitNew);

        fieldset.appendChild(legend);
        fieldset.appendChild(bookForm);

        formElement.appendChild(fieldset);
        formOuter.appendChild(formElement);
        formOverlay.appendChild(formOuter);
        container.appendChild(formOverlay);
}
showForm();

submitNew.addEventListener('click', (event) => {
        event.preventDefault();
        if (!fread.value) { addBookToLibrary(ftitle.value, fauthor.value, 
                        fpages.value, "TESTsuccess") ;}
       
        /* addBookToLibrary(ftitle.value, fauthor.value, 
                        fpages.value, fread.value); */
        
        reloadDisplay();
});

}
const newBtn = document.querySelector('#new');
newBtn.addEventListener('click', () => {
        createForm();
});



function reloadDisplay() {
let cont = document.querySelector('.container');
let cardCont = document.querySelector('.cardContainer');
let form = document.querySelector('#formOverlay');
        cardContainer.innerHTML = '';
        displaybooks();
      //  add if( formOverlay is child of cont )
       if (form) {
        cont.removeChild(form);
       } 
}


 // 2. Give us an array of the inventors first and last names
 //const info in Book constructor ?
 //  const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);