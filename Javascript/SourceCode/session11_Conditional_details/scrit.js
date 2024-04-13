/*************************CÂU LỆNH RẼ NHÁNH ĐIỀU KIỆN************************** */
/*Lý thuyết:
 => phàn đi chi tiết hóa các lệnh ré nhánh điều kiện
 1/ if-else
 2/ switch-case
*/


// kiến thức basic if-else
var date = 2
if (date == 2) {
    console.log("hôm nay là thứ 2")
} else if (date == 3) {
    console.log("Hôm nay là thứ 3")
} else if (date == 4) {
    console.log("Hôm nay là thứ 4")
}

// dùng lệnh rẽ nhánh với swith-case
var date = 4;
switch (date) {
    case 2:
        console.log("Hôm nay là thứ 2")
        break;
    case 3:
        console.log("Hôm nay là thứ 3")
         break;
    case 4:
        console.log("Hôm nay là thứ 4")
        break;
    case 5:
        console.log("Hôm nay là thứ 5")
        break;
}



// toán tử 3 ngôi
// tạo một object
var course = {
    name: 'Javascripts',
    coin: 250
}

if (course.coin > 10) {
    console.log(`có giá: ${course.coin} coins`)
} else {
    console.log("Miễn phí")
}

//<=> thay thế đoạn xử lý trên bằng tán tử 3 ngôi
course.coin > 20 ? console.log(`có giá: ${course.coin} coins`) : console.log("Miễn phí")

// or viết như sau
var result = course.coin > 20 ? `${course.coin} coins` : console.log('miễn phí')
console.log(result)
