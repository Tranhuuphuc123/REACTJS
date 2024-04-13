/***************TIỀM HIỂU VỀ TAGGED TEMPLATE LITERIALS====================== */
/*
 >>>> kHÁI NIỆM <<<<
  => Tagged Template Literals là một tính năng mạnh mẽ trong ECMAScript 6 (ES6)
   cho phép bạn tạo một hàm đặc biệt được gọi là "tag" để xử lý các chuỗi template 
   literals. 
  
   => Khi bạn sử dụng tagged template literals, chuỗi template literals sẽ được 
   truyền vào hàm tag như một đối số, và bạn có thể tùy chỉnh cách xử lý chuỗi đó. 
   
   => Điều này có thể hữu ích trong việc xử lý chuỗi, áp dụng định dạng, thực hiện 
   chuỗi an toàn hoặc thực hiện các tác vụ tùy chỉnh khác.



   *************Cú pháp********************
   => Cú pháp của tagged template literals bao gồm một hàm (tag) và một chuỗi template 
   literals, được viết bằng dấu "backticks" (`...${}...`).
*/

// tạo function đặc biệt (tagged)
/* first là biến xử lý detructuring + kết hợp với rest => loại bỏ biến ts first('học lập trình')
 giữ lại tất cả cái còn lại là một rest tên second ('..tại')
 ==> tiếp tục ..values thì dùng rest với tên values này để giữ lại các tham số brand and course
 ==> mục tiêu là tách các phần mảng với rest khi gôm lại ra riêng biệt*/
function highlight([first, ...second], ...values) {
    // console.log('first: ', first)
    // console.log('second: ', second)
    // console.log('values: ', values)

    /*cũng cach thức in ra nt nhưng dùng reduce để tùy chỉnh
    => nhớ lại kt reduce(acc: là biến lưu trữ, curent là giá trị hiện tại) 
    => cách viết dưới là viết arrow function*/
    return values.reduce(
        (acc, curent) => [...acc, `<span>${curent}</span>`, second.shift()],[first]
    )
}






// dùng cú pháp tagged template literials để xử lý chuỗi các ts 
var brand = 'Aptech'
var course = 'Javascript'

// lưu ý với tagged template literials như trên thì html xuất ra kết ủa dạng một mảng
// + Học lập trình 1 tp, tại 1 thành phần, - còn tp còn lại(course-brand)
const html = highlight`Học lập trình ${course} tại ${brand}`
console.log(html)
