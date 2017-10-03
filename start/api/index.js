const express = require("express");
const router = express.Router();
const Hotel = require("../models").Hotel;
const Restaurant = require("../models").Restaurant;
const Activity = require("../models").Activity;
const Place = require("../models").Place;

var allAttractions = {};

const hotels = Hotel.findAll()
.then(function(hotels) {
  return hotels;
}
const restaurants = Restaurant.findAll()
.then(function(restaurants) {
  return restaurants;
}
const activities = Activity.findAll()
.then(function(activities) {
  return activities;
}
Promise.all([hotels,restaurants,activities])

//   allAttractions.hotels = hotels;
//   return Restaurant.findAll();
// })
// .then(function(restaurants) {
//   allAttractions.restaurants = restaurants;
//   return Activity.findAll();
// })
// .then(function(activities) {
//   allAttractions.activities = activities;
// })
// .then(function() {
//   res.json(allAttractions);
// })
// .catch(next);

router.use('/activity', activity);
