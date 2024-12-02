/**
* Opcional
* Utiliza Typescript para añadir los tipos adecuados.
*/
function isBookRead(books, titleToSearch) {
    return books.findIndex(function (book) { return book.isRead && book.title === titleToSearch; }) >= 0;
}
var books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
