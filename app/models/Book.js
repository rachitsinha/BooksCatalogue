"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book = (function () {
    function Book(name, author, genre, year) {
        if (name === void 0) { name = ""; }
        if (author === void 0) { author = ""; }
        if (genre === void 0) { genre = ""; }
        if (year === void 0) { year = 0; }
        this.name = name;
        this.author = author;
        this.genre = genre;
        this.year = year;
    }
    return Book;
}());
exports.default = Book;
//# sourceMappingURL=Book.js.map