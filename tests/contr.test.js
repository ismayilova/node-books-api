
import { describe, beforeAll, beforeEach } from 'jest-circus';
import request from 'supertest';
// import controller from '../controllers/books.js';
import chalk from 'chalk';
import {getBook, getBooks, addBook, deleteBook,updateBook} from '../controllers/books.js';




 describe('Test cases for adding new book',()=>{
    
    test('Test case 1: successfully add new book ',()=>{
      expect(addBook).books.size.toBe(1);  
    }); 

    test('dummy',()=>{
        expect(1+2).toBe(3);
    })
 });