//Call back - 1
/**
 * Là hàm 
 * Được truyền qua đối số 
 * Được gọi lại trong hàm nhận đối số
 */

function myFunction(param) {
    if (typeof param === 'function') {
        param('Game developer');
    }
}

function myCallBack(value) {
    console.log('Result: ' + value);
}

myFunction(myCallBack);

//Call back - 2 
Array.prototype.map2 = function (callBack) {
    if ( typeof callBack === 'function') {
        var array = [];
        var arrayLenght = this.length;
        for (var i = 0; i < arrayLenght; i++)
        {
            var result = callBack (this[i], i);
            array.push (result);
        }
    }
    return array;
};

var courses = ['Javascript', 'PHP', 'Java'];

var htmls = courses.map (function (course) {
    console.log(course);
})

var resultMap2 = courses.map2(function (course) {
    return `<h2>${course}</h2>`;
});

console.log(resultMap2.join (' '));

//Forech2, reduce2, filter2;
console.log ('====================');

Array.prototype.myMap = function(cb) {
    var arrLength = this.length;
    var arr = [];
    if (typeof cb === 'function') {
        for (var i = 0; i < arrLength; i++) {
            var result = cb(this[i], i);
            arr.push (result);
        }
    }
    return arr;
};

var numbers = [1, 2, 3];
var rsNumbers = numbers.myMap (function (number) {
    return number * 2;
});

console.log (rsNumbers);
