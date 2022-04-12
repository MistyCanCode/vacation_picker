# vacation_picker
User picks from 4 elements on the page to generate a random vacation based off that element


This SPA utilizes the webcams.travel api to fetch an array of webcams and their location info. Once the user clicks on the element on the page they want, the id of the button is sent to the js file as an event and that event variable is used to search for a category of locations from the webcams.travel api. Then a random number is generated between 1 and the length of the array that was returned. That number is then used as the index to grab specific information from the object returned.

App is finished and deployed to mistycancode-vacation-picker.netlify.app

Nice to have:
* A carousel of options
* * havent started this

* A booking feature
* * haven't started this yet either
