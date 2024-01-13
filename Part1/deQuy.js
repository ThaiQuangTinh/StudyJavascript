//Phải có điểm dừng
//Phải có logic handle =>Tạo ra điểm dừng

function countDown (num) {
    if (num >= 0)
    {
        console.log(num);
        num--;
        countDown(num);
    }
}

//Tạo một mảng
var languages = [
    'Java',
    'Python',
    'JavaScript',
    'PHP'
]

function duyetMang (mang, so) {
    if (so < mang.length)
    {
        console.log(mang[so]);
        duyetMang(mang, so + 1);
    }
}

duyetMang(languages, 1);

//
function loop (start, end, cb) {
    if ( start <= end) {
        cb(start);
            return loop(start + 1, end, cb);
    }
}

var arr3 = ['Java', 'Python', 'C#'];

loop (0, arr3.length - 1, function (index) {
    console.log('Index: ', index);
})

//Tính giai thừa
function tinhGT (n) {
    if (n > 0) {
        return (n * tinhGT (n-1));
    }
    return 1;
}

console.log(tinhGT(5));