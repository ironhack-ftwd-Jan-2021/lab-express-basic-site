const express = require('express')
const app = express()

app.use(express.static('/public'))

// app.use(express.static(__dirname + "/public", {
//     index: false,
//     immutable: true,
//     cacheControl: true,
//     maxAge: "30d"
// }));

app.get('/', function (req, res) {
  console.log(`Hello from the browser`)

  res.sendFile(__dirname + '/public/views/home-page.html')
})

app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/public/views/about.html')
})

app.get('/work', function (req, res) {
    res.sendFile(__dirname + '/public/views/work.html')
})

app.get('/gallery', function (req, res) {
    res.sendFile(__dirname + '/public/views/gallery.html')
})

app.listen(5000, () => {
    console.log('Server listening')
})