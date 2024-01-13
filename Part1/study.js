//Khai báo mảng chứa danh sách các môn học
var DSMH = ['Toán', 'Văn', 'Anh', 'Lý', 'Hoá'];

//Random một môn học ngẫu nhiên
var soLuong = DSMH.length;
var moHocRanDom = function (DS) {
    return (DS[ Math.floor(Math.random()*DS.length)]);
}

console.log('Môn học ngẫu nhiên là: ' + moHocRanDom(DSMH));