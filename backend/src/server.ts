import dotenv from 'dotenv'
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import questsRouter from './routes/quests';
import cors from 'cors';

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.use((req: any, res: any, next: any) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('', questsRouter)

// connect to DB
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI as string)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error);
    })