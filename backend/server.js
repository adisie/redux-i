require('dotenv').config()
const monggose = require('mongoose')
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()

// settings
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({origin: true,credentials: true}))
app.use(cookieParser())

monggose.connect(process.env.MONGODB_URI)
  .then(()=>{
    console.log('CONNECTED')
    app.listen(process.env.PORT,()=>{
        console.log('LISTENING')
    })
  })
  .catch(err=>{
    console.log(err)
    process.exit(1)
  })

  app.use('/users',require('./routes/usersRoute'))
  app.use('/blogs',require('./routes/blogsRoute'))
