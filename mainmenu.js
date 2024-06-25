let picArray = ["Vids/anime-girl-lying-on-the-roof-watching-the-aurora-in-the-snow-moewalls-com.mp4", 
                "Vids/japanese-lanterns-street-moewalls-com.mp4", 
                "Vids/anime-girl-and-cat-watching-rain-moewalls-com.mp4"];

const random = Math.floor(Math.random() * picArray.length);

var video = document.getElementById('background-vids');
var source = document.createElement('source');

source.setAttribute('src', picArray[random]);
source.setAttribute('type', 'video/mp4');

video.appendChild(source);
video.play();