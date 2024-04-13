/* 3 thành phần cơ ban của HtmlDOM
  1/ Element
  2/ Atribute
  3/ Text
*/
// ***PHẦN NÀY TIỀM HIỂU VỀ ELEMENT VỚI HTMLDOM*********

/*các element: ID, class, tag, selector, HTML, collection...
==> những mã html thg thấy chính là các element có thể lấy ra HtmlDOM */

//==================================
// cách ánh xạ HtmlDom qua các Element bên HTML -> cụ thể vd là truyền qua thẻ <h1> với thuộc tính id
var headingNode = document.getElementById('head')
console.log({
    item:headingNode
})


//==================================
/* với element <h1> với class
 => getElementsByClassName trả về một collection tg ứng một mảng
 => nó có thể trả về nhiều elements có cùng class
*/
var headingNode2 = document.getElementsByClassName("head1")
console.log(headingNode2)


//==================================
// với tagName => truyền tên thẻ trực tiếp và getElementsByTagName
var headingNode3 = document.getElementsByTagName("h1")
console.log(headingNode3)


//==================================
/* với selector => truyền class thì .<tên class>, id thì #<tên class>, tên tagname thì h1, a, p ra luôn...
-> nó gần như thẻ truy vấn làm đc tất cả các lệnh
*/

// => nó trả thẳng về thẻ đó luôn
//=> lưu ý thg selector sẽ là một tập hợp nhiều element trong thẻ div hay ol, ul, selector...
var selector = document.querySelector(".head1")
console.log(selector)

var selector1 = document.querySelector(".box .head2:first-child")
console.log(selector1) // trả về thằng dầu tiền trong .box .head2

var selector2 = document.querySelectorAll(".box .head2")
console.log(selector2) // trả về tất cả các thẻ h2 có class head2 -> trả về một NoteList


//==================================
// HTM Dom với collection => thg dùng với các thẻ form, <a href>, image..
//-> với collection là các thẻ form thì không cần dùng thuộc tính get... chỉ cần console.<tên forms>
console.log(document.forms)
// truy cập từng forrm
console.log(document.forms[0])
// truy xuất forrm theo id luôn
console.log(document.forms['form-3'])
// với kiểu class là một tên class chuẩn -> lưu ý những tên class: form-1, thì dấu '-' css ít hỗ trợ
console.log(document.forms.formText)




/********************************************************************* */
/*********************nâng cao các element với Html Dom ********************************-
 * 
 */
// lấy ra hết các selector là cá thẻ li tron class .box-1
var listItem = document.querySelector('.box-1')
//cv1: lấy đc thẻ div cóa class box-1
console.log(listItem)

// cv2: sử dụng tới các li elements là con của class box-1
console.log(listItem.getElementsByTagName('li'))
console.log(listItem.getElementsByTagName('p'))
console.log(listItem.querySelector('p'))


/************************************************************************ */
/**************ÔN TẬP NÂNG CAO********* */
/*
  => lưu ý chỉ có getElementById, querySelector là trả về Element, Element tức
  là gồm thẻ thuộc tính và values
  => các thẻ còn lại:
   + getElementsByClassName
   + getElementsByTagName
   + querySelectorAll
   đều trả về một NoteList chứ không phải Elements, NodeList hay HtmCollection là
   một tập hơp mảng gồm nhiều elements

*/








