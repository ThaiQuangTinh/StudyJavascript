//include method (array, string)

console.log(Array.prototype.includes);
console.log(String.prototype.includes);

var title = 'Reponsive web design';

//Sử dụng với chuỗi
console.log(title.includes('web'));
//Chèn vào vị trí bắt đầu tìm kiếm
console.log(title.includes('Reponsive', 1));

var array = ['Javascript', 'PHP', 'C'];

console.log(array.includes('PHP'));
//Chèn vào vị trí bắt đầu tìm kiếm
console.log(title.includes('Reponsive', 1));

