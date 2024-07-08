$(document).ready(function() {
    console.log("Script loaded"); // Confirm script is loaded
  
    $(".nav-link").click(function() {
      console.log("Nav link clicked"); // Confirm click event is firing
  
      $(".nav-link").removeClass("active"); // Remove 'active' class from all links
      $(this).addClass("active"); // Add 'active' class to the clicked link
    });
  });
  