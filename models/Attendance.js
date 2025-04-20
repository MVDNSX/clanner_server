const {DataTypes} = require('sequelize');
const sequelize = require('../db')

//Таблица посещения ивентов
const Attendance = sequelize.define('Attendance', {
  status: {type: DataTypes.BOOLEAN, allowNull:false}
}, {
  tableName: 'attendances',
  timestamps:false
})
module.exports = Attendance