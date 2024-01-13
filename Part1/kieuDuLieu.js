//Kiểu số 
var a = 5;

//Kiểu chuỗi
var hoTen = 'Liliana';

//Kiểu đúng sai
var dungSai = true;

//Kiểu undefined (giá trị chưa được khởi tạo thì nó sẽ báo là undefined)
var b;
console.log('Giá trị của b là', b);

//Kiểu null (không có gì)
var c = null;
console.log(c);

//Kiểu symbol (mang giá trị duy nhất)
var iid = Symbol('hoTen');
console.log(iid);

//Kiểu function
var myFunction = function () {
    alert('Xin chào các bạn');
}
myFunction();

//Kiểu object
var myObject = {
    name : 'Thái Quang Tình',
    age : 20,
    address: 'Bình Định'
}

console.log('My object', myObject);

//Kiểu dữ liệu array (object)
var myArray = [1, 2, 3, 4];
console.log(myArray);

//Cách kiểm tra kiểu dữ liệu (object)
console.log(typeof(hoTen));
console.log(typeof myArray);