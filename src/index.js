const path = require('path')
const express = require('express')
const morgan = require('morgan')
// import { engine } from 'express-handlebars';
const handlebars = require('express-handlebars')
const app = express()
const port = 3000


app.use(morgan('combined'))

app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views',path.join(__dirname,'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})