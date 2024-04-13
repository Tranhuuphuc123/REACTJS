/*************KIẾN THỨC VỀ HTMLDOM************************ */
/*Khái niệm:
 - HTMLDom là gì:
  -> Document Object Model mô hình tài liệu đc thể hiện dưới dạng đối tượng
  -> htmldom đc dựa trên quy chuẩn w3c để tạo ra dom
  -> HTMLDOM là một thư viện hoặc framework JavaScript được sử dụng để quản lý và tương tác với cấu trúc 
  DOM (Document Object Model) của trang web HTML. 



 *****Một HTMl DOm gồm có 3 thành phần chính:******
 1/ Element
 => tất cả thẻ tag trong html: h1, a, span, select.. đều là element

 2/ Artribute: thuộc tính
  => vd:
   <h1 id ="ID" style= "color:red, fontsize:20"></h1>
   ...
   --> thì những thiết lặp về các mặc hộ trợ tô điểm giao diện đc chèn trong các thẻ
   tag như vậy đc xem là Attribute

 3/ Text: đơn giản thui nó chính là những đoạn text đc chèn giao trong giao diện   

 

 ********************Mục đích của DOM******************
  ==> Mục đích chính của HTMLDOM:
    là giúp bạn dễ dàng truy cập, thay đổi và tương tác với các phần tử HTML trên trang web của bạn bằng 
    cách sử dụng mã JavaScript.

  ==> HTMLDOM cung cấp một loạt các chức năng và phương thức cho phép bạn:

    1/ Truy cập các phần tử HTML: 
     -> Bạn có thể sử dụng HTMLDOM để lấy thông tin về các phần tử HTML, 
       vd:
         + chẳng hạn như thẻ div
         + hình ảnh
         + biểu mẫu và nhiều phần tử khác.

    2/ Thay đổi nội dung và thuộc tính: 
     -> Bạn có thể sử dụng HTMLDOM để thay đổi nội dung và thuộc tính của các phần tử HTML. 
       Ví dụ: 
         + bạn có thể thay đổi văn bản trong một thẻ div
         + thay đổi giá trị của một trường nhập liệu.

   3/ Tương tác với sự kiện: 
    -> HTMLDOM cho phép bạn gắn các sự kiện (
        vd:
         + như nhấp chuột
         + nhấn phím, 
         + hoặc submit biểu mẫu) 
         + thực hiện các hành động tương ứng khi các sự kiện này xảy ra.

   4/ Tạo và xoá phần tử: 
    -> Bạn có thể sử dụng HTMLDOM để tạo mới các phần tử HTML và thêm chúng vào trang web, 
    cũng như xoá các phần tử không cần thiết.

  ***Tóm lại****
   ====> HTMLDOM giúp bạn làm việc với DOM một cách tiện lợi và hiệu quả hơn bằng cách cung cấp một giao diện 
   dễ sử dụng và trừu tượng hóa các thao tác phức tạp với DOM. Điều này giúp bạn phát triển ứng dụng web tương
   tác và động một cách dễ dàng hơn.
*/



//************************************************************************ */
//*******************************MỐI LIÊN HỆ DOM JS, DOM API************* */
//************************************************************************ */
/*
 1/ HTMLDOm không phải là thành phần của js 
 => đơn giản nó là bộ quy chuẩn của w3c
 => javascript sẽ dùng các thuộc tính đc xem là bộ công cụ truy cập đến quy chuẩn
 này
 
 2 tiềm hiểu về DOM API
  => Là bộ API nằm trong web API có mặt trên những môi trường hộ trợ web
   + trình duyệt: browsher: google, internet...
  => DOM API cũng cấp các đối tượng và phương thức hỗ trợ truy xuất, chỉnh sữa
  các đối tượng / thành phần trong DOM

*/




/*********************************************************** */
/**********************TIỀM HIỂU RÕ HƠN VỀ DOCUMENT********* */
/*********************************************************** */
/*
  => docuemnt là đại diện cho cả trình duyệt website
  => nó đc tích hợp sẵn trong web api
  => nó có chữa các method:
   + là toàn bộ các thành phân website đc code trong giao diện html
*/

console.log(document)
// khi console ra thì nó hiện ra toàn bộ code html(tức toàn trang website của mình luôn)

/*
    các method trong document để can thiệp đc vào vào các thành phần chính của DOM
  dùng các method cơ bản đó để can thiệp thiết lặp, tùy chỉnh DOM website  
*/
// document.write(): ghi nhận value vào website luôn
document.write('Hello man')






