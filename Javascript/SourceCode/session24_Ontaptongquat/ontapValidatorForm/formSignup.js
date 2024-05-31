/*============= KIẾN THỨC TỔNG ÔN MÔN JAVASCRIPT - KIẾN THỨC ÔN TẬP MÔN JAVASCRIPT ==================== */

/************ khai báo biến $ $$ chug để getElemen**************/
// I - định nghĩa biến chung
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)






/*******nội dung chính của việc xử lý form sigun up*******/
// II -  tạo một function Validator xủ lý cho cái mông muốn output trả vể cho object Validator
//options tham số này chính là tham số đại truyền cho object Validator bên dưới truyền vào function Validator 
Validator = (options) => {
    //01 - tạo hàm validate -  xử lý logic nếu có nhập thì ok không nhập  mà blur hay bổ trống là báo lỗi ngay
    validate = (inputElement, rule) => {
         //value" inputElement.value -|> nghĩa là lấy nd nhập từ các thẻ input
        //test mess: lấy qua rule.test trong function validator.isRedirect/isEmail..... đoạn mess định sẵn thông báo khi blur ra ngoài mà chưa nhập xong hoặc nhập đúng
        var erroMessage = rule.test(inputElement.value)
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
      
        if (erroMessage) {
            errorElement.innerText = erroMessage
            //thêm màu đỏ khi báo lỗi 
            inputElement.parentElement.classList.add('invalid')
        } else {
            errorElement.innerText = ''
             //xóa đi màu đỏ khi báo lỗi 
             inputElement.parentElement.classList.remove('invalid')
        }
    }


    // 04 - get form element  
    var formSignup = $(options.form)
    //lặp luận nếu formSignup có tồn tại
    if (formSignup) {
        //dùng for each để lập qua từng thẻ input 
        options.rules.forEach(function (rule) {
            var inputElement = formSignup.querySelector(rule.selector)

            //nếu thẻ inputElement có tôn tại thì ta lăng nghe sự kiên onblur của nó
            //onblur là thuật ngữ chỉ khi không hoover vào thẻ input khi chưa hoàn thành nó sẽ báo lỗi để nhắc nhở
            if (inputElement) {
                //xử lý khi người dùng chưa nhập mà blur ra ngoài
                inputElement.onblur = () => {
                    validate(inputElement,rule)
                }
                
                //xử lý ki người dùng nhập thì mất đi cảnh báo
                inputElement.oninput = () => {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
                    errorElement.innerText = ''
                    //xóa đi màu đỏ khi báo lỗi 
                    inputElement.parentElement.classList.remove('invalid')
                }
            }
        })
    }

}






//III - đi định nghĩa các biến Validator.isRequired, Validator.isEmail.. trong mảng rules của Validator bên dưới
Validator.isRequired = (selector) => {
    //tham số selector chính là các key id element của các trường input 
    //test: truyền thoog báo 
    return {
        selector: selector,
        test: function (value) {
            //nguyên tắc của các rule -> có lỗi thì báo khong thì không báo
            return value.trim() ? undefined : 'vui lòng nhập trường này'
        }
    }
}

Validator.isEmail =  (selector) =>  {
    return {
        selector: selector,
        test: function (value) {
            //nguyên tắc của các rule -> có lỗi thì báo khong thì không báo
            var emailRejex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return emailRejex.test(value)? undefined : 'Vui lòng nhập đúng cấu trúc email'
        }
    }
}

Validator.isPassword =  (selector,min) =>  {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : `vui lòng nhập tối thiểu ${min} ký tự`
        }
    }
}

Validator.isConfirmed =  (selector,getConfirmValue, message) =>  {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Nhập chưa khớp với mật khẩu ở trên'
        }
    }
}












/**********************VALIDATOR OUTPUT MONG MUỐN (QUY CHUẨN MỚI TĂNG TÍNH TÁI SỬ DỤNG)******************************* */
// IV - validator => hiểu nôm na hàm object mông muốn xử lý value của forrm đk đat đc sẽ gọi ở đây để build render lên giô diện và database
Validator({
    form: '#form-signup', //lk id của form
    errorSelector: '.form-message',
    //mảng rules chứa các value của các thẻ input của  form 
    rules: [
        Validator.isRequired('#fullname'), //các isRequired, isEmail .. do ta tự định nghĩa -> ta sẽ code định nghĩa nó ở trên fuction
        Validator.isEmail('#email'),
        Validator.isPassword('#password', 8),
        Validator.isConfirmed('#password_confirmation', function(){
            // lấy ra đúng value kw là password nhập vào của đúng form-1 
            return document.querySelector('#form-signup #password').value
        },'Vui lòng nhập lại khớp với password ở trên'),
    ]
})