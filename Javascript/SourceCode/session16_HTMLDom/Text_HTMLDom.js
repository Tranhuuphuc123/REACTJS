/* Tiềm hiểu về thành phần Text với HTML Dom */
/*
  2 nội dung tiềm hiểu về Text:
   + innerText
   + textContent
*/


// trả về thẻ h1 của class style1
console.log('********************************')

var item = document.querySelector('.style1')
console.log(item)

/*********************** */
// cách get lấy ra đc phần text của element h1 có class = style1
console.log(item.innerText)
console.log(item.textContent)

// sữa đổi nội dung text cho element
item.innerText = 'Nội dung HTMLDom mới'
item.textContent = 'Nội dung HTMLDom mới 2'




/*********************** */
/*Điểm khác nhau của innerText và textContent */
/*
 => innerText: chỉ lấy và ghi nhận nd mới mà thui, nghĩa là nó không quan tâm
 nhiều đến các element xung quanh Text nó chỉ trả về nd đầy đủ của text là đc
 rồi
 => textContent: lấy nguyên bản cái Text của element, nghĩa là dù cùng một
 chữ nhưng chứa trong element nào, k/c ra sau thì nó in ra y dậy
*/

// vd:
console.log('***********phân biệt innerText với textContent***********')

var item_new = document.querySelector('.style2')
/* với innerText nó trả về cái ta thấy đơn giản vạy thui */
console.log(item_new.innerText)
/*với textContents nó trả về đúng cấu trúc vị trí, sự sắp xếp bố cục 
do các thẻ element đc bố trí trong html và không bị ảnh hưởng bởi
bất kỳ thay đổi nào về class, id... */
console.log(item_new.textContent)