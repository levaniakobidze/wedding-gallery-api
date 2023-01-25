import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/photos.js';
import bodyParser from 'body-parser';

const app = express();


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('/',postRoutes)



const DB_URL = 'mongodb+srv://Levaniakobidze:iakobidze123@cluster0.cqyrecr.mongodb.net/?retryWrites=true&w=majority'
const PORT  =  process.env.PORT || 5000


mongoose.set('strictQuery', true)
mongoose.connect(DB_URL)
.then(() => app.listen(PORT,() => console.log(`Server running on port : ${PORT}`)))
.catch((error) => console.log(`${error} did not connect`));
