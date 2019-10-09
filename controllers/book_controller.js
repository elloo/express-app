const AuthorModel = require("../database/models/author_model")
const BookModel = require("../database/models/book_model")
const make = async (req, res) => {
    // Fetch the author data, retrieve their unique id and name
    let authors = await AuthorModel.find().select("_id, name")
        .catch(err => res.status(500).send(err));
    
    res.render("book/new", {authors});
}

const create = async (req, res) => {
    let {title, published, author} = req.body
    let book = await BookModel.create({title, published, author})
        .catch(err => res.status(500).send(err));
    res.redirect(`/books/${book._id}`,)
    // res.send("CREATE");
}

const show = async (req, res) => {
    res.send("SHOW");
}

module.exports = {
    make,
    create,
    show
}