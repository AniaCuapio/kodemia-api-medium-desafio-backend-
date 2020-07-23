const express = require('express')
const { request, response } = require('express')
const app = express()

const entriesRouter = require('./src/routes/entries')
const writersRouter = require('./src/routes/writers')


//Este es un middleware
app.use(express.json())

//Aqui se monta el enrutador montado XD
app.use('/entries', entriesRouter)

app.use('/writers', writersRouter)

app.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'Medium API',
  })
})

module.exports = app
