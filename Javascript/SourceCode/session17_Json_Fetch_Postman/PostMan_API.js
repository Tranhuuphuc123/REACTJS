/*************************************************** */
/*
 => trog bài học này ta tiềm hiểu về một công cụ tên là Postman nó
 giúp ta làm việc thuận lợi với các API, Rest API một cách hiệu quả và nhanh chóng
 => Postman giúp bạn thao tác với 5 hành động quen thuộc back end là CRUD + Find
  + Create: Khởi tạo => dùng phương thức POST
  + Read: đọc dữ liệu => dùng phương thức GET
  + Update: cập nhật sữa => dùng phương thức PUT/PATCH
  + Delete: xóa đi dữ liệu => phương thức DELETE
  + Find: tiềm kiếm

 ==> Quy trình hoạt động:
  - Postman như một phần mềm kiểm thử với các lib hỗ trợ các chức năng Crud + Find
  ta dùng Postman để text tính năng
  --> ổn thì ta đưa vào code Js khi đó ta sẽ dùng Fetch để thực thi tương tự
  nhưng trc mắt Postman giúp ta thao tác với các tính năng trên nhanh chóng hơn
  giúp kiểm thử đc tính năng nanh hơn sau khi ổn định sẽ tiến hành code logic 
  với Fetch chuẩn chỉnh lại hơn
*/


/****************CÁC BƯỚC TIẾN HÀNH**************** */
//##Bước 01: tải Postman => truy cập website: "https://www.postman.com/"
//## Bước 02: truy cập và đăng nhập vào ứng dụng post main
//## Bước 03: tiến hành dán Resources của Json-server vừa sinh ra khi chạy npm start
/* ## Bước 04: có thể chọn lựa các Post thêm mới, get lấy dũ liệu, delete ..
 => trên thành công chức năng của postman để tiến hành thêm mới hay xóa đi.. các
 value Json dữ liệu.. cách thức hoạt dộng y như một json data thật từ back end đưa lên
 => trong các phương thức: Post, get, Delete...
 thi lưu ý Delete, Find cần chèn id cần xóa au Resources để Postman nhận biết mà xử lý
  vd:

     nhập resources: http://localhost:3000/cources/1
     -> có id cần xóa 
     -> tiến hành chịn phương thức delete và nhấn Send thì nó sẽ thực thi 
     ..
     ==> tg tự với các phương thức khác
*/
