
$(function() {
    $(".change-drink").on("click", function(event) {
      var id = $(this).data("id");
      var newDrink = $(this).data("newdrink");
  
      var newDrinkState = {
        drank: newDrink
      };
  
      // Send the PUT request.
      $.ajax("/api/wines/" + id, {
        type: "PUT",
        data: newDrinkState
      }).then(
        function() {
          console.log("changed drink to", newDrink);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newWine = {
        wine_name: $("#bu").val().trim(),
        drank: 0
      };
  
      // Send the POST request.
      $.ajax("/api/wines", {
        type: "POST",
        data: newWine
      }).then(
        function() {
          console.log("created new wine");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-wine").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/wines/" + id, {
        type: "DELETE",
      }).then(
        function() {
          console.log("deleted wine", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });