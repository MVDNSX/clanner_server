const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const bot = new TelegramBot(process.env.TOKEN_BOT, { polling: true });

const chatId = process.env.GROUP_CHAT_ID
const topicId = Number(process.env.TOPIC_ID)

const sendAppMessage = (userData) => {
  const { name, nickname, previousNick, previousClan, pa, pz, fs, characterUrl, recommends, reason
  } = userData

  const messageText = `Новая заявка от ${nickname}.\n\n` +
                        `1. Имя: ${name}\n` +
                        `2. Прошлые ники: ${previousNick}\n` +
                        `3. Прошлые кланы: ${previousClan}\n` +
                        `4. Класс: ${characterUrl}\n` +
                        `5. Показатели персонажа: ${pa} ПА ${pz} ПЗ ${fs} БД\n` +
                        `6. Ссылка на pwobs: ${characterUrl}\n` +
                        `7. Могут порекомендовать: ${characterUrl}\n` +
                        `8. Почему именно наш клан: ${reason}`;
  const options = {
  message_thread_id: 2,
  parse_mode: 'Markdown',
  reply_markup: {
    inline_keyboard: [
      [{ text: '✅ Принять', callback_data: 'accept' }],
      [{ text: '❌ Отклонить', callback_data: 'decline' }]
    ]
  }
};
  bot.sendMessage(-1002517925483, messageText, options)
}

module.exports = { bot, sendAppMessage };