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

  var videos = document.querySelectorAll('video.lazy-video');
  if (!videos.length) return;

  if (!('IntersectionObserver' in window)) {
    videos.forEach(function(v){
      v.src = v.dataset.src;
      v.play().catch(function(){});
    });
    return;
  }

  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      var v = entry.target;
      if (entry.isIntersecting) {
        if (!v.src) v.src = v.dataset.src;
        v.play().catch(function(){});
      } else {
        v.pause();
      }
    });
  }, { rootMargin: '200px 0px', threshold: 0.1 });

  videos.forEach(function(v){ observer.observe(v); });
});
