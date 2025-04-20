const {DataTypes} = require('sequelize');
const sequelize = require('../db')

const Party = sequelize.define('Party',{
  party_name: {type:DataTypes.STRING, allowNull:false},
}, {
  tableName: 'parties',
  timestamps: false
})

module.exports = Party