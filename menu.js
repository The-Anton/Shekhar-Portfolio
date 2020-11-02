$(function() {  
    $(".sub-menu-link").click(function(e) {
      e.preventDefault();    
      $(".sub-menu-overlay").toggleClass("open");
      $(".sub-menu").toggleClass("open");
      $("body").toggleClass("cover");
    });	
  });