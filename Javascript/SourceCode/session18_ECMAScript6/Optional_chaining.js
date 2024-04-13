/**************TIỀM HIỂU VỀ OPTIONAL CHAINING TRONG ES11***************************** */
/*
 >>KHÁI NIỆM<<
  => cú pháp: ?. (dấu hỏi chấm)
  => Optional chaining là một tính năng quan trọng được giới thiệu trong ES11 (EcmaScript 2020), 
  không phải ES6. Tính năng này cho phép bạn truy cập các thuộc tính của một đối tượng mà không 
  cần kiểm tra xem đối tượng có tồn tại hay không. Điều này giúp tránh lỗi "Cannot read property 
  'x' of undefined" (không thể đọc thuộc tính 'x' của undefined) và giúp code trở nên an toàn và 
  dễ đọc hơn.

  => Cú pháp của optional chaining sử dụng dấu chấm hỏi (?.) sau một biểu thức để truy cập một thuộc 
  tính hoặc phương thức. 
  => Nếu biểu thức trước dấu chấm hỏi trả về null hoặc undefined, thì toàn bộ biểu thức sẽ trả về 
  undefined thay vì gây ra lỗi.

  => Optional chaining rất hữu ích khi bạn muốn truy cập các thuộc tính lồng nhau của đối tượng mà bạn
   không chắc chắn liệu các thuộc tính đó có tồn tại hay không. Nó giúp tránh gây ra lỗi và cho phép
   bạn kiểm tra một cách an toàn.

  => Một số điểm lưu ý về optional chaining:

  + Optional chaining có thể được sử dụng không chỉ với thuộc tính đối tượng mà còn với 
  phương thức và cả mảng.

  + Nếu biểu thức trước dấu chấm hỏi trả về null hoặc undefined, toàn bộ biểu thức sau
   dấu chấm hỏi sẽ được bỏ qua và trả về undefined.

  + Optional chaining có thể được kết hợp với toán tử nullish coalescing (??) để xác định 
  một giá trị mặc định nếu biểu thức trả về null hoặc undefined. 

  */

// demo


// xây dựng một object
const myAnimal = {
    name: 'Alice',
    cat: {
        name: 'Anna'
    }
}


//=> muốn truy xuất vào biến name của cat thì làm sao
// cách thông thường
//01/ dùng detructuring -> phân giải object trên ra các biến riêng lẻ
var { name:first, cat: { name:second } } = myAnimal
console.log(first)
console.log(second)


//02 hoặc đơn giản là 
console.log(myAnimal.cat.name)

// hoặc dùng ...rest
var { cat: { name: first }, ...rest } = myAnimal;
console.log(first); // 'Anna'
console.log(rest); // { name: 'Alice' }




/**********************Kỹ thuật Optional chianing ?. *********************** */



/********************************************************************************** */
/********tuy nhiên trong ES11 có một kỹ thuật mới đc giới thiệu để xử lý th này hay hơn******* */
// myObject
const myObject = {
    name: 'Alice',
    chil: {
        name: 'Anna',
        chil1: {
            name: 'Hoho',
            // chil2: {
            //     name:'haha'
            // }
        }
    }
}

// console.log(myObject.chil.name)

//=> nhìn vd trên nó sẽ báo lỗi vì name của chil nó vị comment rồi -> nghĩa là nó không còn tồn tại thì làm sao mà khoog lỗi đc
//=> fix lỗi: đưa vào if nếu có tồn tại mới xuất hông thì thôi
if (myObject.chil) {
    console.log(myObject.chil.name)
} else {
    console.log('nó không tồn tại nên không xuất đc')
}

// rõ ràng ta thấy là cách xử lý điều kiện trên không sai -> nhưng nếu dl nhiều hơn phải if - else liên tục -> quá thủ công đó không phải là code
// dùng với kỹ thuật Optional chaining giải quyết nè()
 
if (myObject?.chil?.chil1?.chil2) {
    console.log(myObject.chil.chil1.chil2.name)
} else {
  console.log('nó không có tồn tại')    
}


/*=> rõ ràng với cách kiểm tra optional chaining ?. thì dẫu chil2 bị đóng comment nghĩa là khoog có tồn tại
đi chăng nữa thì thay vì báo lỗi đỏ ồm thì nó không hiện ra thui nếu có thì hiện code 
kiểm tra chở nên đơn giản đi rất nhiều*

==> cách xử lý khá đơn giản và không cồng kềnh*/

//=> hãy lưu ý kỹ thuật optional chaining dùng để kiểm tra khi chúng ta nghi ngờ một thuộc tính nào đó nó không có tồn tại
// hay chúng ta chỉ nghi ngờ mà không biết chính xác là nó có tồn tại hay không thui
// ta chỉ nghi ngờ chil2 liệu có tồn tại thì ta thêm optional chaining vào ngay đúng chil2 thui
if (myObject.chil.chil1?.chil2) {
    console.log(myObject.chil.chil1.chil2.name)
} else {
  console.log('nó không có tồn tại')    
}


// với object ta cũng có thể viết như sau:
if (myObject['chil']['chil1']?.['chil2']) {
    console.log(myObject.chil.chil1.chil2.name)
}else {
    console.log('nó không có tồn tại 2')    
}
  
// với fucntion thì sao
const myObject1 = {
    // getName(value) {
    //     console.log(value)
    // }
}
// truyền ts bt nè
// myObject1.getName(123)
// giờ kiểm tra khôg chắc là getName có phải là function hay không, hay nó có tồn tại khôg dùng Optional chaining nè
if(myObject1?.getName){
   myObject1.getName(123)
} else {
    console.log('function không tồn tại ')
}