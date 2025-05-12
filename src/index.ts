import dotEnv from 'dotenv';
dotEnv.config();


import express from 'express';
import router from './routes/routes';

const app = express();
app.use(express.json());

app.use('/v1', router);

app.listen(process.env.PORT, ()=>{
    console.log('Listening on port')
})