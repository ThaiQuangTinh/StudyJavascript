var monHoc = [
    'Toán',
    'Văn',
    'Anh',
    'Lý',
];

var ngonNgu = new Array ('C', 'C#');

console.log (typeof monHoc);
console.log(Array.isArray(ngonNgu));

//To string
console.log (monHoc.toString());
//Join
console.log (monHoc.join(' - '));
//Pop (xóa phần tử cuối cùng của mảng và trả về phần tử đã xóa)
console.log(monHoc.pop());
//Push (thêm phần tử vào cuối mảng và trả về độ dài mới của mảng)
console.log(monHoc.push('Hóa', 'Anh'));
//Shift (xóa phần tử đầu tiên của mảng và trả về phần tử đã xóa)
//Unshift (thêm phần tử vào đầu mảng và trả về độ dài mới của mảng)
//Splicing (xóa, cắt,chèn phần tử mới vào mảng)

console.log('--------------------------------');
var animals = ['pig', 'chicken', 'turtle'];
console.log(animals);
animals.splice(0, 2); //xóa 2 phần tử bắt đầu từ vị trí 0
animals.splice(1, 0, 'dog');  //chèn 1 phần từ vào vị trí 1 và không xóa phần tử nào

//Concat (nối mảng)
var animals2 = ['cat'];
animals.concat(animals2);
//Slices (cắt phần tử của mảng)
animals.slice(1, 2); //Cắt 2 phần tử từ vị trí thứ nhất



