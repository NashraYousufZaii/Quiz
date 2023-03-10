var Name = prompt ("What is your name?");
var score = 0;

var q1 = prompt ("What does HTML stand for?");
if ( q1 === "Hyper text markup language ") {
    alert("Correct")
    score = score + 10;
}
else if (q1 === "Hyper text markup language") 
{
    alert("Correct")
    score +=10;
}
else {
    alert("InCorrect")
}
var q1 = prompt ("Who is making the Web standards?");
if ( q1 === "The world wibe web consortium") {
    alert("Correct")
    score = score + 10;
}
else if (q1 === "The world wibe web consortium") 
{
    alert("Correct")
    score+=10;
}
else {
    alert("InCorrect")
}
var q1 = prompt ("Which character is used to indicate an end tag?");
if ( q1 === "/") {
    alert("Correct")
    score = score + 10;
}
else if (q1 === "/") 
{
    alert("Correct")
    score+=10;
}
else {
    alert("InCorrect")
}
var q1 = prompt (" Inline elements are normally displayed without starting a new line.");
if ( q1 === "True") {
    alert("Correct")
    score = score + 10;
}
else if (q1 === "True") 
{
    alert("Correct")
    score+=10;
}
else {
    alert("InCorrect")
}
var q1 = prompt (" How can you make a numbered list? ");
if ( q1 === "ol") {
    alert("Correct")
    score = score + 10;
}
else if (q1 === "ol") 
{
    alert("Correct")
    score+=10;
}
else {
    alert("InCorrect")
}
var q1 = prompt (" How can you make a bulleted list? ");
if ( q1 === "ul") {
    alert("Correct")
    score = score + 10;
}
else if (q1 === "ul") 
{
    alert("Correct")
    score+=10;
}
else {
    alert("InCorrect")
}
var q1 = prompt (" HTML comments start with <!-- and end with -->");
if ( q1 === "True") {
    alert(" Correct ")
    score = score + 10;
}
else if (q1 === "True") 
{
    alert(" Correct ")
    score+=10;
}
else {
    alert("InCorrect")
}
var q1 = prompt (" Block elements are normally displayed without starting a new line. ");
if ( q1 === "False") {
    alert(" Correct ")
    score = score + 10;
}
else if (q1 === "False") 
{
    alert(" Correct ")
    score+=10;
}
else {
    alert("InCorrect")
}
var q1 = prompt (" In HTML, onblur and onfocus are: ");
if ( q1 === "Event attributes") {
    alert(" Correct ")
    score = score + 10;
}
else if (q1 === "Event attributes") 
{
    alert(" Correct ")
    score+=10;
}
else {
    alert("InCorrect")
}
var q1 = prompt (" The HTML <canvas> element is used to: ");
if ( q1 === "Draw Graphics") {
    alert(" Correct ")
    score = score + 10;
}
else if (q1 === "Draw Graphics") 
{
    alert(" Correct ")
    score+=10;
}
else {
    alert("InCorrect")
}

alert( Name + " your score is" + score ) ;