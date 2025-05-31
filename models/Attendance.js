const {DataTypes} = require('sequelize');
const sequelize = require('../db')

//Таблица посещения ивентов
const Attendance = sequelize.define('Attendance', {
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
}, {
  tableName: 'attendances',
  timestamps:false,
  indexes: [
    {
      unique: true,
      fields: ['member_id', 'event_id'],
    },
  ]
})
module.exports = Attendance