// Checks to make sure page is loaded 
$(document).ready(function(){
	// Defines variables for all the items we are going to call 
	var $blogPoster = $(".blog-poster"),
		$form = $blogPoster.find(".blog-submit-form"),
		$submit = $form.find("button"),
		$blogList = $blogPoster.find(".blog-item-list ul"),
		// Make a little close button 
		closeButton = "<a href='#' class='close-button'>&#x2717;</a>",
		// Make a list item, with a close button and an opening P tag
		opl = "<li>" + closeButton + " <h2>",
		// Close the P tag and list item 
		cpl = "</h2><hr></li>";


	// On click of close button, on event
	$blogList.on("click", ".close-button", function(e){
		// Define this
		var $thisLink = $(this),
			// Go to the parent of this 
			thisLinksParent = $thisLink.parent();
		// and remove the parent 
		thisLinksParent.remove();
	});

	// On form submit event
	$form.on("submit", function(event){
		// Prevent default behavior (new page load)
		event.preventDefault();
		// Define this 
		var $thisForm = $(this),
			// Find input 
			$inputBlog = $thisForm.find(".input-blog-post"),
			// Get the value from input
			blogItem = $inputBlog.val();
		// Get blogList and append with opl, blogItm and, cpl actions from above
		$blogList.prepend(opl + blogItem  + cpl);
	});
});