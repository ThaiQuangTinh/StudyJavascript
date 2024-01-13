/** HTML DOM
 * Element: id, class, tag(tên của thẻ: div, h, p,..), 
   css selector, html collection
 * Atribute
 * Text
 * getElementById, querySelector: trả về 1 giá trị duy nhất
 */

//ID
var headingNote = document.getElementById("heading");

console.log({
    elememt: headingNote
});

//Class
var headingNotes = document.getElementsByClassName("class1");

console.log(headingNotes);

for (let value of headingNotes) {
    console.log(value);
}

//Tag Name
var rsTagName = document.getElementsByTagName('p');
console.log(rsTagName);

//CSS selector
var rsSelector = document.querySelector(".heading");
var rsSelector2 = document.querySelector(".box .box1");
var rsSelector3 = document.querySelector("ul li:nth-child(2)");
console.log(rsSelector3);

//CSS selector
var rsSelectorAll = document.querySelectorAll("ul li");
console.log(rsSelectorAll);

//HTML colection
console.log(document.forms["form1"]);
console.log(document.forms.form1);

