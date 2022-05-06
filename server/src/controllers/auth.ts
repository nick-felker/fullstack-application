const db = require('../db');
import query from "express";

const getUsers = async (req:any, res:any) => {
    try{
        const {rows} = await db.query('select * from users');
        console.log(rows);
    }
    catch (e){
        console.log(e);
    }
}


export default getUsers;