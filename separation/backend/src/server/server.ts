import express from 'express';

// Create a new express app instance
const app: express.Application = express();

// CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
});

// Body parser, URL encode
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing
const router: express.Router = express.Router();
router.get('/', (req:express.Request, res:express.Response) => {
    res.send('Hello World!');
});
// GET
router.get('/api/getData', (req:express.Request, res:express.Response) => {
    res.send(req.query);
});
// POST
router.post('/api/postData', (req:express.Request, res:express.Response) => {
    res.send(req.body);
});
app.use(router);

// Listening
app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});