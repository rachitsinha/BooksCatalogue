import {Component, Input} from "@angular/core";
import Book from "../models/Book";

@Component({
    selector : "book",
    templateUrl : "app/templates/BookTemplate.html"
})

export class BookComponent
{
    @Input() book : Book;

    constructor()
    {

    }
}
