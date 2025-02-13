$(document).ready(function () {
  $(".drop-menu").on("click", function(){
    $(".menu-wrap").addClass("open");
    $("html, body").addClass("overflow");
  })
  $(".close-menu").on("click", function(){
    $(".menu-wrap").removeClass("open");
    $("html, body").removeClass("overflow");
  })
});
