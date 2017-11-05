var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.get('/api/products', function(req, res) {
  return res.json({
        name: "New Product",
        id: "prodID",
        details: 'This a test product'
    });
});

app.listen(port);

console.log('RESTful API server started on: ' + port);
