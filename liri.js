require("dotenv").config();
var moment = require('moment');
var fs=require("fs")
var omdb = require('omdb');
var axios = require("axios");
const keys = require("./key.js");
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);




var command=process.argv[2]
var userInput=process.argv.slice(3).join(" ")
console.log(userInput)
console.log(command)

if(command==="spotify-this-song"){
  spotifyFunction()
}
if(command==="concert-this"){
  bandsFunction()
}
if(command==="movie-this"){
  movieFunction()
}
if(command==="do-what-it-says"){
  readFunction()
}




function spotifyFunction(){
if(!userInput){
  userInput = "Ace of Base"


};

  spotify.search({ type: 'track', query: userInput })
  .then(function(data)
   {
  
    var data = data.tracks.items

    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    console.log("The artist of this song is: " + data[0].artists[0].name);
    console.log("The title of this song is: " + data[0].name);
    console.log("Give it a listen: " + data[0].external_urls.spotify);
    console.log("Its from the album: " +data[0].album.name);          
  })
}

function bandsFunction(){

  axios.get("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp").then(
  function(response) {
    for (var i = 0; i<response.data.length; i++) {
      console.log("======================================================================")
      console.log("The name of the venue is: " + response.data[i].venue.name);
      console.log("The location of the venue is: " + response.data[i].venue.city + ', ' + response.data[i].venue.region + ', ' + response.data[i].venue.country);
      console.log("The concert will be held on: " + (response.data[i].datetime))
      

       }
  })
}

function movieFunction(){
  if(!userInput){
    userInput = "Mr.Nobody" ;
    console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
    console.log("It's on Netflix!")
  
  
  };
  

  axios.get("http://www.omdbapi.com/?apikey=trilogy&t="+userInput)
  .then(
  function(response) {
    console.log("======================================================================")
    console.log("The title of the movie is: " +response.data.Title)
    console.log("This movie was released in: " +response.data.Year)
    console.log("The IMDB rating for this movie is: " +response.data.imdbRating)
    console.log("The Rotten Tomatoes rating for this movie is: " +response.data.Ratings[1].Value)
    console.log("The Country in which this movie was produced is: " +response.data.Country)
    console.log("The Language of this movie is: " +response.data.Language)
    console.log("The Plot of this movie is: " +response.data.Plot)
    console.log("The actors in this movie are " +response.data.Actors)

  });
}

function readFunction(){
  fs.readFile('random.txt', 'utf8', function (error, data) {
    console.log(data)
    
})

}




