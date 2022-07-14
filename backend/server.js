const express = require ('express')
const cors = require ('cors')
const dotenv = require ('dotenv')
const morgan = require ('morgan')
const path = require ('path')

const connectDB = require ('./config/db')
const favoriteBookRoutes = require ('./routes/favoriteBookRoutes')
const { errorHandler, notFound } = require ('./middlewares/errorMiddleware')

dotenv.config()
connectDB()
const app = express()
const PORT = process.env.PORT
const ENV = process.env.APP_ENV

if (ENV === 'staging' || ENV === 'local') {
    app.use(morgan('dev'))
}

app.use(cors())
app.use(express.json())

app.use('/api/favorites', favoriteBookRoutes)

// Serve frontend
if (process.env.APP_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
      )
    );
  } else {
    app.get('/', (req, res) => res.send('Please set to production'));
  }

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, console.log(`Server running in ${ENV} mode on port ${PORT}`))