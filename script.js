// Helpful Resources:
// https://www.w3schools.com/js/js_htmldom.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector


/*****Step 1:  Use Javascript to replace the word name in <span id="name">Name</span> with your name. */
function addName(){
    //your code goes here

}

/*****Step 2:  Use Javascript to add to the <ul id="favthings"> a list of your favorite things  */
function addFavoriteThings(){
    //your code goes here
}

/******Step 3:  Change the picture of the puppy to a picture of yourself */
function replaceImage(){
    //your code goes here
}

/*****Step 4:  Change the <div id="codestatus"> to say "I do like to code" AND create and append an image of some code to that div*/
//Creating DOM Elements: https://www.w3schools.com/jsref/met_document_createelement.asp
function changeCodeStatus(){
    //your code goes here

}

/******** On click of the submit button get the data entered and display it under "And Display that info Here" on the page  */
document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();
    console.log("Form submitted");
    //Your code goes here
});


/*****Create an event listener for the button that says "Click me to log something to the console" and have it log something to the console */

//Your code goes here




/*****Create an event listener for the button that says "Change the text to the right blue" and have it add the class "blue" to the text on the right */

//Your code goes here



/*****Create an event listener that observes keys being pressed and logs them to the console */

//Your code goes here



//This is an event listener that triggers a function to run after the page is finished loading
document.addEventListener("DOMContentLoaded", function(){
    addName();
    addFavoriteThings();
    replaceImage();
    changeCodeStatus();
});