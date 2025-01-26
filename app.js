const express = require('express');
const app = express();
const port = 8080;


app.listen(port, () => {

    console.log(`Server running at http://localhost:${port}`);
    
    });

    app.get('/', (req, res) => {

        res.send('Hello, Express!');
        
        });

// set view engine to pug
app.set('view engine', 'pug');