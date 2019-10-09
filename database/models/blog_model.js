const mongoose = require("mongoose");
const BlogSchema = require("./../schemas/blog_schema");

const BlogModel = mongoose.model("Posts", BlogSchema);

module.exports = BlogModel;