require('dotenv').config();
import express from 'express';
import Sequelize from './db';
import cors from 'cors';
import mainRouter from './routes';

//

const PORT: number = parseInt(<string>process.env.PORT) || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('./api', mainRouter);

const start = async()=>{
    try{
        await Sequelize.authenticate();
        await Sequelize.sync();
        app.listen(PORT, ()=>{
            console.log(`server has been started on port ${PORT}`);
        })
    }   
    catch(e){
        console.log(e);
    }
}


start();