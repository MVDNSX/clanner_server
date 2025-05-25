const Party = require('../models/Party')
const PartyMember = require('../models/PartyMember')
const Member = require('../models/Member')

class partyController {

  async getMemberParty(req, res){
    const {event_id, member_id} = req.body

    try {
      const party = await Party.findOne({
      where: {
        event_id
      },
      include:[
        {
          model: PartyMember,
          as:'party_members',
          where:{member_id}, 
          include:[{
            model: Member,
            as: 'member'
          }
        ]}
      ]
    })

    if (!party) {
      return res.status(200).json({message: 'ok', party: null });
    }

    res.status(200).json({message: 'ok', party})
    } catch (error) {
      console.error('Ошибка получения пати', error)
      res.status(401).json({message: 'Ошибка обработки запроса (getMemberParty)'})
    }
  }


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