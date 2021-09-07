require("dotenv").config()

const { PORT } = process.env

const express = require("express")
const app = express()

const cors = require("cors")
const morgan = require("morgan")


const NotesRouter = require('./routes/notes.routes')
const mongoose = require('./db/db')


//declaring middlewaare below
app.use(express.json())
app.use(cors())
app.use(morgan("tiny"))
//end of the middleware

//insert the routes
app.use("/", NotesRouter)


app.get("/", (req, res) =>{
    res.send("Here is the root of the API")
})
app.listen(PORT, () =>{
     console.log("Port is listening on port " + PORT)
})