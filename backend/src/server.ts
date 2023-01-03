require('dotenv').config();

const express = require('express');

// express app
const app = express();

// middleware
app.use((req: any, res: any, next: any) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.get('/', (req: any, res: any) => {
    res.json({mssg: 'hello world!'});
})

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT);
})
