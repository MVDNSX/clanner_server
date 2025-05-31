const {DataTypes} = require('sequelize');
const sequelize = require('../db')

const PartyMember = sequelize.define('PartyMember', {
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true}
}, {
  timestamps:false,
  tableName: 'party_members',
  indexes: [
    {
      unique: true,
      fields: ['member_id', 'party_id'],
    },
  ]
})


module.exports = PartyMember