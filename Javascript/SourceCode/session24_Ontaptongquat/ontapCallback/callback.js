/**
 * callback là gì: hàm function được truyfn qua đối số khi gọi hàm khác
 * điều kiện cần đủ để nó là một callback
 *  + nó phải là một hàm
 *  + được truyền qua đối số
 *  + được gọi lại (trong hàm nhận đối số)
 * 
 */


/***************demo khái niệm************************ */
//## demo ví dụ vè callback
//xây dựng một hàm và khởi tạo tham số cho function
myCallback = () => {
    
}


//tạo một function khác và truyền function myCallback trên làm đối số cho nó
myFuntion = (value) => {
    console.log(value)
} 

myFuntion(myCallback) // lúc này myCallback đã trở thành một callback đúng nghĩa






/**************************bài tập minh họa****************************** */
//bài tạp minh họa callback
//#1 ta tạo  4 function bình thường cộng trừ nhân chia
sum = (a, b) => {
    return a + b
}

sub = (a, b) => {
    return a - b
}

div = (a, b) => {
    return a / b
}

multi = (a, b) => {
    return a * b
}


//#2 tạo một function khác để truyefn các function trên làm đối số
// lưu ý các function cộng trừ nhân chia trên khi đc truyền vào thì gọi là call back nhá
caculator = (a, b, callback) => {
     return callback(a,b)
}
 
//# xuất kết quả
console.log('kết quả phép công: ' + caculator(1, 2, sum))
console.log('kết quả phép trừ: ' + caculator(4, 2, sub))
console.log('kết quả phép chia: ' + caculator(8, 2, div))
console.log('kết quả phép nhân: ' + caculator(1, 2, multi))



