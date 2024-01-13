// === Prevent default and stop propagation

/**
 * Prevent default: ngăn chặn hành vi của trình duyệt trên thẻ html
 * Stop propagation: ngăn chặn sự kiện nổi bọt
 */

// == Prevent default == 
var aElement = document.querySelectorAll('a');
// var aElement = document.anchors;
// var aElement = document.links;
console.log(aElement);
for (var i = 0; i < aElement.length; i++) {
    aElement[i].onclick = function (e) {
        //Thẻ link sẽ có tác dụng khi có đường dẫn tới f8 và ngược lại
        if (!e.target.href.startsWith('https://f8.edu.vn')) {
            e.preventDefault();
        }
    }
}

var ulElement = document.querySelector('ul');
//Ngăn chặn sự kiện: khi không click (focus) vào input thì sẽ bị mất các thẻ ul
ulElement.onmousedown = function (e) {
    e.preventDefault();
}

ulElement.onclick = function (e) {
    console.log(e.target);
}


//Stop propagation
var testNoiBotDiv = document.getElementById('testNoiBot');
var buttonElememt = document.querySelector('button');

testNoiBotDiv.onclick = function () {
    console.log('The div');
}

buttonElememt.onclick = function (e) {
    e.stopPropagation(); //Ngăn chặn sự kiện ở phần tử này nổi bọt ra ngoài
    console.log('Click me!');
}