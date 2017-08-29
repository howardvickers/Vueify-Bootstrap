var express = require('express')

var app = express()


app.use(express.static('./public'))
app.get('/', function(req, res){
    res.sendFile('./index.html', {root: './public'})
})


app.listen(8080)
