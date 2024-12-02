console.log("************** DELIVERABLE 04 *********************");
interface Book {
    title: string;
    isRead: boolean;
}

function isBookRead(books: Book[], titleToSearch: string): boolean {
    return books.findIndex(book => book.isRead && book.title === titleToSearch) >= 0;
}

const books: Book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

console.log("Devastación - leído:", isBookRead(books, "Devastación")); // true
console.log("Canción de hielo y fuego - leído: ", isBookRead(books, "Canción de hielo y fuego")); // false
console.log("Los Pilares de la Tierra - leído:", isBookRead(books, "Los Pilares de la Tierra")); // false
