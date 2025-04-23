const Party = require('../models/Party')

class partyController {
  async getAllParty(req,res){
    try {
      const parties = await Party.findAll()
      res.status(200).json(parties)
    } catch (error) {
      console.error('Ошибка загрузки пати', error)
      res.status(401).json({message: 'Ошибка обработки запроса (getAllParty)'})
    }
  }

  async createParty(req, res){
    try {
      const {party_name, id} = req.body
      const createdParty = await Party.create({
        party_name,
        event_id: id,
      })
      res.status(200).json(createdParty)
    } catch (error) {
      console.error('Ошибка создания пати', error)
      res.status(401).json({message: 'Ошибка обработки запроса (createParty)'})
    }
  }

  async chooseLeader(req,res){
    try {
      const {id, leader_id} = req.body
      const updLeader = await Party.update({leader_id}, {where: {id}})
      res.status(200).json(updLeader)
      
    } catch (error) {
      console.error('Ошибка создания пати', error)
      res.status(401).json({message: 'Ошибка обработки запроса (choosePartyLeader)'})
    }
  }
}

module.exports = new partyController