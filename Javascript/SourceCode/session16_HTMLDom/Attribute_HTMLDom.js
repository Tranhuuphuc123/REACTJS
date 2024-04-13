/************KIẾN THỨC VỀ HTML DOM: ATTRIBUTES*******************- */
/*
 ****Kiến thức****
  => Attrbutes trong html dom sẽ đc lấy ra từ element
  => trong phần element trên coi như đã học đầy đủ đâu là thẻ element, dâu 
  là attribute còn phần values nội dung hiển thị chính là Text

*/
// lấy thẻ element class box-attr ra với querySelector
var attr = document.querySelector('h1')
console.log(attr)

var attr = document.querySelector('.box-attr')
console.log(attr)

// thêm thuộc tính tittle cho div có class box-attr
console.log(attr.title = "attr-heading")
// thêm id
console.log(attr.id = "attr-heading")
// thêm class
console.log(attr.className = "attr-heading")

// có thể dùng cách khác để đặt tên 3 kiểu class, id, titile
var attr2 = document.querySelector('.box-attr2 h2')
console.log(attr2)
console.log(attr2.querySelector('h2'))
attr2.setAttribute('class', 'attr-heading2')
attr2.setAttribute('id', 'attr-heading2')
attr2.setAttribute('title', 'attr-heading2')
attr2.setAttribute('href', 'Aptech.com') // thêm link url đg dẫn
//==> có thể xét đặt bất kể cái gì, theo cặp key:values như vậy


/* cách lấy values của element có tên thuộc tính atributes */
console.log(attr2.getAttribute('class'))
// lấy ra values đc thêm attribute bởi hàm setAttributes
console.log(attr2.getAttribute('id'))

console.log(attr2.getAttribute('title'))









