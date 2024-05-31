/* Toán tử trong js */

/*
  các dạng toán tử trong javascript
  1/ Toán tử số học - Arithmetic
  2/ Toán tử gán - Assignment
  3/ Toán tử so sánh - Comparison
  4/ Toán tử logic - Logical
  5/ toán tử nối chuỗi
  6/ toán tử boolean(thuộc toán tử logic với gia trị true false)
*/

// toán tử số học: + - * / % ++ --
var a = 1 + 2
console.log(a)

// toán tử gán: = += -= *= /= **=
var name = 'Tran huu phuc'

// toán tử so sánh: ==, !=, >, <, >= , <= , ===
var a = 1
var b = 2
if (a == b) {
    console.log('a lớn hơn b')
} else {
    console.log('sai rồi')
}


// toán tử logical: &&, ||, !
var a = 1
var b = 2
if (a>0 && b>0) {
    console.log("a và b lớn hơn không")
}


// toán tử nối các chuỗi
var firstName = "Trần"
var LastName = "Phúc"
console.log(firstName + ' ' + LastName)


// toán hoạc boolean
/* lưu ý có 6 toán tử: 
 0
 ''
 NaN
 false 
 underfined
 null
 ==> 6 toán hạng này mặc định là false
  */
var isSuccess = true
console.log(isSuccess)
var f = 1 
var h = 2
var dapan = f > h
 console.log(dapan)


// ==> xem lại toán tử của các ngôn ngữ lập trình khác
