/* TIỀM HIỂU VỀ CÁC KIỂU DỮ LIỆU TRONG JS */

/* dữ liệu nguyên thủy 
1/ number
2/ String
3/ Boolean
4/ Underfined
5/ Null
6// Symbol
*/

/* Kiểu dữ liệu phưc tạp
 1/ functon
 2/ object 
 3/ kiểu Array*/

 /** ==> trog ngôn ngữ lâp trình JS khá giống PHP nó sẽ xác định giá trị value truyền vào
  * xét xem biến đó sẽ có kiểu dữ liệu là gì, khác các ngôn ngữ khác cần khai báo rõ ràng 
  * trc khi gáng biến
 */




//********************** */ thực hành********************************
//number
var a = 1
var b = 2
var c = 1.5

//string
var fullName = 'Tran Huu Phuc'

//boolean
var i = true
var h = false

// kiểu underfined(không gán value cho biến đó)
var age;
var height;

// kiểu Symbol
var id = Symbol('id')
console.log(id)

//kiểu function => tạo function và gọi lại nó
var Function = function() {
    console.log('kiểu functiion')
}

console.log(Function)


/* kiểu Object  kiểu dữ liệu Object đại diện cho một tập hợp các cặp khóa-giá trị, được gọi là thuộc tính và phương thức. Điều này cho 
phép bạn tổ chức và lưu trữ dữ liệu theo một cấu trúc linh hoạt.
==> nó có thể chứa nhiều thuộc tính như mảng vậy*/
var Object = {
    name: 'Trần Phúc',
    age: 26,
    height: 175
}

console.log(Object)



//kieur mảng aray trong js ~ kiểu Object khác ở chỗ Array có đánh số thứ tự cho các phần tử value khai báo
var Array = [
    'a',
    'b',
    'c',
    'd'
]
console.log(Array)



/***********************CÁCH KIỂM TRA XEM NÓ LÀ KIỂU DL NÀO*********************************** */
var a = 10
console.log(typeof a)
var name = 'Tran huu phuc'
console.log(typeof name)
//.... tg tự tự kiểm tra nhá




