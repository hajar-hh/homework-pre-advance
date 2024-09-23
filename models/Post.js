const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const Post = sequelize.define("post", {
  title: {
    type: DataTypes.STRING(100),
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});


module.exports = Post