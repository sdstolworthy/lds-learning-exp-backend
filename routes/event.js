var express = require('express');
var router = express.Router();
var moment = require('moment')
var { Event } = require('../models')

router.get('/', (req, res) => {
  try {
    Event.findAll().then(events => {
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.send(events)
    }).catch(error => {
      throw Error(error)
    })
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
})

router.get('/:eventId', function (req, res) {
  try {
    const eventId = parseInt(req.params.eventId, 10)
    if (!eventId) {
      throw  Error(`Unable to process integer with value ${req.params.eventId}`)
    }
    
    Event.findById(eventId).then(event => {
      res.send({event})
    }).catch(error => {
      throw Error(error)
    })
  } catch (e) {
    console.error(error)
    res.status(400).send(e)
  }
})

router.post('/', (req, res) => {
  try {
    Event.create({
      ...req.body,
      start: moment(req.body.start).toDate(),
      end: moment(req.body.end).toDate(),
      createdAt: new Date(),
      updatedAt: new Date()
    }).then(event => {
      res.status(200).send(event)
    })
    .catch(error => {
      throw Error(error)
    })
  } catch (e) {
    console.error(error)
    res.status(500).send(e)
  }
})


module.exports = router;
