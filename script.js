// Helpful Resources:
// https://www.w3schools.com/js/js_htmldom.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

/**************************************************** SECTION 1 ******************************************************************************************************/
/*****Step 1:  Use Javascript to replace the word name in <span id="name">Name</span> with your name. */
function addName(){
    //your code goes here
    console.log("addName() ran");
}

/*****Step 2:  Use Javascript to add to the <ul id="favthings"> a list of your favorite things  */
function addFavoriteThings(){
    //your code goes here
    console.log("addFavoriteThings() ran");
}

/******Step 3:  Change the picture of the puppy to a picture of yourself */
function replaceImage(){
    //your code goes here
    console.log("replaceImage() ran");
}

/*****Step 4:  Change the <div id="codestatus"> to say "I do like to code" AND create and append an image of some code to that div*/
//Creating DOM Elements: https://www.w3schools.com/jsref/met_document_createelement.asp
function changeCodeStatus(){
    //your code goes here
    console.log("changeCodeStatus() ran");

}


/**************************************************** SECTION 2 ******************************************************************************************************/

/******** On click of the submit button get the data entered and display it under "And Display that info Here" on the page  */
document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();
    console.log("Form submitted");
    //Your code goes here
});





/**************************************************** SECTION 3 ******************************************************************************************************/
/*****Create an event listener for the button that says "Click me to log something to the console" and have it log something to the console */

//Your code goes here




/*****Create an event listener for the button that says "Change the text to the right blue" and have it add the class "blue" to the text on the right */

//Your code goes here



/*****Create an event listener that observes keys being pressed and logs them to the console (Hint:  This will need an event listener that listens to the entire page  */

//Your code goes here




/**************************************************** SECTION 4 ******************************************************************************************************/


/*****Build a todo list.  For this you will need to have a listener on the submit form and add anything entered into the text box to the to do list on the right side.
 *    Bonus:  Add a delete button next to each item and allow it to delete the item it is next to.
 */







/**************************************************** Finally ******************************************************************************************************/

/***** Add your own section to this app.  Use an javascript event listener that is new to you.  Here is a handy list: https://developer.mozilla.org/en-US/docs/Web/Events
 * Click on each event listener to see an example of how it is used
 * 
  */




/**************************************************** BONUS ******************************************************************************************************/
/*****Create a button and have that button play a sound or song using JavaScript.  Also create a button to stop that sound */



//This is an event listener that triggers a function to run after the page is finished loading
document.addEventListener("DOMContentLoaded", function(){
    addName();
    addFavoriteThings();
    replaceImage();
    changeCodeStatus();
});