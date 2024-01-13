//Math Pi
var pi = Math.PI;
console.log(pi);
//Math round: làm tròn số
//Math abs: trị tuyệt đối
//Math celi: làm tròn trên (4.1 -> 5)
//Math floor: làm tròn dưới
//Math random: trả về số thập phân ngẫu nhiên nhỏ hơn 1 | 0 ≤ random < 1
console.log(Math.floor(Math.random()*4));

var random = Math.floor(Math.random()*4); 
var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
];
console.log(bonus[random]);


var random2 = Math.floor(Math.random()*100);
if ( random2 < 40) {
    console.log('Bạn đã may mắn');
}

//Trả về 1 số ngẫu nhiên từ mảng
var student2 = [
    'Thái Quang Tình',
    'Nguyễn Phát',
    'Nguyễn Duy Tùng',
    'Trần Công Minh',
    'Nguyễn Anh Tú'
]
function getRandomItem (array) {
    var random = Math.floor(Math.random()*array.length);
    return array[random];
}

console.log(`Người may mắn nhất là: ${getRandomItem(student2)}`);


function run(a) {
    if ( a % 15 === 0)
        return 3;
    else if ( a % 5 === 0)
        return 2;
    else if ( a % 3 === 0)
        return 1;
    else 
        return 0;
}

console.log(run(3));