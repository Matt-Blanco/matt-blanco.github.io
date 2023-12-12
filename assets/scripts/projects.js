$(document).ready(function() {
  $('.card').on({
    mouseenter: function(){
      $(this).removeClass('faded');
      $('.card').not(this).addClass('faded');
    },
    mouseleave: function(){
      $('.card').removeClass('faded');
    }
  });
})