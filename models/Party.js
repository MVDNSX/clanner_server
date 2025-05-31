const {DataTypes} = require('sequelize');
const sequelize = require('../db')

const Party = sequelize.define('Party',{
  party_name: {type:DataTypes.STRING, allowNull:false},
  leader_id: {type: DataTypes.INTEGER},
  max_members: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 10,
  }
}, {
  tableName: 'parties',
  timestamps: false
})

module.exports = Party