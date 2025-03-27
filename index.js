require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api');
const express = require('express')
const cors = require('cors')


const bot = new TelegramBot(process.env.TOKEN_BOT, {polling: true});
const app = express()

const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())


bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, '111');
});

app.get('/', (req, res) => {
  
})

app.post('/web-data', async (req, res) => {
  console.log(req.body)
  const {id, username} = req.body;
  let role = id===5616481223? 'officerClan' : 'inClan'
  await bot.sendMessage(id,`Сообщение с сервера. Ваш ID: ${id}`)
  return res.status(200).json({message: 'ok', role: role})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})