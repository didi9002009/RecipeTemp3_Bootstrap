/* eslint-env jquery */
$(document).ready(function() {
  // reipples
  $("#header,.info").ripples({
    resolution: 200,
    perturbance: 0.04
  });

  // magnific popup
  $(".parent-container").magnificPopup({
    delegate: "a", //child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true
    }
    // other options
  });
});
