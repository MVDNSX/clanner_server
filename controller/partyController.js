const {Member, Party } = require('../models')

class partyController {

  async getPartyMembers(req, res){
    try {
      const party_id = req.params.partyId
      const party = await Party.findByPk(party_id, {
        include:[
          {
            model: Member,
            as: 'members',
            through: { attributes: [] },
            attributes: ['id', 'nickname', 'pa', 'pz', 'fs', 'class_id'],
          }
        ]
      })

    if(!party){
      res.status(404).json({
        success: false,
        error:{
          code:'PARTY_NOT_FOUND',
          message: `Пати с Id:${party_id} не найдена`
        }
      })
    }

    res.status(200).json({success: true, data:{party}})
    } catch (error) {
      console.log('+++ Ошибка (getPartyMembers) +++')
      console.log(error)
      res.status(500).json({
        success:false,  
        error:{ 
          code: 'INTERNAL_SERVER_ERROR', 
          message: 'Internal server error'
        } 
      })
    }
  }

}

module.exports = new partyController