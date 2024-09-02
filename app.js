const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const Book = require("./modules/book.js")

const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Book');
};

app.get("/books", async(rwq,res) => {
  try{
    const books = await Book.find();
    res.render("books.ejs", {books});
  } catch (err) {
    console.log(err);
  }
})

//add
app.get("/books/add", (req,res) => {
  res.render("addBook.ejs");
})

//display in books
app.post("/books", (req,res) => {
  let {title, author, genre, price, publisher, borrowed} = req.body;

  let newBook = new Book ({
    title : title,
    author : author,
    genre : genre,
    price : price,
    publisher : publisher,
    borrowed : borrowed
  });

  newBook.save()
  .then((res) => {
    console.log("Book was saved");
  })
  .catch((err) => {
    console.log(err);
  });

  res.redirect("/books");
});

//Borrow a book
app.put('/books/borrow/:id', async (req, res) => {
  try {
      const bookId = req.params.id;
      await Book.findByIdAndUpdate(bookId, { borrowed: true });
      res.json({ success: true });
  } catch (error) {
      console.error('Failed to update borrowed status:', error);
      res.json({ success: false });
  }
});

//Unborrow a book
app.put('/books/unborrow/:id', async (req, res) => {
  try {
      const bookId = req.params.id;
      await Book.findByIdAndUpdate(bookId, { borrowed: false });
      res.json({ success: true });
  } catch (error) {
      console.error('Failed to update unborrowed status:', error);
      res.json({ success: false });
  }
});

app.get("/", async (req,res) => {
   await res.send("Hello World!");
})

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`)
})