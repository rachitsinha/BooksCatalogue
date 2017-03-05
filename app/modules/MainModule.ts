import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "../components/AppComponent";
import { BookComponent } from "../components/BookComponent";
import { CatalogueComponent } from "../components/CatalogueComponent";

@NgModule(
    {
        imports : [BrowserModule, FormsModule, HttpModule],
        declarations : [AppComponent, CatalogueComponent, BookComponent],
        bootstrap : [AppComponent]
    }
)

export class MainModule
{

}