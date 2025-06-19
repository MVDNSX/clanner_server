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
        return res.status(401).json({ 
          success:false,
          error: {
            code:'TOKEN_EXPIRED',
            message: 'Токен просрочен'
          }
        })
      }
      return res.status(403).json({
        success: false,
        error: {
          code:'INVALID_TOKEN',
          message:'Недействительный токен'
        }
      })
    }
    req.userData = decoded
    next()
  })
}

module.exports = accessValidate