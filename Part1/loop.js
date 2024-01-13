//Vòng lặp
for (var i = 1; i <= 2; i++) {
    console.log(`${i}. I really like you`);
}

var myArray = [
    'PHP',
    'JavaScript',
    'Python',
    'C',
    'Java',
];

var arrLength = myArray.length;
for (var i = 0; i < arrLength; i++) 
{
    console.log(myArray[i]);
}

//For  in (ví dụ này ứng dụng cho object, có thể áp dụng cho mảng - key là chỉ số của mảng)
var myInformation = {
    name: 'Liliana',
    age: 20,
    address: 'Tam Quan'
}

for (var key in myInformation) {
    console.log(key);
    console.log(myInformation[key]);
}

//Test
var hoTen = 'Liliana';
console.log(hoTen[1]);
for (var key in hoTen) {
    console.log(hoTen[key]);
}

//Bài tập
function run(object) {
    var arr = [];
    for (var key in object) {
    arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
    }
    return arr;
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));


//For off --lấy ra từng giá trị của phần tử bên trong mảng

//Có thể thay thế mảng bằng chuỗi
for ( var value of myArray) 
{
    console.log(value);
}
//Lấy ra giá trị của object
console.log(Object.keys(myInformation));
console.log(Object.values(myInformation));
for (var value of Object.values(myInformation)) 
{
    console.log(value);
}

//Vòng lặp while
var i = 1;
while (i < 10) {
    console.log(i);
    i++;
}

//Vòng lặp do while
var b = 1;
do {
    console.log(b);
    b++;
}
while (b <= 10);


//Vòng lặp lồng nhau
var array2 = [
    [1, 2],
    [3, 4],
    [5, 6],
]

for (var i = 0; i < array2.length; i++)
{
    for (var j = 0; j < array2[i].length; j++)
    {
        console.log(array2[i][j]);
    }
}

//Vòng lặp
//In các số từ 100 về 1
console.log('In các số từ 100 về 1');
for (  var i = 100; i > 0; i--)
{
    console.log(i);
}

//In ra 0 5 10 15
console.log('In theo cấp số cộng');
for ( var i = 0; i < 100; i+= 5)
{
    console.log(i);
}