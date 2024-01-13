//Khai báo 1 mảng bao gồm các khóa học
var coures = [
    {
        id: 1,
        name: 'Java',
        coin: 100
    },
    {
        id: 2,
        name: 'Python',
        coin: 0
    },
    {
        id: 3,
        name: 'PHP',
        coin: 300
    },
    {
        id: 4,
        name: 'Ruby',
        coin: 300
    }
];

//Các phương thức khác (đều có tham số truyền vào là 1 hàm)
coures.forEach(function (coures, index) {
    console.log(index, coures);
});

console.log('===========');
//Duyệt qua từng phần tử và kiểm tra chúng có thỏa mãn một điều kiện nào đó hay không
var ifree = coures.every(function (coures) {
    return coures.coin === 0;
});

//Some: chỉ cần có 1 điều kiện đúng thì trả về true (ngược lại so với every)
var ifree2 = coures.some(function (coures) {
    return coures.coin === 0;
});

console.log(ifree2);

console.log('===========');
//Find: nếu có thì trả về chính phần tử đó, ngược lại trả về null
var kqTim = coures.find(function (coures) {
    return coures.name === 'PHP';
});

console.log(kqTim);

console.log('===========');
//filter: trả về tất cả các phần tử thỏa mãn
var kgqim2 = coures.filter(function (coures) {
    return coures.coin === 300;
});

console.log(kgqim2);

//Map: trả về array mới 
var newCoures = coures.map(function (coures, index) {
    return {
        id: coures.id,
        name: `Khoa hoc: ${coures.name}`,
        coin: coures.coin,
        textCoin: `Gia ${coures.coin}`,
        index: index
    }
});

console.log(newCoures);

console.log('===========');
//Reduce: nhận về giá trị duy nhất là...(biến lưu trữ và thực hiện lưu trữ)
/**
 * Giá trị khởi tạo là 0, gán cho accamulator
 * Return cái gì thì lưu trữ cái đó
 * currentIndex là chỉ mục của mảng
 * originArray là mảng gốc
 */
var i = 0;
var toTalCoin = coures.reduce(function (accamulator, currentValue, currentIndex, originArray) {
    i++;

    var total = accamulator + currentValue.coin;

    console.table({
        'Lượt chạy: ' : i,
        'Biến lưu trữ: ' : accamulator,
        'Giá khóa học: ' : currentValue.coin,
        'Giá trị tích trữ được: ' : total
    });

    console.log(currentValue);

    return total;
}, 0);

console.log(toTalCoin);

//Viết ngắn gọn 
var toTalCoin2 = coures.reduce(function (accamulator, currentValue) {
    return accamulator + currentValue.coin;
}, 0);

console.log(toTalCoin2);

console.log('===========');

var courses2 = ['PHP', 'Javascript'];
courses2.length = 10;   
for (var index in courses2) {
    console.log(courses2[index]);
}
