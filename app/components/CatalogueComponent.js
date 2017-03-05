"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("../models/Book");
var CatalogueComponent = (function () {
    function CatalogueComponent() {
        this.bookList.push(new Book_1.default("Complete Reference Java", "Herbert Schildt", "Programming", 2015));
        this.bookList.push(new Book_1.default("Complete Reference C++", "Herbert Schildt", "Programming", 2013));
        this.bookList.push(new Book_1.default("Complete Reference Python", "Herbert Schildt", "Programming", 2005));
        this.bookList.push(new Book_1.default("Cracking the Coding Interview", "Gayle Laakmann", "Software", 2016));
    }
    CatalogueComponent.prototype.addBook = function (book) {
        this.bookList.push(book);
    };
    return CatalogueComponent;
}());
exports.CatalogueComponent = CatalogueComponent;
//# sourceMappingURL=CatalogueComponent.js.map