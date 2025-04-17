const {DataTypes} = require('sequelize')
const sequelize = require('../db')

const Character = sequelize.define('Character', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique:true, allowNull:false}
}, {
  tableName: 'characters',
  timestamps: false,
})

module.exports = Character