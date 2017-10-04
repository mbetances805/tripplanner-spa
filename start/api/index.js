const express = require("express");
const router = express.Router();
const Hotel = require("../models").Hotel;
const Restaurant = require("../models").Restaurant;
const Activity = require("../models").Activity;
const Place = require("../models").Place;

const allAttractions = {};

const hotels = Hotel.findAll({include:[{ all: true }]})
.then(function(hotelList) {
  allAttractions.hotels = hotelList
});
const restaurants = Restaurant.findAll({include:[{ all: true }]})
.then(function(restaurants) {
  allAttractions.restaurants = restaurants;
});
const activities = Activity.findAll({include:[{ all: true }]})
.then(function(activities) {
  allAttractions.activities = activities;
});
Promise.all([hotels,restaurants,activities])
.then(function(allAttraction){
  return allAttractions
})

router.get('/api', function(req, res, next){
  console.log("HI")
  res.send(allAttractions)
});

module.exports = router;
