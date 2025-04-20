const {DataTypes} = require('sequelize')
const sequelize = require('../db')

//Таблица должностей клана
const Role = sequelize.define('Role', {
  role_name: {
    type: DataTypes.STRING, unique:true, allowNull:false,
  }
},{
  tableName: 'roles',
  timestamps: false,
})

module.exports = Role