$(document).ready(function(){
  $(window).scroll(function(){
      if(this.scrollY > 20){
        $('.navbar').addClass("colorSticky");
      }
      else {
        $('.navbar').removeClass("colorSticky");
      };
  });

  $('.navbar .menu li a').click(function(){
    $('html').css("scrollBehavior", "smooth");
  });

  $('.menu-bar').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-bar img').toggleClass("active");
  });

});