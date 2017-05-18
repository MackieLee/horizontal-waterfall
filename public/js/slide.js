var htmlobj = $.ajax({url:"/get-all-photos",async:false});
var obj;
var page = window.location.search.split("&")[0].slice(6);
var photo = window.location.search.split("&")[1].slice(6);
if(page == "photography"){
	obj = htmlobj.responseJSON.人物;
}else if(page == "nature"){
	obj = htmlobj.responseJSON.自然;
}else{
	obj = htmlobj.responseJSON.旅行;
}
$.each(obj[photo], function(key,val) {
	$(".slide").append("<li><img src="+val+"><li>");
});

$(function() {
    $('.banner').unslider();
});

$('.banner').unslider({
	speed: 500,               //  The speed to animate each slide (in milliseconds)
	delay: 3000,              //  The delay between slide animations (in milliseconds)
	complete: function() {},  //  A function that gets called after every slide animation
	keys: true,               //  Enable keyboard (left, right) arrow shortcuts
	dots: true,               //  Display dot navigation
	fluid: false,              //  Support responsive design. May break non-responsive designs
});