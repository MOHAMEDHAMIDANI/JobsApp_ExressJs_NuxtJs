require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const helmet = require('helmet')
const  rateLimit  = require('express-rate-limit')
const xXssProtection = require("x-xss-protection");
const cors = require('cors')
// connect db 
const connectDB = require('./db/connect')

// get routers
const AuthRoute = require('./routes/auth')
const JobsRoute = require('./routes/jobs')

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const authenticatedMiddleWare = require('./middleware/authentication')
// app.set('trust proxy' , 1)
// app.use(rateLimit({
// 	windowMs: 15 * 60 * 1000, 
// 	limit: 100, 
// 	standardHeaders: 'draft-7', 
// 	legacyHeaders: false, 
// }));
app.use(xXssProtection());
app.use(express.json());
app.use(helmet());
app.use(cors());




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
