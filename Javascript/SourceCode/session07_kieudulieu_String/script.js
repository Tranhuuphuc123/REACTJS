/* TIỀM HIỂU CHI TIẾT VỀ KIỂU DỮ LIỆU STRING */

/*Yêu cầu kiến thức:

1/ tạo chuỗi
2/ các case sử dụng backslash (dấu \'')
3/ xêm độ dài chuỗi
4/ chú ý dộ dài khi viết code
5/ teplate string ES6*/

//1 Các cách tạo chuỗi
var name = 'Tran Huu Phuc'
var name2 = new String('Tran Huu Phuc')

console.log(typeof name)
console.log(typeof name2) // cách 2 thg trả về khai báo String là một kiểu object hơn là String


//2 các case sủ dụng dấu '\' trong tính huống trong cùng một câu mún đưa nd nào đó vào dấu ''
var name3 = 'Tran Huu Phuc la \'sinh vien\' '
console.log(name3)

var name4 = 'Tran Huu Phuc là "sinh vien" ' // có thể dùng khác dấu
console.log(name4)



//3 xem độ dài chuỗi: dùng lenght
var name5 = 'Tran Huu Phuc'
console.log(name5.length)



//4 chú ý cách xử lý khi string quá đài: dùng toán tử '+' nối chuỗi hoặc ký tự '\n' xuốn dòng
var chuoi =
    'Tham gia nhóm Học lập trình tại F8 trên Facebook để cùng nhau trao đổi trong quá trình học tập ❤️'
    +
    'Các bạn subscribe kênh Youtube F8 Official để nhận thông báo khi \n có các bài học mới nhé ❤️'

console.log(chuoi)
    

//5 sử dụng template String (dấu `` kết hợp ${}) để nối chuỗi mà không dùng truyền thống là toán tử '+'
console.log('toi la: ' + name + name2) // cách truyền thống
console.log(`toi la: ${name} ${name2}`)// sử dụng template String dấu `` kết hợp nối chũi ${<tên chuỗi trc đó>}






/*******************************LÀM VIỆC VỚI CHUỖI************************************ */
/*
 1/ Lấy chiều dài: length
 2/ Find index: tìm vị trí phần tử trong chuỗi
 3/ cut String: cát chuỗi
 4/ Replace: thay thế ký tự trong chuỗi
 5/ Convert to Upper case: chuyển đổi chuỗi thành các ký tự in hoa
 6/ Convert to lower case: chuyển đổi ksy tự trông chuỗi thành in thường
 7/ Trim: cắt khoản trống trong chuỗi
 8/ Split: phân tách chuỗi
 9/ Get a character by index: lấy ký tự mong muốn ở vị trí cụ thể
*/

var chuoi1 = 'toi la lập trình viên Aptech'
var chuoilap = 'tôi là lập trình viên là sinh viên là nhân viên'
var chuoiinhoa = 'TOI LA LẬP TRÌNH VIÊN'
var chuoithua = '      Phúc la lap trinh vien'
//1: length: lấy độ dài chuỗi
console.log(chuoi1.length)
//2 tìm vị trí chuỗi find index
console.log(chuoi1.indexOf('la')) 
console.log(chuoilap.indexOf('là', 6)) // trong chuoilap có nhiều từ 'là' mun xem vị trí 'là' thứ 2
console.log(chuoilap.lastIndexOf('là')) // xem vị trí 'là ở cuối đếm lại dùng lastIndexOf'
console.log(chuoi1.search('la'))

//3 cát chuỗi cut String: dùng với slice để cắt
console.log(chuoi1.slice(6, 10)) // cắt chữ 'lập' nó ở vj trí bắt đầu là 6 và kt là 10-
console.log(chuoi1.slice(4)) // cắt hết tù 4 -> hết
console.log(chuoi1.slice(-7, -1)) // cắt the chiều từ trái qua phải dùng giá trị âm


//4 Replace thay thế ký tự chuỗi
console.log(chuoi1.replace('la', 'là')) // thay thê chữ 'la' thành chữ 'là' trong chuoi1
console.log(chuoilap.replace(/là/g, 'một' )) // dùng biểu thức chính quy '/../g' để thay thê tất cả giá trị có cũng tên



//5 chuyển thể thành inhoa in thường
console.log(chuoi1.toLocaleUpperCase()) // in hoa
console.log(chuoiinhoa.toLocaleLowerCase()) // chuyển in thường

//6 trim: cắt khoản trống: lưu ý cắt khoản trống hai bên chuỗi thui nha
console.log(chuoithua)
console.log(chuoithua.trim(6))



//8 split tách chuỗi: lưu ý khi tách cần có một điểm chung để phân biệt(dấu ,...)
var array = 'java, php, ruby, js'
var arraydon= 'javascript'
console.log(array.split(','))
console.log(arraydon.split('')) // tách một chuỗi thành từng chữ cái


// 9 get index in String: lấy ký tự mong mún trong chuỗi bởi indexx cho trc
var get_index = 'Huu Phuc'
console.log(get_index.charAt(4))// lấy ra đc chữ P ở vị trí 4 trong chuõi
console.log(get_index[4]) // cách khác tg tự chức năng

