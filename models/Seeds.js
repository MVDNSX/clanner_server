
const {Member, Role, GameClass, Event, Party} = require('./index')
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
      {telegram_id: '5142957152', nickname: 'NZT', pa:40, pz: 6, fs: 4200, class_id:17, role_id:1}
    ])

    

    await Event.bulkCreate([
      {event_name: 'Атака 1', image_url: 'attack.jpg', is_active: false, start_date: new Date('2025-05-25T22:05:00+02:00').toISOString()},
      {event_name: 'Атака 2', image_url: 'attack.jpg', is_active: false, start_date: new Date('2025-05-25T22:05:00+02:00').toISOString()},
      {event_name: 'Защита 1', image_url: 'defense.jpg', is_active: false, start_date: new Date('2025-05-25T22:05:00+02:00').toISOString()},
      {event_name: 'Защита 2', image_url: 'defense.jpg', is_active: false, start_date: new Date('2025-05-25T22:05:00+02:00').toISOString()},
      {event_name: 'Садэман', image_url: 'sadaman.jpg', is_active: true, start_date: new Date('2025-05-25T22:05:00+02:00').toISOString()},
    ])
  } catch (error) {
    console.error('***Ошибка загрузки сидов***')
  }

  await Party.bulkCreate([
    {event_id: 1, party_name: 'Пачка 1'}
  ])
}

module.exports = {
  loadSeeds
}