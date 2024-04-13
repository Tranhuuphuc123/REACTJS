/***********EVENT LISTENER*************** */
/*
 => sự kiện lắng nghe: nó cũng tương tự như dom event tức là các phương thức thuộc tính
 xử lý sự kiện lắng nghe... tuy nhiên có những trường hợp event listenr phát huy tốt và tiện 
 hơn dom event và ngc lại..
 => cả dom event và event listener thì tg tự và làm các chức năng như nhau, nhưng đôi khi event listener dùng
 sẽ tiện hơn dom event và ngc lại
 => nói chung tuy tình huống và suy xét dùng cái nào
*/


/* xet 2 trường hợp sẽ dùng đến event listenr
1/ Xử lý nhiều việc khi 1 event xảy ra
2/ Lắng nghe / hủy bỏ lắng nghe
 */

// trường hợp 01:xử lý nhiều việc khi 1 event xảy ra
console.log('*****************event listener*************')

// một vd về xử lý nhiều sự kiện với dom event -> không hiểu quả
// rs.onclick = function (e) {
//     console.log('việc 1')
//     console.log('việc 2')
//     console.log('việc 3')
//     console.log('việc 4')
// }


/*********************************************** */
/* tiến hành mẫu cấu trúc sử dụng event listenr
/************************************************ */
/*
 => trong mẫu câu bên dưới để thực thị đc event listener
  + gọi ra attributes: .addEventListener
  + 'click': chính là tên sự kiện click, # với dom event không cần chữ on tiếp đầu
  ngữ ở trc
  + function: là callback như dom event thui
*/

// thực hiện get element button có id=btn
var rs = document.getElementById('btn')
console.log(rs)

// rs.addEventListener('click', function (e) {
//     console.log('text 1')
//     console.log('text 2')
//     console.log('text 3')
// })


// ngoài ra ta có thể việc tách hàn rồi gọi lại

    function viec1() {
        console.log('viec 1')
    }

    rs.addEventListener('click', viec1)



// => viedcj gọi addEventListener chính là đang lắng nghe sự kiện event listener luôn
// vậy làm thế nào để xóa bỏ lắng nghe -> vd sau 3s thì bỏ đi sự kiện

// cứ sau 3 giây thì hủy bỏ sự kiện với removeEventListener
setTimeout(function () {
    rs.removeEventListener('click',viec1)
}, 3000)
 