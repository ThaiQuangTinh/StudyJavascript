//Hàm tính tổng 2 số nguyên
function tinhTong (a, b, c) {
    console.log(a + b);
    if ( c) {
        console.log(a + b + c);
    }
}

//Hàm kiểm tra số chẵn hay lẽ
function test (a, b = null) {
    if ( b == null) {
        if ( a % 2 == 0)
            console.log(a + ' là số chẵn');
        else 
            console.log(a + ' là số lẻ');
    }
    else {
        console.log(a + b);
    }
}

//Test argument
function duyet () {
    var chuoi = ' ';
    for ( var a of arguments) {
        chuoi += `${a} - `;
    }
    console.log (chuoi);
}

duyet ('Hello', 1, true);

//Hàm trong hàm
function FinF (a, b) {
    function hieu (a, b) {
        return (a - b);
    }
    console.log(`${a} - ${b} = ` + hieu(a, b));
}

FinF(5, 1);

//Các lại hàm
//Declaration function 
function dlf () {
    console.log('hello 1');
}

//Express function
var ft = function () {
    console.log('hello 2');
}

dlf();
ft();


setTimeout (function () {

});

var myOB = {
    myFunction: function () {

    }
}


//Viết hàm kiểm tra đăng nhập
function kiemTraDangNhap (userName, passWord) 
{
    if ( userName != null && passWord != null)
    {
        if ( userName == 'thaiquangtinh' && passWord == 'tinh123')
        {
            console.log('Đăng nhập thành công');
        }
        else {
            console.log('Sai tài khoản hoặc mật khẩu');
        }
    }
    else {
        console.log('Bạn vui lòng nhập đầy đủ thông tin');
    }
}

//Gọi hàm kiểm tra đăng nhập
kiemTraDangNhap('thaiquangtinh', 'tinh123');
kiemTraDangNhap();

