$(document).ready( () => {

  // Fill in modal
  $(".articleTitle").on("click", (event) => {

  });

// CREATE POST
  $("#create-post").on("submit", (event) => {

    console.log("IM IN SUBMIT");
    event.preventDefault();

    let newPost = {
      title: $("#title-input").val().trim(),
      message: $("#message-input").val().trim(),
      imageURL: $("#url-input").val().trim()
    };

    $.ajax("api/posts", {
      type: "POST",
      data: newPost
    }).then (
      () => {
        console.log("Created new post!");
        // Reload the page to get the updated list
        location.reload();
      });
  });

});
