//sanity check
console.log("linked")

//wait for the page to load
window.onload = function() {
  //grab the btn
  var submitButton = document.getElementById("share-btn");
  //create an event that fires on the `submit` event
  submitButton.addEventListener("submit", function(event) {
    //prevent the default behavior of the form (which refreshs the page)
    event.preventDefault();
    console.log('HELLO!'); 
    //log the thing the event propegated from to the console
    console.log(event.target); 
  });
}; 

/*

    // Get text field input input
    var input = document.getElementById('inputField').value;
    check(input);
    alert('inputField'.value); 
  });

  function check (input) {
    if (input) {
      // Reset the textfield
      document.getElementById('inputField').value = '';

      // Create a new li object
      var newListItem = document.createElement('li');

      // Place the stored text field info into it's innerHTML
      newListItem.innerHTML = input;

      // Capture immediate child node of the ul
      var firstChild = document.getElementById('blogPosts').children[0];

      // Append first child to the new li
      var parentNode = document.getElementById('mBlogPosts');
      parentNode.insertBefore(newListItem, firstChild);
    }
  }
};*/