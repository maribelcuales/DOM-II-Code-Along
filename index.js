/////   DOM II  /////
// By Grabriel Cabrejas 


/* 
// Chrome can make events: 
- click, double click, scroll, load, etc. 

// When a user interacts on a page, hundreds of events are being triggered. 

// Project: DOM II
- https://github.com/maribelcuales/DOM-II-Project

// Events
- When we click(e.g) the home nav link, there's just one target.  
- The target is the innermost thing which we clicked 
- NOTE: AN EVENT HAS ONE TARGET  
*/ 


/////   Event Listener    /////

// .addEventListener() 
// - is a method which we can invoke on document, window, HTML elements 

// Register events/functionalities to happen later

// addEventListener works on elements, document, and window

/*
/// Chrome on event listeners (e.g click) ///
- Chrome knows when the click happens 
- It invokes the eventListener
- It injects into the eventListener as the argument of the function injects all kinds of information about the event that fired (e.g type, etc.)
*/ 

function clickEventHandler(event) {
	console.log(event.type + '!!!!!!!!!!!!!!!!');
	console.log(event.target);  
}


// using camelCase id as variable in the code 
// to work on the home link 
/*
homeLink.addEventListener(
	'click', // string with the name of the event 
	() => {		// cb 
		// things we want happening when this 
		// link gets clicked 
		console.log('The link got clicked');
	}
)
*/

homeLink.addEventListener('click', clickEventHandler);




