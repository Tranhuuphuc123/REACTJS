/*********************CÁCH TỰ ĐỊNH NGHỊA MỘT LIB THUỘC TÍNH********************* */
//=> sẽ có một ố hàm lib thuộc tính do người lập trình tự định nghĩa bằng cách sau:

/**câu trúc:
 * Array.prototype.< tên thuộc tính> = function() {}
 * 
 */
//vd1: sử dụng hàm tự định nghĩa với như thuộc tính reduce
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



//================================================

// vd2: sử dụng xây dựng thuộc tính tự tạo giống map
Array.prototype.map_phuc = function () {
   console.log(this)
}

var object = [
    'java',
    'php',
    'c#'
]

object.map_phuc()
// tự định nghĩa demo đơn giản gọi lại object vừa tạ truyền lib  mình tự ta ra và chạy


/**............
 * 
 * => nói tóm lại ngoài các thuộc tính hày hàm có sẵn built in ta có thể hoàn toàn tự
 * định nghĩa ra thuộc tính lib tự tạo cho riêng mình 
 * ==> tùy trình độ người viết mà xd ra mộ thuộc tính reeng biệt phục vụ ý đồ của người lập trình
 */
 