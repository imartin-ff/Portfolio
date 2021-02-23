$(document).ready(function(){
  var sBars = document.querySelectorAll(".skills__bar");
  var menuBtn = $("#menu-btn");


  sBars.forEach(function(item){
    if(item.hasAttribute("data-percent")){
      item.style.width = item.dataset.percent + "%";
    }
  })


  menuBtn.click(function(){
    $(".menu").toggleClass("menu--active");
    $(".menu-wrapper").toggleClass("menu-wrapper--active");
  })


  $('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
  });

  var element = $('.back-to-top');
    $(window).scroll(function(){
        element['fade'+ ($(this).scrollTop() > 1000 ? 'In': 'Out')](500);
    });

})
