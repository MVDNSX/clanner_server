const {DataTypes} = require('sequelize')
const sequelize = require('../db')

//Таблица классов персонажей
const GameClass = sequelize.define('GameClass', {
 class_name: {type: DataTypes.STRING, allowNull:false, unique:true},
 icon_url: {type: DataTypes.STRING, allowNull:false},
}, {
  tableName: 'classes',
  timestamps:false,
})

module.exports = GameClass