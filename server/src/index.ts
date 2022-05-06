import express from "express";
import CONST from './constants'
import rout  from "./routers/auth";

const  app = express();
app.use('/api', rout);

const PORT = CONST.PORT || 5000;

const appStart = () => {
    try{
        app.listen(PORT, ()=>{
            console.log(`server is running on http://localhost:${PORT}`)
        })
    }
    catch (e) {
        console.log(e);
    }
}

export default appStart;