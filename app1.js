//****  Alerts Chapter1  ****

// 1. Write a script to greet your website visitor using JS alert box.
alert("hello world");

// 2. Write a script to display following message on your web page:
alert("Error! Please enter a valid password");

// 3. Write a script to display following message on your web page: (Hint : Use line break)
alert("Welcome to JS Land\n Happy Codeing!");

// 4. Write a script to display following messages in sequence:
alert("Welcome to JS Land");
confirm("Happy Coding!\n Preventing this page from creating additional dialogs");

// 5. Generate the following message through browser’s developer console:
console.log(alert("Hello...I can run JS through my web browser's console"));

// 6. Make use of alerts in your new/existing HTML & CSS project.

// 7. Practice placement of <script></script> element in following sections of your project in exercise 6:
// a. Head
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)


// **** variables for string chapter2  ****

// 1. Declare a variable called username.
let username="tasadduq";
console.log(username);

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName="Tasadduq Farooq";
console.log(myName);

// 3. Write script to
a) Declare a JS variable, titled message.
var titledMessage;

// b) Assign “Hello World” to variable message
titledMessage="Hello World";

// c) Display the message in alert box.
console.log(alert(titledMessage));

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
let n="Tasadduq Farooq";
let age="20 year old"
let skill="Software Engineer"

alert(n);
alert(age);
alert(skill);

// 5. Write a script to display the following alert using one JS variable:
let Alerts="PIZZA\n PIZZ\n PIZ\n PI\n P";
alert(Alerts);

// 6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)
let email="XYZ@gmail.com";
alert("My email address is"+email)

// 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
let book="A smarter way to learn JavaScript"
alert("I am trying to learn from a book"+book)

// 8. Write a script to display this in browser through JS
document.write("Yah! I am writing HTML content through Javascript");

// 9. Store following string in a variable and show in alert and browser through JS
“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”
let a="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(a)


// **** variables for Number chapter3  ****
// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age=22;
alert(age);

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
var visitor=("You have visited this site 14 times.");
alert(visitor);

// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var bithYear=2002;
document.write(bithYear);


// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var nam="tasadduq";
var product="pen";
var quantity=5;
document.write("hi"+nam+ "! you ordered"+product+"quantity"+quantity+"from XYZ store");
document.write(`Hi ${nam}! You ordered ${product} quantity ${quantity} from XYZ store.`);
