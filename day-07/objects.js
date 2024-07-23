// task 01
const book = {
    title: 'abc title',
    author: 'Robert',
    year: 1200
}
console.log(book);

// task 02
console.log(book.title);
console.log(book.author);

// task 03
book.giveDetails = function () {
    return `title of the book is ${book.title}, and author is ${book.author}`;
};
console.log(book.giveDetails());

// task 04
book.changeYear = function (year) {
    book.year = year
};
book.changeYear(2010);
console.log(book);

// task 05
const library = {
    name: 'English books Library',
    books: [{
        title: 'abc',
        author: 'Robert',
        year: 2010
    }, {
        title: 'def',
        author: 'William',
        year: 1999
    }, {
        title: 'ghi',
        author: 'George',
        year: 2024
    }]
}
console.log(library)

// task 06
console.log(`${library.name}:`);
library.books.forEach(book => console.log(book.title));

// task 07
book.titleAndAuthor = function () {
    return `title of the book is ${this.title}, and author is ${this.author}`;
};
console.log(book.titleAndAuthor());

// task 08
for (const key in book) {
    console.log(`${key} :- ${book[key]}    `);
}

// task 09  
console.log(Object.keys(book).join(', '));
console.log(Object.values(book));
