const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config()
const {errHandler} = require('./middlewares/errMiddleware');
const {connectDB} = require('./config/db');

connectDB()

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors({
    origin:"http://localhost:3000"
}))

app.use("/api/goals" , require('./routes/goRoutes'))
app.use("/api/user" , require('./routes/userRoutes'))
app.use(errHandler)

const port = process.env.PORT || 8080;

app.listen(port , ()=> console.log(`Running on ${port}`))