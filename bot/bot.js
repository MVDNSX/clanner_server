const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const bot = new TelegramBot(process.env.TOKEN_BOT, { polling: true });

const chatId = process.env.GROUP_CHAT_ID
const topicId = Number(process.env.TOPIC_ID)

const sendAppMessage = ({initData, data}) => {

  const params = new URLSearchParams(initData)
  const user = JSON.parse(params.get('user'))

  const { name, nickname, previousNick, previousClan, pa, pz, fs, characterUrl, recommends, reason
  } = data

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
      [{ text: '✅ Принять', callback_data: `action=accept&userId=${user.id}` }],
      [{ text: '❌ Отклонить', callback_data: 'action=decline&userId=${user.id}' }]
    ]
  }
};
  bot.sendMessage(-1002517925483, messageText, options)
}

bot.on('callback_query', async (query) => {
  const params = new URLSearchParams(query.data)
  const action = params.get('action')
  const userId = params.get('userId')

  const username = query.from.username
  const messageId = query.message.message_id
  const chatId = query.message.chat.id

  if(action === 'accept'){

    try {
      // Редактируем только клавиатуру (inline кнопки)
      await bot.editMessageReplyMarkup({
        inline_keyboard: [
          [{ text: `✅ Заявка принята офицеров ${username}`}]
        ]
      }, {
        chat_id: chatId,
        message_id: messageId
      });

      // Отправляем сообщение пользователю
      await bot.sendMessage(userId, 'Ваша заявка принята!');
    } catch (err) {
      console.error('Ошибка при обработке принятия заявки:', err);
    }
  }
    if(action === 'decline'){
    await bot.sendMessage(userId, '❌ Ваша заявка отклонена.')
    } 

  bot.answerCallbackQuery(query.id);
})

module.exports = { bot, sendAppMessage };