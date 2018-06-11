var express = require('express');
var router = express.Router();
var models = require('../models')

router.get('/books', function(req, res, next) {
  models.books.findAll({
  }).then(books => {
    res.send(books);
  }).catch(() => {
    res.status(500).send('There was an error connecting to the database')
  })
});

router.get('/verses', function(req, res, next) {
  models.verses.findAll({
  }).then(verses => {
    res.send(verses);
  }).catch(() => {
    res.status(500).send('There was an error connecting to the database')
  })
});

router.get('/chapters', function(req, res, next) {
  models.chapters.findAll({
  }).then(chapters => {
    res.send(chapters);
  }).catch(() => {
    res.status(500).send('There was an error connecting to the database')
  })
});

router.get('/volumes', function(req, res, next) {
  models.volumes.findAll({
  }).then(volumes => {
    res.send(volumes);
  }).catch(() => {
    res.status(500).send('There was an error connecting to the database')
  })
});


module.exports = router
