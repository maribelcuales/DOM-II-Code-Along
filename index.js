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

/*
document.querySelector('nav').addEventListener('click', () => {
	console.log('The nav got clicked');
})
*/

document.querySelector('nav').addEventListener('click', clickEventHandler);


/*
document.querySelector('header').addEventListener('click', () => {
	console.log('The header got clicked'); 
})
*/

document.querySelector('header').addEventListener('click', clickEventHandler);


/*
document.body.addEventListener('click', (stuff) => {
	console.log(stuff); 
	console.log('the body of the page got clicked');
})
*/

document.body.addEventListener('click', clickEventHandler);


/*
document.addEventListener('click', (event) => {
	console.log('You clicked on the document');
})
*/

document.addEventListener('click', clickEventHandler);

/*
window.addEventListener('click', (event) => {
	console.log('You clicked on the window'); 
})
*/

window.addEventListener('click', clickEventHandler);


/////   CAPTURE PHASE   /////

// Win > Doc > HTML > body > header > nav > a
// - the phase where the event travels through the DOM starting at the very top (window) all the way down to the target (a)
// - no listerners are executed 
// - the event just travels down the DOM all the way to the anchor tag 


/////   TARGET PHASE    /////
// - when the event reaches the target = the event listener/listeners on the target fires up! 

/////   BUBBLER PHASE   /////
// - the event will start traveling up the DOM all the way back the way it came tripping all the wires 
// - the event BUBBLES UP  

// Interview: What is the BUBBLING PHASE? 
// - "Code registers event handlers(e.g click handlers). Then comes the user with a mouse and clicks on a thing, an event object gets created by chrome containing all the information about the event including the target which is the innermost thing that got clicked. This object enters the DOM starting at the top and travels all the way down to the target or the innermost thing that got clicked (e.g button).This is the CAPTURE PHASE. Once it reaches the taret, the event listener/s on the button fires and then we start tripping wires (TARGET PHASE). We start going back up trippping wires if there are any at every step all the way back. This phase where the event goes back up the DOM tripping wires that is the BUBBLING PHASE."
