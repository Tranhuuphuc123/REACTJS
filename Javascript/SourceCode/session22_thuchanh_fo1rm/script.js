/* xử lý hậu kỳ Js form validate */

/** tạo các biến mẫu để get element & getAll Element**/
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)





/** tạo function Validator xử lý form như form-1, luận lý cho đối tượng validator như sau**/
function Validator(options) {

    /*tạo một hàm xử lý truy xuất đúng thẻ gốc thẻ cha, giúp truy xuất các thẻ con
    đúng với thẻ cha bao quanh nó
    - các ts:
     + element: chính là inputElement là các giá trị nhâp ở mục input
     + selector: chính là các ruleValue, các class tương ứng các class -> cụ thể là chỉ class cha .form-group
     class cha chứa tất cả(gồm tên và thẻ input tương tương ứng từng mục rule value)*/
    function getParentElement(element, selector) {
        //tạo vòng lặp kiểm tra xem chỗ input nó chỏ đúng đến thẻ cha có class .form-group chứa nó chưa
        while (element.parentElement) {
            // kiểm tra xem có class .form-group chưa
            // matches là thuộc tính dùng để ktra xem nó có match có kết nôi với class form-group hay không
            if (element.parentElement.matches(selector)) {
                // có đúng kết nói với class cha form-group thì nó trả về kết quả thui
                return element.parentElement
            } 
            element = element.parentElement
        }
    }




    /***tạo một định nghĩa Object lưu lại thêm nhiều trường hợp cho cùng một rule: nghĩa là cùng mộ ruleValue
     *trong key rule của validator nhưng xét nhiều th khác nhau cùng cho rulevalue đó
    mà nó vẫn không bị ghi đè dẫn đến lỗi không thực thi đc nhiều rule trên một rulevalue của
    key rule trong function validato
    ==> ????????????mục này còn chưa hiểu đang xử lý học thêm???????????????????r**********/
    var selectorRule = {}



    /*******mục tạo xử lý hàm validate - xử lý logic nếu có nhập thì ok không nhập 
     * mà blur hay bổ trống là báo lỗi ngay********/
    function Validate(inputElement, rule) {
        /*chạy cái xử lý logic ở mục rule test
        => khi chạy rule.test thì nó nhận value là giá nhập vào ở mục text input của các
        form group*/
        var errorMessage

        /*đoạn này có thể viết đơn giản: var errorMessage =rule.test[inputElement.value]
        <=> tuy nhiên lại xử lý cồng kềnh như dầy là nguyên do đặt th cùng một ruleValue mà
        có nhiều th khác thì nó sẽ bì trùng vì vậy tạo ra cách bên dưới để ghi nhận hết tất cả
        kể cả rule đó phân ra 2 3 th vẫn xử lý ghi nhận là một ruleValue hết */
        // Lấy ra tất cả các Rules của selector -> trùng ruleValue(selector) cũng lấy luôn -> tránh đụng keyValue trùng nhau
        var rules = selectorRule[rule.selector]
        // lặp qua từng rule & (check) -> nếu có lỗi thì dừng
        for (var i = 0; i < rules.length; ++i){
            /* xét thêm switch case để xét cho th là thẻ input: text. password, email or checkbox-radio luôn
            nếu không xét thể nay thì radio-checkbox sẽ bị lỗi*/
            switch (inputElement.type) {
                case 'checkbox':
                case 'radio':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    )  
                    break
                default:
                    errorMessage = rules[i](inputElement.value)   
                    break
            }
            if(errorMessage) break
        }
         

        /*Ý nghĩa đoạn: inputElement.parentElement.querySelector('.form-message') là truyền cái errorMessage vào thẻ div cóa class form-message
        => như ta thấy thì trong index.html mỗi div formgroup đều có class form-message
        vậy làm sao để lấy đúng class form-message của đúng cái mục text input đang nhập
        vd là đang kiểm tra mục nhập cảu fullname chằng hạn
        => cách giải quyết là dùng thẻ class cha truy xuất tới class con tức lấy từ thẻ class
        cha là form-group truy tới class con là form-message:
        <=> tuy nhiên với cách viết này gặp rắc rối khi giả dụ form-mesage nó năm trong nhiều
        thẻ div con nữa thì làm sao biết thẻ cha nó là thẻ nào
        <=> giải quyết cách lấy đúng thẻ cha chứa thẻ .form-message ta xây dựng:
         một function riêng để giải quyết lấy thẻ cha góc ở trên và đem xuống xử lý, xem hàm getParentElement() */
        var errorElement = getParentElement(inputElement,options.formGroupSelector).querySelector('.form-message')

        // nếu value có nhập vào thì dựa vào giá trị có tồn tại xét đk ở chỗ toán tử 3 ngôi
        if (errorMessage) {
            // thêm thông báo lỗi cho thẻ div chứa class form-message
            errorElement.innerText = errorMessage
            // thêm class invalid vào đúng thẻ cha có chứa form-message của đúng mục đang nhập -> tạo hiệu ứng css thông báo màu đỏ
            errorElement.classList.add('invalid')
        } else {
            errorElement.innerText = ''
            errorElement.classList.remove('invalid')
        }

        /* giải thích code
         + erroMessage là biến thông báo có lỗi hay không-> ok
         + toán tử ! là toán tử phủ định nghĩa là nếu !true ~ false
         => vậy thì toán tử !! có ý nghĩa ntn
         => Khi sử dụng hai toán tử ! liên tiếp nhau (!!), điều này chuyển đổi giá trị của biểu thức về kiểu boolean. 
         Nó đảm bảo rằng giá trị trả về sẽ là một giá trị boolean, không phải giá trị khác. 
        => Do đó, return !!errorMessage sẽ trả về giá trị boolean:
            ++ Nếu errorMessage tồn tại (không rỗng), toán tử !! sẽ chuyển đổi nó thành true, và return !!errorMessage sẽ trả về true.
            ++ Nếu errorMessage không tồn tại (rỗng), toán tử !! sẽ chuyển đổi nó thành false, và return !!errorMessage sẽ trả về false.
            ----> Trong ngữ cảnh của đoạn mã, câu lệnh này dùng để kiểm tra xem có thông điệp lỗi (errorMessage) hay không. Nếu có thông 
            điệp lỗi, hàm sẽ trả về true, ngược lại sẽ trả về false.
        */
        // return !!errorMessage

        // sử dụng phủ định lại erroMessage
        return !errorMessage
    }





    /*******************Mục lấy element của form validate-xử lý onblur(blur ra ngoài báo lỗi)- oninput(trỏ vào input hết lỗi)********************* */
    // ts options đại diện cho object Validator tạo bên đoạn Script của index.html ấy
    // get lement form-1 validator -> options.form chỉ và xuất ra đúng objecct Validator chưa form-1 bên kia
    var formElement = $(options.form)

    // lập luận nếu element có tồn tại thì thực hiện luận lý logic code bên trong
    if (formElement) {
        // dùng forEach lập qua từng trường hợp từng object trong mảng vaidator
        // lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input ....)
        options.rule.forEach(function (rule) {

            // thực hiện lưu lại các th khác nhau của cùng một ruleValue cho mỗi input
            /*Giải thích code:
             + đầu tiền nó kiểm tra các th rule.selector có phải là mảng hay không
              -> nghĩa là xét riêng từng th thì mỗi ruleValue trong mảng của key rule trong function validator
             là riêng lẻ nên nó chạy ở chỗ else trc
             + tiếp theo ghi nhận những ruleValue nào có 2 rule trở lên đc định nghĩa cho cùng một rulevalue
             thì nó xem là một mảng, lúc này nó ghi nhận thành th trong if và tiến hành dùng thuộc tính push
             để thêm value đó vào cúi mảng của ruleValue đó
             ===> tóm lại cách này giúp ghi nhận tất cả các value rule xét cho từng rule, nghĩa là
             cùng một rule nhưng tôi định nghĩa nhiều th xử lý khác nhau thì nó ghi nhận hết không để
             lỗi bị ghi đè lên
             =>??????mục này còn chưa hiểu cần học thêm??????????*/
            if (Array.isArray(selectorRule[rule.selector])) {
                selectorRule[rule.selector].push(rule.selector)
            } else {
                selectorRule[rule.selector] = [rule.test]   
            }


            // ts rule trong callback dùng để in ra từng th riêng lẻ trong key rule của Object Validator
            /*trong th này tạo biến inputElement = ... để chắc ăn rằng cái value trả về
            đúng bằng cái tham số selector của đúng rule trong Object Validator truyền vào */
            var inputElements = formElement.querySelectorAll(rule.selector)
            
            //  Array.from => giúp biến inputelemnts từ một nodeList thành một Array
            Array.from(inputElements).forEach(function (inputElement) {
                 /* sự kiện domEvent onblur dùng xử lý sự kiện khi con trỏ chuột đang ở ô textinput nào đó
                thì focus di chuyển chuột ra vùng khác làm mất tg tác gốc đi
                => cụ thể là đang ở mục nhập tên đi nhập chưa đúng và chưa xong mà blur di chuyển
                chuột qua chỗ khác thì ô textinput đó báo lỗi là chưa thành công hay cần nhập đủ*/
                inputElement.onblur = function () {
                    Validate(inputElement, rule) // gọi thực thi hàm xử lý validate ở trên đầu
                }

                /*xử lý trường hợp khi ngườ dùng đang nhập thì dù chưa xong cũng không đc báo lỗi
                => tránh th chưa  nhập hết thì đã báo lỗi luôn
                => oninput nó ghi nhận giá trị trực tiếp hơn vd với thẻ input gõ thay đổi đến đâu 
                nó update ngay đến đó linh hoạt hơn sự kiện opnchange*/
                inputElement.oninput = () => {
                    /*câu bên dưới với inputElement.parentElement.querySelector('.form-message')
                    => là cách ta từ thẻ input truy xuất đến thẻ cha có class cha chứa class con là form-message
                    <=> tuy nhiên với cách viết này gặp rắc rối khi giả dụ form-mesage nó năm trong nhiều
                    thẻ div con nữa thì làm sao biết thẻ cha nó là thẻ nào
                    <=> giải quyết cách lấy đúng thẻ cha chứa thẻ .form-message ta xây dựng:
                    một function riêng để giải quyết lấy thẻ cha góc ở trên và đem xuống xử lý, xem hàm getParentElement()  */
                    var errorElement = getParentElement(inputElement,options. formGroupSelector).querySelector('.form-message')
                    errorElement.innerText = ''
                    // khi người dùng đang nhập thì còn tính là đang update không xét vụ báo lỗi đỏ
                    errorElement.classList.remove('invalid')
                }
            })

        })



        /************tiếp theo xử lý lắng nghe sự kiện cho nút submit***************** */
        /*
         => ghi nhận các giá trị khi nhập vào
         => lưu lại các giá trị đó
         => hiển thị nó ra -> kw đã đk thành công chẳng hạn
         => onsubmit là thuộc tính xử lý sự kiện cho nút nhấn submit button trong html dom event        */
        formElement.onsubmit = (e) => {
            /* preventDefault() loại bỏ hành vị mặc định của button -> nghĩa là khi nhấn nút button mà
            chưa xử lý thì trong html button tự dẫn qua trang This page isn’t working không có giá trị gì
            preventDefault() giúp loại bỏ hành vi mặc định đó*/
            e.preventDefault()

            // tạo biến isValid = true ý nghĩa cho giá trị mặc định là đúng để kiểm tra
            var isFormValid = true 

            /*****đoạn này mới là xử lý onsubmit chính -> nghĩa là khi nhấn onsubmit một cái là nó sẽ ktra tất cả các thẻ coi đúng chứa*******/
            /* xử lý ghi nhận cho từng th trong mảng các ruleValue trong validator
            => nghĩa là nó xét thực thi hàm validate một lượt lun khi nhấn button obSubmit mà chưa điền 
            gì hay điền rồi thì nó xử lý lượt tất cả lun*/
            options.rule.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector)

                // thực thi xử lý hàm validate lun
                var isValid = Validate(inputElement, rule)
                if (!isValid) {
                    isFormValid = false
                } 
            })




            /***Cái đoạn này xử lý: khi nhập đúng nó sẽ xuất ra các giá trị đã nhập ra bên ngoài -> in ra kw tương ứng đã nhập ****/
            if (isFormValid) {
                // console.log('không có lỗi')
                /* kiểm tra xem khi nhấn nút, rule của Validator là rule.onSubmit có đúng bằng một function không*
                nếu đúng nó sẽ trả về một object với các trường mong muốn
                => lưu ý options.onSubmit là cái rule trong validator có key onSubmit chứ không phải DomEvent onsubmit nha*/
                if (typeof options.onSubmit === 'function') {
                    /* tạo biến chứa: [name]:not([disabled]) nghĩa là select get element tất cả
                    các thẻ nó field name trong thẻ html mà không có filed là disabled*/
                    var enableInputs = formElement.querySelectorAll('[name]:not([disabled])')

                    /* enabledInputs đc trả về không phải mảng mà là NodeList
                    => vậy để đưa nó về mảng thực thi đc hàm reduce thì làm như sau
                    => tại sao lại dùng reduce vì nó trả về đc các trường mong muốn
                    => lưu ý trong reduce
                     + valueL là biến lưu trữ
                     + input: là giá trị truy cập hiện tại
                     + {}: giá trị khởi tạo */
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {
                        switch (input.type) {
                            case 'radio':
                            case 'checkbox':
                                // return (values[input.name] = input.value) && values
                                /* viết vầy thay vì viết như ở trên với múc đich
                                -> nếu mà một th rule value bị xóa đi hay không bắt buộc
                                nhập thì nó vẫn ghi nhân các trg còn lại và xuất ra kw bt mà không bị lỗi
                                dõ cách viết cũ có toán tử && nên nếu thiếu một trg nó sẽ bắt lõi
                                <=> cách thức này hỗ trợ kiểu các trg bắt buộc nhập và không bát buộc 
                                <=> ormElement.querySelector('input[name ="' + input.name + '"]:checked').value
                                nghĩa là lấy đúng cái thẻ radio nào có cái filed name=gender đc check tich chọn ấy */
                                values[input.name] = formElement.querySelector('input[name ="' + input.name + '"]:checked').value
                               
                                break
                                
                            default:   
                                values[input.name] = input.value       
                        }
                        return values
                    }, {})

                    options.onSubmit({formValues})
                  }
            }
            // th hợp submit với hành vi mặc định của html không dùng code js
            else {
                e.preventDefault()
            }
        }



    }// end if(formElement)
}// end function validator





/**************Mục Rule định nghĩa các key method bên validator*********************/
/** định nghĩa các method, các rule trong hàm Validator **
 *>> nguyên tắc đặt ra cho key: test:
   + khi có lỗi thì trả ra message lỗi
   + khi hộp lệ -> thì không trả cái gì cả **/
Validator.isRequired = (selector) => {
    return {
        selector: selector,  // selector là ts #fullname/(or #email của từng th..) cả mục rule
        test: function (value) {
            // function này để lập đk luận lý: vd không nhập báo đỏ
            /* nếu th hợp lệ thì underfined tức không báo lỗi gì cả còn khôg nhập gì thì báo lỗi ngay
             -> trim(): xem lại kt mảng cắt khoẳng trắng đầu và cuối của mảng ký tự
            */
            return value ? undefined : 'Vui lòng nhập trường này'
        }
  }
}

// rule định nghĩa cho key email ở Validator
Validator.isEmail = (selector) => {
    return {
        selector: selector,
        test: function (value) {
            /* search google cách kiểm tra biểu thức chính quy mục email
            => gõ: javascript email rejex(kiểm tra biểu thức chính quy email có hợp lệ hay không?)
            ===> sẽ có cái đoạn xử lý mẫu copy và dùng nó */
            var emailRejex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return emailRejex.test(value)? undefined : 'Vui lòng nhập đúng cấu trúc email'
        }
    }
}


// rule định nghĩa cho key password ở Validator => nhập phải từ 8 kí tự trở lên nếu ít hơn báo lỗi
Validator.minLenght = (selector, min) => {
    return {
        selector: selector,
        test: function (value) {
           return value.length >= min ? undefined : `vui lòng nhập tối thiểu ${min} ký tự`
        }
    }
}

/* định nghĩa rule cho mục password_cofirmation => ruleValue này có 2 tham số là 
selector(class password_confirmation) và một function*/
//=> nên qua định nghĩa ở đây cũng cần truyền đủ 2 tham số đại diện
Validator.isConfirmed = (selector, getConfirmValue, message) => {
    return {
        selector: selector,
        test: function (value) {
            /* trả về kết quả là một giá trị đúng bằng với value trả về trong đối số 
            ở bên Validator của index.html vào tham số getConfirmValue thì không có gì 
            còn sai thì báo lỗi
            => thêm trg message trên thật ra không khác gì đoạn value ở toán tử 3 ngôi cả
            <=> tuy nhiên có số trg hợp người ta xem đoạn 'value trong toán tử 3 ngôi' là đoạn 
            messgae mặc định vậy lập trình viên có thể thêm tham số message ở ngoài để tùy chỉnh
            lại thay đổi thông báo thui -> kiểu không cần dùng đến câu mặc định của người viết trc
            đại loại vậy muốn chèn câu của riêng mình*/
            return value === getConfirmValue() ? undefined : message || 'Nhập chưa khớp với mật khẩu ở trên'
        }
    }
}