const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Book');
};

let allBooks = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        price: 15.99,
        publisher: "Scribner",
        coverImage: "https://example.com/images/great-gatsby-cover.jpg"
    },
    {
        title: "Dune",
        author: "Frank Herbert",
        genre: "Science Fiction",
        price: 18.99,
        publisher: "Chilton Books",
        coverImage: "https://example.com/images/dune-cover.jpg"
    },
    {
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        genre: "Non-Fiction",
        price: 22.50,
        publisher: "Harvill Secker",
        coverImage: "https://example.com/images/sapiens-cover.jpg"
    }
];

Book.insertMany(allBooks);
