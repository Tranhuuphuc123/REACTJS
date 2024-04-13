/*****TiỀM HIỂU KIẾN THỨC VỀ INNERHTML VÀ OUTER HTML***** */
//=> trong bài học này ta sẽ tiềm hiểu về cách thêm mới element trong element có sẵn
/*=> Như ta đã biết thì Text hay Attributes đều có thể lấy ra và gáng mới values
tuy nhiên các bài trc ta lại hông có đi sâu vào phàn thêm mới element
---> trong bài này ta sẽ tiềm hiểu về cách đó*/
//=> 2 thuộc tính thêm elemenet mới vào một element sẵn có là: InnerHtml và OuterHtml

// cách thêm mới một element
console.log('******Thêm Element mới trong một Element***************')
var boxElement = document.querySelector('.AddElement')
console.log(boxElement)


// thêm element mới vào element có class AddElement
// sử dụng 2 thuộc tính: InnerHTML và OuterHtml để thêm element
boxElement.innerHTML = '<h1>Nội dung mới thêm vào</h1>'
boxElement.outerHTML = '<h2>OuterHTml</h2>'



/* điểm khác nhau của cả 2 */
/*
 => InnerHtml: nó hiểu là thêm hẳn một Element node đầy đủ vào html,
  khi thay đổi element vói innerHtml thì nó sẽ thay đổi cả trên hiển thị
  lẫn console hay sourceCoude Element trên website luôn
   + InnerHtml ngoài thêm element mới nó còn có thể có chức năng như innerText
   thêm mới Text
   + nó cũng có thể thêm mới một Attributes tg tự setAttributes của Attributes
   ==> xem ra nó khả là đa di năng
*/
//vd: thêm element kèm attribute luon
boxElement.innerHTML = '<h2 class = "AddE1">Thêm Attr, class, element mới</h2>'



/*
   => OuterHtml:chức năng tg tự như InnerHtml vậy tuy nhiên
    + nếu innerHtml chỉ xác định thay thế element bên trong một selector(
    vd: thẻ div có claass, id.. chứa nhiều element trong đó là các tagName ấy
    )
      vd: 
           <div class="AddElement">
                 <span>Aptech Mobile App</span>
            </div>
            => với innerHtml nó chỉ lấy và thay thế tính từ element <span></span>
    **Note** 
     -> Nhưng với Outer nó sẽ lấy và tính từ thẻ div có chứa class = .Addelement
    và thay thế hoàn toàn chứ không chỉ là emenet <span> ban đầu thui mà cả div luôn
    -> tuy nhiên nó sẽ thay đổi trên Elements chứ bên console code thì nó vẫn còn đc
    lưu tạm
    ===> thằng outerHtml ít dùng hơn innerHtml
*/

console.log(boxElement.outerHTML)





// bài tập vận dụng
/*Các bạn hãy viết hàm render nhận vào 1 tham số là html, hàm render sẽ có nhiệm vụ chèn giá trị của
 html vào trong thẻ ul đã cho trước. */

console.log('************BÀI TẬP****************')
 
// Bài giải
function render(html) {
    var content = document.querySelector('ul');
    content.innerHTML = html;
    return content; // Trả về phần tử <ul> đã được cập nhật
 }
 
 render(`
     <li>Khóa học HTML</li>
     <li>Khóa học JS</li>
     <li>Khóa học PHP</li>
 `)

var rs = render()
console.log(rs.outerHTML)


