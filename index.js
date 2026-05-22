function Book (title, author, pages) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.info = function () {
	return `${this.title} by ${this.author}, ${this.pages} pages`;
}
}

const book1 = new Book ("Game of Thrones", "G.R Martin", 120);
console.log(book1.info());



