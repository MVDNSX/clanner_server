//const TelegramBot = require('node-telegram-bot-api');
//require('dotenv').config();

//const bot = new TelegramBot(process.env.TOKEN_BOT, { polling: true });

//const chatId = process.env.GROUP_CHAT_ID
//const topicId = Number(process.env.TOPIC_ID)

//const sendAppMessage = ({initData, data}) => {

//  const params = new URLSearchParams(initData)
//  const user = JSON.parse(params.get('user'))

//  const { name, nickname, previousNick, previousClan, pa, pz, fs, characterUrl, recommends, reason
//  } = data

//  const messageText = `Новая заявка от ${nickname}.\n\n` +
//                        `1. Имя: ${name}\n` +
//                        `2. Прошлые ники: ${previousNick}\n` +
//                        `3. Прошлые кланы: ${previousClan}\n` +
//                        `4. Класс: ${characterUrl}\n` +
//                        `5. Показатели персонажа: ${pa} ПА ${pz} ПЗ ${fs} БД\n` +
//                        `6. Ссылка на pwobs: ${characterUrl}\n` +
//                        `7. Могут порекомендовать: ${characterUrl}\n` +
//                        `8. Почему именно наш клан: ${reason}`;
//  const options = {
//  message_thread_id: 2,
//  parse_mode: 'Markdown',
//  reply_markup: {
//    inline_keyboard: [
//      [{ text: '⚖️ Отправить в обсуждение', callback_data: `action=discussion&userId=${user.id}&nickname=${nickname}` }],
//      [{ text: '❌ Отклонить', callback_data: `action=decline&userId=${user.id}` }]
//    ]
//  }
//};
//  bot.sendMessage(-1002517925483, messageText, options)
//}

//bot.on('message', (msg) => {
//  if(msg.message_thread_id){
//    console.log(`Id темы: ${msg.message_thread_id}`)
//  }else{
//    console.log('Сообщение не связано с темой')
//  }
//})

//const fnDiscussion = async ({queryId, chatId, topicId, messageId, message, userId, nickname}) => {
//  try {
//      let msg = await bot.sendMessage(chatId, message, {
//        message_thread_id: topicId,
//        parse_mode: 'Markdown',
//      })

//      await bot.sendPoll(chatId, `Заявка от ${nickname}, принимаем?`, ['Да', 'Нет', 'На усмотрение офицеров'], {
//        message_thread_id: topicId,
//        type: 'regular',
//        is_anonymous: true,
//        allows_multiple_answers: false,
//        disable_notification: true,
//        reply_to_message_id: msg.message_id,
//      })

//      await bot.editMessageReplyMarkup({
//        inline_keyboard: [
//          [{ text: `✅Принять заявку`, callback_data: `action=accept&userId=${userId}`}],
//          [{ text: '❌ Отклонить', callback_data: `action=decline&userId=${userId}` }]
//        ]
//      }, {
//        chat_id: chatId,
//        message_id: messageId
//      })

//      await bot.answerCallbackQuery(queryId, {
//        text: 'Заявка отправлена в обсуждение',
//        show_alert: true,
//      })
//  } catch (error) {
//    console.error('**Ошибка fnDisscussion:**', error)
//    await bot.answerCallbackQuery(queryId, {
//      text: 'Ошибка отправки в обсуждение',
//      show_alert: true,
//    })
//  }
//}

//const fnAccenpt = async ({queryId, chatId, messageId, userId}) => {
//  try {
//    await bot.editMessageReplyMarkup({
//      inline_keyboard: [
//        [{ text: `Переместить в архив`, callback_data: 'action=archive'}],
//      ]
//    }, {
//      chat_id: chatId,
//      message_id: messageId
//    })

//    const inviteLink = await bot.createChatInviteLink(chatId, {
//      name: 'Приглашение в чат',
//      expire_date: Math.floor(Date.now() / 1000) + 86400,
//      member_limit: 1,
//      creates_join_request: false, //вступление без одобрения
//    })

//    await bot.sendMessage(userId, '✅ Ваша заявка принята!', {
//      parse_mode: 'Markdown',
//      reply_markup:{
//        inline_keyboard: [
//          [{text: 'Приглашение в чат', url: inviteLink.invite_link}]
//        ]
//      }
//    });

//    await bot.answerCallbackQuery(queryId, {
//      text: 'Заявка принята',
//      show_alert: false,
//    })
//  } catch (error) {
//    console.error('Ошибка принятия заявки:', error);
//    await bot.answerCallbackQuery(queryId, {
//      text: 'Ошибка принятия заявки',
//      show_alert: false,
//    })
//  }
//}

//const fnArchive = async ({queryId, chatId, topicId, messageId, message}) => {
//  const currentDate = new Date().toLocaleDateString('ru-Ru')
//  try {
//    let toArchive = await bot.sendMessage(chatId, message, {
//      message_thread_id: topicId, //id архива заявок
//      parse_mode: 'Markdown',
//      disable_notification: true,
//      reply_markup: {
//        inline_keyboard: [
//          [{text: `Заявка принята ${currentDate}`, callback_data: 'noop'}]
//        ]
//      }
//    })
//    if(toArchive && toArchive.message_id){
//      await bot.deleteMessage(chatId, messageId)
//      await bot.answerCallbackQuery(queryId, {
//        text: 'Заявка перемещена в архив',
//        show_alert: true,
//      })
//      console.log('**Заявка перемещена в архив**')
//    }else{
//      console.log('**Не удалось архивировать. Повторите запроса**')
//      await bot.answerCallbackQuery(queryId, {
//        text: 'Не удалось архивировать. Повторите запроса',
//        show_alert: true,
//      })
//    }
//  } catch (error) {
//    console.error('**Ошибка fnArchive:**', error)
//    await bot.answerCallbackQuery(queryId, {
//      text: 'Ошибка архивирования',
//      show_alert: true,
//    })
//  }
//}


//const fnDecline = async ({queryId, chatId, messageId, userId}) => {
//  const currentDate = new Date().toLocaleDateString('ru-Ru')
//  try {
//    await bot.editMessageReplyMarkup({
//      inline_keyboard:[
//        [{text: `Заявка была отклонена ${currentDate}`, callback_data: 'noop'}],
//        [{ text: `Переместить в архив`, callback_data: 'action=archive'}]

//      ]
//    }, {
//      chat_id: chatId,
//      message_id: messageId,
//    })

//    await bot.sendMessage(userId, '❌ Ваша заявка отклонена.')

//    await bot.answerCallbackQuery(queryId, {
//      text: 'Заявка отклонена',
//      show_alert: false,
//    })

//  } catch (error) {
//    console.error('Ошибка при отклонении заявки:', error);
//    await bot.answerCallbackQuery(queryId, {
//      text: 'Ошибка отклонения завки',
//      show_alert: false,
//    })
//  }
//}

//bot.on('callback_query', async (query) => {
//  const params = new URLSearchParams(query.data)
//  const action = params.get('action')
//  const userId = params.get('userId')
//  const nickname = params.get('nickname')

//  const topicArchive = 40;
//  const topicDiscussion = 52;


//  const queryId = query.id
//  const userFirstName = query.from.first_name
//  const username = query.from.username
//  const chatId = query.message.chat.id
//  const messageId = query.message.message_id
//  const message = query.message.text;

//  if(action === 'discussion') {
//    console.log('****action === discussion****')
//    await fnDiscussion({queryId, chatId, topicId:topicDiscussion, messageId, message, userId, nickname})
//  }

//  if(action === 'accept'){
//    console.log('****action === accept****')
//    await fnAccenpt({queryId, chatId, messageId, userId})
//  }

//  if(action === 'archive'){
//    console.log('****action === archive****')
//    await fnArchive({queryId, chatId, topicId: topicArchive, messageId, message})
//  }

//  if(action === 'decline'){
//    console.log('****action === decline****')
//    await fnDecline({queryId, chatId, userId, messageId})
//  } 
//})

//module.exports = { bot, sendAppMessage };


