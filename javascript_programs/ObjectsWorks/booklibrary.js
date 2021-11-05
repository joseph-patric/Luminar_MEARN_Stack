class BookLibrary {

    books = {
        "randamoozham": { book_name: "randamoozham", price: 470, author: "mt vasudevan", avl_copies: 100, sold_copies: 100 },
        "aadujeevitham": { book_name: "aadujeevitham", price: 500, author: "benyamin", avl_copies: 150, sold_copies: 145 },
        "rainrising": { book_name: "rainrising", price: 500, author: "nirupama", avl_copies: 200, sold_copies: 140 },
        "halfgirlfriend": { book_name: "halfgirlfriend", price: 550, author: "nirupama", avl_copies: 200, sold_copies: 140 }
    }
    findBook(book_name) {
        if (book_name in this.books) {
            console.log("Book found in the library.");
        }
        else {
            console.log("Book not found in the library.");
        }
    }

    orderBySold() {
        // var order = [], res = {};
        // Object.keys(this.books).forEach(key => order[this.books[key]['sold_copies']]=key);
        // order.forEach(key => res[key] = this.books[key]);
        // console.log(res); 

        // Object.entries(this.books).sort((book1,book2)=>(book1[1].sold_copies-book2[1].sold_copies)).forEach(data=>console.log(data))
        console.log(Object.entries(this.books));
    }


}

var book = new BookLibrary

// book.findBook("rainrising")
book.orderBySold()