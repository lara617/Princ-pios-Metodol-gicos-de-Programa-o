document.addEventListener('DOMContentLoaded', function () {
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;


    
    modeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
    });
});


// script.js
$(document).ready(function() {
    $(".hover-zoom").mouseenter(function() {
      $(this).css("transform", "scale(1.2) rotate(10deg)");
    }).mouseleave(function() {
      $(this).css("transform", "scale(1) rotate(0deg)");
    });
  });
  

  //$(document).ready(function() {
    // Adiciona a classe 'show' quando a seção entra no viewport
    //$(window).scroll(function() {
     // $('.fade').each(function() {
       // var elementBottom = $(this).offset().top + $(this).outerHeight();
       // var viewportBottom = $(window).scrollTop() + $(window).height();
       // if (elementBottom < viewportBottom) {
      //    $(this).addClass('show');
     //   }
  //    });
    //});
  //});
  