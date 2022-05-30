import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

export const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: 'pass',
    database: 'test_db'
});

