/* ************ HỌC VỀ KIẾN THỨC FUNCTION VỀ HÀM TRONG JS******************* */
/*
I/ LÝ THUYẾT:
  1/ hàm?
   - một khối mã
   -  làm một việc cụ thể nào đó

  2/ Loại hàm?
   - Built-in
   - Tự định nghĩa

  3/ Tính chất
   - Không thực thi khi định nghĩa
   - Sẽ thực thi khi đc gọi 
   - Có thể nhận tham số
   - Có thể trả về 1 giá trị
*/


/****thực hành tạo hàm******/

function showDialog() {
    console.log("hello")
}
//gọi hàm và thực thi với toán tử call(tức dấu '()' )
showDialog()



/********************THAM SỐ TRONG FUNTION*****************************/
/*
 1/ Khái niệm:
  - tham số là một giá  trị truyền vào khi gọi đến một function
  - tham số value dùng để tính toán hay ...
  - kiểu dl không giới hạn
  - tính chất riêng tư, chỉ có  giá trị trong hàm nếu đem ra hỏi function nó không thực thi đc

 2/ Cách truyền tham số
 
 3/ Arguments?
  -> có tính chất giống mảng, tập hợp các tham số nhiều kiểu dl trong cùng một argument

*/

// khai báo và gọi
function writLog() {
    console.log("đây là dòng log")
}
writLog()


//định nghĩa tham số và truyền đối số cho nó -> lơij ích mõi lần gọi có thể truyền các giá trị khác nhau
function writeLog(value, value1) {
    console.log(value)
    console.log(value1)
}
writeLog("hello đây là cách truyền đối số cho tham số")

// truyền nhiều tham số không giới hạn
writeLog('A', 'B')



// đối tượng arguments -> có thể truyền nhiều tham số mà không cần khai báo trc
function ham() {
    console.log(arguments)
}
ham('a', 'b', 'c', 'd')



// vòng lặp for vơi function -> điểm mạnh khi dùng vòng for trong arguments là nó sẽ sắp xếp hiên thị bố cục ~ array
function ham2() {
    for (var param of arguments) {
        console.log(param)
    }
}
ham2('a', 'b', 'c', 'd')


// hiểu ý nghĩa của return
function sum(a, b) {
    return a + b
}
var result = sum(2, 5)
console.log(result)

/**Lưu ý:
 * => nếu function khai báo trong một function thì giá trị function đó chỉ tồn tại
 * trong function cha thui nghĩa là chỉ thực thi và gọi ngay trong function cha đó
 * như vd: ta gọi funcction con trong function cha
 *-> và bên ngoài gọi đến function cha sẽ thực thi đc function con
 */

function parent() {
    function children() {
        console.log('alo')
    }
    children()
}

// thưc thi 
parent()


/****************************************CÁC LOẠI HÀM*********************************** */
/*
 1/ Declaration function
  -> 
 2/ Expression function
 3/ Arrow function
*/

//1  Declaration function chính là cách tạo ra một function truyền thống
function show() {

}

/* 2 Expresion function: cách tạo ra function bằng cách gán function cho một biến cụ thể-> biến biến đó thành mọt function
==> có thể đặt tên function hay không cũng đc*/
var show = function() {

}

var obj = {
    show: function() {

    }
}


// 3/ Arrow function:

const hamtong = (a, b) => {
    return a + b
}

var ketqua = hamtong(4, 5)
console.log(`kết quả hàm tổng : ${ketqua}`)
