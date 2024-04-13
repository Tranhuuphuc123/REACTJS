/*******XỬ LÝ SỰ KIỆN DOM EVENT******************** */
/*
***Lý thuyết****
có 2 cách xử lý sự kiện DOM EVENT
 1/ Attribute events: dùng các thuộc tính xử lý sự kiến -> chèn các event attribute này vào
 thẻ html thuần

 2/ Assign event using the element node: cách gáng sự kiện vói element node đã học
 trong file js
*/



/**************************************************************************************/
/***********01/ CÁC EVENT CỦA HTML DOM************* */ 
/*
 => lưu ý để sử dụng các event của  DOMEvent ta dùng thuộc tính event trực tiếp trong html thuần
 => có thể truy cập HTML DOM event ở trang w3school để tiềm hiểu chi tiết hơn
 => ở đây sẽ giới thiệu một số sự kiện tiêu biểu:
  + onclick
  + oncopy: hành động copy
  + onchange: ghi nhận thay đổi nd, values...
    vd: thẻ input, edit.... 
   ==> lưu ý rằng sự kiện onchange sẽ thực thi khi cập nhật các giá trị mà 
   nó có sự thay đổi với giá trị nhập vào hay gán vào ban đầu

  + oninput:
   ==> chức năng tương tự onchange: tuy nhiên oninput nó ghi nhận giá trị trực
   tiếp hơn vd với thẻ input gõ thay đổi đến đâu nó update ngay đến đó mà không
   cần đơi thay dổi value xong mất thoát ra khỏi input hay nhấn enter cái nó mơi ghi 
   ghi nhận cập nhật values

  + oncut
  + ondouble click
  + ondrag,drop.... các thẻ chó sự kiện kéo thả
  + onfocus: tập trung cont rỏ chuột vào một button hay input nào đó...
  + onkeydown: khi bấm xuống
  + onkeyup: nhấc lên
  + onmousseover: hành vi hiệu ứng đưa, rê chuột vào đối tượng
  + onmouseout/up: hành động rê chuột trực tiếp vào/ cũng như ra của hiệu ứng rê chuột
  + onresize: hiệu ứng thay đổi kích thước trình duyệt
  + onscroll: hiệu ứng lăn, kéo trượt chuột cho các kiểu list....
  + onsearch: hiệu ứng tiềm kiếm

  + onblur: xảy ra khi một phần tử mà đang giữ trạng thái trực tuyến (được chọn hoặc tương tác) 
  mất trạng thái đó, tức là khi một phần tử không còn được tập trung. 
    -> Điều này thường xảy ra khi người dùng chọn một ô input, textarea, hoặc một phần tử khác 
    và sau đó di chuyển focus đến một nơi khác, 
    -> ví dụ:
        như click vào một phần tử khác hoặc tab đến một ô input khác.
        <=> xử lý code:
            var inputElement = document.getElementById("myInput");

                inputElement.onblur = function() {
                    // Kiểm tra dữ liệu và thực hiện xử lý nếu cần
                    console.log("Đã rời khỏi ô input");
                };

    -> Chức năng của sự kiện onBlur thường được sử dụng để thực hiện các hành động khi người dùng 
    rời khỏi một phần tử cụ thể. Điều này có thể là kiểm tra dữ liệu nhập vào, thực hiện xử lý nếu 
    có sự thay đổi, hoặc thực hiện bất kỳ công việc nào liên quan đến việc mất trạng thái focus.

  + onKeyup (Sự kiện key up): Sự kiện này xảy ra khi bạn thả một phím sau khi đã nhấn nó xuống.
   Nó thường được sử dụng để xác định khi một phím đã được nhấn và sau đó được thả ra
  + onKeydown (Sự kiện key down): Sự kiện này xảy ra khi bạn nhấn một phím trên bàn phím xuống. 
  Nó thường được sử dụng để xác định khi một phím đã được nhấn xuống và giữ lại

  + onkeypress: 
  + ontimeupdate: ontimeupdate là một sự kiện được kích hoạt khi thời gian của một phương tiện phương tiện 
  vd như audio phát nhạc thay đổi  thơi gian phát => nghĩa là khi bài hát đang phát và thời gian đang thay đổi.
  thì ontimeupdate ghi nhận điều đó
   => thg sử dụng với các hành động như tính toán thời gian của audio bài hát... để tạo các handleEvent để tua
   nhanh chậm bài hát đó.

  + Sự kiện ended (hoặc onended trong JavaScript) là một trong các sự kiện liên quan đến phương tiện trong DOM 
  (Document Object Model). Sự kiện này thường được kích hoạt khi một phương tiện (như một video hoặc âm thanh) 
  hoàn thành phát lại toàn bộ nội dung của nó, tức là đã đến cuối và kết thúc.
  => Khi sự kiện ended được kích hoạt, bạn có thể thực hiện các hành động xử lý, như bắt đầu phát lại video từ 
  đầu hoặc thực hiện các tác vụ liên quan đến kết thúc phát lại âm thanh hoặc video. Điều này thường hữu ích 
  trong việc tạo các trình đơn điều hướng phương tiện hoặc quảng cáo tự động khi phương tiện hoàn thành phát lại.

  + onsubmit: là một sự kiện (event) trong HTML DOM (Document Object Model) được kích hoạt khi một form được submit. 
  --> Chức năng chính của nó là cho phép bạn gắn một hàm xử lý sự kiện để thực hiện các hành động cụ thể khi người 
  dùng nhấn nút "submit" trên một form.
  
  ===> trc khi sử dụng các thuộc tính của DOMEvent thi nên thêm tiền tố On vào 
  trc tên thuộc tính

   vd:
     click -> Onclick
     search -> OnSearch
     ....
*/



/******************************************************************************************** */
/******************************************************************************************** */



/****************************************************************************** */
/******* CÁCH GÁN CÁC SỰ KIỆN VỚI CÁC ELEMENT NODE PROPERTIES ĐÃ HỌC******/
/*
 => gán nghĩa là dùng js xử lý hậu kỳ, nên các cách gán cho các sự kiện sẽ diễn ra ở file js
 ==> nói cách khác là thay vì viết trực tiếp trong html thuần, ta có thể viết trong js bằng 
 bằng cách gán các sự kiện đó cho các element đc lấy ra rồi . với các event attribute đó
 để tiến hành code chức năng xử lý cụ thể cho sự kiện đó
*/

// lấy ra cái element thẻ h2
var rs = document.querySelector('h3')
console.log(rs)


/* lắng nghe sự kiện từ cách gáng sự kiện cho element node đã học*/
// gáng với sự kiện onclick với element h2 có tên rs
rs.onclick = function () {
    //--> code thực thi ở đây
    // console.log(Math.random())
    // -->trả về element với this
    // console.log(this)
    // -->trả về nội dung text
    console.log(this.innerText)
}


/* còn một cách thông minh hơn trong việc lấy ra element node khi gọi đến event mà không cần code như trên
 nghĩa là không cần dùng this.innterText, Math.random()....(tức dùng các biến, thuộc tính đặt tên)
=> ta dùng các biến có sẵn của thuộc tính event -> viết tắ e => cùng xem vd
=> e (hoặc event) là một đối tượng sự kiện (event object) đại diện cho sự kiện DOM Event xảy ra trên phần
 tử HTML. Đối tượng sự kiện này chứa thông tin về sự kiện đó, bao gồm phần tử gây ra sự kiện
*/

console.log('***********************************************************')
var rs1 = document.querySelector('.sukiengang1')
console.log(rs1)

// target trả về đúng element 
rs1.onclick = function(e) {
    console.log(e.target)
}



/********************************************************************************* */
/********************************************************************************* */
/******************XỬ LÝ DOM EVENT THỰC TIỄN**************** */
console.log('*****************ví dụ thực tiễn****************')

/*====================================================== */
//01:  sử dụng Dom Event với thẻ input, seclect, checkbox
var inputText = document.querySelector('input[type="text"]')
console.log(inputText)

/* xét sự kiện thay đổi value của thẻ input với onchange:
=> dùng onchange với thẻ input để ghi nhận các giá trị thay đổi, chẳng hạn 
ta thay đổi nhập value mới thi onchange sẽ ghi nhận và cập nhật giá trị đó */

inputText.onchange = function (e) {
    // e.target là lấy ra đc chính cái element node của thẻ input này một cách trực tiếp và chuẩn nhất
    // e.target.value: lấy đc  cái giá trị chính xác của thẻ input vừa nhập
    console.log(e.target.value)
}


/* sử dụng Dom Event với thẻ type = checkbox-> đạt yêu cầu là ktra là check hay không và ghi nhận values của sự lựa chọn trên*/
var checkBox = document.querySelector('input[type="checkbox"]')
checkBox.onchange = function (e) {
    // /checked để trả về kết quả của sự lựa chọn
      console.log(e.target.checked)
}




/* xử lý sự kiện với thẻ select */
var selectChoose = document.querySelector('select')
selectChoose.onchange = function (e) {
    console.log(e.target.value)
}










/*====================================================== */
//01:  sử dụng Dom Event với thẻ key up/down
console.log("****************keyup/down************************")
var inputText1 = document.querySelector('input[type="text"]')
// số 27 tg trưng cho phím esc trên bàn phím=> tự trung nếu nhán phím esc thì thoát màn hình
// == đây là một ví dụ cho cách sài keyup/down
//===> ns thg đc ứng dụng cho các dạng hộp thoại yeu cầu thoát chtrinh hay không....
inputText1.onkeydown = function (e) {
    //which trong e(event) của keyboardEvent là thuộc tính kiểm tra xem mã phím vứa nhấn là mã gì)
    console.log(e.which)
    // dùng e.which ktra xem nếu là mã phím 27 tức phím esc thì lặp tức thoát màn hình
    switch (e.which) {
        case 27: 
            console.log('EXIT')
            break
        // nếu bấm phím enter tức mã key à 13 thì thực hiện chat send message
        case 13:
            console.log('Send Chat')
            break
    }

    /*
     => tựu trung thì sự kiện keyup/down đc dùng nhiều trong các ứng dụng:
       vd:
         ->> tạo hộp thoại thoát chương trình.. 
           người dùng có thể dùng phím tắt để thực esc cs mã 27 để tắt mà
         không cần dùng chuột hay phải nhấp ok trên hộp thoại

         ->> hay tạo các chức năng sử dụng thông qua phím tắt nưi mà có thể dùng mã phím để
         thự thi một hành động nào đó mà không cần tương tác chuột trực tiếp

      ===> trong vd trên ta thấy đc sự tg tác của các mã phím vậy tính chất của onkeyup/down thể hiện ở đâu
       + với onkeyup khi ta ấn phím thả ra nó thực thi dễ hiểu vậy thui
       + với onkeydown nếu ta nhấn phím và giữ phím vd ở đây là nhấn giữ chuột luôn và nhấn
       esc thì nó sẽ chạy hoài không dừng cho tới khi buôn chuột tg tác trên thẻ input ra thui
    */
}