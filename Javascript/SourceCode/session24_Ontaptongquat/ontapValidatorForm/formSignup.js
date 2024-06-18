/*============= KIẾN THỨC TỔNG ÔN MÔN JAVASCRIPT - KIẾN THỨC ÔN TẬP MÔN JAVASCRIPT ==================== */

/************ khai báo biến $ $$ chug để getElemen**************/
// I - định nghĩa biến chung
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)






/*******nội dung chính của việc xử lý form sigun up*******/
// ********II -  tạo một function Validator xủ lý cho cái mông muốn output trả vể cho object Validator*******
//options tham số này chính là tham số đại truyền cho object Validator bên dưới truyền vào function Validator 
Validator = (options) => {
   
    var selectorRules = {}; // muck đích là một mảng object nó có thể lưu nhiều rules cho một element

    //*******01 - tạo hàm validate -  xử lý logic nếu có nhập thì ok không nhập  mà blur hay bổ trống là báo lỗi ngay*******
    validate = (inputElement, rule) => {
        //value" inputElement.value -|> nghĩa là lấy nd nhập từ các thẻ input
        //test mess: lấy qua rule.test trong function validator.isRedirect/isEmail..... đoạn mess định sẵn thông báo khi blur ra ngoài mà chưa nhập xong hoặc nhập đúng
        var erroMessage;
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector)

        //****xử lý th nhiều rule.test cho một element(selector)****
        //lấy ra các rules của selector 
        var rules = selectorRules[rule.selector]

        //******01-01 xử lý th nhiều rule.test cho một element(selector)*****
        //lặp qua từng rule & kiểm tra nó 
        for (var i = 0; i < rules.length; ++i) {
            erroMessage = rules[i](inputElement.value)
            //nếu có lỗi thì dừng kiểm tra
            if(erroMessage) break
        }
        
        //01-02 luận lý blur
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



    // ********02 - get form element  ********
    var formSignup = $(options.form)
    //lặp luận nếu formSignup có tồn tại
    if (formSignup) {
        //*****khi submit nút đưng ký form -> bỏ đi hành vi mặc đinh(là hành vi lk sang trang mới không có chủ đích)*****
        formSignup.onsubmit = (e) => {
            //methof preventDefault là chặn hành vi mậc định đó
            e.preventDefault()

            //thực hiện lặp qua từng rule và valldate luôn -> tức nhấn nút sutmit nó validate một cái một thay vì từng thẻ input như đoạn dưới
            options.rules.forEach(function (rule) {
                var inputElement = formSignup.querySelector(rule.selector)
                validate(inputElement, rule)
            })
        }
        
        //******dùng for each để lập qua từng thẻ input (trong vòng lặp sẽ xử lý lắng nghe sự kiện của từng thẻ input) *****
        options.rules.forEach(function (rule) {

            //****xử lý th nhiều rule.test cho một element(selector)*****
            //lưu các rules cho mỗi input : vd passowrd cùng element mà có nhiều rule.test khác nhau
            if (Array.isArray(selectorRules[rule.selector])) {
                //khi da la mang thi tien hanh add them cac value vao mang
                selectorRules[rule.selector].push(rule.test)
            } else {
                //chua la mot mang thi vao day 
                selectorRules[rule.selector] = [rule.test]
            }
           
            var inputElement = formSignup.querySelector(rule.selector)

            //nếu thẻ inputElement có tôn tại thì ta lăng nghe sự kiên onblur của nó
            //onblur là thuật ngữ chỉ khi không hoover vào thẻ input khi chưa hoàn thành nó sẽ báo lỗi để nhắc nhở
            if (inputElement) {
                //xử lý khi người dùng chưa nhập mà blur ra ngoài
                inputElement.onblur = () => {
                    validate(inputElement,rule)
                }
                
                //xử lý ki người dùng nhập thì mất đi cảnh báo blur
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






//***********III - đi định nghĩa các biến Validator.isRequired, Validator.isEmail.. trong mảng rules của Validator bên dưới*******
Validator.isRequired = (selector, message) => {
    //tham số selector chính là các key id element của các trường input 
    //test: truyền thoog báo 
    return {
        selector: selector,
        test: function (value) {
            //nguyên tắc của các rule -> có lỗi thì báo khong thì không báo
            return value.trim() ? undefined : message || 'vui lòng nhập trường này'
        }
    }
}

Validator.isEmail =  (selector, message) =>  {
    return {
        selector: selector,
        test: function (value) {
            //nguyên tắc của các rule -> có lỗi thì báo khong thì không báo
            var emailRejex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return emailRejex.test(value)? undefined : message || 'Vui lòng nhập trường này'
        }
    }
}

Validator.isPassword =  (selector,min, message) =>  {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : message || `vui lòng nhập tối thiểu ${min} ký tự`
        }
    }
}

Validator.isConfirmed = (selector, getConfirmValue, message) => {
    // lưu ý: biens message chủ yếu là khong muốn dùng value mặc định mà là một messenger do người dùng muốn chèn vào tùy ý
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Nhập chưa khớp với mật khẩu ở trên'
        }
    }
}












/**********************IV - VALIDATOR OUTPUT MONG MUỐN (QUY CHUẨN MỚI TĂNG TÍNH TÁI SỬ DỤNG)******************************* */
// ********* - validator => hiểu nôm na hàm object mông muốn xử lý value của forrm đk đat đc sẽ gọi ở đây để build render lên giô diện và database***********
Validator({
    form: '#form-signup', //lk id của form
    errorSelector: '.form-message',
    //mảng rules chứa các value của các thẻ input của  form 
    rules: [
        Validator.isRequired('#fullname', 'vui lòng nhập trên đầy đủ'), //các isRequired, isEmail .. do ta tự định nghĩa -> ta sẽ code định nghĩa nó ở trên fuction

        Validator.isRequired('#email', 'Không được bỏ trống'), 
        Validator.isEmail('#email', 'vui lòng nhập email đúng cấu trúc: vd: abc@gmail.com '),

        Validator.isRequired('#password', 'vui lòng không để trống'),
        Validator.isPassword('#password', 8),

        Validator.isRequired('#password_confirmation','vui lòng không đượt dể trống'),
        Validator.isConfirmed('#password_confirmation', function(){
            // lấy ra đúng value kw là password nhập vào của đúng form-1 
            return document.querySelector('#form-signup #password').value
        },'Vui lòng nhập lại khớp với password ở trên'),
    ]
})