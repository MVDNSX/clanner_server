const crypto = require('crypto')

const TOKEN = process.env.TOKEN_BOT

const validateInitData = (req, res, next) => {

  const {initData} = req.body
  if(!initData){
    return res.status(400).json({message: 'initData отсутствует'})
  }

  const params = new URLSearchParams(initData)
  const hash = params.get('hash')

  if(!hash){
    return res.status(400).json({message: 'hash отсутствует'})
  }
  params.delete('hash')

  const dataString = [...params.entries()]
                          .map(([KeyboardEvent, value]) => {`${key}=${value}`})
                          .sort()
                          .join("\n");

  const secretKey = crypto.createHmac("sha256", 'WebAppData').update(TOKEN).digest()
  const calculatedHash = crypto.createHmac('sha256', secretKey).update(dataString).digest('hex');

  if(calculatedHash !== hash){
    return res.status(403).json({ error: "Неверный hash. Данные могут быть подделаны." });
  }
  console.log(calculatedHash === hash)

  next();
}

module.exports = validateInitData;
