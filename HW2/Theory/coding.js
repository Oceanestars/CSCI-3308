function display2_1() {
  var myanswer  = "My answer goes here: console.log(saiyan.dragonball) outputs undefined because there is nothing in the array saiyan called dragonball, console.log(null == undefined) outputs true because == is an equal to, console.log(null === undefined) outputs false because === is an equal value and an equal type so it would be true if it was === null" // TODO 2.1: Fill in Answer here after the :
  document.getElementById("21answer").innerHTML = myanswer; // Do not change
  var saiyan = {name: "sdf", age: 40};
  //Test
  // console.log(saiyan.dragonball); undefined
  // console.log(null == undefined); true
  // console.log(null === undefined); false
}
function display2_2() {
  var myanswer  = "My answer goes here: In the following code, the code would give you an error because x is not declared(no int x;) and we alse have the 'use strict' in our code. If you remove 'use strict' then the code will allow the error." // TODO 2.2: Fill in Answer here
  document.getElementById("22answer").innerHTML = myanswer; // Do not change
}

function display2_5() {
  var myanswer  = "My answer goes here: We are able to see children that we are not able to view on the HTML because by using the .children of the ID div_1134(which gets the html element inside that div and those are considered the children), Javascript can grab the id's children which are wrapped by div_1134. " // TODO 2.5: Fill in Answer here
  document.getElementById("25answer").innerHTML = myanswer; // Do not change
}

function countDiv() { // Do not add or remove lines to this function
    var divs = document.getElementsByTagName("div"); // TODO: Question 2.3: Use the document Object to get the number of divs in the HTML page. Replace dummyMethod with the correct one.
    alert("Number of divs in this page is: " + divs.length); // Do not change
}

function makeOrange() { // Do not add or remove lines to this function
    var narutos = document.getElementsByName("naruto"); // TODO: Question 2.4: Use the document Object to get all tags named "naruto" in the HTML page. Replace dummyMethod with the correct one.
    for(var i=0; i< narutos.length; i++) { // Do not change
        narutos[i].style.color = 'orange'; // Do not change
    }
}

function getChildrenTags() { // Do not add or remove lines to this function
  var children = document.getElementById("div_1134").children; // TODO: Question 2.5 Use the appropriate function to get all the children of a div named 'div_1134'
  var tagNames = ""; // Do not change
  for (var i = 0; i < children.length; i++) {// Do not change
    console.log(children[i].tagName);// Do not change
    tagNames += children[i].tagName +", " ;// Do not change
  }// Do not change
  alert(children.length); // Do not change
  alert("The tags that I found are: " + tagNames);// Do not change
}
