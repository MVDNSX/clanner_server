require('dotenv').config()
const express = require('express')
const corsMiddleware = require('./middleware/cors.middleware')
const cors = require('cors')
const router = require('./router/index')

const port = process.env.PORT || 5000

const app = express()
//app.use(corsMiddleware)
app.use(cors())
app.use(express.json())
app.use('/api', router)

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`server started on port: ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()