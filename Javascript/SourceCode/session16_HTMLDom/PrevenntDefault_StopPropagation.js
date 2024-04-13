/******HỌC PREVENTDEFAULT VÀ STOPPROPAGATION******* */
/*
 --> 2 phương thức mới của Dom Event:
  1/ preventDefault
   => chức năng chính:
     + loại bỏ hành vị mặc định, ngăn chặn hành vi của trình duyêt trên thẻ html thuần

  2/ stopPropagation
   => chức năng chính: 
    + loại bỏ các sự kiện nổi bọt trong js
    ( -> nghĩa là ngăn chặn sự lan truyền tiếp của sự kiện (event propagation) từ sự kiện
     con lên đến các phần tử cha trong cây DOM. Nó ngăn chặn sự kiện tiếp tục chạy thông 
     qua các thành phần cha của thành phần gửi ra sự kiện.
     -> "Sự kiện nổi bọt" (bubbling) trong JavaScript là cách mà các sự kiện DOM thường hoạt 
     động mặc định. Nó tức là sự kiện được khởi tạo tại phần tử mục tiêu (target element) của 
     nó và sau đó lan truyền lên qua các phần tử cha của nó trong cây DOM. Điều này cho phép 
     các phần tử cha có cơ hội xử lý sự kiện trước khi nó đến phần tử cha tiếp theo.
*/

//=================DEMO THỰC TIỄN========================

//==================================================================
//01 thực hiện loặ bỏ mặc định của trình duyệt trên thẻ html mặc định preventDefault
var rs = document.querySelectorAll('a')
/* vói các thẻ a có thể dùng links cho nhanh
   
    var rs = document.links
    
  hoặc dùng với ancors tuy nhiên các thẻ a cần đặt tên (  <a name = "demo" href="https://google.com.vn">Google</a>)  

     
    var rs = document.ancors
    
  */


/* bài toán preventDefault như sau:
=> ta tiến hành làm sao để xét đk nếu đg dân url mà không đúng thì mặc nhiên 
ngăn không cho truy cập phải chính xác mới cho truy cập */

for (var i = 0; i < rs.length; ++i){
    rs[i].onclick = function (e) {
        if (!e.target.href.startsWith('https://fullstack.edu.vn/')) {
            //preventDefault ngăn không cho link đc url mặc định chạy 
            e.preventDefault();
        }
    }
}


/* bài toán số 02: thực hiện chức năng tiềm kiếm */
var rs1 = document.querySelector('ul')
// ngăn chặn hành vị khi rê chuột vào value sẽ bị mất đi do tính năng gôc foccus~ul: display:none của style html
rs1.onmousedown = function (e) {
  e.preventDefault()  
}

rs1.onclick = function (e) {
  // target giúp trả về cai element gốc một cách chuẩn xác nhất
   console.log(e.target)
}





//============================================
//02: trường hợp thứ 02:  stopPropagation(ngăn chặn hành vi lan truyền)
/* bài toán demo: click vào chữ ra chữ click vào button ra button 
 => lưu ý lại sự kiện nổi bọt là sự kiện mà tp bên trong khi thực thi sự kiện
 nó sẽ nhảy ra và nổi lên bao chùn lun cả thằng thẻ cha hay sự kiện cha bao nó
   vd:
     <div>
        <button></button>
     </div>
     => thì sự kiện trong button khi thực hiện nó sẽ nổi bọt lên bao lấy và ôm trọ luôn 
     sự kiện của thẻ div luôn, vì vậy stopPropagation sinh ra để khắc phục điều đó
     để cho phần nào thực thi phần đó tránh bị sự kiện nổi botjk ảnh hưởng
*/

var rs2 = document.querySelector('div')
rs2.onclick = function (e) {
  console.log('DIV')
}


/* lúc này sụ kiện nổi bọt thể hiện rõ ở chỗ là click vô button nó sẽ không chỉ xuất hiện chữ
Click Me! mà nó còn xuất hiện luôn chữ DIV vì nó nổi bọt lên từ bên trong lên
nó bao lấy luôn cả thẻ div chứa nó(đây là minh chứng thực tế về sự kiện nổi bọt)*/
var rs3 = document.querySelector('button')
rs3.onclick = function (e) {
  // ngăn sự nổi bọt 
  e.stopPropagation()
  console.log('CLick Me!')
}