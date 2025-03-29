const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.TOKEN_BOT, {polling:true})

const chatId = process.env.GROUP_CHAT_ID
const topicId = process.env.TOPIC_ID

const sendAppMessage = (userData) => {
  const {nickname, firstName, charProfile, PA, PZ, FS, charLink, nicknameHistory, clanHistory, message
  } = userData

  const messageText = `Новая заявка от ${nickname}.\n\n` +
                        `1. Имя: ${firstName}\n` +
                        `2. Прошлые ники: ${nicknameHistory}\n` +
                        `3. Прошлые кланы: ${clanHistory}\n` +
                        `4. Класс ${charProfile}\n` +
                        `5. Показатели персонажа: ${PA} ПА ${PZ} ПЗ ${FS} БД\n` +
                        `6. Ссылка на pwobs ${charLink}\n` +
                        `7. Почему именно наш клан ${message}`;
  const options = {
      message_thread_id: topicId,
      parse_mode: 'Markdown',
      reply_markup: {
        inline_eyboard: [
          [{ text: '✅ Принять'}]
          [{ text: '❌ Отклонить'}]
        ]
      }
    }
  bot.sendMessage(chatId, messageText, options)
}