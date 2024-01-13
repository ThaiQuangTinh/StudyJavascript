//for each
var courses = ['PHP', 'Javascript', 'Python'];

Array.prototype.forEach2 = function (callBack) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            console.log(this[index], index, this);
        }
    }
};

var course = courses.forEach2(function (elementCourse, index, arr) {
    console.log(elementCourse, index, arr);
});

//filter
console.log('=================');

var courses2 = [
    {
        name: 'Javascript',
        coin: 10,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 20,
        isFinish: false
    },
    {
        name: 'Python',
        coin: 30,
        isFinish: true
    }
];

Array.prototype.filter2 = function (callBack) {
    var newArr = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callBack(this[index], index, this);
            if (result) {
                newArr.push(this[index]);
            }
        }
    }
    return newArr;
};

var newCoures = courses2.filter2(function (elementCourse, index, array) {
    return elementCourse.coin > 10;
});
console.log (newCoures);

//Some2
console.log('=============');

Array.prototype.some2 = function (callBack) {
    for (var index in  this) {
        if (this.hasOwnProperty(index)) {
            var result = callBack(this[index], index, this);
            if (result) {
                return true;
            }
        }
    }
    return false;
};

var rsSome2 = courses2.some(function(course, index, arr) {  
    return course.isFinish;
});

console.log(rsSome2);

//Every 
console.log('============Every2=========');

Array.prototype.every2 = function (callBack) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callBack (this[index], index, this);
            if (!result) {
                return false;
            }
        }
    }
    return true;
};

var rsEvery = courses2.every2(function(course, index, arr) {
    return course.isFinish;
});

console.log(rsEvery);   