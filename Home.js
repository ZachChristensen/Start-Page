var notesElement = document.getElementById("notes");

$( document ).ready(function() {
    notesElement.value = localStorage.getItem('note');
    console.log( "ready!" );
});

$(window).on("beforeunload", function() { 
    localStorage.setItem('note', notesElement.value);
    
});

var link1 = document.getElementById("link1");
link1.innerHTML = "4chan /m/";
link1.href = "http://boards.4chan.org/m/";
 
var link2 = document.getElementById("link2");
link2.innerHTML = "Godzilla Guide";
link2.href = "file:///C:/Users/Zach/Pictures/Guides/1399743712041.jpg";
 
var link3 = document.getElementById("link3");
link3.innerHTML = "4chan /a/";
link3.href = "http://boards.4chan.org/a/";
 
var link4 = document.getElementById("link4");
link4.innerHTML = "8chan /a/";
link4.href = "http://8ch.net/a/";
 
var link5 = document.getElementById("link5");
link5.innerHTML = "GundamGuy";
link5.href = "http://gundamguy.blogspot.co.nz/";
 
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
link10.innerHTML = "BakaBT";
link10.href = "http://bakabt.me/";
 
var link11 = document.getElementById("link11");
link11.innerHTML = "Weather";
link11.href = "http://www.metservice.com/towns-cities/christchurch/christchurch";
 
var link12 = document.getElementById("link12");
link12.innerHTML = "Nyaa.se";
link12.href = "http://nyaa.se/";
 
var link13 = document.getElementById("link13");
link13.innerHTML = "MyAnimeList";
link13.href = "http://myanimelist.net/panel.php";

var link14 = document.getElementById("link14");
link14.innerHTML = "R/a/dio";
link14.href = "https://r-a-d.io/";

var link15 = document.getElementById("link15");
link15.innerHTML = "fufufu";
link15.href = "https://fufufu.moe/a/";
