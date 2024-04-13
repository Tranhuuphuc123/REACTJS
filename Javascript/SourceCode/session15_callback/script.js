/***********************KIỀN THỨC VỀ CALL BACK********************************* */
/*LY THUYẾT:
 => hàm đc gọi lại(không phải đệ quy đâu nhá) đơn giản là hàm function đc truyền qua đối
 số khi gọi hàm khác:
 => 3 yêu cần cần đạt đc để đc xem là call back:
  + là function
  + đc truyền qua đối số
  + đc gọi lại function (trong hàm nhận đối số)
*/

function myArr(param) {
    console.log(param)
}

myArr(123)
//=> khá giống cách tạo function đặt tham số và truyền đối số , gọi lại function và xuất kết quả



//chuẩn hơn về back
// yêu cầu 1: nó là function
function myCallback(param) {
    console.log(param)
}
// truyền qua đối số
myCallback('huu phuc')


/**********************************cont Callback************************************************* */
//demo vd
var coures = [
    'java',
    'php',
    'c#',
    'ruby'
]
// call back goi lai function trong ham nhan doi so la mot mang course
var htmls = coures.map(function (coures) {
    return `<h1> ${coures}</h1>`
})

console.log(htmls)


/*************** tự định nghĩa thuộc tính map2********************* */
Array.prototype.map2 = function (callback) {
    for (var i = 0; i < this.length; i++){
        callback(this[i],i)
    }
}

var coures1 = [
    'java',
    'php',
    'c#',
    'ruby'
]

coures1.map2(function (cal, index) {
    console.log(index, cal)
})