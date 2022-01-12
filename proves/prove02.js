const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);


// app.use((req, res, next) => {
//     console.log('Learning middleware!');
//     next(); // Alows the request to continute to the next middleware in line
// });

// app.use((req, res, next) => {
//     console.log('This is fun!');
//     res.send('<h1>Hello from Express.js!</h1>');
// });

