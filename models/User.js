const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");
const Post = require("./Post");

const User = sequelize.define("user", {
  name: {
    type: DataTypes.STRING(55),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(111),
    unique: true,
    validate: {
      isEmail: true,
    },
  },
});


// - A **User** has many **Posts**.
// - A **Post** belongs to a **User**.

User.hasMany(Post, { foreignKey: 'userId' })
Post.belongsTo(User)

module.exports = User