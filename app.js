require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

// connect db 
const connectDB = require('./db/connect')

// get routers
const AuthRoute = require('./routes/auth')
const JobsRoute = require('./routes/jobs')



// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const authenticatedMiddleWare = require('./middleware/authentication')

app.use(express.json());

// extra packages

// routes
app.use('/JobsApi/auth',AuthRoute)
app.use('/JobsApi/jobs',authenticatedMiddleWare  ,JobsRoute)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const port = process.env.PORT || 3000;
const MongoURi = process.env.MongoURi
const start = async () => {
  try {
    await connectDB(MongoURi)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
