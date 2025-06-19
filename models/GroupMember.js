const {DataTypes} = require('sequelize')
const sequelize = require('../db')
const { types } = require('pg')

//Таблица-справочник ивентов
const GroupMember = sequelize.define('GroupMember', {
  member_id: {
    type:DataTypes.INTEGER, allowNull:false, references:{model: 'members', key: 'id'}
  },
  group_id: {
    type:DataTypes.INTEGER, allowNull:false, references:{model: 'groups', key: 'id'}
  },
  event_id: {
    type:DataTypes.INTEGER, allowNull:false, references:{model: 'events', key: 'id'}
  },
}, {
  tableName: 'group_members',
  timestamps: false,
  indexes:[{
    unique: true,
    fields: ['member_id', 'event_id']
  }]
})

module.exports = GroupMember