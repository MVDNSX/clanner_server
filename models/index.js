const sequelize = require('../db')
const Member = require('./Member')
const Role = require('./Role')
const GameClass = require('./GameClass')
const Event = require('./Event')
const EventSignup = require ('./EventSignup')
const Group = require('./Group')
const GroupMember = require('./GroupMember')



Member.belongsTo(Role, {foreignKey: 'role_id', as: 'role'})
Role.hasMany(Member, {foreignKey: 'role_id', as:'members'})

Member.belongsTo(GameClass, {foreignKey: 'class_id', as:'class'})
GameClass.hasMany(Member, {foreignKey: 'class_id', as:'members'})

Event.hasMany(Group, {foreignKey: 'event_id'})
Group.belongsTo(Event, {foreignKey: 'event_id'})

Member.hasMany(EventSignup, {foreignKey: 'member_id'})
EventSignup.belongsTo(Member, {foreignKey: 'member_id'})

Event.hasMany(EventSignup, { foreignKey: 'event_id', as: 'signups' });
EventSignup.belongsTo(Event, { foreignKey: 'event_id' });

Member.hasMany(GroupMember, {foreignKey: 'member_id'})
GroupMember.belongsTo(Member, {foreignKey: 'member_id'})

Group.hasMany(GroupMember, {foreignKey: 'group_id'})
GroupMember.belongsTo(Group, {foreignKey: 'group_id'})

Event.hasMany(GroupMember, {foreignKey: 'event_id'})
GroupMember.belongsTo(Event, {foreignKey: 'event_id'})

module.exports = {
  sequelize,
  Member,
  Role,
  GameClass,
  Event,
  EventSignup,
  Group,
  GroupMember,
}
