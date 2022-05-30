// const express = require('express');
import express from 'express';
import {body} from 'express-validator';
const router = express.Router();

//import another module
import {getBook, getBooks, addBook, deleteBook,updateBook} from '../controllers/books.js';

router.get('/',getBooks);
router.get('/:id',getBook);
router.delete('/:id',deleteBook)
router.patch('/:id',updateBook)
router.post('/',body('title').not().isEmpty().escape(),
                body('volumes').not().isEmpty().escape(),
addBook);

export default router
// module.exports = router