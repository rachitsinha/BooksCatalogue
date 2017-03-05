class Book
{
    name : string;
    author : string;
    year : number;
    genre : string;
    
    constructor(name="", author="", genre="", year=0)
    {
        this.name = name;
        this.author = author;
        this.genre = genre;
        this.year = year;
    }
}

export default Book;