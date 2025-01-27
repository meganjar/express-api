const express = require('express');

// Middleware
    //body parser
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.listen(port, () => {

    console.log(`Server running at http://localhost:${port}`);
    
    });

    app.get('/dates', (req, res) => {

        res.send('Hello, Express!');
        
        });

        app.use(bodyParser.json()); 
        app.use(bodyParser.urlencoded({ extended: true })); 

// set view engine to pug
app.set('view engine', 'pug');