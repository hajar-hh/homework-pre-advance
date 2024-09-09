require("dotenv").config();

const express = require("express");
const logger = require("./src/middlewares/logger");
const blogsRouter = require("./src/routes/blogs.route");
const cors = require("cors");

const app = express();
const port = process.env.PORT;
app.use(logger, express.json(), express.urlencoded({ extended: true }), cors());
app.use("/product", blogsRouter);

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
