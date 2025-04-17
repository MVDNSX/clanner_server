const sequelize = require('../db')
const Member = require('./Member')
const Role = require('./Role')
const Character = require('./Character')

// 💡 Здесь можно настроить связи, если они нужны
// Например:
//Role.hasMany(Member, { foreignKey: 'role_id' });
//Member.belongsTo(Role, { foreignKey: 'role_id' });

//Character.hasMany(Member, { foreignKey: 'character_id' });
//Member.belongsTo(Character, { foreignKey: 'character_id' });

module.exports = {
  sequelize,
  Member,
  Role,
  Character
}