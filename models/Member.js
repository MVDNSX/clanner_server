const {DataTypes} = require('sequelize')
const sequelize = require('../db')

//Таблица членов клана
const Member = sequelize.define('Member', {
  telegram_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  nickname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pa: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pz: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fs: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  role_id: {
    type:DataTypes.INTEGER, allowNull:false, references:{model: 'roles', key: 'id'}, defaultValue: 1
  },
  class_id: {
    type:DataTypes.INTEGER, allowNull:false, references:{model: 'classes', key: 'id'}
  },
  joined_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'members',
  timestamps: false
});

module.exports = Member