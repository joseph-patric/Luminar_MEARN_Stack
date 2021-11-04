class BookLibrary {

    books = {
        "randamoozham": { book_name: "randamoozham", price: 470, author: "mt vasudevan", avl_copies: 100, sold_copies: 100 },
        "aadujeevitham": { book_name: "aadujeevitham", price: 500, author: "benyamin", avl_copies: 150, sold_copies: 145 },
        "rainrising": { book_name: "rainrising", price: 500, author: "nirupama", avl_copies: 200, sold_copies: 142 },
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
        var order = [], res = {};
        Object.keys(this.books).forEach(key => {
            return order[this.books[key]['sold_copies']-1]=key;
        });
            
      
        order.forEach(key => {
            res[key] = this.books[key];
        });
        console.log(res); 
        // console.log(order);
    
    }


}

var book = new BookLibrary

// book.findBook("rainrising")
book.orderBySold()