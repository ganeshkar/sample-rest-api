var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.get('/api/products', function(req, res) {
  res.status(200).send({name: "TEST PRODUCT"})
});

app.listen(port);

console.log('RESTful API server started on: ' + port);
