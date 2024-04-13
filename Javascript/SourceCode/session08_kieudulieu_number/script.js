/* KIẾN THỨC VỀ KIỂU DỮ LIỆU SỐ NUMBER TRONG JS */
/*
  1/ Tạo giá trị number
   + cách tạo
   + kiểm tra data type: typeOf

 2/ Làm việc với number
  - To String: chuyển thành ký tự
  - To Fixed: làm tròn dưới(giá trị thập phần làm tròn) 
*/

//1 cách tạo và khai báo với number
var age = 18
var PI = 3.14

var sohoc = new Number(10) // một cách tạo với hàm khởi tạo new (hạn chế dùng)

console.log(typeof PI)
console.log(sohoc)

var result = 20 / 'a'
console.log(isNaN(result)) // kiểm tra xem result có đúng là NaN không


//2 Làm việc với number
var myString = age.toString()
console.log(age.toString())
console.log(typeof myString) // biến số 18 thành String


console.log(PI.toFixed()) // làm tròn số lên vơi giá trị thập <5 thì làm tròn dưới(vd: 3.49 ~3, 3.53 ~ 4)
var tiente = 3265.568889215
console.log(tiente.toFixed(2)) // làm tròn thập phân thứ 2 sau dấu ,
//............