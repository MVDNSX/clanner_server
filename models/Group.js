const {DataTypes} = require('sequelize');
const sequelize = require('../db')

const Group = sequelize.define('Group',{
  group_name: {type:DataTypes.STRING, allowNull:false},
  leader_id: {type: DataTypes.INTEGER},
  max_members: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 10,
  },
  event_id: {
    type: DataTypes.INTEGER, allowNull:false, references: {model: 'events', key: 'id'}, onDelete: 'CASCADE'
  }
}, {
  tableName: 'groups',
  timestamps: false
})

module.exports = Group