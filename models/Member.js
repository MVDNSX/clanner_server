const {DataTypes} = require('sequelize')
const sequelize = require('../db')


const Member = sequelize.define('Member', {
  telegram_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  character_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  character_id: {
    type: DataTypes.INTEGER,
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
  joined_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'members',
});

module.exports = Member