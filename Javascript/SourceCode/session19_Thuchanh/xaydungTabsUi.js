/***************PHẦN BÀI TẬP THỰC HÀNH XÂY DỰNG TABS UI************** */
/*
 >>>>kHÁI NIỆM YÊU CẦU<<<<
  => 
*/

// Phần thực hành
/*--thay vì gõ liên kết element dài ngoăn querySelector
=> ta gán cho biến $ để code tiện hơn bên js--*/
const $ = document.querySelector.bind(document)       // lấy cá thể các element riêng lẻ
const $$ = document.querySelectorAll.bind(document)   // lấy các thẻ element cùng tên

// lấy tất cả các element với tên là: tab-pane, tab-item
const tabs = $$('.tab-item')
const panes = $$('.tab-pane')


/* thử nghiệm rời: dùng thuộc tính NodeProperties xét CSS DOm cho line => cụ thể  left = 0; width: 130 bao quanh kích cỡ của element tab-item*/
// lấy element có tên class là tab-item active
// const thanhNgang = $('.tab-item.active')
// lấy element có tên class tab-lines(thanh ngang màu đỏ gạch chân dùng để di chuyển qua lại khi chọn các tab-item ấy)
const line = $('.tabs .line')

// Object.assign(line.style, {
//   left: thanhNgang.offsetLeft + 'px',
//   width: thanhNgang.offsetWidth + 'px'
// })


//text thử lk chưa
// console.log(tabs)
// console.log(panes)



// dùng lặp forEach để quét qua hết -> xử lý Dom Event sự kiện onclick() tabs-item cho từng element trên
tabs.forEach((tab, index) => {
  // sử dụng index để truyền index cụ thể cho mảng panes => cho ra values tương ứng
 const pane = panes[index]

  tab.onclick = function () {
    // trc khi add element click thêm active thì cần xóa cái cá thể element trc đó có active rồi
    $('.tab-item.active').classList.remove('active')
    // xét khi click vào element nào thì trạng thái active sẽ ghi nhận element nó ở trang thái active
    // hiểm nôm na là dùng nodeProperties classlist để thêm class có tên: active vào khi nhấn cái element nó trong forEach
    this.classList.add('active')

    // in values panes(tab-panes) tương ứng với index truyền vào mảng panes(pane) vừa tạo ở trên
    // console.log(pane)
    $('.tab-pane.active').classList.remove('active')
    pane.classList.add('active')


    // xét thanh trượt gạch trân đỏ -> khi nhấn bất kì tab-item nào thành gạch chận đỏ sẽ hiện lên đó
    // sử dụng cách set css dom với NodeProperties trong html dom
      Object.assign(line.style, {
        left: this.offsetLeft + 'px',
        width: this.offsetWidth + 'px'
      })
  }
})
