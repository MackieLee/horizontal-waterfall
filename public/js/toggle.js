var nav = $(".nav-nav");
var con = $(".container");
var hamburger = $(".hamburger");

hamburger.click(function(){
    con.toggleClass("con-hide");
    nav.toggleClass("nav-hide");
});