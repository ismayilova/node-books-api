import express from 'express';
import {body} from 'express-validator';
const router = express.Router();
import {initDb} from '../controllers/books.js';

router.get('/',initDb);
export default router;
