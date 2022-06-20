var express = require('express');
var mongoose = require('mongoose');
const router = require('./routes/user-routes');
const blogRouter = require('./routes/blog-routes')
const app = express();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose.connect('mongodb://0.0.0.0:27017/Blog')
    .then(() => app.listen(5000))
    .then(() =>
        console.log("Connected to the Database and listening to localhost 5000")
    )
    .catch((err) => console.log(err));
