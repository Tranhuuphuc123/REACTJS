/***************TIỀM HIỂU VỀ ĐỆ QUY**************************** */
/**Lý thuyết**/

// bài tập giải quyết dùng đệ quy để xóa các phần tử trùng nhau giữa 2 mảng 
// như ta thấy trong mảng a có khá nhiều thành phần trùng nhau -> cần xuất ra mảng a không có các value trùng nhau
var a = ['a', 'b', 'c', 'a', 'b', 'c', 'd']

// trong js cung cấp hàm Set()-> truyền mảng a vào nó tự lọc các mảng trùng nhau
console.log(new Set(a))

//=> tuy nhiên lúc này các giá trị vừa giải quyết lại bị khối Set bao bọc khiến value không đc trả về là một object hay Array
//=> hg giải quyết là phá giải hộp set -> dùng cách [... <new Set()>]
console.log([...new Set(a)])
console.log(typeof [...new Set(a)]) // lúc này nó đã trở thành một object




/**************************Kiến thức đệ quy******************************** */
/*
 => Đệ quy là cach gọi lại hàm chính nó

   ## mẫu:
      function Dequy() {
            Dequy();
     }

      Dequy();

    ** Lưu ý giống như đệ quy của java , c++ nó cần các yêu cầu sau
    + điểm neo(điểm dừng)
    + phần logic xử lý để có đk xét điểm dừng
*/

// tạo ra một countdown đếm ngc thời gian
function countDown(num) {
    // điểm neo dừng lại
    if (num < 0) {
        return num
    }
    console.log(num)
    return countDown(num - 1)
}
// gọi lại function countDown truyền vào tham số 10
countDown(10)



//duyệt mảng với đệ quy
var myArr = ['Java', 'Php', 'C#']

function loop(start, end, cb) {
    // điểm neo
    if (start < end) {
        cb(start)
        return loop(start + 1, end, cb)
    }
}

loop(0, myArr.length, function(index) {
    console.log(myArr[index])
})




// tính giai thừa với đệ quy
function giaiThua(num) {
    var gt = 1
        // điểm neo
    if (num > 0) {
        return num * giaiThua(num - 1)
    }
    return 1
}

console.log(giaiThua(3))