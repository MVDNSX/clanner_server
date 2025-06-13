const Party = require('../models/Party')
const PartyMember = require('../models/PartyMember')
const Member = require('../models/Member')

class partyController {

  async getMembers(req, res){
    const party_id = req.params.party_id

    try {
      const party = await Party.findOne({
        where: {id: party_id},
        include:[
          {
            model: Member,
            through: { attributes: [] },
            attributes: ['id', 'telegram_id', 'nickname', 'pa', 'pz', 'fs', 'class_id']
          }
        ]
      })

    res.status(200).json({status: 'ok', party})
    } catch (error) {
      console.error('Ошибка получения пати (getPartyMembers)', error)
      res.status(401).json({message: 'Ошибка обработки запроса (getPartyMembers)'})
    }
  }

}

module.exports = new partyController