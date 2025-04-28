
const checkOfficerRole = (req, res, next) => {
  const user = req.user;
  if(!user){
    return res.status(500).json({message: '*** User not loaded *** (checkOfficerRole)'})
  }

  if(user.role_id !== 2){
    return res.status(403).json({message: '*** Access denied ***'})
  }

  next()
}