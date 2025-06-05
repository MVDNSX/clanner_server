const jwt = require('jsonwebtoken')

function accessValidate(req, res, next){

  const authHeader = req.headers?.authorization
  if(!authHeader){
    return res.status(401).json({error: 'Нет токена'})
  }

  const token = authHeader.split(' ')[1]
  
  jwt.verify(token, process.env.JWT_SECRET,(err, decoded) => {
    if(err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'Токен просрочен', code: 'token_expired' })
      }
      return res.status(403).json({ error: 'Недействительный токен', code: 'invalid_token' })
    }
    req.telegram_id = decoded.telegram_id
    req.member_id = decoded.member_id

    next()
  })
}

module.exports = accessValidate