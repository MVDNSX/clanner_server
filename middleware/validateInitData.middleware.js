const crypto = require('crypto')

const MAX_INITDATA_SECOND = 300

function verifyInitData(initData){

  const urlParams = new URLSearchParams(initData)
  const hash = urlParams.get('hash')
  urlParams.delete('hash')

  const dataCheckString = Array.from(urlParams.entries())
                          .map(([key, value]) => `${key}=${value}`)
                          .sort()
                          .join("\n");

  const secretKey = crypto.createHmac('sha256', 'WebAppData').update(process.env.TOKEN_BOT).digest();
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
    return res.status(400).json({error: '*** initData не найдена ***'})
  }

  const verifiedData = verifyInitData(initData)
  if(!verifiedData){
    return res.status(401).json({error: '*** Невалидный initData ***'})
  }

   const now = Math.floor(Date.now() / 1000)
   const authDate = Number(verifiedData.auth_date)
   if(now - authDate > MAX_INITDATA_SECOND){ //проверка что initData создан не более чем MAX_INITDATA_AGE секунд назад
    return res.status(403).json({ error: '*** initData просрочена ***' });
   }


  const user = verifiedData.user
  if(!user || !user.id){
    return res.status(400).json({ error: '*** Данные пользователя в initData не найдены ***'})
  }

  req.telegram_id = user.id
  next()
}

module.exports = validateInitData;
