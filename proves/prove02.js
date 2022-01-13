const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

const users = [];

app.engine('hbs', expressHbs({ defaultLayout: 'main-layout', extname: 'hbs' }));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  res.render('index', { pageTitle: 'Add User' });
});

app.get('/users', (req, res, next) => {
  res.render('users', {
    pageTitle: 'User',
    users: users,
    hasUsers: users.length > 0
  });
});

app.post('/add-user', (req, res, next) => {
  users.push({ name: req.body.username });
  res.redirect('/users');
});

app.listen(3000);




// const path = require('path');

// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// app.use(bodyParser.urlencoded({extended:false}));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(adminRoutes);
// app.use(shopRoutes);

// app.use((req, res, next) => {
//     res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
// });

// app.listen(3000);


// app.use((req, res, next) => {
//     console.log('Learning middleware!');
//     next(); // Alows the request to continute to the next middleware in line
// });

// app.use((req, res, next) => {
//     console.log('This is fun!');
//     res.send('<h1>Hello from Express.js!</h1>');
// });

