import express from 'express';
import dotEnv from 'dotenv';
dotEnv.config();

import router from './routes/routes';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms')); 

app.use('/v1', router);

app.listen(process.env.PORT, ()=>{
    console.log('Listening on port');
}) 
