var express = require('express');
var {getBlogs,addBlog} = require('../controllers/blog-controller')
const blogRouter = express.Router();

blogRouter.get("/",getBlogs);
blogRouter.post("/add",addBlog);

module.exports = blogRouter;