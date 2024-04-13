/********TIỀN HÀNH CODE HIỆN THỰC HÓA CÁI MONG MUỐN - CÁI LIB TA KHỞI TẠO BÊN INDEX.HTML******** */

/***********COMMON************** */
// xây dựng cách thức getElement chung
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


/*****xây dựng định nghĩa function Validator******* */
//tham số: formSelector -> chính là đại diện cho đối số là id: #form-2 của thẻ form mà mình mong muốn lấy bên validator('#form-2) ở file index.html
function Validator(formSelector) {
    // getElement thẻ form
    var formElement = $(formSelector)
        // định nghĩa một biến là một object -> mong muốn dùng nó chứa tất các element có thuộc tính rules
    var formRules = {}

    // ****tạo một object định nghĩa các rules -> luận lý logic bằng function để xử lý*******
    var validatorRules = {
        required: function(value) {
            return value ? undefined : 'Vui lòng nhập trường này'
        },
        email: function(value) {
            /* search google cách kiểm tra biểu thức chính quy mục email
            => gõ: javascript email rejex(kiểm tra biểu thức chính quy email có hợp lệ hay không?)
            ===> sẽ có cái đoạn xử lý mẫu copy và dùng nó */
            var emailRejex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return emailRejex.test(value) ? undefined : 'Vui lòng nhập đúng cấu trúc email'
        },
        min: function(min) {
            return function(value) {
                return value.length >= min ? undefined : `vui lòng nhập tối thiểu ${min} ký tự`
            }
        },
        max: function(max) {
            return function(value) {
                return value.length <= min ? undefined : `vui lòng nhập tối đa ${max} ký tự`
            }
        }
    }


    /* thực hiện kiểm tra nếu đúng tên element mà mình lấy ra(khoog sai nha) thì mới thực hiện đc
    --> thực ra bc này không cần nhưng vì mún chắc ăn là trong trg hợp mà
    mình viết sai tên id của thẻ form truyền vào ts ở validator tức không đúng form
    của mình thì không cho chạy tránh rủi ro 
    <=> nhiều khi mình làm nhiều form một lược thì sao*/
    if (formElement) {
        // get Element tất cả các thẻ input có chung thuộc tính name và rules -> lưu ý formElement là form cha!
        var inputs = formElement.querySelectorAll('[name][rules]')

        // dùng for lặp qua từng trường hợp input
        for (var input of inputs) {
            // giải quyết vấn đề phấn tách các rules lk qua dấu | ->  (ex: required|email )
            var rules = input.getAttribute('rules').split('|')
            for (var rule of rules) {
                var ruleInfo
                var isRulesHasValue = rule.includes(':')
                    // nếu trg hợp min:6 -> gặp trg hợp ngăn với dấu : thì tách tiếp ra luôn
                if (isRulesHasValue) {
                    ruleInfo = rule.split(':')
                    rule = ruleInfo[0] //mục đích  tách min:6 ra rồi thì kết quả trả về trc mắt ta lấy thèn min
                }


                // mục tiêu đoạn này là mình xử lý chỗ min:6 -> làm sao truy xuất đc hàm bên trong của key min chính là kw return về cho đc :6
                var ruleFunc = validatorRules[rule]
                if (isRulesHasValue) {
                    // gán giá trị :6 làm index cho mảng object validators
                    ruleFunc = ruleFunc(ruleInfo[1])
                }

                /*giải thích code:
                 -> Trong đoạn code này, điều kiện if (Array.isArray(formRules[input.name])) {...} else {...} 
                 được sử dụng để kiểm tra xem trong formRules đã có một mảng định nghĩa cho các quy tắc (rules) 
                 của một trường input cụ thể chưa nếu chưa thì rơi vào th1 nó gán làm mảng trc sau đó vòng lặp
                 đưa tới th2 thêm mảng vừa gán vào formRules.
                 ==> tóm lại đoạn này mục đích mong muốn đạt đc dó là:
                  + thứ nhất là ta muốn trả về kq là một mảng các giá trị đc phân tách ra thành từng th rõ ràng
                  (vd: rules = "required|email -> tách ra required, email.. riêng biệt và biến nó thành một Array")
                  + thông qua việc đó thì ta có thể truy xuất từng value trong mảng dễ dàng hơn 
                  --> Cuối cùng đạt đc hiệu quả kw trả về là một mảng giá trị đồng thời các value trong mảng là chính là kw 
                  trả về từ các value là một function của các key tương ứng trong object validatorRules 
                     ex: trả về input.email là một mảng gồm 2 value là 2 function [required, email]
                     2 function đó đồng thời cũng chính là 2 value của key required và email trong object validatorRules */

                /*th2(thành Array rồi): Nếu mảng rules cho trường input đã tồn tại (formRules[input.name] đã là một mảng), chúng ta 
                cần thêm(push) một rule mới vào mảng đó. */
                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc)
                }
                /*th1(chưa là Array):Nếu mảng rules chưa tồn tại (formRules[input.name] không phải là mảng), chúng ta cần tạo một mảng 
                mới và gán rule đầu tiên của trường input đó vào mảng mới này. */
                else {
                    formRules[input.name] = [ruleFunc]
                }
            }

            /*giải thích code
             + input.name, nhưng tại sao lại là getAttribute('rules') mà không input.rules => bởi vì rules là attribute ta tự định nghĩa
             nó không có sẵn của html
             + mong muốn đoạn code này là xác định đc đúng cái rules của đúng cái name của thẻ input tương ứng và lưu tất cả
             vào object formRules -> để ghi nhận đc từng trường hợp lập qua một cách chính xác
             ==> tóm lại làm sao mà rules: required phải trả về đúng cái name="fullname".. tg tự các trg hợp còn lại */
            // formRules[input.name] = input.getAttribute('rules')
        }
    }


} //end function Validator