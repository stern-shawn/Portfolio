// Scrolling!
$(document).ready(function() {
  // Scroll only when user clicks a link contained in the navbar
  $(".navbar a").on('click', function(event) {
    event.preventDefault();

    // Grab the hash element of the incoming href,
    // ie returns #heading from <a href="#heading"...
    var hash = this.hash;

    // Animate using the 'scrollTop' property. IE. set scrollTop to the
    // offset of the element in 'hash', take 700ms, use 'swing, and have a
    // callback function for logging/debug...
    $('html, body').animate({
      scrollTop: $(hash).offset().top }, 700, 'swing', function() {
        //console.log("Scrolled to: " + $(hash).offset().top);
    });
  });
});
