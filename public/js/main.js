// Open "Create Post" modal
$("#submit-post-btn").on("click", () => {

  console.log("Clicked Me!");
  $('.longer.modal.createPost').modal('show');
});

// Open article in modal when user clicks
$(".articleTitle").on("click", () => {
  $('.longer.modal.viewArticle').modal('show');
});

// User modal
$("#manageUsers").on("click", () => {
  $('.longer.modal.modalUsers').modal('show');
});


// Dropdown
$(".compact.selection.dropdown").dropdown({});
