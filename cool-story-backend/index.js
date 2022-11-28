//packages
const express = require("express");
const corsMiddleWare = require("cors");

//routers
const authRouter = require("./routers/auth");
const spacesRouter = require('./routers/space')
const storiesRouter = require('./routers/story')
const middleware = require('./auth/middleware')
const userRouter = require('./routers/user')

//constants
const { PORT } = require("./config/constants");

// Create an express app
const app = express();


// CORS middleware:  * Since our api is hosted on a different domain than our client
// we are are doing "Cross Origin Resource Sharing" (cors)
// Cross origin resource sharing is disabled by express by default
app.use(corsMiddleWare());

// express.json() to be able to read request bodies of JSON requests a.k.a. body-parser
app.use(express.json());


//routes
app.use("/auth", authRouter );
app.use('/spaces',spacesRouter)
app.use('/stories',storiesRouter)
app.use("/user",middleware, userRouter)

//start listening
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});