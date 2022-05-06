import { query } from 'express'
const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres', 
    host: 'localhost',
    database: 'pern_auth',
    password: '12345',
    port: 5432,
})


module.exports = {
    query: (text:any, params:any) =>{ 
        return pool.query(text, params);
    }
}

