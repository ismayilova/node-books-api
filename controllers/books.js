import { v4 as uuid } from 'uuid';
import {validationResult} from 'express-validator';
import {db} from '../db.js';
import chalk from 'chalk';
let books = [];

export const initDb = (req,res)=>{
    db.connect(
        (err)=>{
            if (err) throw err;
            const sqlQuery =  'CREATE TABLE IF NOT EXISTS books (id VARCHAR(55), title VARCHAR(55), authors VARCHAR(100), volumes VARCHAR(50))';
  db.query(sqlQuery,(error)=>{
      if(error) throw error;
      res.send('Table is created');
  });
        });
 
};



 export const getBooks = (req,res)=>{
    // res.send(books)
    const sql = 'select  * from books';
      db.query(sql,(error,result)=>{
            if(error) throw error;
            res.json({'data':result}); // res.json(result);
        });
   

    
};

export const addBook = (req,res)=>{

    const errors = validationResult(req);

    if (errors.array().length > 0) {
        res.send(errors.array());
    } else {
        
        const sqlQuery = 'INSERT INTO books SET ?';
       const book = req.body 
       const sqlBook = {
           title:book.title,
           authors: book.authors.join(),
           volumes: book.volumes,
           id: uuid()
       };
        db.query(sqlQuery, sqlBook, (err, row) => {
            if (err) throw err;
            res.status(201);
            res.send('Subscribed successfully!');
        });
    }
    // const book = req.body
    // books.push({...book, id: uuid()})
    // res.status(201);
    // res.send('Created');
};

export const getBook = (req,res) => {
    // const {id} = req.params
    // res.send(books.find(book => book.id === id));

    const sql = 'select  * from books where id = ?';
    db.query(sql,req.params.id,(error,result)=>{
        if(error) throw error;
        res.json({'data':result}); // res.json(result);
    });
};

export const deleteBook = (req,res) => {
    const id = req.params.id
    books  = books.filter(x => x.id != id);
    res.send('Deleted');
};
export const updateBook = (req,res) => {
    const id = req.params.id
    const book = books.find(x=>x.id === id)

    const {title, authors,volumes} = req.body
    book.title = title
    book.authors = authors
    book.volumes = volumes
    res.send('Updated');
};