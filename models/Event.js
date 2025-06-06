const {DataTypes} = require('sequelize')
const sequelize = require('../db')
const { types } = require('pg')

//Таблица-справочник ивентов
const Event = sequelize.define('Event', {
  event_name: {type: DataTypes.STRING, allowNull:false},
  banner_url: {type: DataTypes.STRING, allowNull:true},
  is_active: {type: DataTypes.BOOLEAN, allowNull:false},
  start_date: {type: DataTypes.DATE, allowNull:true},
  commentary: {type: DataTypes.STRING, allowNull: true},
  opponent: {type: DataTypes.STRING, allowNull: true}
}, {
  tableName: 'events',
  timestamps: false,
})

module.exports = Event