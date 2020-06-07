# Project-3-Interactive-Form
 
 
 Interact with different entry fields for a mock up tech conference.

This project displays an interactive form in order to register for a "Full Stack Programming Conference. This form incorporates html, css, and javascript in order to manipulate form fields entered by a user.

This project relies heavily on using javascript to select current fields, set form listeners, and check and verify user input data.

When the page reloads and is first loaded the curser shows in the Name field. I select the name id, set it equal to the variable nameEntry, and add the .focus() method on nameEntry.

When the Job Role of "other" is chosen from the drop down menu a textfield pops up and allows the user to enter in their custom current role. I do this by declaring two global variables, titleList, and otherRole. I create an event listener to listen for a change in job role, and set it equal to other selection. If other is selected the textfield box appears since it was selected with the id: other-title.

Next, I needed to create an element to add to the option list. The text reads "Please select a t shirt theme. I append this element to the option node, and insertbefore the color id. I iterate through the coloroptions to make sure a theme is first selected. Once a theme is selected the colors for that theme are shown. *I add an eventlistener to check for the current theme and if that theme is selected then the color options are shown.

When a user register for activities the total cost for the workshops/conferences are displayed at the bottom. Any conflicting workshops are highlighted in red, are disabled, and unable to be selected.

In payment field, I iterate through payment methods and check if credit card is selected. If credit card, then credit card number field, zip code, and cvv fields appear. If other payment types are selected the appropriate fields are "inherited" from the payment ID of the html document.

I use regex patterns to determine if the correct amounts and appropriate total number of letter characters and digits are entered for email, credit card, zip code, and cvv fields. If the fields have incorrect values I highlight the field in red, if the fields are correct the fields are highlighted with a green border.
