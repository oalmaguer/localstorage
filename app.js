const express = require('express');
const path = require('path');
var app = express();


var PORT = process.env.PORT || 3000;
app.get('/', function(req,res) {
    console.log(__dirname + '/index.html');
    res.sendFile(path.join(__dirname + '/index.html'));
})


app.listen(PORT, function(req, res) {
    console.log('listening on port http://localhost:'+PORT);
})
