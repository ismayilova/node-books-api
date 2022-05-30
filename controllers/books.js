import { v4 as uuid } from 'uuid';
import chalk from 'chalk';
let books = [];


 export const getBooks = (req,res)=>{
    res.send(books)
};

export const addBook = (req,res)=>{

    const book = req.body
    books.push({...book, id: uuid()})
    res.status(201);
    res.send('Created');
};

export const getBook = (req,res) => {
    const {id} = req.params
    res.send(books.find(book => book.id === id));
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