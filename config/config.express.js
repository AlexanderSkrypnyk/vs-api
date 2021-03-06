var bodyParser = require('body-parser');
var express = require('express');
module.exports = function (app) {
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());
  app.use(express.static('public'));
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
};