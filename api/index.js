import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

// Routes
import authRoute from './routes/auth.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import usersRoute from './routes/users.js'

dotenv.config()

const app = express()

const connect = async() => {
    try {
        await mongoose.connect(process.env.mongoLocal)
        console.log('Connected to mongoDB...')
    } catch (error) {
        throw error
    }
}

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB Disconnected!')
})

mongoose.connection.on('connected', () => {
    console.log('MongoDB Connected')
})

// Middlewares

app.use(cookieParser())
app.use(express.json())


app.use('/api/auth', authRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)
app.use('/api/users', usersRoute)

// Error handling middleware
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

app.listen('8800', () => {
    connect()
    console.log('Connected to API ...')
})