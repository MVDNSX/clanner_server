const {sendAppMessage} = require('../bot/bot')

class DeclararionController {
  async processInit(req, res) {
    console.log(req.body)
    try {
    sendAppMessage(req.body.data)
    res.status(200).json({ message: 'Заявка успешно отправлена' });
    } catch (error) {
      console.error('Ошибка обработки заявки:', error);
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  }
}

module.exports = new DeclararionController