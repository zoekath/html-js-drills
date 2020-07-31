// Helpful Resources:
// https://www.w3schools.com/js/js_htmldom.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

/*****************************
 * Section 1 - Personal Info *
 *****************************
 *
 * Description:
 *   Change the code below to display some (static) information
 *   when a user clicks the "Show Info" button.
 *
 * Resources:
 *   (See below for drill-specific resources)
 */

function addName() {
  console.log('addName() ran');

  // See:
  // - https://www.digitalocean.com/community/tutorials/js-innertext-and-innerhtml
  // - https://www.w3schools.com/jsref/prop_node_innertext.asp

  let nameElement = document.querySelector('#name');
  nameElement.innerText = 'Jody!';
}

function addFavoriteThings() {
  console.log('Called addFavoriteThings()');
    let favthingsElement = document.querySelector('#favthings');

    let sleep = document.createElement('li');
    sleep.textContent = 'sleeping';
    favthingsElement.appendChild(sleep);

    let food = document. createElement('li');
    food.textContent = 'food';
    favthingsElement.appendChild(food);

    let cuddles = document.createElement('li');
    cuddles.textContent = 'cuddles';
    favthingsElement.appendChild(cuddles);

    let walks = document.createElement('li');
    walks.textContent = 'walks';
    favthingsElement.appendChild(walks);

  // 1. Get a reference to <ul id="favthings">
  // 2. Create a few list items representing your favorite things
  // 3. Add them to append them to favthings

  // See:
  //   - https://htmldog.com/guides/javascript/advanced/creatingelements/
  //   - https://www.javascripttutorial.net/javascript-dom/javascript-createelement/
  //   - https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
}

function replaceImage() {
  console.log('Called replaceImage()');

    let newDoggo = document.querySelector('#picture');
    newDoggo.setAttribute('src', 'http://buzzsharer.com/wp-content/uploads/2015/04/Black-puppy-lab.jpg');
  // Change the puppy picture to a picture of your choosing

  // See:
  // - https://www.tutorialrepublic.com/javascript-tutorial/javascript-dom-get-set-attributes.php
  // - https://www.w3schools.com/jsref/met_element_setattribute.asp
}

function changeCodeStatus() {
  console.log('Called changeCodeStatus()');

  let status = document.querySelector('#codestatus');
  status.innerHTML = '<img src="https://media.tenor.com/images/1cc2bf095b801521ac22418c216d50f6/tenor.gif">';
  // status = document.createElement('img');
  //status.setAttribute('src','https://media.tenor.com/images/1cc2bf095b801521ac22418c216d50f6/tenor.gif');
  // codestatus.appendChild(status);
  // This just creates an image and adds the image below the text, but does NOT replace it

  // 1. Get a reference to <div id="codestatus">
  // 2. Create image element containing a sweet ol' meme
  // 3. Replace text in codestatus w/ image
}

// Get a reference to the button w/ id="show-info-button"
let showInfoButton = document.querySelector('#show-info-button');

// Do something when showInfoButton is clicked
showInfoButton.addEventListener('click', function() {
  console.log('Clicked "Show Info" button');

  // Implement addName, addFavoriteThings, replaceImage, changeCodeStatus above

  addName();
  addFavoriteThings();
  replaceImage();
  changeCodeStatus();
});

/**********************************
 * Section 2 - Reading From Forms *
 **********************************
 *
 * Description:
 *   Change the code below to populate the section on the right-hand
 *   side of the page with the data entered into the form.
 *
 */

// Get a reference to form w/ id="information-form"
let informationForm = document.querySelector('#information-form');

// Do something when form is submitted
informationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // prevents page from opening to a link on click
    console.log('Form submitted');
    //let fname = document.querySelector('#fname').value; brauch man nicht wirklich, ist nur dar zum Referencing
    //let lname = document.querySelector('#lname').value; dasselbe für hier
    document.querySelector('#firstname').innerHTML = document.querySelector('#fname').value;
    document.querySelector('#lastname').innerHTML = document.querySelector('#lname').value;
    document.querySelector ('#chosencar').innerHTML = document.querySelector('#cars').value;

    let iceCreamY = document.querySelector('#icecreamyes').checked;
    let iceCreamN = document.querySelector('#icecreamno').checked;

    //could have also just written the strings 'Yes' or 'No' inside .append()
    if (iceCreamY) {
      document.querySelector('#icecreamstatus').append(document.querySelector('#icecreamyes').value);
    };

    if (iceCreamN) {
      document.querySelector('#icecreamstatus').append(document.querySelector('#icecreamno').value);
    };

    let isHuman = document.querySelector('#humancheck').checked;
    let isCoder = document.querySelector('#codercheck').checked;

    if (isHuman) {
      document.querySelector('#checks').append('This person is a human.');
    }
    if (isCoder) {
      document.querySelector('#checks').append('This person is a coder.');
    }

  // Your job:
  //   1. Get information typed into the form"
  //   2. Display that info in "Display that info here" section

  // Google things like:
  //   javascript form element get values
});

//first try:
//function(event) doomed(){
  //var fname = document.querySelector('fname');
  //var firstname = document.querySelector('firstname');
  //  firstname.innerHTML = fname;
  //let jsfirstname = document.querySelector("firstname");
  //jsfirstname.textContent = John;
  //fristname.appendChild(John)
//}
/*************************************
 * Section 3 - Clicks and Keypresses *
 *************************************
 *
 * Description:
 *   Make the buttons in section 3 of index.html behave as described below.
 *
 */

// When a user clicks "Click me to log something to the console"
// then log something to the console

// Fill in ________ to get a reference to the correct button on the page
let consoleLogButton = document.querySelector('#console-log-button');

// Log something when that button is clicked
consoleLogButton.addEventListener('click', function() {
  console.log('Someone dared to click this button?');
  document.querySelector('#logText').innerHTML='All I do is log log log no matter what.';
});

let makeBlueButton = document.querySelector('#make-blue-button');
makeBlueButton.addEventListener('click', function() {
  document.querySelector('#colorText').style.color='blue';
  // Your job:
  //  1. When a user clicks "Change the text to the right blue"
  //  2. Change the text in <div id="colorText">...</div> to blue
});

// Adding an event listener to document means the "keydown" event
// can happen anywhere on the page and we'll respond.
document.addEventListener('keydown', function() {
  // This is called whenever a user pressed any key.
  if (event.code == 'KeyR'){
    document.querySelector('#colorText').style.color = 'red';
  }

  if (event.code >= 'Digit0' && event.code <= 'Digit9' ){
    alert('You have entered a digit. Digits are too uncool for Jody. Please enter a valid character. (e.g. valid characters are characters that could spell my name)')
  };
  // Your job:
  //  1. Turn colorText red whenever a user presses the 'r' key
  //  2. Add your own keybind somewhere

  // See:
  // - https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
  // - https://javascript.info/keyboard-events
});



/*************************************
 * Section 4 - TODO List             *
 *************************************
 *
 * Description:
 *   Build a simple TODO list.
 *
 *   For this you will need to have a listener on the submit form and add
 *   anything entered into the text box to the to do list on the right side.
 *
 * Bonus:
 *   Add a delete button next to each item and allow it to delete the item
 *   it is next to.
 */

// Your code goes here
let addItems = document.querySelector('.form');

addItems.addEventListener('submit', function(){
  event.preventDefault(); // Terra added this in section 2, go look there if confused
  console.log('Item added'); //to keep track of it

  let newToDoItem = document.createElement('li');
  newToDoItem.textContent = document.querySelector('#toDoItem').value;

  let toDoList = document.querySelector('#todos');
  toDoList.appendChild(newToDoItem);

  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  newToDoItem.appendChild(deleteButton);

  deleteButton.addEventListener('click', function(){
    console.log('item removed');
    newToDoItem.remove();
    deleteButton.remove();
  })
});



/****************************************
 * Section 5 - setInterval + setTimeout *
 ****************************************
 *
 * Description:
 *   Use the setInterval function to create a counter that counts every
 *   second on the page (Should look kind of like a stopwatch counting up).
 *   Display this in the span with the id of 'seconds'.
 *
 *   Then use the SetTimeout function to display something (your choice) to the
 *   div with the id 'delayedDisplay' after 5 seconds have passed.
 *
 * Resources:
 *   - https://javascript.info/settimeout-setinterval
 *
 */

// Your code goes here
let counter = 0;
let secondTimer = setInterval( function(){
    counter = counter + 1;
    let counting = document.querySelector('#seconds');
    counting.innerHTML = counter + " " + 'seconds';
  }, 1000,);

let delayedTimeout = setTimeout(function(){
    console.log('you did it!');
    document.querySelector('#delayedDisplay').innerHTML = 'Whoa what is happening here?';
    document.querySelector('#delayedDisplay').style.color = 'yellow';
    document.querySelector('#delayedDisplay').style.fontWeight = 'bold';
}, 5000)
/****************************************
 * Section 6 - Your own section!        *
 ****************************************
 *
 * Description:
 *   Add your own section to this page with its own event listeners.
 *   Use a JavaScript event listener that is new to you.
 *   Here is a handy list: https://developer.mozilla.org/en-US/docs/Web/Events
 *   Click on each event listener to see an example of how it is used
 *
 */

// Your code goes here

let startAnimation = document.querySelector('#startAnimation');
let animation1 = document.querySelector('#animation');
let stopThis = document.querySelector('#stopAnimation');

startAnimation.addEventListener('click', function(){
  animation1.innerHTML = "WUHUUU!!!"
  animation1.style.animation = "yeah 5s infinite";
  console.log('Start Button clicked');
  stopThis.style.display = 'inline';
})

stopThis.addEventListener('click', function(){
  console.log('Stop Button Clicked');
  animation1.style.animation = 'none';
  stopThis.style.display = 'none';
})
