var numbers = [1, 2, 3, 4, 5, 6];

Array.prototype.reduce2 = function (callBack, result) {
    let i = 0;
    if ( arguments.length < 2) {
        i = 1;
        result = this[0];
    }
    for ( ; i < this.length; i++) {
        result = callBack (result, this[i], i, this);
    }
    return result;
}

const result = numbers.reduce2 ((total, number, index, array) => {
    console.log(total, number, index, array);
    return total + number;
}, 10);

console.log(result);

// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

function arrToObj (array) {
    var result = array.reduce (function (obj, item) {
        var key = item[0];
        var value = item[1];
        obj[key] = value;
        return obj;
    }, {});
    return result;
}

