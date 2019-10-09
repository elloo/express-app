const express = require("express");
const router = express.Router();
const BlogController = require("./../controllers/blog_controller");


router.get("/", BlogController.index);

router.post("/posts", BlogController.create);

router.get("/posts/new", BlogController.make);

router.get("/posts/:id", BlogController.show);

module.exports = router;