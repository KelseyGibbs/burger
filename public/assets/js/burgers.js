$(function() {
  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
      name: $("#burger").val().trim(),
      devoured: 0
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: true
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".delete").on("click", function(event) {
    var id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        location.reload();
      }
    );
  });

});