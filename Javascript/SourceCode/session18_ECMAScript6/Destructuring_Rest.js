/***********TÍNH NĂNG DETRUCTURIING************** */
/*
 >>>>KHÁI NIỆM<<<<
  => ES6 dùng tính năng Destructuring cho phép bạn trích xuất giá trị từ 
  một đối tượng hoặc mẳng và gán chúng vào các biến riêng lẻ một cách dễ 
  dàng.

*/
// cách thông thường
var array = [
  'java',
  'php',
  'c#'
]
//=> bài toán tạo các biến riêng lẻ và lưu lần lượt các value của mảng array trên
// cách viết thông thg  cho từng pt mảng gán cho biến

var a1 = array[0]
var b = array[1]
var c = array[2]

console.log(`a: ${a1} - b: ${b} - c: ${c}`)


//==========================DESTRUCTURING===============
//<=> tuy nhiên với es6 nó cung cấp giải pháp tiện lợi hơn nhiều(đó là Destructuring)
// sử dụng kiểu viết như sau: var[variables] = myArray


//============= 01: Destructuring với mảng trước==========================
var array1 = [
  'pytthon',
  'android',
  'java'
]
// kỹ thuật Destructuring
var [a2, b2, c2] = array1
console.log(`a: ${a2} - b: ${b2} - c: ${c2}`)

// muốn lấy b2, c2 thui bỏ a.. thì làm sau
var [, b2, c2] = array1
console.log(`b: ${b2} - c: ${c2}`)


//============= 01: Destructuring với Object==========================
var course = {
  name: 'Go',
  price:1000
}
//destrcuturing(với mảng thì dùng dấu [] còn Object thì thay {})
// với mảng không có key nên khi triển kha destructuring đặt tên gì cuxg đc còn object có key nên phải lấy cho đúng tên key
var { name, price } = course
console.log(`Khoas học: ${name} - có giá ${price}`)


//*************************************** */
//==th trong object lại có object thì sao==
var parentCourse= {
  name: 'C#',
  price: 2000,
  // lại có object con trong object
  childrenCourse: {
    name:'Java'
  }
}

// lấy ra name củ cac 2 object lồg nhau thì làm sao
var { name, childrenCourse: { name } } = parentCourse
console.log(name)
console.log(name)
//=> lúc này nó dẫn đến lỗi là nó không phần biệt là value name nào là của name nào do trùng
//=> xử lý bằng cách đặt tên cho key luôn(đặt tên sau dâu ':') -> là giải quyết đc
var { name:parentName, childrenCourse: { name:childrenName } } = parentCourse
console.log(parentName)
console.log(childrenName)




//=======================================================================================








/****************************************************************************** */
/************************TÍNH NĂNG REST TRONG ES6**************************** */
/*
 >>Khái niệm<<<
  => toán tử rest là toán tử dùng dấu; '...<name>'
  => Rest parameters giúp bạn gom các phần tử riêng lẻ thành một mảng hoặc đối tượng
  => Đối nghich lại với Destructuring, 
   + Destructuring giúp phân tách các calue riêng lẻ trong mảng, object ra cho từng biến rời
   + còn Rest parameters giúp gom các pt riêng lẻ các biến lại thành một mảng hay Object
*/

//============= 01: Rest với mảng trước==========================
var array2 = [
  'Cocos',
  'Undreal',
  'Unity'
]

// dùng rest để trả về giá trị mong muốn và giữ nguyên là mảng lun
var [a3, b3, ...rest] = array2
console.log(rest)
/***Nhận xét***
==> dựa vào đoạn code trên điều gì diễn ra:
 + nó sẽ loại trừ hai values của mảng array2 là Cocos, Undreal đi mà chỉ giữ lại Unity
 + và đồng thời Unity lúc này vẫn đc hiển thị dưới dạng là value của một mảng
 chứ không phải values biến bt
 + 
*/




//============= 01: Rest với Object==========================
var course1 = {
  name: 'Golang',
  price: 2000
}
// dùng rest như bên dưới là ta đang loại bỏ tên chỉ lấy các cái còn lại cụ thể là price
//...rest và trc đó có name nghĩa là laoij trừ các key khai báo lấy các phần còn lại
var { name, ...rest } = course1
console.log(`giá khóa học: ${price}`)







