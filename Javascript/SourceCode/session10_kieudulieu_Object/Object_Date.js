/**TIỀM HIỂU VỀ KIỂU DATE CHO oBJECT */
/**lÝ THUYẾT"
 * 1/ khái niệm
 *  => Date lấy ra giá trị thười gian
 * 2/ sử dụng
 */


// cách khác với date -> lưu ý nếu không khai báo với new thì đây không phỉa là object mà là kiểu string
// String thì là chũi đơn thuần không thể truy xuất vào object date đc vì nó đang là string-> không khuyến khích dùng
var date1 = Date()
console.log(date1)


// khai báo chuẩn
var date = new Date()
console.log(typeof date) // kiểm tra có đúng là kiểu đối tượng
console.log(date)


// láy ra năm
var year = date.getFullYear();
console.log(year)

//lấy ra tháng
var month = (date.getMonth() + 1 )
console.log(month) //getmonth nó trả về 12 tháng tính từ 0- 11 nên mới +1 để cho đúng

//lấy ngày
var day = date.getDate()
console.log(day)

// lấy ra giò
var hour = date.getHours()
console.log(hour)

// lấy ra phút
var minute = date.getMinutes()
console.log(minute)

//lấy ra giây
var second = date.getSeconds()
console.log(second)


// in ra ngày tháng năm theo cách sắp xếp của mình
console.log(`${day}/${month}/${year} ${hour}h`)


