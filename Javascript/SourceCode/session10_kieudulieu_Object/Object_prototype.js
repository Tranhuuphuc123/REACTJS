/***********************TIỀM HIỂU VỀ OBJECT PROTOTYPE***************** */
/*Lý thuyết:
1/ khái niệm
 => Object Prototype là hàm nguyên mẫu(coi lại C++)
 
2/ Sử dụng
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
/**==> như bạn thấy với hàm khuôn mẫu Object contructor trên để nó nhận đối số truyền vào
 * thì ta cần khai báo thám số và thiết lặp this.. bên trong hàm khuôn mẫu:
 *  vd:    this.firstName = firstName;
 * -> nếu muốn thêm một thuộc tính mà không khai báo tham số và gắn với this thì nó sẽ không nhận
 * vậy có thể dùng prototype để gán value mới vào hàm nguyên mẫu
 */

var student = new User('Tran', 'Phuc', 'phuc.jpg')
console.log(student)

// muốn thêm tên lớp vào mà không mún khai báo các tham số với this thì dùng prototype
User.prototype.className = 'Aptech'
console.log(student.className)

// bây giờ muốn thêm method mà không khai báo trong Object Contructor có thể dùng prototype khai báo bên ngoài
User.prototype.getClassName = function () {
    return this.className
}
console.log(student.getClassName())
