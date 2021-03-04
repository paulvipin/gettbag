const express = require('express');
const app=express();

app.use(express.static('public'));

app.set('view engine','ejs');

app.get('/tacos',(req,res) => {
    res.render('home')
})

app.post('/tacos',(req,res) => {
    res.render('home')
})

app.get('/cats', (req,res)=> {
    const cats = ['blue', 'red', 'billi'];
    res.render('cats', {cats})
})

app.get('/',(req,res) => {
    res.render('home')
})

app.get('/r/:subreddit',(req,res) => {
  const  {subreddit}=req.params;
  res.render('subreddit', {subreddit});
})

app.get('/random',(req,res) => {
    const num = Math.ceil(Math.random()* 10)
    res.render('random', {num})
})

app.listen(3000, () =>{
    console.log('Listeig')
}) 