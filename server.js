var bodyParser = require('body-parser');
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/api/products', function(req, res) {
  return res.json({
        name: "New Product",
        id: "prodID",
        details: 'This a test product'
    });
});

app.post('/api/products', function(req, res) {
  console.log(req.body);
  return res.json({
        "status":"Request submitted sucessfully"
    });
});

app.listen(port);

console.log('RESTful API server started on: ' + port);
