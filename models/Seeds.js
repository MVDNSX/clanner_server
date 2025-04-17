
const {Role, Character} = require('./index')
async function loadSeeds() {
  try {
    await Role.bulkCreate([
      {name: 'Член'},
      {name: 'Офицер'},
    ], {ignoreDuplicates: true})
    
    await Character.bulkCreate([
      {name: 'Воин'},
      {name: 'Маг'},
      {name: 'Стрелок'},
      {name: 'Оборотень'},
      {name: 'Друид'},
      {name: 'Странник'},
      {name: 'Убийца'},
      {name: 'Шаман'},
      {name: 'Бард'},
      {name: 'Страж'},
      {name: 'Мистик'},
      {name: 'Дух крови'},
      {name: 'Призрак'},
      {name: 'Жнец'},
      {name: 'Лучник'},
      {name: 'Прист'},
      {name: 'Паладин'},
    ], {
      ignoreDuplicates: true
    })
  } catch (error) {
    console.error('***Ошибка загрузки сидов***')
  }
}

module.exports = {
  loadSeeds
}