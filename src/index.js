require('dotenv').config()

const cors = require('cors')
const routes = require('./routes')
const express = require('express')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 4000
const MONGODB_URI = process.env.MONGODB_URI

const app = express()

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(PORT)
