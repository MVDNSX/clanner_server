
const {Member, Role, GameClass, Event, Party, PartyMember, Attendance} = require('./index')
async function loadSeeds() {
  try {
    await Role.bulkCreate([
      {role_name: 'Член'},
      {role_name: 'Офицер'},
    ], {ignoreDuplicates: true})

    await GameClass.bulkCreate([
      {class_name: 'Воин', icon_url: '/classes/var.png'},
      {class_name: 'Маг', icon_url: '/classes/mag.png'},
      {class_name: 'Стрелок', icon_url: '/classes/gan.png'},
      {class_name: 'Оборотень', icon_url: '/classes/tank.png'},
      {class_name: 'Друид', icon_url: '/classes/dru.png'},
      {class_name: 'Странник', icon_url: '/classes/mk.png'},
      {class_name: 'Убийца', icon_url: '/classes/sin.png'},
      {class_name: 'Шаман', icon_url: '/classes/sham.png'},
      {class_name: 'Бард', icon_url: '/classes/bard.png'},
      {class_name: 'Страж', icon_url: '/classes/sik.png'},
      {class_name: 'Мистик', icon_url: '/classes/mist.png'},
      {class_name: 'Дух крови', icon_url: '/classes/dk.png'},
      {class_name: 'Призрак', icon_url: '/classes/gost.png'},
      {class_name: 'Жнец', icon_url: '/classes/kosa.png'},
      {class_name: 'Лучник', icon_url: '/classes/luk.png'},
      {class_name: 'Жрец', icon_url: '/classes/prist.png'},
      {class_name: 'Паладин', icon_url: '/classes/pal.png'},
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
      {event_name: 'ГвГ: Атака 1', image_url: 'gildwar.jpg', is_active: true, start_date: new Date('2025-05-25T22:01:00+02:00').toISOString(), commentary: 'Сбор в 21:30'}
      {event_name: 'ГвГ: Защита 1', image_url: 'gildwar.jpg', is_active: false, start_date: new Date('2025-05-25T22:05:00+02:00').toISOString()},
      {event_name: 'ГвГ: Защита 1', image_url: 'gildwar.jpg', is_active: false, start_date: new Date('2025-05-25T22:05:00+02:00').toISOString()},
      {event_name: 'ГвГ: Атака 1', image_url: 'gildwar.jpg', is_active: false, start_date: new Date('2025-05-25T22:05:00+02:00').toISOString()},
      {event_name: 'Садэман', image_url: 'sademan.jpg', is_active: true, start_date: new Date('2025-05-24T22:00:00+02:00').toISOString(), commentary: 'Сбор в 21:30'},
    ])
  } catch (error) {
    console.error('***Ошибка загрузки сидов***')
  }

  await Attendance.bulkCreate([
    {member_id: 1, event_id: 1, status: true},
    {member_id: 3, event_id: 1, status: true},
    {member_id: 4, event_id: 1, status: true},

    
    {member_id: 1, event_id: 5, status: true},
    {member_id: 3, event_id: 5, status: true},
    {member_id: 4, event_id: 5, status: true},
    {member_id: 5, event_id: 5, status: true},
    {member_id: 6, event_id: 5, status: true},
    
    {member_id: 2, event_id: 1, status: true},
    {member_id: 5, event_id: 1, status: true},
    {member_id: 6, event_id: 1, status: true},
  ])

  await Party.bulkCreate([
    {event_id: 1, party_name: 'Пачка атаки 1', leader_id: 1},
    {event_id: 1, party_name: 'Пачка атаки 2', leader_id: 2},
    {event_id: 5, party_name: 'Садик 1', leader_id: 1},
  ])

  await PartyMember.bulkCreate([
    {party_id: 1, member_id: 1},
    {party_id: 1, member_id: 3},
    {party_id: 1, member_id: 4},

    {party_id: 2, member_id: 2},
    {party_id: 2, member_id: 5},
    {party_id: 2, member_id: 6},
    
    
    {party_id: 3, member_id: 2},
    {party_id: 3, member_id: 3},
    {party_id: 3, member_id: 4},
    {party_id: 3, member_id: 5},
  ])
}

module.exports = {
  loadSeeds
}