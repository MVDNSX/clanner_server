
const {Member, Role, GameClass, Event} = require('./index')
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
      {telegram_id: '5616481223', nickname: 'FTX', pa:199, pz: 87, fs: 6535, class_id: 7},
      {telegram_id: '5142957152', nickname: 'NZT', pa:40, pz: 6, fs: 4200, class_id:17}
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
}

module.exports = {
  loadSeeds
}