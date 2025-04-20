
const {Role, GameClass, Event} = require('./index')
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

    await Event.bulkCreate([
      {event_name: 'Атака 1', image_url: 'attack.jpg'},
      {event_name: 'Атака 2', image_url: 'attack.jpg'},
      {event_name: 'Защита 1', image_url: 'defense.jpg'},
      {event_name: 'Защита 2', image_url: 'defense.jpg'},
      {event_name: 'Садэман', image_url: 'sadaman.jpg'},
    ])
  } catch (error) {
    console.error('***Ошибка загрузки сидов***')
  }
}

module.exports = {
  loadSeeds
}