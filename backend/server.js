import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import cors from 'cors';
dotenv.config();
import productRoutes from './routes/productRoutes.js';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import cookieParser from 'cookie-parser';
const PORT=process.env.PORT || 5000;



connectDb(); //Connect to MongoDB


const app=express();
// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({origin:"http://localhost:3000/",credentials:true}));

// Cookie Parser
app.use(cookieParser());





app.get('/',(req,res)=>{
    res.send('API is running...');
})

app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes);
app.use('/api/orders',orderRoutes);
app.use(notFound);
app.use(errorHandler);


app.listen(PORT,()=>{
    console.log("Server Is Running on Port :"+PORT);
})