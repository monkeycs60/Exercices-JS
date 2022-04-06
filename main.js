// ceci est un script


const bookList = document.querySelector('.book-list');
const bookForm = document.querySelector('.book-form');

class Book {
    constructor(titre, auteur, annee){
        this.titre = titre;
        this.auteur = auteur;
        this.annee = annee;
    }
    addBookToList(book){
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.titre}</td>
        <td>${book.auteur}</td>
        <td>${book.annee}</td>
        <td><button class="delete">X</button></td>`;

        bookList.appendChild(row);
    }
    clearFields(){
        document.getElementById("book-title").value = "";
        document.getElementById("book-author").value = "";
        document.getElementById("book-year").value = "";
    }
    showAlert(message, className) {
        const alert = document.createElement('div');
        alert.className = `alert ${className}`;
        alert.appendChild(document.createTextNode(message));
        container.insertBefore(alert, bookForm);

        setTimeout(() => {
document.querySelector('.alert').remove();
        }, 2500)
    }
}

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById("book-title").value;
    const author = document.getElementById("book-author").value;
    const year = document.getElementById("book-year").value;

    const book = new Book(title, author, year);
    if (book-title === "" || book-author === "" || book-year === "") {
        book.showAlert('Remplir le champ !', 'error');
    }
    book.addBookToList(book);
    book.clearFields();
})

class Interface {
    deleteBook(target){
        if (target.className === "delete") {
            target.parentElement.parentElement.remove();
            
        }
    }
}

bookList.addEventListener('click', (e) => {
    const ui = new Interface();
    ui.deleteBook(e.target);
})