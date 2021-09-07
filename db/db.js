require("dotenv").config()

const mongoose = require("mongoose")
const config = {
    useUnifiedTopology: true
}
const { MONGODBURI } = process.env

mongoose.connect(MONGODBURI, config)

mongoose.connection
    .on("open", () => console.log("Notes DB is connected to Mongo"))
    .on("close", () => console.log("Mongo connection is closed"))
    .on("error", (error) => console.log(error))
    

module.exports = mongoose