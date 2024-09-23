require("dotenv").config();
const sequelize = require("./database/connection");
const express = require("express");

// test table
// require('./models/User')
// require('./models/Post')

const app = express();
const port = process.env.APP_PORT;

app.use(express.json());
app.use('/users', require('./routes/user.routes.js'))
app.use('/posts', require('./routes/post.routes.js'))

sequelize
  .sync({alter:true})
  .then(() => {
    console.log("table = okkkkkkkkkkkkkkkkkkkkkkkkk");
  })
  .catch((eror) => {
    console.log(eror);
  });

app.listen(port, () => {
  console.log(`the ptogram is running in port${port} `);
});
