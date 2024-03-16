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