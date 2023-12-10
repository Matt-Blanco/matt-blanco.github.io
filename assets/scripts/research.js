$(document).ready(function() {
  $('.research').on({
    mouseenter: function(){
      $(this).removeClass('faded');
      $('.research').not(this).addClass('faded');
    },
    mouseleave: function(){
      $('.research').removeClass('faded');
    }
  });
})