const book={
    bookArray:[
        {'id_book' :1, 'name' :"Everything You Ever Wanted to Know", 'author' :"Upton", 'isbn' :"082305649x"},
        {'id_book' :2, 'name' :"Photography", 'author' :"Vilppu", 'isbn' :"205711499"},
        {'id_book' :3, 'name' :"Drawing Manual Vilppu", 'author' :"Zelanshi", 'isbn' :"1892053039"},
        {'id_book' :4, 'name' :"TBA", 'author' :"Zelanshi", 'isbn' :"0534613932"}
    ],

    getAllBooks()
    {
        console.log(this.bookArray);
    },

    getOneBook(id)
    {
        console.log(this.bookArray[id-1]);
    },

    addBook(id_book, name, author, isbn)
    {
        this.bookArray.push({ id_book, name, author, isbn });
        console.log("Kirja lisätty:", { id_book, name, author, isbn });
    }

};

book.getOneBook(1);
book.addBook(5, "Sinuhe egyptiläinen", "Mika Waltari", "0076417011");
book.getAllBooks();