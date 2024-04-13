/*/======================TIỀM HIỂU VỀ TEMPLATE LITERALS=========================
/*
  ==> kHÁI NIỆM:
  Template Literals cho phép bạn tạo chuổi đa dòng và nhúng biến vào một chuỗi 
  dễ dàng với cú pháp: `${}`
  
*/
const courseName = ' Javascript '
const description = 'Khóa học lập trình ' + courseName
console.log(description)


// cách sử dụng với template literals như sao với cú pháp: `${}`
const description1 = ` khóa học ${courseName}`
console.log(description1)