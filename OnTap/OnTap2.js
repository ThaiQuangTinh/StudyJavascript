//Khai báo mảng danh sách sinh viên
var DSSV = [
    'Thái Quang Tình',
    'Nguyễn Duy Tùng',
    'Nguyễn Phát',
    'Nguyễn Anh Tú',
    'Trần Công Minh'
];

var lucky = Math.floor(Math.random() * (10 - 5) + 0);
console.log(`Sinh viên may mắn là: ${DSSV[lucky]}`);

//Chuỗi
//Viết hàm lấy ra họ, tên đệm và tên
function layThongTinHoTen(hoTen) {
    // Tách họ, tên đệm và tên bằng cách sử dụng phương thức split()
    var arrTen = hoTen.split(" ");

    // Lấy giá trị của họ, tên đệm và tên từ mảng kết quả
    var ho = arrTen[0];
    var tenDem = arrTen.slice(1, -1).join(" ");
    var ten = arrTen[arrTen.length - 1];

    // Trả về đối tượng chứa thông tin
    return {
        ho: ho,
        tenDem: tenDem,
        ten: ten
    };
}

// Sử dụng hàm để lấy thông tin từ biến hoTen
var thongTin = layThongTinHoTen("Thái Quang H Tình");
console.log(thongTin.ho); // In ra: Thái
console.log(thongTin.tenDem); // In ra: Quang
console.log(thongTin.ten); // In ra: Tình
