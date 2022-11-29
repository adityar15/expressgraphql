const { DataTypes } = require("sequelize");
const db = require("../dbconfig");


const User = db.sequelise.define("users", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  firstname: DataTypes.STRING,
  password: DataTypes.STRING,
  lastname: DataTypes.STRING,
  email: DataTypes.STRING,
});




module.exports = User
