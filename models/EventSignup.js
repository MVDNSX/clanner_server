const {DataTypes} = require('sequelize')
const sequelize = require('../db')
const { types } = require('pg')

//Таблица-справочник ивентов
const EventSignup = sequelize.define('EventSignup', {
  member_id: {
    type:DataTypes.INTEGER, allowNull:false, references:{model: 'members', key: 'id'}
  },
  event_id: {
    type:DataTypes.INTEGER, allowNull:false, references:{model: 'events', key: 'id'}
  },
  status: {type: DataTypes.BOOLEAN, allowNull:false},
}, {
  tableName: 'event_signups',
  timestamps: false,
  indexes:[{
    unique: true,
    fields: ['member_id', 'event_id']
  }]
})

module.exports = EventSignup