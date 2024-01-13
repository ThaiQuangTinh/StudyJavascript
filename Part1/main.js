/*
//Khai báo biến
var fullName = 'Liliana';
//In ra dòng chữ thông báo bên tab console
console.log(fullName);
//Hàm alert
alert('Chào mừng bạn đến với trang web');
//Hàm confirm
confirm('Xác nhận bạn đã đủ tuổi');
//Hàm prompt
prompt('Vui lòng nhập họ và tên của bạn');
*/

//Hàm setTimout (chạy đoạn code sau một thời gian)
setTimeout(function() {
    alert('Thông báo');
}, 3000)

//Chạy đoạn code sau 1 khoảng thời gian mà nó liên tục lặp đi lặp lại
setInterval(function() {
    console.log('Đây là log' + Math.random);
}, 1000)
 
