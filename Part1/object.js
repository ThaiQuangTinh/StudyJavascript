var email = 'email';
var student = {
    name : 'Thái Quang Tình',
    age: 20,
    class: 'KTPM44'
    [email] = 'tinh@gmail.com',
    //Dạng lấy trực tiếp giá trị thì gọi là phương thức (function), chuỗi/number thì 
    //được gọi là thuộc tính
    getName: function () {
        return this.name;
    },
    //Đặt 1 phương thức get age
    getAge: function () {
        return this.age;
    }
}

console.log(student);
//Có 2 cách lấy ra họ tên
console.log(student.name);
console.log(student['name']);

//Thêm 1 cặp key và value vào bên trong object
student.phone = '11212121';
student['he-lo'] = 'abc';
console.log(student);

//Xóa key và value
delete student.age;

//Lưu trữ value là một function
console.log(student.getName());


//-----------------===-----------------
console.log('-----=------');
//Object constructor (xây dựng đối tượng, đưa vào thuộc tính chung)
function User (fistName, lastName, avatar) {
    this.fistName = fistName;
    this.lastName = lastName;
    this.avatar = avatar;
    //Phương thức được định nghĩa bên trong bản thiết kế này
    this.getName = function () {
        return `Họ tên: ${fistName} ${lastName}`;
    }
}

var user1 = new User ('Lili', 'Ana', 'liliana');
console.log(user1);
console.log(user1.constructor);
//Thêm vào user1
user1.title = 'Hello';
console.log(user1);
console.log(user1.getName());

//Object prototype
console.log('===============');
User.prototype.class = 'F8'; //bổ sung thêm thuộc tính khi đối tượng được tạo ra
User.prototype.getClassName = function () {
    return this.class;
}
console.log(user1.class);
console.log(user1.getClassName());

function Student (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function () {
        return `${firstName}  ${lastName}`;
    }
}

var hs1 = new Student ('Lili', 'ana');
console.log(hs1.getFullName());