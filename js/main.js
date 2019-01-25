/* Examing the document object */

// URL CHECKING
//  console.log(document.URL);

// Title of the page
// console.log(document.title);


// changing the title
// document.title = "123";

// DOCTYPE 
// console.log(document.doctype);

// Head and body 
// console.log(document.head);
// console.log(document.body);

// Selecting everything in the DOM
// console.log(document.all);

// selecting a specific element in the DOM
// console.log(document.all[10]);

// We can change things based on the selector
// document.all[10].textCotent = "Hello";

// Getting all the forms on the page
// console.log(document.forms);


// Getting all the links on the page
// console.log(document.links);

// Selecting a specific form item
// console.log(document.forms[0]);

// Selecting image
// console.log(document.images);

// Few differnet selecting methods we've for querying the DOM

//  First one is: getElementById()
// console.log(document.getElementById("header1-title"));


// Saving into variable 
// var header_title = document.getElementById("header1-title");

// for changing text cotent
// header_title.textContent = "123";

// In Addition to text content we've innerText
// header_title.innerText = "GoodBye";


/*
    The difference between textContent() and innerText() is that one of them
    pays attention to styling.
    textContent won't cares about the styling! wherease the innerText() would do cares.
*/


// innerHTML
// header_title.innerHTML = "<h1>Good Morning</h1>";

/*
    innerHtml() put what you specified inside the element! you may check it when you inspect it!
*/

// Changing Styling!
// header_title.style.color = "red";
// header_title.style.borderBottom = "solid 3px #333";

// Another Selector: getElementsByClassName()

// Getting all the list items
// var items = document.getElementsByClassName("list-group-item");

// console.log(items);

// Selecting the item 2
// items[1].textContent = "Hello 2";

// Changing item 2 font weight into bold!
// items[1].style.fontWeight = "bold";


// Changing item 1 background color to yellow
// items[1].style.backgroundColor = "yellow";


// Changing background color of all the list items color

// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = "#ccc";
// }

// 3rd Selector: getElementsByTagName
// var li = document.getElementsByTagName("li");

// console.log(li);

// Selecting the item 2
// li[1].textContent = "Hello 2";

// Changing item 2 font weight into bold!
// li[1].style.fontWeight = "bold";


// Changing item 1 background color to yellow
// li[1].style.backgroundColor = "yellow";


// Changing background color of all the list li color
// for (var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = "#ccc";
// }


// 4th Selector: querySelector();
var header = document.querySelector("#main-header");

// Changing header's border-bottom
// header.style.borderBottom = "solid 3px #333";

// Selecting inputs
// var input = document.querySelector("input");
// input.value = "hello world";
// var submit = document.querySelector("input[type=submit]");
// submit.value = "send";


// List item Selection
// var item = document.querySelector(".list-group-item");
// item.style.color = "red";


// document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "orange";

// 5th selector: querySelectorAll();
// var titles = document.querySelectorAll(".title");
// console.log(titles);
// titles[0].textContent = "Hello";

// Selecting Odd items from a list of items and styling them!
// var odd = document.querySelectorAll("li:nth-child(odd)");


// for (var i = 0; i < odd.length; i++)
//     odd[i].style.backgroundColor = "#ccc";

// Selecting even items from a list of group and styling them
// var even = document.querySelectorAll("li:nth-child(even)");

// for (var i = 0; i < even.length; i++)
//     even[i].style.backgroundColor = "#ccc";



