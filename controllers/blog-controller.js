const Blog = require("../model/Blog");

const getAllBlogs = async (req, res, next) => {
    let blogs;
    try {
        blogs = await Blog.find();
    } catch (err) {
        return console.log(err);
    }
    if (!blogs) {
        return res.status(404).json({ message: "No blogs found" })
    }
    return res.status(200).json({ blogs })
}

const addBlog = async (req, res, next) => {
    const { Title, Content, Image, Tag } = req.body;
    const blog = new Blog({
        Title,
        Content,
        Image,
        Tag
    });
    try {
        await blog.save()
    } catch (err) {
        return console.log(err);
    }
    return res.send(200).json({ blog })
};

module.exports = {
    getBlogs: getAllBlogs,
    addBlog: addBlog
}