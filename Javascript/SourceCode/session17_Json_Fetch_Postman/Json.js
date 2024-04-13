/*******KIẾN THỨC VỀ JSON*********/
/*
 1/ Định nghĩa Json: 
  => Json: là một định dạng dữ liệu (thể hiện ở dạng là một chuỗi)
  => Json: từ viết của từ Javascript Object Notation
  => Nó được thiết kế để dễ đọc và dễ viết cho con người, và dễ dùng cho máy tính để xử lý. 
  => JSON thường được sử dụng trong các ứng dụng web để giao tiếp giữa máy chủ và trình duyệt, 
  và nó cũng được sử dụng trong việc lưu trữ cấu hình và dữ liệu tùy chỉnh trong ứng dụng.

  => Cú pháp cơ bản của JSON bao gồm các cặp key-value, trong đó key là một chuỗi và value có 
  thể là một giá trị dạng 
    + số(Number)
    + chuỗi(String)
    + boolean
    + object
    + hoặc mảng(Array) -> lưu ý Array cảu Json các value cần để tròng dâu "", và cách nhau vởi dấu ','. 

   => Json có hai thao tác để chuyển hóa các value trên thành Json vfa ngc lại gọi là:
    + Mã hóa(Encode)
    + Giải mã(Decode)
    --> hai thuật ngữ trên mang tính hàn lầm nặng nề tuy nhiên Json cv nó lại đơn giản hơn
    nên nó có thể tạm gọi hai tính năng trên ở cấp độ nhẹ hơn là
     + Stringify: chuyển đổi JS sang Json
     + Parse: Trả về giá trị ban đầu(ép kiểu về giá trị ban đầu)
     ----> tức chuyển ngc lại từ JSon thành Js
*/

// các cách khai báo một Json:
var js1 = '1' // number
var js2 = 'true' // boolean
var js3 = 'null' //Null
var js4 = '["Java", "PHP", "C#"]' // Array
var js5 = '{"name":"Peter", "age":18}' // Object key-value trong json


// dùng parse chuyển Json trên thành chuỗi Js
console.log(typeof (JSON.parse(js1))) // chuyển Json js1 thành mã Js
console.log(JSON.parse(js5))
console.log(JSON.parse(js4))


// dùng Stringify chuyển Js thành json -> lưu ý chuỗi json là một chuỗi như dạng văn bản thui
console.log(JSON.stringify(1))
console.log(JSON.stringify(true))

var mang = [1, 2, 3, 4, 5]
console.log(JSON.stringify(mang))

var object = {
    id: 1,
    name: 'phuc'
} 
console.log(object)  // đây là xuất kiểu JS
console.log(JSON.stringify(object)) // chuyển thành JSON dạng chuỗi văn bản bt

