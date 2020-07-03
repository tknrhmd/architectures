import express from "express";
import * as routes from "./routes";

// Create a new express app instance
const app: express.Application = express();

// CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
});

// Routes
routes.register(app);

// Listening
app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});