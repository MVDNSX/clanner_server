const {DataTypes} = require('sequelize');
const sequelize = require('../db')

const PartyMember = sequelize.define('PartyMember', {
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true}
}, {
  timestamps:false,
  tableName: 'partyMembers'
})


module.exports = PartyMember