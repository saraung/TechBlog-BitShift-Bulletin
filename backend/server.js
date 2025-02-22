import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import  dotenv from 'dotenv';

import userRoutes from './routes/userRoutes.js'

dotenv.config();

const PORT=process.env.PORT;

connectDB()

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to BitShift Bulletin ')
})

app.use('/api/users',userRoutes)




app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
