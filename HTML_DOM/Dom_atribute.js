/* ========== DOM ATRIBUTE ========== */
/* =======  */
var headingElement = document.querySelector('h1');
console.log(headingElement);

//Change the atribute inside the element
headingElement.title = 'This is a heading';
headingElement.id = 'heading';
headingElement.className = 'heading';  //This is called a setter

//Add atribute, the parameters include the name atribute and the value of the atribute
headingElement.setAttribute('classH', 'newHeading');

//Retrieve the value of the atribute with the parameter being the name of the atribute
var valueOfAtribute = headingElement.getAttribute('classH');
console.log(`The value of atribute is: ${valueOfAtribute}`);

/* ======= Inner Text && Text content */
//Retrive the text node object
console.log('===============');
var headingElement2 = document.querySelector('h2');
console.log(headingElement2.innerText);
console.log(headingElement2.textContent);
//Change the text node, the text node is change when JS code is excuted
headingElement2.textContent = 'Hello evry one';
/**
 * The similarities and differences between innerText and textContent.
 * Text node là đối tượng đại diện cho đoạn văn bản trong html
 * Element node chứa text node
 * Inner text: lấy ra nội dung của những element con ở bên trong (bị ảnh hưởng từ css) hay nói cách khách là lấy ra những gì mình nhìn thấy
 * Text content: lấy ra nội dung, lấy ra các khoảng cách bên trong, lấy cả phần tử bên trong tag name (không bị ảnh hưởng bởi css)
 */
var headingElement3 = document.querySelector('.heading3');
console.log('Inner text 3: ' + headingElement3.innerText);
console.log('Text content 3: ' + headingElement3.textContent);
//Part 2
var headingElement4 = document.querySelector('.heading4');
console.log('Inner text 4: ' + headingElement4.innerText);
console.log('Text content 4: ' + headingElement4.textContent);
//Part3
console.log('The result is: ' + (document.querySelector('.intxt')).innerText);
console.log('The result is: ' + (document.querySelector('.intxt')).textContent);

//Part4 
//Viết như này thì nó sẽ không hiểu đây là một element node
(document.querySelector('.h4E')).innerText = '<a>Đây là đường dẫn</a>'; 