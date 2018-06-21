// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-res").on("click", function(event) {
      var id = $(this).data("id");
      var newChange = $(this).data("newstate");
  
      var newObjectState = {
        devoured : newChange
      };
  
      // Send the PUT request.
      $.ajax("/api/cats/" + id, {
        type: "PUT",
        data: newObjectState
      }).then(
        function() {
          console.log("changed sleep to", newChange);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burgername: $("#ca").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/order", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new cat");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  