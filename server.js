const express = require('express')
const dotnev = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')

dotnev.config({ path: '/config/config.env' })

const app = express()

app.get('/', (req, res) => res.send('Hello'))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))