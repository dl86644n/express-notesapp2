const { Schema, model } = require("mongoose")

const notesModel = new Schema({
    message: {type: String, required: true}
}, {timestamps: true})


const Notes = model("notes", notesModel)


module.exports = Notes