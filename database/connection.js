const { Sequelize } = require("sequelize");

const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
} = process.env;

const sequelize = new Sequelize({
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  username: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  dialect: "mysql",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => console.log(`connected to database-----yeeeeees🤑`))
  .catch((error) => console.log(`❌ error: ${error}`));


module.exports = sequelize;
