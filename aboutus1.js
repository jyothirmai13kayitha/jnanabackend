require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.send('please login at Jnana')
})

app.get('/aboutus', (req, res) => {
  res.send('<h1>This is our About us Page</h1>')
})

app.get('/help', (req, res) => {
  res.send('<h1>Welcome to our Help page</h1>')
})


app.get('/Paintbrush',(req, res) =>{
  res.send('<h1>Paintbrush<h1>')
})

app.get('/AddtoCart',(req, res) =>{
  res.send('<h1>AddtoCart<h1>')
})

app.get('/books',(req, res) =>{
  res.send('<h1>books<h1>')
})

app.get('/canvas',(req, res) =>{
  res.send('<h1>canvas<h1>')
})

app.get('/colours',(req, res) =>{
  res.send('<h1>colours<h1>')
})

app.get('/diary',(req, res) =>{
  res.send('<h1>diary<h1>')
})

app.get('/stickers',(req, res) =>{
  res.send('<h1>stickers<h1>')
})

app.get('/highlighter',(req, res) =>{
  res.send('<h1>highlighter<h1>')
})

app.get('/Giftbox',(req, res) =>{
  res.send('<h1>Giftbox<h1>')
})

app.get('/WrappingPaper',(req, res) =>{
  res.send('<h1>WrappingPaper<h1>')
})

app.get('/Ribbon',(req, res) =>{
  res.send('<h1>Ribbon<h1>')
})

app.get('/EducationalBook',(req, res) =>{
  res.send('<h1>EducationalBook<h1>')
})

app.get('/Novel',(req, res) =>{
  res.send('<h1>Novel<h1>')
})

app.get('/Dictionary',(req, res) =>{
  res.send('<h1>Dictionary<h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})