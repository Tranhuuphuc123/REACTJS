/*********TIỀM HIỂU VỀ NODE PROPERTIES*************** */
/*
  trong các phần trc ta học đc các thuộc tính của nodes:
   + Element:
     ++ getElementById
     ++ getElementsByTagName
     ++ getElementsByClassName
     ++ querySelector
     ++ querySelectorAll
     ...
  
    + Attributes:
     ++set/getAttributes

    + Text:
      ++ innerText
      ++ textContent

    + thêm Element
      ++ innerHTML
      ++ outerHTMl

    ...
   ===> trong bài này ta sẽ tiềm hiểu thêm nhiều thuộc tính node của html dom nữa
*/

console.log('*************node properties*************')
var node = document.querySelector('.nodeP')
console.log([node])
console.log(node.style)
    // => với các thuộc tính trả về element thì bỏ vào [] sẽ lấy đc một nodelist
//====-> từ đó có thể xem đc tất cả các thuộc tính liên quan của nó
//====-> hoặc có thể dùng .style ==> lấy ra đc các thuộc tính của nó
    




/*************************************************************************** */
/*******************************MỘT SỐ NODE PROPERTIES MỚI*******************/
/************************************************************************** */
/*
>>>>>>LÝ THUYẾT<<<<<<
 1/ contenteditable="": biến một đoạn text bt thành một thẻ input có thể nhập, xóa đc
 sử dụng ở trong file .html

 2/ Dom CSS style: thiết kế css cho html từ mã js
  => dùng .style để lấy ra đc các thuộc tính get and set của DOM
  => Object.assign: trong JavaScript được sử dụng để sao chép giá trị của 
  một hoặc nhiều đối tượng nguồn vào một đối tượng đích. Nó thường được 
  sử dụng để tạo một bản sao của đối tượng hoặc để cập nhật một đối tượng
   hiện có bằng cách thêm hoặc cập nhật các thuộc tính từ một hoặc nhiều 
   đối tượng khác.
   ----> tóm lại việc thêm nhiều thuộc tính css nên sử dụng cách thức này vì 
   nó tập hợp một cách có trật tự thay vì viết rời như cách doc.style.. cho mỗi cái

   3/ ClassList Property: thuộc tính dùng để quản lý các class của chính element đc 
   gọi đến, nó quản lý nhiều thuộc tính dưới đây là các thuộc tính đc classlist sử dụng 
   nhiều nhất:
    -> add: thêm các class mới vào element
    -> contains: kiểm tra class có nằm trong cái element đó hay không
    -> remove: xóa class khỏi element
    -> toggle:nếu element đang có class mà dùng toggle thì nó sẽ xóa class đó đi, còn nếu
    element không có class thì nó sẽ tự thêm class đó vào
*/


/************************DOM CSS STYLE*************************** */
// Dom CSS style
console.log('******************Doc Css Style************')
// tiến hành lấy element qua câu lệnh truy vến js của htmlDom
var doc = document.querySelector('.doc')
console.log(doc.style)

// tiến hành xét css để tạo hình dáng cho thẻ div có class =  'doc'
//=> lúc này nó sẽ đc tạo thành một khối vuông màu đó y như các dùng css với html
doc.style.width = "100px"
doc.style.height = "100px"
doc.style.backgroundColor = 'red'


//thay vì viết luôn tuồn như trên ta có cách thức viết gọn chuyên nghiệp hơn với Object.assign:
// có 2 thám số: 1/ doc.style(là biến chứa element lấy ra), 2/ {..}(tập hợp các đối tượng css đc liệt kê ra)
Object.assign(doc.style, {
  width : "200px",
  height : "200px",
  backgroundColor : 'red'
})

// tiến hành lấy ra cái vlaues của t/p css của Dom
console.log(doc.style.backgroundColor) // lấy đc màu đỏ
console.log(doc.style.height) // lấy đc chiều cao




/*************************ClassList Property******************************* */
/*Phần nội dung ClassList Property */
console.log('***********phần ClassList Property*************')
var classlist = document.querySelector('.classlist')
// .style lấy ra tất các thuộc tính của classlist
console.log(classlist.style)
// gọi đến tập hợp classlist(xuất cái DOMTakenList) của element
console.log(classlist.classList)

/* dùng add thêm class: '.red' bên mục file css add vào element bằng js
--> nghĩa là file css trong cặp style có tên 'red' đã đc viết rồi mình dùng 
js để đẩy vào chứ không dùng js để thiết kế kiểu Doc css*/
classlist.classList.add('mausac')
// có thể thêm nhiều class sau dấu ','
classlist.classList.add('class1', 'class2')

// kiểm tra class, vd(ktra class: mausac) có tồn tại trong element không với contains
console.log(classlist.classList.contains('mausac'))

// tiến hành xóa đi class ra khỏi element
classlist.classList.remove('class1', 'class2')
console.log(classlist)

/* toggle hoạt động như sau */
  // đầu tiên tôi xóa class: mausac đi
  classlist.classList.remove('mausac')
  /* tiếp theo dùng toggle kiểm tra xem coi mausac có tồn tại trong element với toggle
  =>nó ktra và thấy class: mausac không có tồn tại trong element nên nó tiến hành thêm 
  class: mausac vào trong element, còn nếu class: mausac đã có trong element thì nó sẽ 
  tiến hành xóa đi class đó trong element*/

   classlist.classList.toggle('mausac')
    
/* bây giờ tôi sét timeout cho element với toggle
==> điều kỳ diệu diễn ra là cứ 1s nó phát hiện element không có nó thêm class:mausac vào
==> cứ 1s toggle phát hiện nó có class:mausac nên nó xóa đi
=====> cứ vậy nó lặp đi lặp lại tạo luôn cái hiệu ứng nhấp nháy
=====> có thể ưng dụng tạo các nút switch ẩn hiện liên tục....*/
setInterval(() => {
  classlist.classList.toggle('mausac')
}, 1000)








