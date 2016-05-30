$(document).ready(function() {

  $("#project-btn").on("click", function() {
    goToByScroll("Projects");
  })

  $("#aboutme-btn").on("click", function(){
    goToByScroll("AboutMe");
  })

  $("#contact-btn").on("click", function(){
    goToByScroll("Contact");
  })

})


function goToByScroll(id) {
  $('html,body').animate({
      scrollTop: $("#" + id).offset().top
    },
    'slow');
}
