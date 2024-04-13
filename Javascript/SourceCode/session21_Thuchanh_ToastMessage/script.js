
// tạo các biến đại diện get element, và get element các class cùng tên nhau
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// lấy element các nút button tướng ứng
const successBtn = $('.btn--success')
const dangerBtn = $('.btn--danger')


/* tạo ra một function tên Toast điều khiển chức năng của các hộp thoại bằng Js */
function Toast({ title = '', message = '', type = 'typeAll', duration = 3000}) {
    // lấy element là id Toast
    const main = $('#toast')
    /*kiểm tra nếu có tồn tại element id toast dại diện là biến main thì mới thực thi
    render các đối số object truyền vào các thám số của function toast tương ứng
    và render vào thẻ div bên dưới đổ thông tin tương ứng để hiện thị các hộp thoại
    toast theo chủ đích: warn, info hay là Success...*/
    if (main) {
        // tạo một thẻ div bằng Element Dom
        const toast = document.createElement('div')
        // dùng classList để thêm class tên toast vào thẻ div 
        // thêm class modifier của Beem toast-<modifier_name> để thiết lặp cái màu border-left css ấy
        toast.classList.add('toast', `toast--${type}`)

        // tạo object chứa các icon tương ứng các hộp thoại toast khác nhau
        const icons = {
            Success: {
                iconClass: 'fa-regular fa-circle-check',
                color: '#0fab0d'
            },
            Info: {
                iconClass: 'fa-solid fa-circle-info',
                color: '#12afa5'
            },
            Warn: {
                iconClass: 'fa-solid fa-triangle-exclamation',
                color: '#dae817'
            },
            Error: {
                iconClass: 'fa-solid fa-circle-exclamation',
                color: '#f4372a'
            }
        }
        // icon chứa mảng các icons => type truyền vào cái icon nào nó xét css cho icon đó tương ứng toast đó
        const icon = icons[type]

        // xử lý animation trong js -> hiểu rõ animation trong đoạn này ntn qua css bài này xem hg dẫn chi tiết -> mục .toast > animation
        const delay = (duration/1000).toFixed(2) // duraton là tổng thời gian mình xét ở trên, toFixed là làm tròn lấy 2 số dư sau dấu thập phân ','
        toast.style.animation  = `slideInLeft ease .8s, fadeOut linear ${delay}s forwards`

        // lúc này ta có thẻ <div class="toast"></div> bên trong js tạo ra để render
        //=> tiến hành thêm phàn tử element cho div vừa tạo
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon.iconClass}" style="color: ${icon.color};"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `

        // có mục render với div class toats đầy đủ thì gán nó cho div có id toast 
        /*Phương thức appendChild được sử dụng để thêm một phần tử HTML hoặc một nút DOM vào một phần tử 
        cha (parent element). Trong ví dụ của bạn, bạn sử dụng appendChild để thêm một phần tử <div> 
        (được tạo bởi JavaScript) vào một phần tử có id là "toast" (biến main trong trường hợp này). */
        main.appendChild(toast)

        /* phần này setTimeout nó để xử lý cái th như sau: vd nhân nút show 1 2s sau nó ẩn thì bấm lại nút
        thì nó sẽ remove cái toast ban đầu đi để thay thế toast mới ở ngay vị trí đó luôn
        chứ không có xếp chồng các toast lên với nhau*/
        setTimeout(function () {
            // removeChile ngc lại với appendChild xóa bỏ đi tp con trong tp cha
            main.removeChild(toast)
        }, duration + 2000)
    }
}


// tiến hành xử lý sự kiện cho các button
successBtn.onclick = () => {
    // truyền một Object vào function tg ứng các tham số
    Toast(
        {
            title: 'Success',
            message: 'kết nối thành công Successfully - thành công kết nối',
            type: 'Info',
            duration: 2000
        }
    )
}


dangerBtn.onclick = () => {
    Toast(
        {
            title: 'Error',
            message: 'kết nối không thành - bạn nên thử lại hoặc liên lạc quản trị viên',
            type: 'Error',
            duration: 2000
        }
    )
}
