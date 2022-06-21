const express = require('express');
const { productRouter } = require('./routes/productRouter');
const app = express();
const port = 3017;

//middleware
app.use((req, res, next) => {
    console.log('first middleware');
    next(); //to hit second middleware
});

app.use((req, res, next) => {
    console.log('second middleware');
    next(); //to hit third middleware
});


app.use((req, res, next) => {
    console.log('third middleware');
});

app.use(productRouter);





//get routes
app.get('/', (req, res) => {
    console.log('Hey the server was hit')
});

app.get('/route2', (req, res) => {
    console.log('Hey route 2 was hit')
});

app.get('/route3', (req, res) => {
    console.log('Hey route 3 was hit')
});


app.listen(port, () => {
    console.log(`Our backend is listening to ${port}`);
});