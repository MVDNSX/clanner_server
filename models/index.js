const sequelize = require('../db')
const Member = require('./Member')
const Role = require('./Role')
const GameClass = require('./GameClass')
const Event = require('./Event')
const Attendance = require('./Attendance')
const Party = require('./Party')
const PartyMember = require ('./PartyMember')


Member.belongsTo(Role, {foreignKey: 'role_id', as: 'member_role'})
Role.hasMany(Member, {foreignKey: 'role_id'})

Member.belongsTo(GameClass, {foreignKey: 'class_id', as: 'member_class'})
GameClass.hasMany(Member, {foreignKey: 'class_id'})

Event.belongsToMany(Member, {through: Attendance, foreignKey: 'event_id', otherKey: 'member_id'})
Member.belongsToMany(Event, {through: Attendance, foreignKey: 'member_id', otherKey: 'event_id'})

Attendance.belongsTo(Event, { foreignKey: 'event_id', as: 'attendance_events'});
Event.hasMany(Attendance, { foreignKey: 'event_id' });

Party.belongsTo(Event, {foreignKey: 'event_id'})
Event.hasMany(Party, {foreignKey: 'event_id', as: 'event_parties'})

Party.belongsTo(Member, {foreignKey: 'leader_id', as: 'leader'})
Member.hasMany(Party, {foreignKey: 'leader_id', as: 'led_parties'})

Member.belongsToMany(Party, {through: PartyMember,  foreignKey: 'member_id', otherKey: 'party_id'})
Party.belongsToMany(Member, {through: PartyMember, foreignKey: 'party_id', otherKey: 'member_id', as:'party_members'})

PartyMember.belongsTo(Party, { foreignKey: 'party_id', as: 'party' });
PartyMember.belongsTo(Member, { foreignKey: 'member_id', as: 'members' });

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