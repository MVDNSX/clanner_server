const crypto = require('crypto')
const {Member} = require('../models')
const tokenBot = process.env.TOKEN_BOT

function verifyInitData(initData){

  const urlParams = new URLSearchParams(initData)
  const hash = urlParams.get('hash')
  urlParams.delete('hash')

  const dataCheckString = Array.from(urlParams.entries())
                          .map(([key, value]) => `${key}=${value}`)
                          .sort()
                          .join("\n");

  const secretKey = crypto.createHmac('sha256', 'WebAppData').update(tokenBot).digest();
  const computedHash = crypto.createHmac('sha256', secretKey).update(dataCheckString).digest('hex');
  if (computedHash !== hash) {
    return null; // Подпись не совпала, данные не от Telegram
  }

  const data = {}
  for (const [key, value] of urlParams.entries()) {
    try {
      data[key] = JSON.parse(value);
    } catch (e) {
      data[key] = value;
    }
  }

  return data
}

async function validateInitData(req, res, next){

  const {initData} = req.body
  if(!initData){
    return res.status(400).json({message: '*** initData не найдена ***'})
  }

  const verifiedData = verifyInitData(initData)
  if(!verifiedParams){
    return res.status(401).json({message: '*** Невалидный initData ***'})
  }

  const user = verifiedData.user
  if(!user){
    return res.status(400).json({message: '*** Данные пользователя в initData не найдены ***'})
  }
  const telegramId = user.id

  try {
    const member = await Member.findOne({
      where:{
        telegram_id: telegramId
      }
    })

    if(!member){
      res.status(403).json({message: '*** User not found ***'})
    }

    req.user = member
    next()
  } catch (error) {
    console.error('*** Server error (validateInitData) ***', error)
    res.status(500).json({message: 'Server error'})
  }
}

module.exports = validateInitData;
