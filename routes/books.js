// const express = require('express');
import express from "express";

const router = express.Router();

//import another module
import {getBook, getBooks, addBook, deleteBook,updateBook} from '../controllers/books.js';

router.get('/',getBooks);
router.get('/:id',getBook);
router.delete('/:id',deleteBook)
router.patch('/:id',updateBook)
router.post('/',addBook);

export default router
// module.exports = router