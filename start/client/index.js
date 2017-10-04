const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");

mapboxgl.accessToken = 'pk.eyJ1IjoibWJldGFuY2VzODA1IiwiYSI6ImNqOGJxZHBqbjAwcGoyd3JsNDZjNmx4OXMifQ.wibZM1AN3lX4l73TVhxybg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activities", [-74.009, 40.705]);
marker.addTo(map);
let attractions = {}

fetch('/api/')
.then(result => result.json())
.then(data => {
  var selection = ['hotels', 'restaurants', 'activities']

  selection.forEach((element) => {
    var parentElement = document.getElementById(element+"-choices")
    data[element].forEach((child) => {
      var childElement = document.createElement('option')
      childElement.text = child.name
      parentElement.appendChild(childElement)
      childElement.setAttributes = child.id
    })
  })

  // var parentHotel = document.getElementById('hotels-choices')
  // for(var i = 0; i < data.hotels.length; i++){
  //   var childHotel = document.createElement('option')
  //   childHotel.text = data.hotels[i].name
  //   parentHotel.appendChild(childHotel)
  //   childHotel.setAttribute = data.hotels[i].id
  // }
  // var parentRestaurant = document.getElementById("restaurants-choices");
  // for (var i = 0; i < data.restaurants.length; i++){
  //   var childRestaurant = document.createElement('option')
  //   parentRestaurant.append(childRestaurant)
  //   childRestaurant.text = data.restaurants[i].name;
  //   childRestaurant.setAttribute = data.restaurants[i].id
  // }
  //
  // var parentActivity = document.getElementById("activities-choices");
  // for (var i = 0; i < data.activities.length; i++) {
  //   var childActivity = document.createElement('option');
  //   parentActivity.append(childActivity);
  //   childActivity.text = data.activities[i].name;
  //   childActivity.setAttribute = data.activities[i].id
  // }

  attractions.hotels = data.hotels
  attractions.restaurants = data.restaurants
  attractions.activites = data.activities
})
.catch(console.error)

var hotelElement = document.getElementById("hotels-add")
var restaurantElement = document.getElementById("restaurants-add")
var activitiesElement = document.getElementById("activities-add")

hotelElement.addEventListener("click", function(){
  var hotelSelect = document.getElementById("hotels-choices").value
  var hotelPanel = document.getElementById('hotels-list')
  var selectedHotel = document.createElement('li')
  selectedHotel.innerHTML = hotelSelect
  hotelPanel.append(selectedHotel)

  for(var i = 0; i < attractions.hotels.length; i++){
    var test = attractions.hotels[i].name.indexOf(hotelSelect)
    console.log(test)
  }

  // console.log(attractions.hotels[0].name)
  // attractions.hotels.find(function(hotelSelect){
    //
    // console.log(attractions.hotels.name)
    // return attractions.hotels.name == hotelSelect
  // })
})
restaurantElement.addEventListener("click", function(){
  var restaurantSelect = document.getElementById("restaurants-choices").value
  var restaurantPanel = document.getElementById('restaurants-list')
  var selectedRestaurant = document.createElement('li')
  selectedRestaurant.innerHTML = restaurantSelect
  restaurantPanel.append(selectedRestaurant)
})


activitiesElement.addEventListener("click", function(){
  var activitySelect = document.getElementById("activities-choices").value
  var activityPanel = document.getElementById('activities-list')
  var selectedActivity = document.createElement('li')
  selectedActivity.innerHTML = activitySelect
  activityPanel.append(selectedActivity)
})
