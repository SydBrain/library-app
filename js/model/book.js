class Book {
    constructor({title, author, pages, description, hasBeenRead, imageUrl = ""}) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = Number(pages); 
        this.description = description;
        this.hasBeenRead = hasBeenRead === "true"; 
        this.imageUrl = imageUrl;
    }
}