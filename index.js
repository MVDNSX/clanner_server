require('dotenv').config()
const express = require('express')
const corsMiddleware = require('./middleware/cors.middleware')
const cors = require('cors')
const router = require('./router/index')

const {sequelize} = require('./models')
const { loadSeeds } = require('./models/Seeds')

const port = process.env.PORT || 5000

const app = express()
//app.use(corsMiddleware)
app.use(cors())
app.use(express.json())
app.use('/classes', express.static('public/classes'))
app.use('/api', router)


const start = async () => {
  try {
    await sequelize.authenticate()
    console.log('***  Соединение с базой данный установлено  ***')
    
    await sequelize.sync({force: true})
    console.log('***  Модели синхронизированны  ***')
    
    await loadSeeds()
    console.log('***  Сиды успешно загружены  ***')
    
    app.listen(port, () => {
      console.log(`***  Сервер запущен на порту  ***: ${port}`)
    })
  } catch (error) {
    console.log("***  Ошибка подключения к БД  ***", error)
  }
}

start()