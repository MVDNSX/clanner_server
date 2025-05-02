
const {Member, Role, GameClass, Event, Party, PartyMember, Attendance} = require('./index')
async function loadSeeds() {
  try {
    await Role.bulkCreate([
      {role_name: 'Член'},
      {role_name: 'Офицер'},
    ], {ignoreDuplicates: true})

    await GameClass.bulkCreate([
      {class_name: 'Воин'},
      {class_name: 'Маг'},
      {class_name: 'Стрелок'},
      {class_name: 'Оборотень'},
      {class_name: 'Друид'},
      {class_name: 'Странник'},
      {class_name: 'Убийца'},
      {class_name: 'Шаман'},
      {class_name: 'Бард'},
      {class_name: 'Страж'},
      {class_name: 'Мистик'},
      {class_name: 'Дух крови'},
      {class_name: 'Призрак'},
      {class_name: 'Жнец'},
      {class_name: 'Лучник'},
      {class_name: 'Жрец'},
      {class_name: 'Паладин'},
    ], {
      ignoreDuplicates: true
    })
    
    await Member.bulkCreate([
      {telegram_id: '5616481223', nickname: 'FTX', pa:199, pz: 87, fs: 6535, class_id: 7, role_id: 2},
      {telegram_id: '5142957152', nickname: 'NZT', pa:40, pz: 6, fs: 4200, class_id:17, role_id:1},
      {telegram_id: '5142957154', nickname: 'hehe', pa:40, pz: 6, fs: 4200, class_id:17, role_id:1},
      {telegram_id: '5142957155', nickname: 'meme', pa:40, pz: 6, fs: 4200, class_id:17, role_id:1},
      {telegram_id: '5142957156', nickname: 'tete', pa:40, pz: 6, fs: 4200, class_id:17, role_id:1},
      {telegram_id: '5142957157', nickname: 'qeqe', pa:40, pz: 6, fs: 4200, class_id:17, role_id:1},
      {telegram_id: '5142957158', nickname: 'rere', pa:40, pz: 6, fs: 4200, class_id:17, role_id:1},
      {telegram_id: '5142957159', nickname: 'wewe', pa:40, pz: 6, fs: 4200, class_id:17, role_id:1},
    ])

    

    await Event.bulkCreate([
      {event_name: 'Атака 1', image_url: 'attack.jpg', is_active: true, start_date: new Date('2025-05-25T22:09:00+02:00').toISOString()},
      {event_name: 'Атака 2', image_url: 'attack.jpg', is_active: false, start_date: new Date('2025-05-25T22:05:00+02:00').toISOString()},
      {event_name: 'Защита 1', image_url: 'defense.jpg', is_active: false, start_date: new Date('2025-05-25T22:05:00+02:00').toISOString()},
      {event_name: 'Защита 2', image_url: 'defense.jpg', is_active: false, start_date: new Date('2025-05-25T22:05:00+02:00').toISOString()},
      {event_name: 'Садэман', image_url: 'sadaman.jpg', is_active: true, start_date: new Date('2025-05-25T22:05:00+02:00').toISOString()},
    ])
  } catch (error) {
    console.error('***Ошибка загрузки сидов***')
  }

  await Attendance.bulkCreate([
    {member_id: 1, event_id: 1, status: true},
    {member_id: 3, event_id: 1, status: true},
    {member_id: 4, event_id: 1, status: true},
    {member_id: 5, event_id: 1, status: true},
    {member_id: 6, event_id: 1, status: true},
    
    {member_id: 1, event_id: 5, status: true},
    {member_id: 3, event_id: 5, status: true},
    {member_id: 4, event_id: 5, status: true},
    {member_id: 5, event_id: 5, status: true},
    {member_id: 6, event_id: 5, status: true},
    
    {member_id: 2, event_id: 1, status: true},
    {member_id: 3, event_id: 1, status: true},
    {member_id: 4, event_id: 1, status: true},
    {member_id: 5, event_id: 1, status: true},
    {member_id: 6, event_id: 1, status: true},
  ])

  await Party.bulkCreate([
    {event_id: 1, party_name: 'Пачка атаки 1', leader_id: 1},
    {event_id: 5, party_name: 'Садик 1', leader_id: 1},
    {event_id: 1, party_name: 'Пачка атаки 2', leader_id: 2},
  ])

  await PartyMember.bulkCreate([
    {party_id: 1, member_id: 1},
    {party_id: 1, member_id: 3},
    {party_id: 1, member_id: 4},
    {party_id: 1, member_id: 5},
    {party_id: 1, member_id: 6},

    {party_id: 2, member_id: 1},
    {party_id: 2, member_id: 3},
    {party_id: 2, member_id: 4},
    {party_id: 2, member_id: 5},
    {party_id: 2, member_id: 6},
    
    
    {party_id: 1, member_id: 2},
    {party_id: 1, member_id: 3},
    {party_id: 1, member_id: 4},
    {party_id: 1, member_id: 5},


  ])
}

module.exports = {
  loadSeeds
}