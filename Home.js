//Written by Zach Christensen

//Notes
var notesElement = document.getElementById("notes");

$( document ).ready(function() {
    notesElement.value = localStorage.getItem('note');
    console.log( "ready!" );
});

$(window).on("beforeunload", function() { 
    localStorage.setItem('note', notesElement.value);
    
});


//Time
var timeElement = document.getElementById("time");
var timeElement2 = document.getElementById("time2");

var checkNumFormat = function (num) {
    return num > 9 ? "" + num: "0" + num;
};

var updateTime = function () {
    var dt = new Date(), time;
    if (dt.getHours() > 12){
        time = (dt.getHours()-12) + ":" + checkNumFormat(dt.getMinutes());
        timeElement2.innerHTML = "PM";
    }
    else{
        time = (dt.getHours()) + ":" + checkNumFormat(dt.getMinutes());
        timeElement2.innerHTML = "AM";
    }

    timeElement.innerHTML = time;
};

updateTime();
window.setInterval(function(){updateTime();}, 4000);

//Links
var link1 = document.getElementById("link1");
link1.innerHTML = "Google";
link1.href = "https://www.google.com/";
 
var link2 = document.getElementById("link2");
link2.innerHTML = "Godzilla Guide";
link2.href = "file:///C:/Users/Zach/Pictures/Guides/1399743712041.jpg";
 
var link3 = document.getElementById("link3");
link3.innerHTML = "Change links";
link3.href = "https://www.google.com/";

var link4 = document.getElementById("link4");
link4.innerHTML = "and names";
link4.href = "https://www.google.com/";
 
var link5 = document.getElementById("link5");
link5.innerHTML = "in .js file";
link5.href = "https://www.google.com/";
 
var link6 = document.getElementById("link6");
link6.innerHTML = "YouTube";
link6.href = "https://www.youtube.com/feed/subscriptions";
 
var link7 = document.getElementById("link7");
link7.innerHTML = "GMail";
link7.href = "https://mail.google.com/mail/u/0/#inbox";
 
var link8 = document.getElementById("link8");
link8.innerHTML = "Reddit";
link8.href = "https://www.reddit.com/";
 
var link9 = document.getElementById("link9");
link9.innerHTML = "Imgur";
link9.href = "https://imgur.com/";
 
var link10 = document.getElementById("link10");
link10.innerHTML = "Google";
link10.href = "https://www.google.com/";

var link11 = document.getElementById("link11");
link11.innerHTML = "site";
link11.href = "";
 
var link12 = document.getElementById("link12");
link12.innerHTML = "Google";
link12.href = "https://www.google.com/";
 
var link13 = document.getElementById("link13");
link13.innerHTML = "Google";
link13.href = "https://www.google.com/";

var link14 = document.getElementById("link14");
link14.innerHTML = "Google";
link14.href = "https://www.google.com/";

var link15 = document.getElementById("link15");
link15.innerHTML = "Google";
link15.href = "https://www.google.com/";
