
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
      { telegram_id: '5616481223', nickname: 'FTX', pa: 199, pz: 87, fs: 6535, class_id: 7, role_id: 1 },
    { telegram_id: '5616481224', nickname: 'Alpha', pa: 150, pz: 90, fs: 4500, class_id: 3, role_id: 1 },
    { telegram_id: '5616481225', nickname: 'Bravo', pa: 180, pz: 75, fs: 5000, class_id: 5, role_id: 1 },
    { telegram_id: '5616481226', nickname: 'Charlie', pa: 210, pz: 80, fs: 6000, class_id: 2, role_id:1 },
    { telegram_id: '5616481227', nickname: 'Delta', pa: 170, pz: 85, fs: 4700, class_id: 4, role_id: 1 },
    { telegram_id: '5616481228', nickname: 'Echo', pa: 190, pz: 88, fs: 5200, class_id: 6, role_id: 1 },
    { telegram_id: '5616481229', nickname: 'Foxtrot', pa: 160, pz: 83, fs: 4900, class_id: 1, role_id: 1 },
    { telegram_id: '5616481230', nickname: 'Golf', pa: 175, pz: 79, fs: 4800, class_id: 8, role_id: 1 },
    { telegram_id: '5616481231', nickname: 'Hotel', pa: 200, pz: 92, fs: 6100, class_id: 9, role_id: 1 },
    { telegram_id: '5616481232', nickname: 'India', pa: 185, pz: 77, fs: 5300, class_id: 7, role_id: 1 },
    ])

    

    await Event.bulkCreate([
      {event_name: 'ТВ Атака', banner_url: '/events/gildwar.jpg', is_active: true, start_date: new Date('2025-05-25T22:01:00+02:00').toISOString(), commentary: 'Сбор в 21:30', opponent: 'Imbalance'},
      {event_name: 'ТВ Защита', banner_url: '/events/gildwar.jpg', is_active: true, start_date: new Date('2025-05-25T22:05:00+02:00').toISOString(), commentary: 'Сбор в 22:15', opponent: 'Фришка'},
      {event_name: 'ТВ Защита', banner_url: '/events/gildwar.jpg', is_active: false, start_date: new Date('2025-05-25T22:05:00+02:00').toISOString()},
      {event_name: 'ТВ Атака', banner_url: '/events/gildwar.jpg', is_active: false, start_date: new Date('2025-05-25T22:05:00+02:00').toISOString()},
      {event_name: 'Садэман', banner_url: '/events/sademan.jpg', is_active: true, start_date: new Date('2025-05-24T22:00:00+02:00').toISOString(), commentary: 'Сбор в 21:30'},
    ])

    await Party.bulkCreate([
      {event_id: 1, party_name: 'Атака 1', leader_id: 1},
    ])

    await Attendance.bulkCreate([
    {member_id: 1, event_id: 5, status:  'GOING', party_id: 1},
    {member_id: 1, event_id: 1, status: 'NOT_GOING'},
    ])


  await PartyMember.bulkCreate([
    {party_id: 1, member_id: 1},
    {party_id: 1, member_id: 2},
    {party_id: 1, member_id: 3},
    {party_id: 1, member_id: 4},
    {party_id: 1, member_id: 5},
    {party_id: 1, member_id: 6},
    {party_id: 1, member_id: 7},
    {party_id: 1, member_id: 8},
    
  ])
  } catch (error) {
    console.error('***Ошибка загрузки сидов***')
    console.error(error)
  }
}

module.exports = {
  loadSeeds
}