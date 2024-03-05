const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs')

app.get('/', (req, res) => {
    let sitename = "Nike"
    let searchtext = "SearchNow"
  res.render("index" , {sitename:sitename , searchtext:searchtext})
})

app.get('/blog/:slug', (req, res) => {
    let blogtitle = "Nike why and when?"
    let blogcontent = "It is very Knowing Brand"
  res.render("blogpost" , {blogtitle:blogtitle ,blogcontent:blogcontent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})