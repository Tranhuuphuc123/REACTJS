/*******tiềm hiểu về cách fake một API JSon */
/*
 => Thư viện Json Server:
 => chức năng:
  + tạo fake một Json Server: tức là một API Server
  ==> tóm lại mục đích bài này muốn hg dẫn bạn cách tạo ra một Rest API Json do chính bạn 
  viết và sinh ra địa chỉ API tức một URL để có thể dùng cho các chức năng tương
  tự như lúc bạn học cách sử dụng fetch với thư viện API có sẵn là jsonPlaceHolder ấy
  
  ==> còn có một mục đích nữa là fake API này tạo ra nhằm mục đích là giả dụ bạn chưa
  có dữ liệu từ back end hay cty cho thì mình tạo giả fake API này để text code
  khi nào cty hay back end gửi data thật thì kết nối sử dụng thui còn trong lúc
  chờ thì dùng fake API/ ha còn gọi là Mock API để mà text thử
*/


/*************************************************************************** *
//===================HIỂU RÕ VỀ API -  REST API - JSON ========================
/*
 => Hãy để tôi giải thích API (Application Programming Interface), REST API, và JSON (JavaScript Object Notation) cách dễ hiểu:

 01/ API (Application Programming Interface):

  -> API là một tập hợp các quy tắc và giao thức cho phép hai ứng dụng (hoặc các thành phần phần mềm khác nhau) giao tiếp với nhau. 
  Nó giống như một cách để ứng dụng nói chuyện và làm việc với nhau. API định nghĩa cách các yếu tố bên trong một ứng dụng nên tương 
  tác với nhau và như thế nào. API có thể được sử dụng để truyền dữ liệu, thực hiện các chức năng cụ thể, và thực hiện nhiều tác vụ khác.


 02/ REST API (Representational State Transfer API):

 -> REST API là một kiểu API được thiết kế để hoạt động trên giao thức HTTP và tuân theo các nguyên tắc và quy tắc cụ thể. REST API sử 
 dụng các phương thức HTTP như GET (để lấy dữ liệu), POST (để tạo mới dữ liệu), PUT (để cập nhật dữ liệu), và DELETE (để xóa dữ liệu) 
 để thực hiện các thao tác trên tài nguyên (resource) qua các URL. REST API thường trả về dữ liệu dưới dạng JSON hoặc XML.


 03/ JSON (JavaScript Object Notation):
 -> Json: là một định dạng dữ liệu (thể hiện ở dạng là một chuỗi các ký tự văn bản như ghi chú note)
 -> JSON là một định dạng dữ liệu dễ đọc cho con người và dễ hiểu cho máy tính. Nó được sử dụng để truyền tải dữ liệu giữa các ứng dụng. 
 -> JSON thường được viết dưới dạng cặp key-value, tương tự như các đối tượng và thuộc tính trong JavaScript. 
   Ví dụ:
         {
           "name": "John",
           "age": 30,
           "city": "New York"
          }

 -> JSON là một định dạng phổ biến để truyền dữ liệu giữa các máy chủ và ứng dụng, và nó thường được sử dụng khi làm việc với REST API 
 để truyền tải dữ liệu giữa máy chủ và máy khách.

****************************
*******Tóm lại**************, 
 ====> REST API là một loại API sử dụng các phương thức HTTP để truyền tải dữ liệu giữa các ứng dụng, và JSON thường được sử dụng làm 
 định dạng dữ liệu cho việc này. API định nghĩa cách các ứng dụng nên giao tiếp và trao đổi thông tin, trong khi JSON là một cách để 
 biểu thị dữ liệu trong các giao tiếp giữa các ứng dụng.
*/


/***********************************************************************************************************************************************************************/


/********************************************************************************************************************** */
//=====================CÁCH THỨC TẠO MỘT FAKE REST API============================
/********************************************************************************************************************** */

/*## Bước 01: truy cập trang web sau để học cách hg dẫn tạo một Rest Api Json server
 => "https://github.com/typicode/json-server"
*/

// ## Bước 02: tiến hành tạo Json server - Rest API cá nhân
/*
  > chạy lệnh code sau:
  
     npm install -g json-server

  --> với -g là biến global 
  --> tuy nhiên trong bài này tôi mún tạo riêng một API cá nhân cho riêng 
  source cá nhân thui chứ không có cho toàn bộ lun nên tôi sẽ làm theo cách
  đơn lẻ như sau

  ================================
  ##a tạo một thư mục json_server/mở terminal (lưu ý chỏ đúng Terminal đến source vừa tạo)/
  ##b gõ lệnh tạo npm -v: kiểm tra bản npm(lưu ý chưa có thì cần cài npm trc nha)
  ##c dùng cú pháp khởi tạo json Server -> cụ thể là tạo package.json: 
           npm init 
    --> cứ enter bỏ qua hết các yêu cầu
    --> cúi cùng chọn Yes là ok tạo xong -> sinh ra đc file pakage.json
    
  ##d Tiến hành cài Json-Server vào package.json vừa khởi tạo
   -> gõ:   npm install json-server
    or gõ:  npm i json-server

    ---> lúc này các lib sẽ đc sinh ra và tự động thêm vào package.json
*/


/*## Bước 03: tạo file db.json(tạo file json ấy tên gì cũng đc thích đặt db thui)
==> mục tiêu là dùng file json tự tạo thông qua Json-server này để tạo một Rest API
rồi dùng code js với thuộc tính Fetch để mã hóa các Json vừa tạo thông qua Rest API 
để chuyển thành mã Js Types y như sử dụng các Rest API sẵn có ở trang JsonPalceholder
 ==> tiến hành tạo file json nè:
 ==> code demo:
    {
       "cources":[
 
         {
           "id":1,
           "name": "Học về json-Server tự tạo",
           "description":"mô tả về đoạn json"
         }
     ]
   }
   
*/


/*
## Bước 04: tiến hành thêm các thuộc tính khởi động thực thi đc cái json-Server
trong file pakage.json
 => thêm "start": "json-server --watch db.json",  trong package.json như sau:

        "scripts": {
           "start": "json-server --watch db.json",   
           "test": "echo \"Error: no test specified\" && exit 1"
         },
 */



/*## Bước 05: tiến hành khởi chạy trên terminal để start cái Json-Server vùa tạo
=> gõ: 
         npm start

    --> lưu ý nhớ truy cập đến thư mục gốc chứa file package.json rồi mới chạy npm start.    
    --> lúc này nó sinh ra các url resources y như các trang lấy API sẵn có
    --> lấy cái resources này để tuy cập file json ta tự tk
       ..... 
       Resources
         http://localhost:3000/cources
        .... 
*/



// ## Bước 06: tiến hành kiểm tra dùng fetch text thử cái Json-server tự tạo
// ==> lưu ý đây là cấu trúc chuẩn sử dụng fetch chuyển đổi Json-server của rest Api thành Js
var courcesAPI = " http://localhost:3000/cources"
fetch(courcesAPI)
    .then(function (response) {
         return response.json()
    })
    .then(function (cources) {
         console.log(cources)
    })
     
    //==> lúc này nó trả vể một Js từ Json-Server vừa tạ
    //======> ******* vậy là perfect nha ****** * /