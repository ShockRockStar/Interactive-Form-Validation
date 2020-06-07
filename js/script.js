//Selected the 'name' ID within the HTML file and added the focus method to it.

const nameEntry = document.querySelector("#name");
nameEntry.focus();

//declare a global variable that retrieves the title id.
const titleList = document.getElementById("title");

//After creating the textbox in HTML now I selected the id in order to hide and display the box when other drop down selection is chosen.

const otherRole = document.getElementById("other-title");

//Hide the "other-role" text box
otherRole.style.display = "none";

//Added an event listener which will display the "other-role" textbox only if the "titleList" variable value is "other"

titleList.addEventListener("change", (e)=> {
    if(e.target.value === "other") {
        otherRole.style.display = "inherit";
    } else {
        otherRole.style.display = "none";
        }
}); 
/**********************
 * information for t-shirt
 *********************/


//Declaring 3 global variables for the function to hide the default colors dropdown until a design theme is chosen. 
const designOfShirt  = document.querySelector("#design");
const colorDropdown = document.querySelector("#color");
const colors = document.querySelector("#color option");

//this function hides all colors
function hideColors(){
    for(var i=0; i<colors.length; i++) {
        colors[i].style.display = "none";
    }
};

document.querySelector("#colors-js-puns").style.display= "none";
//When design is chosen show the Color field with text field of choose your t shirt theme
function defaultColors() {
    hideColors();

    const defaultColor = document.createElement("option");
    defaultColor.value = "defaultColor";
    defaultColor.textContent = "Choose your t-shirt theme!";
    defaultColor.selected = true;
    defaultColor.disabled = true;
    colorDropdown.appendChild(defaultColor);
}
defaultColors();

//show colors for js-puns design
function jsPunsTheme(){
    //hides all the colors
    hideColors();
    for(var i=0;i<colors.length;i++){
        if(i==0){
            colors[i].selected = true;
        };
        switch (colors[i].value) {
            case "cornflowerblue":
            case "darkslategrey":
            case "gold":
                colors[i].style.display = "inherit";
                break;
        }
    }
};
//show all colors for the heart js design 
function heartJS() {
    //hide all colors
    hideColors()
    for(var i=0;i<colors.length;i++){
        if(i==3) {
            colors[i].selected = true;
        };
        switch (colors[i].value) {
            case "tomato":
            case "steelblue":
            case "dimgrey":
                colors[i].style.disaply = "inherit";
                break;
        }
        }
    };
    designOfShirt.addEventListener("change", (e)=>{
        if(e.target.value == "default"){
            document.querySelector("#colors-js-puns").style.display = "none";
            hideColors();
            
        } else if(e.target.value == "js puns") {
            document.querySelector("#colors-js-puns").style.display = "inherit";
            jsPunsTheme();
        } else if (e.target.value == "heart js") {
            document.querySelector("#colors-js-puns").style.display = "inherit";
            heartJS();
        }
    });




 /*
  * Registering for Activities 
  */

  //Target checkboxes in the activities section
  
const checkboxes = document.querySelectorAll(".activities input");
let totalCost = 0;
let h2 = document.createElement("h2");
h2.innerHTML = `Total: $ ${totalCost}`;
let activitiesGroup = document.querySelector(".activities");
activitiesGroup.appendChild(h2);

//Check for any chagees with the activities checkbox
document.querySelector(".activities").addEventListener("change", (event)=>{
    //holds the current selected checkbox
    const selectedCheckbox = event.target;
    //Need to create a variable to contain the checkbox for the specific day and time
    const selectedCheckboxTime = selectedCheckbox.getAttribute("data-day-and-time");
    //Need to create a variable that will hold the value of the charge associated with the workshop
    const selectedCheckboxCost = selectedCheckbox.getAttribute("data-cost");

  if(selectedCheckbox.checked){
    totalCost += +parseInt(selectedCheckboxCost);
    h2.innerHTML = `Total: $ ${totalCost}`;
} else{
    totalCost -= +parseInt(selectedCheckboxCost);
    h2.innerHTML = `Total: $ ${totalCost}`;
}

    for(let i=0; i<checkboxes.length;i++){
        const selectedTime = checkboxes[i].getAttribute("data-day-and-time");
        if(selectedCheckboxTime == selectedTime && selectedCheckbox !== checkboxes[i]){
            if(selectedCheckbox.checked){
                checkboxes[i].disabled = true;
                checkboxes[i].parentNode.style.color = "red";               
            } else{
                checkboxes[i].disabled = false;
                checkboxes[i].parentNode.style.color = "";                
            }
        }
    };
});

/*
 * Payment Info
 */
//declar all types of payment variables
const paymentSelection = document.querySelector("#payment");
const payments = document.querySelectorAll("#payment option");
const creditCard = document.querySelector("#credit-card");
const paypal = document.querySelector("#paypal");
const bitcoin = document.querySelector("#bitcoin");


//if  credit card is selected show the credit card value



for(let i=0; i<payments.length; i++){
    if(payments[i].value == "select method"){
        payments[i].disabled = true;
    } else if(payments[i].value == "credit card"){
        payments[i].selected = true;
        creditCard.style.display = "inherit";
        paypal.style.display = "none";
        bitcoin.style.display = "none";
    }
}
let ccPayment = true;
  

    paymentSelection.addEventListener("change", (e)=>{
        
        if(e.target.value == "credit card"){
            creditCard.style.display = "inherit";
            paypal.style.display = "none";
            bitcoin.style.display = "none";
            ccPayment = true;
        } else if(e.target.value == "paypal"){
            creditCard.style.display = "none";
            paypal.style.display = "inherit";
            bitcoin.style.display = "none";
            ccPayment = false;
        } else if(e.target.value == "bitcoin"){
            creditCard.style.display = "none";
            paypal.style.display = "none";
            bitcoin.style.display = "inherit";
            ccPayment = false;

        }  
    });
    

    

/*****************
 * Form Validation
 ****************/

 let userNameValid = false;
 let emailValid = false;
 let validActivity = false;
 let cardNumberIsValid = false;
 let zipCodeValid = false;
 let cvvValid = false;
 let fieldset = document.getElementById("checks");
 let chargeFieldset = document.getElementById("checks2");
 let activityFieldset = document.getElementById("activities");

 //validate name

 const invalidName =  document.createElement("label");
 invalidName.classList.add("invalidName")
 fieldset.insertBefore(invalidName, fieldset.children[3]);
 invalidName.innerHTML = "Please enter a valid name.";
 invalidName.style.display = "none";

 function validateName(name){
     //this validation checkes for the first and last name
    return /^[A-Za-z]+\s[A-Za-z]+$/.test(name);
 };

 //Create event listeners (Name Event listener) 
nameEntry.addEventListener("blur", () => {
    let userName = nameEntry.value;

    if (validateName(userName)) {
        nameEntry.style.border = "3px solid green";
        nameEntry.style.color = "green";
        document.querySelectorAll('.invalidName');
        invalidName.style.display= "none";
        return validName = true;
    } else {
        nameEntry.style.border = '3px solid red';
        invalidName.style.color = "red";
        invalidName.style.display= "block";
        return validName = false;
    }
});

const invalidEmail =  document.createElement("label");
 invalidEmail.classList.add("invalidEmail");
 invalidEmail.innerHTML = "Please enter a valid e-mail address.";
 fieldset.insertBefore(invalidEmail, fieldset.children[6]);
 invalidEmail.style.display = "none";

 //email REGEX validation
 function validateEmail(email){
    return /^[^@]+@[^@]+.[a-z]+$/.test(email);
 };

 //e-mail event listener

const emailEntry = document.querySelector("#mail");

emailEntry.addEventListener("blur", ()=>{
    let email = emailEntry.value;

    if(validateEmail(email)){
        emailEntry.style.border = "3px solid green";
        emailEntry.style.color = "green";
        invalidEmail.style.display = "none";
        document.querySelectorAll(".invalidEmail");
        return emailValid = true;
    } else{
        emailEntry.style.border = "2px solid red";
        invalidEmail.style.color = "red";
        invalidEmail.style.display = "block";
        return emailValid = false;
    }
});

 //ACTIVITY

 function checkboxActive(){
    if (totalCost == 0){
        console.log("Activity wasn't selected.");
       return validActivity = false;
    } else {        
        return validActivity = true;
    };
};
       

 
 //validation for credit card number

 const invalidCC =  document.createElement("label");
 invalidCC.classList.add("invalidCC");
 chargeFieldset.insertBefore(invalidCC, chargeFieldset.children[0]);
 invalidCC.innerHTML = "Please enter a valid credit card #.";
 invalidCC.style.color = "red";
 invalidCC.style.display = "none";



cardNumber = document.querySelector("#cc-num");
function validateCC(cardNumber){
   return /^\d{13,16}$/.test(cardNumber);
};

//Credit Card event listener
cardNumber.addEventListener("focus", () =>{
    const ccInfo = document.querySelector("#ccInfo");
    let ccNumber = cardNumber.value;
    if(ccNumber == ""){
        ccInfo.textContent = "Please type in your credit card number.";
    }
});

//check if credit card number is valid if not display credit card textContent
cardNumber.addEventListener("input", ()=>{
    const ccInfo = document.querySelector("#ccInfo");
    let ccNumber = cardNumber.value;
    let validCC = validateCC(ccNumber);
    if(!validCC){
        ccInfo.style.display = "inherit";
    } else{
        ccInfo.style.display = "none";
    }
});

//change the appearance when the user leaves the cc input field

cardNumber.addEventListener("input", ()=> {
    const ccInfo = document.querySelector("#ccInfo");
    let ccNumber = cardNumber.value;
    let validCC = validateCC(ccNumber);
    if(!validCC && ccNumber == "") {
        ccInfo.innerHTML = "Please type in your credit card.";
    } else if(!validCC) {
        ccInfo.innerHTML = "Please enter between 13 and 16 digits.";
    } else {
        ccInfo.innerHTML = "This credit card number is invalid.";
    };
});

cardNumber.addEventListener("blur", ()=>{
    let ccNumber = cardNumber.value;
    if(validateCC(ccNumber)){
        cardNumber.style.border = "3px solid green";
        invalidCC.style.display = "none";
        return cardNumberIsValid = true;
        
    }else{
        cardNumber.style.border = "2px solid red";
        invalidCC.style.display = "block";
        return cardNumberValid = false;
    }
});

//zip code validation
zipCode = document.querySelector("#zip");

//creating validation for the zip code
function isZipValid(zipCode){
    return /^\d{5}$/.test(zipCode);
};

//if credit information is blank 
zipCode.addEventListener("focus", ()=>{
    const zipInfo = document.querySelector("#zipInfo");
    let ccNumber = cardNumber.value;
    if(ccNumber == ""){
        zipInfo.textContent = "Please enter your 5 digit zip.";
    };
});

//create text for zip code field
zipCode.addEventListener("blur", ()=>{
    let zCode = zipCode.value;
    if(isZipValid(zCode)){
        zipCode.style.border = "2px solid green";
        return zipCodeValid = true;
    } else{
        zipCode.style.border = "3px solid red";
        return zipCodeValid = false;
    }
});

//Check if Zip code is correctly entered
zipCode.addEventListener("input", ()=>{
    const zipInfo = document.querySelector("#zipInfo");
    let enteredCode = zipCode.value;
    let validZip = isZipValid(enteredCode);
    if(!validZip && enteredCode == ""){
        console.log("no zip entered, invalid");
        zipInfo.textContent = "Type your 5 digit zip code here.";
    } else if(!validZip){
        zipInfo.textContent = "Please enter 5 digits.";
    } else{
        zipInfo.textContent = "Zip Code is Confirmed!";
    };
});

//validate CVV
cvvNumber = document.querySelector("#cvv");
function isCvvValid(cvv){
    return /^\d{3}$/.test(cvv);
};


//Validate CVV field, CVV Event Handler
cvvNumber.addEventListener("blur", ()=>{
    let cvvCode = cvvNumber.value;
    if(isCvvValid(cvvCode)){
        cvvNumber.style.border = "2px solid green";
        cvvNumber.style.color = "green";
        return cvvValid = true;
    }else{
        cvvNumber.style.border = "3px solid red";
        return cvvValid = false;
    }
});

cvvNumber.addEventListener("input", () => {
    const cvvInfo = document.querySelector("#cvvInfo");
    let enteredCvvCode = cvvNumber.value;
    let validCvv = isCvvValid(enteredCvvCode);
    if(!validCvv && enteredCvvCode == "") {
        console.log("no cvv entered, invalid");
        cvvInfo.textContent = "Please check your CVV value";
    } else if (!validCvv){
        cvvInfo.textContent = "Enter the 3 digits on the back of your card.";
    } else {
        cvvInfo.textContent = "CVV Confirmed!";
    }

});




//Add event listener to the form.
const submitButton = document.querySelector("button");

submitButton.addEventListener("click", (e)=>{
    e.preventDefault();
    checkboxActive(); 
  
    if(!validName) {
        console.log("User Name not valid");
    }

    if(!emailValid) {
        console.log("Email not valid");
    }

    if(!validActivity) {
        console.log("No Activity Selected");
    }

    if(!cardNumberIsValid && ccPayment) {
        console.log("Credit card # invalid");
    }

    // if(!userNameValid) {
    //     console.log("User Name not valid");
    // }

});