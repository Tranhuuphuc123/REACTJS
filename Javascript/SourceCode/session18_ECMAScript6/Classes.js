/***TIỀM HIỂU VỀ TÍNH NĂNG CLASSES CỦA ES6****** */
/*
 >>Khái niệm<<
  => ES6 có tính năng classes -> dễ hiểu như các ngôn ngữ khác có chức năng dùng classes
  để xây dựng cấu trúc và hành vi của một đới tượng
  => ES xây dựng class dựa trên nguyên tắc xây dựng hướng đối tượng  (OOP)
  => 
*/

// cách quản lý tạo các đối tượng với function(khuôn mẫu xây dựng trc)
function course(name,price) {
    this.name = name,
    this.price = price
}

const temp = new course('JAVA', 1000)
const temp1 = new course('PHP', 2000)

console.log(temp)
console.log(temp1)



//=====================xấy dựn tính năng classes OOP trong Js=====================
// tuy nhien với tính năng classes ta sẽ xây dựng cấu trúc và hành vi của object chi tiết hơn
// cùng xem hiệu quả nó mang lại

class myObj{
    /* 
    => Lưu ý với Js ES6 thì không cần khai báo các properties riêng lẻ như các nn #
    => Ta có thể sử dụng thuộc tính (properties) trực tiếp trong constructor mà không
    cần khai báo chúng trước.
    */
    
    // contructor(hàm nguyên mẫu)
    constructor(name, price) {
        this.name = name,
        this.price=price
    }

    // có thể chèn các method, function trong này cũng đc
    myMethod() {
       console.log('Tập làm quen method trong class')
   }

    //getter and setter
    get Name() {
        return this.name
    }
    get Price() {
        return this.price
    }
    set Name(value) {
        this.name=value
    }
    set Price(value) {
        this.price =value
    }
}


const temp2 = new myObj('JAVA', 1000)
console.log(temp2)  // rõ ràng hiệu quả y như trên
//==> thậm chí khả năng quản lý nó tốt hơn cho các dự án code thực tế phức tạp hơn

// sử dụng method trong class
temp2.myMethod()


// dùng setter gán giá trj mới
temp2.Price = 25000
console.log('giá trị mới thay đổi: ' + temp2.price )

