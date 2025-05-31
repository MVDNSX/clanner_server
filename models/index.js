const sequelize = require('../db')
const Member = require('./Member')
const Role = require('./Role')
const GameClass = require('./GameClass')
const Event = require('./Event')
const Attendance = require('./Attendance')
const Party = require('./Party')
const PartyMember = require ('./PartyMember')



// Member → Role
Member.belongsTo(Role, { foreignKey: 'role_id' });
Role.hasMany(Member, { foreignKey: 'role_id' });

// Member → GameClass
Member.belongsTo(GameClass, { foreignKey: 'class_id' });
GameClass.hasMany(Member, { foreignKey: 'class_id' });

// Event ↔ Member через Attendance (многие-ко-многим)
Event.belongsToMany(Member, { through: Attendance, foreignKey: 'event_id', otherKey: 'member_id' });
Member.belongsToMany(Event, { through: Attendance, foreignKey: 'member_id', otherKey: 'event_id' });

// Attendance → Party
Attendance.belongsTo(Party, { foreignKey: 'party_id' });
Party.hasMany(Attendance, { foreignKey: 'party_id' });

// Party → Event
Party.belongsTo(Event, { foreignKey: 'event_id' });
Event.hasMany(Party, { foreignKey: 'event_id' });

// Party → Member (лидер)
Party.belongsTo(Member, { foreignKey: 'leader_id', as: 'leader' });
Member.hasMany(Party, { foreignKey: 'leader_id', as: 'led_parties' });

// Party ↔ Member через PartyMember (многие-ко-многим)
Member.belongsToMany(Party, { through: PartyMember, foreignKey: 'member_id', otherKey: 'party_id' });
Party.belongsToMany(Member, { through: PartyMember, foreignKey: 'party_id', otherKey: 'member_id' });

// PartyMember → Member и Party
PartyMember.belongsTo(Member, { foreignKey: 'member_id' });
Member.hasMany(PartyMember, { foreignKey: 'member_id' });

PartyMember.belongsTo(Party, { foreignKey: 'party_id' });
Party.hasMany(PartyMember, { foreignKey: 'party_id' });

module.exports = {
  sequelize,
  Member,
  Role,
  GameClass,
  Event,
  Attendance,
  Party,
  PartyMember,
}
