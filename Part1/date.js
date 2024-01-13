var date = new Date(); 
var date2 = Date(); //Đây không phải là đối tượng
console.log(date.getFullYear());

function getNextYear () {
    var date = new Date();
    return date.getFullYear() + 1;
}

console.log(getNextYear());