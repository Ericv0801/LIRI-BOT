# prinify

## Overview

LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

## Features

 * Using axios, the user can use the Bands in Town API to retrieve the dates and locations for an artists upcoming concerts.
<img width="610" alt="concert-this" src="https://user-images.githubusercontent.com/53976941/69199526-3c717800-0b06-11ea-8d04-b31a4440e782.png">

 * Using the Spotify API, the usier can type in a song and find out the artist, a spotify link to the song, and the name of the album the song was from. 
 <img width="632" alt="spotify-this-song(input)" src="https://user-images.githubusercontent.com/53976941/69199554-4e531b00-0b06-11ea-8cb7-f49a7bdc0b32.png">
 
 * Using Spotify API, if no song is provided then your program will default to "The Sign" by Ace of Base.
 
 <img width="685" alt="spotify-this-song(no user input)" src="https://user-images.githubusercontent.com/53976941/69199631-8fe3c600-0b06-11ea-8dca-ff6398778b1c.png">



 *  Using the OMDB API, the user can find out when a movie came out, the country it was produced in, the plot, and its main actors. 
 
 <img width="1133" alt="movie-this (input)" src="https://user-images.githubusercontent.com/53976941/69199660-a722b380-0b06-11ea-839b-285a04adb04c.png">
 
 Using OMDB API If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
 
 <img width="1136" alt="movie-this(no user input)" src="https://user-images.githubusercontent.com/53976941/69199729-de916000-0b06-11ea-98da-8363f736b601.png">



 * Lastly, if the user uses the do-what-it-says command Liri will use the fs Node package, take the text inside of random.txt and then use it to call one of LIRI's commands.
 
 <img width="632" alt="do-what-it-says" src="https://user-images.githubusercontent.com/53976941/69199743-ed781280-0b06-11ea-93cd-33496b97c97c.png">


