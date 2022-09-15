const path = require('path')
const express = require('express')
const morgan = require('morgan')
// import { engine } from 'express-handlebars';
const handlebars = require('express-handlebars')
const app = express()
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname,'public')));

app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());

app.use(morgan('combined'))

app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views',path.join(__dirname,'resources/views'));

route(app);

// app.get('/', (req, res) => {
//   res.render('home');
// });

// app.get('/news', (req, res) => {
//   res.render('news');
// });

// app.get('/search', (req, res) => {
//   // console.log(req.query.q);
//   res.render('search');
// });

// app.post('/search', (req, res) => {
//   console.log(req.body);
//   res.send('');
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})