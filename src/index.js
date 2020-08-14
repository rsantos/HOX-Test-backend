require("dotenv").config();

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express();

mongoose.connect( process.env.MONGODB_URI ,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
});

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(4000);
