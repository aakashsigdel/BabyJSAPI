const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Comments = require('./api/models/commentListModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CommentsDB');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

const routes = require('./api/routes/commentListRoutes');
routes(app);

app.listen(port);

console.log('BabyJS comment api started on PORT: ', port);
