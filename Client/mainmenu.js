//Controlling the background images on the main page:
let picArray = ["Vids/anime-girl-lying-on-the-roof-watching-the-aurora-in-the-snow-moewalls-com.mp4", 
                "Vids/japanese-lanterns-street-moewalls-com.mp4", 
                "Vids/anime-girl-and-cat-watching-rain-moewalls-com.mp4",
                "Vids/anime-girl-evening-sun-moewalls-com.mp4",
                "Vids/lofi-anime-girl-watching-the-rain-with-cat-moewalls-com.mp4",
                "Vids/lofi-girl-watching-sunset-moewalls-com.mp4",
                "Vids/Lofi-hip-hop-radio-Nighttime-study-Official-Chillhop-Music-wallpaper.mp4",
                "Vids/lonely-lofi-boy-aesthetic-moewalls-com.mp4"];

const random = Math.floor(Math.random() * picArray.length);

var video = document.getElementById('background-vids');
var source = document.createElement('source');

source.setAttribute('src', picArray[random]);
source.setAttribute('type', 'video/mp4');

video.appendChild(source);
video.play();

var userLoginScreen = document.getElementById('user-query');
userLoginScreen.showModal();