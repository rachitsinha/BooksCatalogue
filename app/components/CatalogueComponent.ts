import {Component} from "@angular/core";
import Book from "../models/Book";

export class CatalogueComponent
{
    bookList : Book[];
    
    constructor()
    {
        this.bookList.push(new Book("Complete Reference Java", "Herbert Schildt", "Programming", 2015));
        this.bookList.push(new Book("Complete Reference C++", "Herbert Schildt", "Programming", 2013));
        this.bookList.push(new Book("Complete Reference Python", "Herbert Schildt", "Programming", 2005));
        this.bookList.push(new Book("Cracking the Coding Interview", "Gayle Laakmann", "Software", 2016));
    }
    
    addBook(book)
    {
        this.bookList.push(book);
    }
}