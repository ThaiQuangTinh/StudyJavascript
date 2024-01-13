//Khai báo só bằng đối tượng
var so = new Number(10);
console.log(so.toString());
//Kiểm tra số có hợp lệ hay không
console.log(isNaN(so));
function kiemTraSo (value) {
    if (!isNaN(value))
        return true;
    else
        return false;
}


function isNumber (value) {
    if (typeof value === 'number' && !isNaN(value))
        return true;
    else
        return false;
}

console.log(isNumber(NaN));