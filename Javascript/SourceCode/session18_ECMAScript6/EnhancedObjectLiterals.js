/*********TIỀM HIỂU ENHANCED OBJECT LITERALS************************* */
/*
>>>>KHÁI NIỆM<<<
 => Tính năng này giúp mình làm các việc sau:
  + Định nghĩa key-value cho Object
  + Định nghĩa method cho Object
  + Định nghĩa key cho Object dưới dạng biến
  ---> Cung cấp cách ngắn ngọn hiệu năng hơn cho Object thui
 */

var name = 'Javascript'
var price = 1000
  
// tạo ra một object bao gồm lưu trữ tt 2 biến trên
//khả năng số 01: xây dựng kiểu dựa trên key-values
var course = {
    name: name,
    price: price,
    //xây dựng function
    getName: function () {
        return name
    }
}

console.log(course)
console.log(course.getName())


//<=>có thể viết gọn ntn vẫn đc => nó vẫn hoạt động ok!
// kn số 02: viết method cho object 
var course1 = {
    name,
    price,
    //xây dựng method viết gọn kiểu này vẫn đc
    getName() {
        return this.name;
    }
}

console.log(course1)
console.log(course1.getName())



// kn số 03: Định nghĩa key cho Object dưới dạng biến
// đem biến khai báo bên ngoài đem vao trong Object làm key luôn
//=> lưu ý lúc này key hiển thị có tên là name, price tên biến chỉ để lưu trữ tên key trong th này
var fieldName = 'name'
var fieldPrice = 'price'

const course2 = {
    [fieldName]: 'Python',
    [fieldPrice]:1000
}

console.log(course2)
