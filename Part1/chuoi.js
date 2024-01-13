var hoTen = new String ('Liliana');
var hoTen2 = 'Liliana la \'pháp sư\'';
console.log(hoTen2.length);

//template string
var firstName = 'Liliana';
var lastName = 'Nguyệt Mị Ly';

console.log(`Tên đầy đủ là: ${firstName} ${lastName}`);

var fullName = firstName + ' ' + lastName;
console.log(fullName);

//Hàm in ra từng kí tự của chuỗi
function inChuoi (fullName) {
    for (let i = 0; i < fullName.length; i++)
    {
        console.log(fullName.charAt(i));
    }
}

/**
 * Lenght
 * Find index
 * Cut string
 * Relpace
 * Convert to upercase
 * Convert to lowercase
 * Trim (xóa khoảng trắng ở đầu và cuối)
 * Split
 * Get a character by index
 */
var myString = 'Xin chào các bạn học js';
var doDai = myString.length;
console.log(doDai);
console.log(myString.indexOf('các')); //trả về khác -1 nếu tìm thấy
console.log(myString.search('Xin'));
//Cắt chuỗi
console.log(myString.slice(0, 3));
console.log(myString.slice(4));
console.log(myString.slice(0, -3));
//Replace (thay thế)
var myString2 = 'Hello js trong js';
console.log(myString.replace('Xin chào', 'Hello'));
console.log(myString2.replace(/js/g, 'JavaScript'));
console.log(myString2.toUpperCase())

//Split
var nnlt = 'C, C++, Java, Python, C#, CSS';
console.log(nnlt.split(', '));
console.log(nnlt.split(''));

//Lấy kí tự
var myString3 = 'Liliana';
console.log(myString3.charAt(1));
console.log( typeof myString3[2]);

var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

function strToArray(str) {
    return str.split(',  ');
}

// Expected results
console.log(strToArray(coursesStr));


var languages = 'PHP, Java, C#';
function stringToArray (str) {
    return str.split(', ');
}
console.log(stringToArray(languages));

console.log(languages.toUpperCase());

//Hàm tính tổng các số <= n
function tinhTongN (n) {
    var sum = 0;
    for ( let i = 0; i <= n; i++)
    {
        sum += i;
    }
    return sum;
}

//Gọi hàm tính tổng các số bé hơn n
console.log(tinhTongN(10));