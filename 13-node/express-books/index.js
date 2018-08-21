const express = require('express');
const axios = require('axios');

const app = express();
app.set('view engine', 'ejs')


app.use(express.static('public'))

app.get('/', (req, res) => {
  console.log(`Serving ${ req.method } /`)
  res.render('pages/home')
});

app.get('/search', (req, res) => {
  const title = req.query.title;
  const booksURL = `https://www.googleapis.com/books/v1/volumes?q=${title}`
  
  // request the URL
  axios.get(booksURL)
    .then((r) => {
      res.render("pages/search", {
        volumeInfo: r.data.items[0].volumeInfo
      });
    })
    .catch((e) => {
      res.end('whoops');
      console.log(e)
    })

});

app.listen(8888); // Check heroku docs to find right port for prod
console.log('listening on:   http://localhost:8888/ ')