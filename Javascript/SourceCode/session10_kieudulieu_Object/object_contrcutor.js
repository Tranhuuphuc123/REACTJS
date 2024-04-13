/*********************************************************************************************** */
/**************************************OBJECT CONTRUCTOR**************************************** */
/*Lý thuyết
  - xây dựng các đối tượng của Object
 ==> trong phần này mình tiềm hiểu về cách xây dựng nên một Object khuôn mẫu để kế thừa
 ==> xây dựng một cấu trúc sẵn có để kế thừa tái sử dụng với một Object
 ==> này cũng chính dc gọi là hàm khởi tạo cho Object
*/

// cách tạo một Object contructor làm khuôn mẫu
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    // có thể tạo function làm đối tượng trong Object  -> sử dụng template `` vs ${} để nối chũi
    this.getName = function () {
        return `${this.firstName} ${this.lastName}`
        //or có thể viết: return firstName + lastName
    };
}

// dùng Object User và gán các value tương ứng cho biến author
var author = new User('Trần', 'Phúc', 'phuc.jpg');
var reader = new User('Nguyễn', 'Phương', 'phuong.jpg');

/* ta dùng bản thiết kế object User gán chung cho hai Object author và reader
==> lúc này cùng một hàm tạo Object contructor ta có thể khởi tạo các value: key:value cho từng đối tượng
Object author và reader cùng một lúc
==> như vậy với công dụng là tạo ra một hàm tạo sẵn để kế thừa ta có thể tạo ra vô số các object tượng ứng nhau 
chỉ thông qua một hàm tạo Object contructor mà không cần phải mõi cái mọi viết lại */
console.log(author)
console.log(reader)

console.log(author.getName()) // dùng function trong Object để lấy ra tên
console.log(reader.getName())

//==> lúc này author và user đã là một object -> ta có thể dùng các tuộc tính của object như ở phần trên