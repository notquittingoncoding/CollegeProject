require('dotenv').config();
require('express-async-errors');

//extra security packages
const helmet = require('helmet')
const cors = require('cors')

const express = require('express');
const app = express();


//middlewares
const notFoundMiddleware = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');

//database connection
const connectDb = require('./db/connect')

//router
const authRouter = require('./routes/auth')
const destinationRouter = require('./routes/destinations')
const reviewRouter = require('./routes/reviews')

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet())
app.use(cors())

//routes
app.use('/api/v1/destinations', destinationRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/reviews', reviewRouter)


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const port = process.env.PORT || 5000;

const start = async() => {
    try {
        await connectDb(process.env.MONGO_URI || "mongodb://localhost:27017/travellers-scout");
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();