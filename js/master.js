function include(file) { 
  
  var script  = document.createElement('script'); 
  script.src  = file; 
  script.type = 'text/javascript'; 
  script.defer = true; 
  
  document.getElementsByTagName('head').item(0).appendChild(script); 
  
} 
  
/* Include Many js files */
include('https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js'); 
include('https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js'); 
  

$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('header').addClass('fixed-header'); 
    }
    else {
        $('header').removeClass('fixed-header'); 
    }
});

 $(".see-more a").click(function(){
  $(".more_live_projects").show();
  $(".see-more").hide();
});

$(".close_call_btn_caller").click(function(){
  $(".modal_caller").removeClass('active');
});
$(".btn_caller").click(function(){
  $(".modal_caller").addClass('active');
});
  

///  DROPDOWN MENU   ////
$(".nav li").hover(function() {
  var isHovered = $(this).is(":hover");
  if (isHovered) {
    $(this).children(".submenu").stop().slideDown(300);
  } else {
    $(this).children(".submenu").stop().slideUp(300);
  }
});

///  DROPDOWN MENU   ////