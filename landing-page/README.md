# Landing Page Project

## Table of Contents

* [Instructions](#instructions)
* [Development](#Development)
* [ES6] (#ES6)
## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

## Development

The dynamic Website was developed over a week. First of all the a for loop was developed to add several sections off content to the html-code.
After this in the CSS-File a hover effect was depeloped for the navigation. Furthermore the scrolldown-function was added to the js-file.
At least a nested for loop was created, to highlight the <li> elements of the navigation-list, when the viewport was close to the next section.

## ES6

The scrolldown-function was build with a for loop and the scrollIntoView-method. First of all, the elements with "a href" were choose by the querySelector method.
by the var targe, the "a href" elements were transerfed to the for function as an Array. When an element passed the for loop, a function with the ScrollintoView-method was activated.

To highlight the active sections, a nested for loop was builded. When the viewport exactly touches the section, the .active class was added to the <li> element. 
When the viewport left the section, the .active class was removed. To know, when the viewport touches the section, the method getBoundingClientRect was used. 

To active as much sections as desired to the html-file, a for loop was used. To get access to the differen elements, the methods getElementByID, getElementsByClass,
getElementsByTag and QuerySelector were used.  