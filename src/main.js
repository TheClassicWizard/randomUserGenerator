var button = document.querySelector(".btn");
var buttonHome = document.querySelector("#btn2");
var nameProf = document.querySelector(".name");
var image = document.querySelector("#image");
var username = document.querySelector(".username");
var email = document.querySelector(".email");
var phone = document.querySelector(".phone");
var cell = document.querySelector(".mobile");
var dob = document.querySelector(".dob");
var city = document.querySelector(".city");
var url = "https://randomuser.me/api/";
var rowAnimate = document.getElementsByClassName("row")[0];
var x = document.getElementById("myAudio"); 
var enterButton = document.querySelector(".tik");
var hof = document.querySelector(".hof");
var musicOn = document.querySelector(".musicOn");
var musicOff = document.querySelector(".musicOff");

var houseInfo = "The House of Black and White is a temple in Braavos dedicated to the Many-Faced God. It serves as the headquarters of the guild of religious assassins known as the <strong>Faceless Men</strong>."; 
var houseInfo2 = "<br>It sits alone on a small island in the lagoon of Braavos. Although it can be reached by boat or bridge from other locations in the city, the island is usually deserted.";

var rules = [
    "<strong>They kill in inconspicuous and clever ways.</strong> The Faceless Men don't like to call attention to themselves or their murders. They offer what is known as a <strong>precise</strong> killing, with no other casualties, that might look like an accident more often than not. They are believed to most commonly use a poison called <strong>The Strangler</strong>.",
    "<strong>They serve the Many-Faced God and do not decide who dies.</strong> The Faceless Men see themselves as the servants of their god. They are merely acting in accordance with the will of this higher power.",
    "<strong>They have left their identities behind.</strong> This is one of the core principles of a Faceless Man. You must give over everything to the Many-Faced God.",
    "<strong>They are not supposed to know their victims.</strong> The Faceless Men must let go of their personal vendettas, and they're not supposed to have previously met their victims. This seems to align with the principles of any assassin. It is a contractual kill, it is not personal. The murderer must never have an emotional stake in it."
]


function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
}

// window.onload = function() {
//     var context = new AudioContext();
//   }
document.addEventListener('click', musicPlay);
function musicPlay() {
    playAudio();
    document.removeEventListener('click', musicPlay);
}


fetch(url)
.then(function(request){
    if(!request.ok){
        throw Error(request.status);
    }
    return request.json();
})
.then(function(response){
    var data = response.results[0];
    //rowAnimate.style.webkitAnimationPlayState = "running";
    rowAnimate.classList.add("myAnimate");
    nameProf.innerHTML = data.name.title + " " + data.name.first + " " + data.name.last;
    city.innerHTML = data.location.city + ", " + data.location.state + ", " + data.location.country;
    username.innerHTML = data.login.username;
    email.innerHTML = data.email;
    dob.innerHTML = data.dob.date.slice(0, 10);
    phone.innerHTML = data.phone;
    cell.innerHTML = data.cell;
    image.src = data.picture.large;
    setTimeout(function(){
        //rowAnimate.style.webkitAnimationPlayState = "paused";
        rowAnimate.classList.remove("myAnimate");
        rowAnimate.style.opacity = 1;
    }, 900);
    
})
.catch(function(error){
    alert(error);
});

button.addEventListener("click", function(){

    fetch(url)
    .then(function(request){
        if(!request.ok){
            throw Error(request.status);
        }
        return request.json();
    })
    .then(function(response){
        var data = response.results[0];
        //rowAnimate.style.webkitAnimationPlayState = "running";
        rowAnimate.classList.add("myAnimate");
        setTimeout(function(){
            nameProf.innerHTML = data.name.title + " " + data.name.first + " " + data.name.last;
            city.innerHTML = data.location.city + ", " + data.location.state + ", " + data.location.country;
            username.innerHTML = data.login.username;
            email.innerHTML = data.email;
            dob.innerHTML = data.dob.date.slice(0, 10);
            phone.innerHTML = data.phone;
            cell.innerHTML = data.cell;
            image.src = data.picture.large;
        }, 400);
        setTimeout(function(){
            //rowAnimate.style.webkitAnimationPlayState = "paused";
            rowAnimate.classList.remove("myAnimate");
            rowAnimate.style.opacity = 1;
        }, 900);
        
    })
    .catch(function(error){
        alert(error);
    });
})

enterButton.addEventListener("click", function(){
    $(".openingCover").fadeTo(1500, 0, function(){
        musicOn.style.opacity = 1;
        musicOff.style.opacity = 0.5;
        $(".openingCover").css("display", "none");
        $(".introductory").fadeTo(1000, 1);
    });  
})

var rotate = 0;

$('.expand').click(function() {
    $(".extraInfo").slideToggle(1200);
    $('.fa-arrow-circle-down').animate(
      { deg: rotate + 180 },
      {
        duration: 1200,
        step: function(now) {
          rotate = now;
          $(this).css({ transform: 'rotate(' + now + 'deg)' });
        }
      }
    );
});


hof.addEventListener("click", function(){
$(".introductory").fadeTo(1500, 0, function(){
    $(".introductory").css("display", "none");
    $(".container").css("display", "flex");
    $(".container").fadeTo(1000, 1);
}); 
})

buttonHome.addEventListener("click", function(){
$(".container").fadeTo(1500, 0, function(){
    $(".container").css("display", "none");
    $(".introductory").fadeTo(1000, 1);
});
})

musicOn.addEventListener("click", function(){
    x.muted = false;
    musicOn.style.opacity = 1;
    musicOff.style.opacity = 0.5;
})

musicOff.addEventListener("click", function(){
    x.muted = true;
    musicOn.style.opacity = 0.5;
    musicOff.style.opacity = 1;
})