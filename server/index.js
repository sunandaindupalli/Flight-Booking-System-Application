import express from 'express'
import dotenv from 'dotenv'
import db from './db/db.js'

const app = express()
dotenv.config()
const PORT = process.env.PORTNAME

db()

app.get('/',(req,res)=>{
    res.send("Express Application")
})

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})