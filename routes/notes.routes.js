const notes = require('../controllers/notes.controllers')

const router = require("express").Router()

router.post('/notes', notes.createNote)

router.get('/allNotes', notes.getNotes)

router.get("/notes/:id", notes.getNoteById)

router.put("/notes/:id", notes.updateById)

router.delete('/notes/:id', notes.deleteById)

module.exports = router