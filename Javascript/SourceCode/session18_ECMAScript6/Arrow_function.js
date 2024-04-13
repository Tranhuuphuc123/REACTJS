/********************TIỀM HIỂU VỀ CÚ PHÁP ARROW FUNCTION******************** */
/*
 => KHÁI NIỆM:
  - Đây cách viết kiểu lambda viết hàm với dấu =>
*/

// hàm bình thường
function logger(log) {
    console.log(log)
}

logger('Khóa học lập trình Aptech')


// gán function cho biến -> thì biến đó thành một function lun
const logger1 = function (log) {
    console.log(log)
}
logger1('Aptech')

//<=> chuyển cách viết trên thành Arrow function
const logger2 = (log) => {
    console.log(log)
} 

logger2('Aptech 2023')



//demo khác
const sum = (a, b) => {
    return a + b
}
console.log(`Tổng Sum là: ${sum(10, 10)}`)


// hoặc viết gọn hơn nữa vơi Arrow function
const sum1 = (a, b) => a + b
console.log(`Tổng Sum1 là: ${sum1(20, 20)}`)


const logger3 = (log) => console.log(log)
logger3('Aptech 2023 - 2024')


// một object chứa Arrow function
const courseAll = {
    name: 'Java',
    getName:() => {
        // this chính là courseAll
        return this.name
    }
}

console.log(courseAll.getName())