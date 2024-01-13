//Review

//Object data type
var email = 'email'
var student1 = {
    name: 'Lili',
    age: 20,
    subject: 'Math',
    getInformation: function () {
        return ` Họ tên: ${this.name} \n Tuổi: ${this.age} \n Môn học: ${this.subject}`
    }
}
student1[email] = 'tinh@gmail.com';
console.log(student1);
//Interate over the propertis within an object (Duyệt các thuộc tính bên trong đối tượng)
for (var key in student1) {
    console.log(key + ": " + student1[key]);
}

console.log(student1.getInformation());
console.log('======================');
//Aniaml object constructor (Hàm tạo đối tượng động vật)
function Animals (name, footerNumber, sex) {
    this.name = name;
    this.footerNumber = footerNumber;
    this.sex = sex;
};

//Intantiate an object (khởi tạo đối tượng)
var Turtle = new Animals ('Turtle', 4, 'female');
var Snake = new Animals ('Snake', 0, 'female');
var Horse = new Animals ('Horse', 4, 'male');

var ListOfAnimals = [Turtle, Snake, Horse];
for (var animalIndex in ListOfAnimals) {
    var animalInfor = ListOfAnimals[animalIndex];
    for (var keyAnimal in animalInfor) {
        if (animalInfor.hasOwnProperty(keyAnimal)) {
            console.log(keyAnimal + " : " + animalInfor[keyAnimal]);
        }
    }
}

console.log('=====================');
//Plant object constructor
function Plant (name, height, color) {
    this.name = name;
    this.height = height;
    this.color = color;
    this.getInformationPlant =  function () {
        console.log(`Name: ${this.name} Height: ${this.height} Color: ${this.color}`);
    };
};

var Plant1 = new Plant ('Banana tree', 3, 'Grenn');
Plant1.getInformationPlant();


console.log('=====================');
//Object prototype (thuộc tính và phương thức dùng chung, ít tốn bộ nhớ hơn, cải thiện hiệu suất)
Plant.prototype.checkHeight = function () {
    return ((this.height > 2) ? "Tall tre" : "Short tree");
};

console.log(Plant1.checkHeight());
