// notesRoutes.js
import express from 'express';
import{getAllNotes,getNoteById,createNote,updateNote,deleteNote} from"../controllers/notesController.js";
const router = express.Router();

// GET all notes
router.get('/', getAllNotes);
router.get('/:id', getNoteById);
// POST a new note
router.post('/',createNote);

// PUT to update a note
router.put('/:id',updateNote);

// DELETE a note
router.delete('/:id',deleteNote);

export default router;

