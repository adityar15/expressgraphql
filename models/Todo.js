const { DataTypes } = require("sequelize");
const db = require("../dbconfig");


const Todo = db.sequelise.define("todos", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  title: DataTypes.STRING,
  description: DataTypes.TEXT,

});



module.exports = Todo
