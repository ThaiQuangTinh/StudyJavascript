var Animals = [
    {
        name: 'Hourse',
        age: 10,
        weight: 40
    },
    {
        name: 'Turtle',
        age: 20,
        weight: 60
    },
    {
        name: 'Rabit',
        age: 3,
        weight: 10
    }
];

//Hàm hiển thị thông tin của đối tượng
function showInformation(ArrObj) {
    for (let value of ArrObj) {
        for (let index in value) {
            console.log(index + ': ' + value[index]);
        }
        console.log('\n');
    }
};

//Hàm foreach
Array.prototype.forEach2 = function (callBack) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            callBack(this[index], Number(index), this);
        }
    }
};


console.log('================');
//Hàm every
Array.prototype.every2 = function (callBack) {
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            if (!callBack(this[index], index, this)) {
                return false;
            }
        }
    }
    return true;
}

//Hàm some
Array.prototype.some2 = function (callBack) {
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            if (callBack(this[index], index, this)) {
                return true;
            }
        }
    }
    return false;
}

//Hàm find
Array.prototype.find2 = function (callBack) {
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            if (callBack(this[index], index, this)) {
                return this[index];
            }
        }
    }
    return null;
};

//Hàm fillter
Array.prototype.filter2 = function (callBack) {
    let arrayAimals = [];
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            if (callBack(this[index], index, this)) {
                arrayAimals.push(this[index]);
            }
        }
    }
    return arrayAimals;
};


//Hàm map
Array.prototype.map2 = function (callBack) {
    let ArrNewAnimals = [];
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            ArrNewAnimals.push(callBack(this[index], index, this));
        }
    }
    return ArrNewAnimals;
};

var kq = Animals.map(function (currentValue, index, array) {
    return {
        name: currentValue.name,
        age: currentValue.age,
        weight: currentValue.weight,
        Check: (currentValue.age > 2) ? 'Yes' : 'No'
    }
});
showInformation(kq);

//Hàm reduce
Array.prototype.reduce2 = function (callback, initialValue) {
    let i = 0;
    let accumulator = initialValue;
    if (arguments.length < 2) {
        i = 1;
        accumulator = this[0];
    }
    for (; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};

var result = Animals.reduce2(function (accumulator, currentValue) {
    return accumulator + currentValue.weight;
});

console.log(result);
