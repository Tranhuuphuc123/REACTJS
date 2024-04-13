/***************TIỀM HIỂU VỀ KIỂU OBJECT*************** */
/**lÝ THUYẾT:
 * => Object là cách khai báo tg tự như mảng nhưng nó quản lý theo
 * từng cặp key-value
 * => khai báo Object: var <tên Object> = {..<các cặp key:value>..}
 * =>
 */

var myInfo = {
    name: 'Tran Huu Phuc',
    age: 18,
    address: 'Cần Thơ, Vietnam'
}
console.log(myInfo)

// thêm một cặp key:value vào object trc đó
myInfo.email = 'cantho@hmail.com' // dùng tên object.key ="value của key"
console.log(myInfo)


myInfo['Jobs'] = 'IT' // một cách khác: key:value <=> Jobs = 'IT'
console.log(myInfo)

// đưa biến khai báo bên ngoài thành key:value của object
var ngonngu = 'language'
myInfo1 = {
    name: 'Tran Ngoc Phuong',
    age: 28,
    address: 'Cà mau, Vietnam',
    [ngonngu]: 'English' // lưu ý lúc này key nó không phải tên ngonngu mà là language
}
console.log(myInfo1)




// lấy giá trị value trong tập hợp object
console.log(myInfo.age)
console.log(myInfo['name']) // một cách khác dùng ['<bỏ key vào trong dấu ''>']


//cách xóa đi một cặp key:value trong object
var myInfo2 = {
    name: 'To Dinh Tong',
    age: 42,
    address: 'Vĩnh Long, Vietnam'
}

delete myInfo2.age
console.log(myInfo2)



// cách lưu trữ một function trong Object. hay còn gọi là Object với method function
var myInfo3 = {
        name: 'Huynh Le Ngoc Phuong',
        age: 22,
        address: 'Hà Nội, VietNam',
        // lưu trữ function
        getName: function() {
            return this.name
        }
    }
    /* => trong object có function lấy tên cảu Object-> cách này vừa lưu trữ đc funtion mà còn có thể lấy 
    đc tên của object thong qua function(hiểu cách tg tác function với Object)*/
console.log(myInfo3.getName())