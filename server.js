const express = require('express')
const dotnev = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require('./config/db')
const path = require('path')

dotnev.config({ path: './config/config.env' })

connectDB()

const transactions = require('./routes/transaction')

const app = express()

app.use(express.json())

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'))
}

app.use('/api/v1/transactions', transactions)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))