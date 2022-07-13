import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'

import homeRoutes from './routes/homeRoute.js'

dotenv.config()
const app  = express()
const PORT = process.env.PORT
const ENV  = process.env.APP_ENV

if (ENV === 'staging' || ENV === 'local') {
    app.use(morgan('dev'))
}

app.use(cors())
app.use(express.json())

app.use('/', homeRoutes)

app.listen(PORT, console.log(`Server running in ${ENV} mode on port ${PORT}`))