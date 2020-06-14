var msg1 = "HELLO WORLD"
var msg2 = "Error!please enter a valid password "
var msg3 = "Welcome to JS Land... ";
var msg33 = "Welcome to JS Land ";
var msg4 = " Happy Coding"
var msg5 = "     Prevent this page from creating additional dialogue"
var msg7 = "Hello...I can run JS through my web browser console"
var msg8 = " i am using alert in my HTML CSS project."

function func() {
     alert(msg4 + "\n" + "\r" + msg5);
     alert(msg33);
}
// chapter 2: variables for string
//1. Declare a variable called username?
var username;
//2. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = "RUQIA MUGHAL";
//3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.
var message;
message = "Hello World";
// alert(message);
//4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
var name = "RUQIA MUGHAL";
var age = "18 years old";
var certification = "Certified mobile application development"
// alert(name);
// alert(age);
// alert(certification);
//5. Write a script to display the following alert using one JS variable:

// alert(" PIZZA \n PIZZ \n PIZ \n PI \n P  ");

var item = "PIZZA"
var copy1 = item.slice(0, 5);
var copy2 = item.slice(0, 4);
var copy3 = item.slice(0, 3);
var copy4 = item.slice(0, 2);
var copy5 = item.slice(0, 1);
// alert(copy1 +"\n" + copy2 +"\n"+ copy3 +"\n"+ copy4 +"\n"+ copy5);

//6. Declare a variable called email and assign to it a string that represents your Email Address
// Show the blow mentioned message in an alert box.(Hint: use string concatenation)?





var email = "farhajamill211@gmail.com";
// alert("my email address is " +email);

// 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”.
//  Display the following message in an alert box:
var book = "A smarter way to learn JavaScript"
// alert(book);
//8. Write a script to display this in browser through JS.


// document.write("Yeah! I can HTML content  through JavaScript ");
//9. Store following string in a variable and show in alert and browser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”

// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");


// chapter #3
// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age;
age = 15;
// alert("i am "+age+" year old.");
//2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page.
//  Show his/her number of visits on your web page. 
//  For example: “You have visited this site N times”.




var ne = 15;
// alert("You have visited this site "+ ne + "times");
// 3. Declare a variable called birthYear & assign to it your birth year.
// Show the following message in your browser:
var birthYear = 1998;
var n1 = "Datatype of my declared variable is number"
// document.write("My birth year is" +birthYear+ "<br>");
// document.write(n1);

// 4. A visitor visits an online clothing store www.xyzClothing.com .
//  Write a script to store in variables the following information:
//   a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order
//  Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var name = "joe ";
var product = " T-SHIRTS "
var quantity = 15;
// document.write( name + " ordered " +quantity +product  + " on ruqiyah's store " );


///////////////////////// chapter 4//////////////////////


// 1. Declare 3 variables in one statement.
// 2. Declare 5 legal & 5 illegal variable names.
// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable
// c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

// var b =["$name , _name , name"];
// var a = [" number " , " $ " , " _ "];
//  var legal = [" ABC1 "," $abc "," _abc "," AbcD "," CamelCase "] ;
//  var illegal = [123, "123a","1$xd","def ff","abcdef"];
//  var d = "sensitive";
//  var e = "keywords";

//  document.write("Variable names can only contain " + a[0] + ","+a[1] +"and" , a[2]+"for example: $my_1stVariable" ,'<br>');
//  document.write("Variable  must begin with a " + b ,'<br>');
//  document.write("Variable  names are case  " + d,'<br>' );
//  document.write("Variable  names should not be JS " + e ,'<br>');





////////////// chapter 4////////////////////////
// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var a = 3;
var b = 5;
var c = a + b;
// document.write(c,"<br>");

// 2. Repeat task1 for subtraction, multiplication, division & modulus.

var d = b - a;
var e = b * a;
var f = b / a;
// document.write(d, "<br>");
// document.write(e,"<br>");
// document.write(f,"<br>");



// 3.Do the following using JS Mathematic Expressions
//  a. Declare a variable.
//   b. Show the value of variable in your browser like “Value after variable declaration is:?”
//   c. Initialize the variable with some number. 
//  d. Show the value of variable in your browser like “Initial value: 5”. 
//  e. Increment the variable.
//   f. Show the value of variable in your browser like “Value after increment is: 6”. 
//   g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
//  i. Decrement the variable. 
//j. Show the value of variable in your browser like “Value after decrement is: 12”.
//  k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.



// var dec;
// document.write("Value after variable declaration is:",dec +"<br>");
// dec = 5;
// document.write("Initial value: ",dec+"<br>");
// dec++;
// document.write("Value after increment is: ",dec+"<br>");
// dec = dec + 7;
// document.write("Value after addition is: ",dec+"<br>");
// dec--;
// document.write("Value after decrement is: ",dec+"<br>");
// r =dec%3;
// document.write("The remainder is : ",r);






//4. Cost of one movie ticket is 600 PKR.
// Write a script to store ticket price in a variable & 
//calculate the cost of buying 5 tickets to a movie. Example output:




var cost = 600;
var all = cost * 5;
// document.write("total cost to buy 5  tickets to a Movie  is"+all+"PKR");

//5. Write a script to display multiplication table of any number in your browser.
// var tbl = +prompt("enter a number to print a table","table of 5");
// for (var i = 0; i <= 10; i++) {

//     document.write(tbl + "*" +i+ "=" +tbl*i +"<br>");

// }
//6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:
// var c = 25;
// var f = 44;
// far= (c*9/5)+32;
// cel =(f-32)*5/9;
// document.write(c +" C is " + far + " Far" +"<br>");
// document.write(f +" F is " + cel +"Cel"+"<br>");


// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website.
//  Store the following in variables
// a. Price of item 1
//  b. Price of item 2
//   c. Ordered quantity of item 1
//    d. Ordered Quantity of item 2
//     e. Shipping charges
// Compute the total cost & show the receipt in your browser.

var a = 650;
var q = 3;
var b = 100;

var q2 = 7;
var ship = 100;
var total = (a * q) + (b * q2) + ship;
// document.write("Price of item 1 is:" +a+"<br>");

// document.write("Quantity of item 1 is :" +q +"<br>");

// document.write("Price of item 2 is:" +b+"<br>");
// document.write("Quantity of item 2 is:" + q2+"<br>");
// document.write("shipping charges  is:" + ship +"<br>");
// document.write("Total  cost of your order is:" +total );

// 8. Store total marks & marks obtained by a student in 2 variables.
//  Compute the percentage & show the result in your browser


// var totalmarks = 980;
// var marksobtained = 804;
// document.write("Total marks :" +totalmarks+"<br>");
// document.write(" Marks  Obtained: " +marksobtained+"<br>");
// var per = marksobtained/totalmarks *100;
// document.write(" Percentage is :" +per+"<br>");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. 
// Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.
//  (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)


// var riyals = 28;
// var usdollar = 104.80;
// var pak = (10*104.80)+(25*28);
// document.write("total currency in PKR is: " +pak );

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// a. Add 5
//  b. Multiply by 10 
//  c. Divide the result by 2 Perform all calculations in a single expression


// var number = 4;
// number = ((number +5)*10)/2;
// document.write(number);

// 11. The Age Calculator: Forgot how old someone is? Calculate it! 
// a. Store the current year in a variable.
//  b. Store their birth year in a variable.
//  c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”.



var current = 2020;
var birthYear = 1999;
var age = current - birthYear;
// document.write("current year is " + current +"<br>");
// document.write("birth year is" +birthYear+"<br>");

// document.write("your age is"+age+"<br>");


// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.

// b. Calculate the circumference based on the radius,
//and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142)
//  Calculate the area based on the radius, and output “The area is NN”.
//  (Hint : Area of a circle = π r2, π = 3.142)
var radius = 20;
// document.write("Radius of a circle :" +radius+ "<br>");
// var cir = 2 *3.142 * radius;

// document.write("Circumference of a circle :" +cir+ "<br>");
// var area = 3.142 * radius *2;
// document.write("Area of a circle :" +area+ "<br>");

// 13. The Lifetime Supply Calculator:
//  Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
//   a. Store your favorite snack into a variable
//    b. Store your current age into a variable. 
//    c. Store a maximum age into a variable.
//     d. Store an estimated amount per day (as a number). 
//     e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

// var snack = "pasta";
// var age = 15;
// var maxage = 65;
// var amount = 3;
// var a = maxage-age;
// var b = (365 / a )* 3;

// document.write("Faviroute snacks :" +snack+ "<br>");
// document.write("Current age :" +age+ "<br>");

// document.write("Estimated maximum age :"+maxage+ "<br>");
// document.write("Amount of Snacks per day:"+amount+ "<br>");
// document.write("You will need "+b+snack+ " to last you until the ripe old age of" + maxage+ "<br>");

/////////////////////// #chapter 6-9////////////////////////////////////
// 1. Write a program to take a number in a variable,
//  do the required arithmetic to display the following result in your browser:

// var abc = 10;
// document.write("<h1>Result:</h1>")

// document.write("The value of abc is:",abc,"<br>")
// document.write("The value of ++abc is:",++abc,"<br>")
// document.write("The value of abc is:",abc,"<br>")
// document.write("The value of abc++ is:",abc++,"<br>")
// document.write("The value of abc is:",abc,"<br>")
// document.write("The value of --abc is:",--abc,"<br>")
// document.write("The value of abc is:",abc,"<br>")
// document.write("The value of abc-- is:",abc--,"<br>")
// document.write("The value of abc is:",abc,"<br>")



// 2. What will be the output in variables a, b & result after execution of the following 
// script: var a = 2, b = 1; var result = --a - --b + ++b + b--; 
// Explain the output at each stage: --a; --a - --b; 
// --a - --b + ++b;
//  --a - --b + ++b + b--;


var a = 2;
var b = 1;
// document.write("a is",a,"<br>")
// document.write("b is",b,"<br>")
// var res1 = --a - --b + ++b + b--;
// var res2 = --a - --b + ++b;
// var res3 =  --a - --b + ++b + b--;
// document.write("Result of --a - --b + ++b + b-- is  ",res1,"<br>")
// document.write("Result of --a - --b + ++b is ",res2,"<br>")
// document.write("Result of --a - --b + ++b + b-- is ",res3,"<br>")

// 3. Write a program that takes input a name from user & greet the user.

// var popy = prompt("please enter your name",'rabail')
// document.write("<h1>HELLO</h1>",popy)


// 5. Write a program to take input a number from user & display it’s multiplication table on your browser.
//  If user does not enter a new number, multiplication table of 5 should be displayed by default.


// var table = +prompt("enter a number for table",5)
// for (i=1;i<=10;i++){
//     document.write(table+"*" +i+"=",table*i,"<br>")
// }

// 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.

// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)



// var eng = prompt("Enter subject:","English")
// var urdu = prompt("Enter subject:","URDU")
// var math = prompt("Enter subject:","Maths")
// var totmark = 100;
// var obt1 = prompt("Obtained marks in subject 1")
// var obt2 = prompt("Obtained marks in subject 2")
// var obt3 = prompt("Obtained marks in subject 3")


// perc1 = obt1/totmark*100;
// perc2 = obt2/totmark*100;
// perc3 = obt3/totmark*100;
// document.write("<h3>Subject:   \t   Total marks :         Obtained marks:      Percentage marks : </h3>")
// document.write(eng+ " "+totmark+ " "+ obt1 +" " +perc1,"%","<br>") 

// document.write(urdu+ " "+totmark+ " "+ obt2 +" " +perc2,"%","<br>") 

// document.write(math+ " "+totmark+ " "+ obt3 +" " +perc3,"%","<br>") 

// 1. Write a program to take “city” name as input from user
// . If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”


// var city = prompt("Enter city name","karachi")
// document.write("Welcome to city of lights");
// if (city=="karachi"||"KARACHI"||"Karachi") {
//     document.write("Welcome to city of lights"); 
// }
// 2. Write a program to take “gender” as input from user.
//  If the user is male, give the message: Good Morning Sir. 
// If the user is female, give the message: Good Morning Ma’am.


// var gender = prompt("Enter  your gender","Female")
// if (gender=="Male"||"male"||"MALE" ) {
//     document.write("Good Morning Sir"); 
// } else {

//         document.write("Good Morning Ma’am.");
// }

// 3. Write a program to take input color of road traffic signal from the user &
// show the message according to this table:

// var signal = prompt("select  any one  traffic signal");
// document.write("signal color"+"   "+"message")
// if (signal =="Red"||"red"||"RED") {

//      document.write("Must stop");
// } 
//  if(signal =="GREEN"||"Green"||"green") {

//     document.write("Ready to move ");

// }
// else{
//     document.write("Move now");
// }
// 4. Write a program to take input remaining fuel in car (in litres) from user. 
// If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”


// var fuel = prompt("enter remaining fuel in car in litres")
// if(fuel <0.25){

//     document.write("Please refill the fuel in your car ");
// }




// 5. Run this script, & check whether alert message would be displayed or not.

// var a = 4;
// var b = 82;
// var c = 12; 
//  if (++a === 5){
//       alert("given condition for variable a is true"); }


// if (b++ === 83)
//  { alert("given condition for variable b is true"); }

// if (c++ === 13)
// { alert("condition 1 is true"); }
// if (c === 13)
// { alert("condition 2 is true"); }
// if (++c < 14)
// { alert("condition 3 is true"); }
// if(c === 14)
// { alert("condition 4 is true"); }


// var materialCost = 20000;
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost)
// { alert("The cost equals"); }

// if (true)
// { alert("True"); } 
// if (false)
// { alert("False"); }


// if("car" < "cat")
// { alert("car is smaller than cat"); }

// 6. Write a program to take input the marks obtained in three subjects & total marks.
//  Compute & show the resulting percentage on your page.
//  Take percentage & compute grade as per following table:
//  Show the total marks, marks obtained, percentage, grade & remarks like:



// var obtained = prompt("enter your obtained marks in 3 subjects")
// var total = prompt("enter  total marks in 3 subjects")
// percent = obtained/total*100;
// document.write("<h1>Marksheet </h1>");
// document.write("<b>Total marks:</b>",total,"<br>");
// document.write("<b>Marks Obtained:</b>",obtained ,"<br>");
// document.write("<b>Percentage:</b>",percent,"<br>");

// if (percent>=80) {
//      document.write("<b>Grade: A-1</b>","<br>");
//      document.write("<b>Remarks: Excellent</b>","<br>");
// }
// else if(percent>=70){
//      document.write("<b>Grade: A</b>","<br>");
//      document.write("<b>Remarks: Good</b>","<br>");
// }
// else if(percent>=60){
//      document.write("<b>Grade: B</b>","<br>");
//      document.write("<b>Remarks: You need improvement</b>","<br>");
// }
//  else {
//      document.write("<b>Grade: Fail</b>","<br>");
//      document.write("<b>Remarks: Sorry</b>","<br>");

// }
// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
//  a. If user guesses the same number, show “Bingo! Correct answer”. 
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.


// var secret = 9;
// var guess = +prompt("Guess a secret number")

// if (guess==secret) 
// {
//      alert("Bingo! Correct answer")
// }
// else if (guess==secret+1) 
// {
//      alert("Close enough to the correct answer")
// } 
// else
// {
//      alert("try again")
// }






// 8. Write a program to check whether the given number is divisible by 3.
//  Show the message to the user if the number is divisible by 3.

// var number = prompt("enter a number")

// var div = number%3;
// if (div==0) {
//      alert("number is divisible by 3")

// }
// else{
//      alert("number is not divisible by 3")
// }


// 9. Write a program that checks whether the given input is an even number or an odd number.


// var a = prompt("enter a number")

// var number = a%2;
// if (number ==0)
// {
// alert("number is Even")
// }
// else{
//      alert("number is Odd")
// }




// 10. Write a program that takes temperature as input and shows a message based on following criteria
//  a. T > 40 then “It is too hot outside.” 
//  b. T > 30 then “The Weather today is Normal.” 
// c. T > 20 then “Today’s Weather is cool.” 
// d. T > 10 then “OMG! Today’s weather is so Cool.”




// var temp = +prompt("Enter temperature")
// if (temp>40) {
//      alert("It is too hot outside.")  
// }
//  else if (temp>30) 
// {
//    alert("The Weather today is Normal.")

// }
// else if (temp>20) 
// {
//    alert("Today’s Weather is cool.")

// }
// else if (temp>10) 
// {
//    alert("OMG! Today’s weather is so Cool.")

// }
// else{
//      alert("please enter a valid temperature")
// }

// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: 
// a. First number 
// b. Second number
//  c. Operation (+, -, *, /, %) 
//  Compute & show the calculated result to user.
// var a = 20;
// var b = 30;

// var operator= prompt("enter any  operator in +,-,*, / , %")
// if (operator=="+") {
//      alert(" a + b is "+ (a+b))
// } 
// else if (operator=="-") {

//      alert(" a-b is "+ (a-b))
// }

// else if (operator=="*") {

//      alert(" a*b is "+ (a*b))
// }

// else if (operator=="/") {

//      alert(" a/b is "+ (a/b))
// }

// else if (operator=="%") {

//      alert(" a%b is "+ (a%b))
// }
// else{
//    alert(" enter any valid operator ")
// }


// IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS






// 1. Write a program that takes a character (number or string) in a variable &
//  checks whether the given input is a number, uppercase letter or lower case letter.
// (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).


// var a = prompt("choose a character  (in ascii code) 0-9 ,  A-Z=(65-90), a-z= (97-122 )")
// if (a >=0 && a<=9 ) {
//      alert("you entered a number");
// }
//  else if(a >= 97 && a<=122 )
//  {
//      alert("you entered a Lowercase alphabet (in ascii code)") ;
// }
// else if(a >=65 && a<=90 )
// {
//      alert("you entered a Uppercase alphabet (in ascii code)") ;
// }
// else{
//      alert("you entered a invalid character") ;  
// }




// 2. Write a JavaScript program that accept two integers and display the larger. 
// Also show if the two integers are equal.

// var e = +prompt("enter first integer")
// var f = +prompt("enter second integer")
// if (e==f) {
//      alert("both numbers are equal")

// } 
// else if(e>f) {
//      alert("first number is greater than second number")
// }
// else{
//      alert("Second number is greater than first number")
// }



// 3. Write a program that takes input a number from user &
//  state whether the number is positive, negative or zero.


// var ef = prompt(" enter a number ")
// if (ef>0) {
//      alert("number is positive")

// }
//  else if(ef==0){
//      alert("number is zero")  

// }
// else{
//      alert("number is negative")  
// }

// 4. Write a program that takes a character (i.e. string of length 1)
//  and returns true if it is a vowel, false otherwise



// var y = prompt("enter any character")
// if (y =="a"||y=="e"||y=="i"||y=="o"||y=="u"||y=="A"||y=="E"||y=="I"||y=="O"||y=="U"){
// alert("true")

// }
// else{
//      alert("false")  
// }


// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. 
// If they are same, show message “Correct! The password you entered matches the original password”. 
// Show “Incorrect password” otherwise.


// var pswd = "popy";
// var user_pswd = prompt("enter your password");
// if (user_pswd==" "||user_pswd=="")
// {
// alert("Please enter your password");

// } 
// else if( user_pswd==pswd)
// {
//      alert("Correct! The password you entered matches the original password")  ;
// }
// else{
//      alert("Incorrect password");
// }

// 6. This if/else statement does not work. Try to fix it:
//  var greeting;
// var hour = 33;
// if (hour < 18)
// { 
//  greeting = "Good day";
//  alert(greeting);
// }
//  else
//  {
//  greeting = "Good evening";
//  alert(greeting);
//  }




// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm.
//  Implement the following case using if, else & else if statements

// var time = prompt("enter time in format 1900=7pm")
// if (time>=0000 && time<1200)
//  {
//      alert("GOOD MORNING")
// }
//  else if(time>=1200 && time<1700) 
//  {
//      alert("GOOD AFTERNOON") 

// }

// else if(time>=1700 && time<2100) 
// {
//     alert("GOOD EVENING") 

// }

// else if(time>=2100 && time<2359) 
// {
//     alert("GOOD NIGHT") 

// }
// else{
//      alert("INVALID ")  
// }
// 1. Declare an empty array using JS literal notation to store student names in future.

// var students=[];
// students[1]="ruqia";
// students[2]="aqsa";
// students[3]="waqas";

// alert(students[1]);
// alert(students[3]);
// alert(students[2]);

// 2. Declare an empty array using JS object notation to store student names in future.




// var stu =[2,3,4,5,6,7,8,9]
// alert(stu[1]);

// var student =Array([22,44,66,88,33,55])
// document.write(student);
// alert(student[1]);




// 3. Declare and initialize a strings array.




// var array1 =["ali","kausar","ruqia","aqsa","alina" ];

// alert(array1[2]);




// 4. Declare and initialize a numbers array.


// var array2 = [2,3,4,5,6,7,8,9];

// alert(array2[2]);


// 5. Declare and initialize a boolean array.

// var array_=["True","false","true" ,"false"]

// alert(array_[2]);


// 6. Declare and initialize a mixed array.

// var mixed =[1,2.5,"ali","musa","alzim"]

// alert(mixed[2]);

// 7. Declare and Initialize an array and store available education qualifications in Pakistan 
// (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).
//  Show the listed qualifications in your browser like:






// var education_array = ["SSC ",  " HSC ", " BCS ", " BS ", " BCOM ", " MS ","  M. Phil ", " PhD "];
// document.write("<h1> Qualification :  </h1>");
// for (i=1;i<=education_array.length;i++){
//      document.write(i,education_array[i]+"<br>");
// }





// 8. Write a program to store 3 student names in an array.
//Take another array to store score of these three students.
//  Assume that total marks are 500 for each student,
//   display the scores & percentages of students like:



// var a =["ali","abubakar","farida","aqsa"]
// var score=[40,70,100,87];
// for ( i = 0; i < a.length; i++) {
//      percentage = score[i]/100*100;
//      document.write("<h4>score of  "+a[i]+"  is "+score[i]+".</h4> ")
//      document.write("<h4>percentage   is "+percentage+"% </h4> ")

// }


// 9. Initialize an array with color names.
//  Display the array elements in your browser.
//a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
//Display the updated array in your browser.
//b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. 
//Display the updated array in your browser.
//c. Add two more color to the beginning of the array. Display the updated array in your browser.
//d. Delete the first color in the array. Display the updated array in your browser.
//e. Delete the last color in the array. Display the updated array in your browser. 
//f. Ask the user at which index he/she wants to add a color & color name. 
//Then add the color to desired position/index. . Display the updated array in your browser. 
//g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete.
//Then remove the same number of color(s) from user-defined position/index. 
//   Display the updated array in your browser.


// var color=["red","green","blue","pink","purple","brown","yellow" ]

// var user = prompt("which color do you want to add in beginning .")
// color.unshift(user)
// document.write(color+"<br>")
// var user = prompt("which color do you want to add in end .")
// color.push(user)
// document.write(color+"<br>")
// var user = prompt("which first colors do you want to add in beginning:")
// color.unshift(user)
// var user = prompt("which second colors do you want to add in beginning:")
// color.unshift(user)

// document.write(color+"<br>")
// document.write("Delete the last color."+"<br>")
// color.pop(user)
// document.write(color+"<br>")
// document.write("Delete the first color."+"<br>")
// color.shift(user)

// document.write(color+"<br>")


// var user = prompt("which index he/she wants to add a color? ")

// var cc = prompt("which color? ")

// color.splice(user,0,cc)

// document.write(color+"<br>")


// 10. Write a program to store student scores in an array 
// & sort the array in ascending order using Array’s sort method.


// var score =[910,220,630,300,550,650,900,880]

// document.write("Score of students: ",score)
// tt = score.sort();
// document.write(" Ordered Score of students : ",tt)


// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities array.

// var city =["karachi","islamabad","jhelum","lahore"];
// var selectedCities ;
// selectedCities=city.slice(0,4);
// document.write(selectedCities);





// 12. Write a program to create a single string from the below mentioned array: 
// (Use array’s join method)

var arr = ["This", "is", "my", "cat"];
aa = arr.join(" ");
//  arr =arr[0]+" "+arr[1]+" "+arr[2]+" "+arr[3];
// alert(aa)



// 13. Create a new array. 
// Store values one by one in such a way that you can access the values in the order
//  in which they were stored. (FIFO-First In First Out)


// var array=[];
// array[0]="keyboard";
// array[1]="mouse";
// array[2]="printer";
// array[3]="monitor";

// document.write("<h1>Devices</h1>");
// document.write(array,"<br>");
// document.write("out","<br>")
// document.write(array.pop(),"<br>");
// document.write("out","<br>")
// document.write(array.pop(),"<br>");
// document.write("out","<br>")
// document.write(array.pop(),"<br>");
// document.write("out","<br>")
// document.write(array.pop(),"<br>");







// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
//  Display the following dropdown/select menu in your browser using document.write() method:

// var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"];
// document.write(phone)





/////////////////////ARRAYS AND LOOP//////////////


// 1. Declare and initialize an empty multidimensional array. (Array of arrays)
// var array =[[1,2,3],[4,5,6]];
// alert(array[1][1])

// 2. Declare and initialize a multidimensional array representing the following matrix:

// var array =[[0,1,2,3],[1,0,1,2],[2,1,0,1]]

// document.write(array[0],"<br>")
// document.write(array[1],"<br>")
// document.write(array[2],"<br>")



// 3. Write a program to print numeric counting from 1 to 10.

// var numeric =[1,2,3,4,5,6,7,8,9,10];

// for (index = 0; index < numeric.length; index++)
//  {

//      document.write(numeric[index]+"<br>");

// }



// 4. Write a program to print multiplication table of any number using for loop.
//  Table number & length should be taken as an input from user.






// var table = +prompt("enter a table to show its multiplication");
// var lnth =+prompt(" Enter length of table?");
// document.write("Multiplication table is ",table+"<br>");
// document.write("length of table is ",lnth+"<br>");
// for(i=1 ; i<=lnth;i++)
// {
//    document.write(table +" * "+[i] +" = " + table*[i] +"<br>");

// }




// 5. Write a program to print items of the following array using for loop: 
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// var fruits = ["apple", "banana" ,"mango" ,"orange", "strawberry"]
// for (i=0;i<fruits.length;i++){
//      document.write(fruits[i]+"<br>");
// }


// for (i=0;i<fruits.length;i++){
//      document.write("Elements at index "+[i]+" is "+fruits[i]+"<br>");
// }



// 6. Generate the following series in your browser. See example output.
//  a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
//  b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
//  c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 d. 
// Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k




// var numeric =[1,2,3,4,5,6,7,8,9,10];


// document.write("<h1>   Counting</h1>");

//      document.write(numeric+" <br>");


// document.write("<h1>Reverse Counting</h1>");
// for (index = 9; index >= 0; index--)
//  {

//      document.write(numeric[index]+" ");

// }

// document.write("<h1>Even:</h1>");

// for (var i = 1; i <=10; i++) {
//    var n= i%2;
//    if (n==0) {

//      document.write(i+"    "+"  ");  
//    }


// }

// document.write("<h1>ODD:</h1>");

// for (var i = 1; i <=10; i++) {
//    var n= i%2;
//    if (n!=0) {

//      document.write(i+"   "+"   ");  
//    }


// }
// document.write("<h1>Series:</h1>");

// for (var i = 1; i <=20; i++) {
//    var n= i%2;
//    if (n==0) {

//      document.write(i+"k        ");  
//    }


// }

// 7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
//  Write a program to enable “search by user input” in an array.
//  After searching, prompt the user whether the given item is found in the list or not. Example:



// var  A = ["cake", "apple-pie", "cookie", "chips", "patties"];
// var j = prompt("Welcome to Bakery. what you want to order?");

//     if (j=="cookie") {
//      document.write("cookie is available at index 2 in our bakery <br>")  
//     }
//    else if (j=="cake") {
//      document.write("cake is available at index 0 in our bakery <br>")  
//     }
//     else if (j=="apple-pie") {
//      document.write("apple-pie is available at index 1 in our bakery <br>")  
//     }
//     else if (j=="chips") {
//      document.write("chips is available at index 3 in our bakery <br>")  
//     }
//     else if (j=="patties") {
//      document.write("patties is available at index 4 in our bakery <br>")  
//     }
//     else{
//      document.write("we are sorry that patties is not available in our bakery")
//     }


// 8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].

// var a = [24, 53, 78, 91, 12];
// document.write("Array items: " + a + "<br>");
// var largest = a[0];
// for (var i = 0; i < a.length; i++) {
//      if (largest < a[i]) {
//           largest = a[i];
//      }

// }
// document.write("Largest number is " + largest + " <br> ");


// 9. Write a program to identify the smallest number in the given array.

// var a = [24, 53, 78, 91, 12];
// document.write("Array items: " + a + "<br>");
// var smallest=a[0];
// for (i = 0; i < a.length; i++) {
     
//    if ( smallest > a[i] ) {
//      smallest=a[i];
//    }
// }
// document.write("smallest number is " + smallest + " <br> ");


// 10. Write a program to print multiples of 5 ranging 1 to 100.

// var multiple = 5;
// for ( i = 1; i <= 20; i++) {

//      document.write(multiple*i+" ")
// }