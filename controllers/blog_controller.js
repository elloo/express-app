const BlogModel = require("../database/models/blog_model");

async function create(req, res) {
    //logic for creating a resource
    let { title, date, content } = req.body;
    let post = await BlogModel.create({ title, date, content })
        .catch(err => res.status(500).send(err));
    res.redirect("/");
}

async function index(req, res) {
    //showed a list of all the resources
    let posts = await BlogModel.find();
    res.render("posts/index", { posts });
}

function make(req, res) {
    //shows the form to create the resource
    res.render("posts/new");
}

const show = async (req, res) => {
    // get the author specific data from the author model
    let { id } = req.params
    let blog = await BlogModel.findById(id)
        .catch (err => res.status(500).send(err))

    res.render("blog/show", {blog});
}

module.exports = {
    create,
    index,
    make,
    show
}