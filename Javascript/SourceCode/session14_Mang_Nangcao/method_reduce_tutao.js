/******************************************************************************* */
/*********************PHƯƠNG THỨC REDUCE TỰ TẠO*********************************** */

//=> Trong bài này ta tiềm hiểu về cách tự tạo ra method reduce
//=> hiểu rõ cách vẫn hành của reduce trong js

// tạo hằng số js
const numbers = [1, 2, 3, 4, 5]

var rs = numbers.reduce(function (cal, currentNumber) {
    return cal + currentNumber   
}, 0)

console.log(rs)


// hoặc có thể viết kiểu lambda
var rs1 = numbers.reduce((cal, currentNumber) =>  {
    return cal + currentNumber   
},0)

console.log(rs1)



/****************************************************************************************/
/**************TIẾN HÀNH TỰ ĐỊNH NGHĨA REDUCE RIÊNG DO MÌNH TỰ TẠO***********************/

/*
 + callback: hàm gọi lại
 + result: chính là initialValues(giá trị khởi tạo) cũng chính là kết quả trả về
 => nên đặt lun là result
*/
Array.prototype.reduce_phuc = function (callback, result){
    for (let i = 0; i < this.length; i++){
        /* trả đủ đối số đung cấu trúc: result biến lưu trữ, this[i] là biến hiện tại
        i, giá trị index của từng pt mảng, this là lớp gốc*/
        result = callback(result, this[i], i, this)
    }
    return result
}

// sửu dụng reduce_phuc tự tạo
const numbers1 = [1, 2, 3, 4, 5]

var rs2 = numbers1.reduce_phuc(function (cal, currentNumber) {
    return cal + currentNumber   
}, 0)

console.log('kết quả reduce tự tạo ' + rs2 )
