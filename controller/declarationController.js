class DeclararionController {
  async processInit(req, res) {
    console.log(req.body)
    res.status(200).json({message: 'ok'})
  }
}

module.exports = new DeclararionController