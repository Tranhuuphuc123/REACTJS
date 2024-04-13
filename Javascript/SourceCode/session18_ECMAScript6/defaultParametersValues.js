/******TIỀM HIỂU VỀ CÁC THAM SỐ MẶC ĐINH****** */
// tạo một function
function logger(log) {
    // lưu ý: underfined có nghĩa là th gọi hàm mà không truyền values, hay values khoog xác định
    if (typeof log === 'undefined') {
        log = 'Giá trị mặc định'
    }
    console.log(log)
}
logger()
logger(undefined)

/*
 Nhận xét:
  => nhìn ví dụ trên ta thấy ta đang thiết lập cái ts tên là log rằng
  nếu đối số truyền vào là không xác định hoặc rổng thì nó mặc nhiên in
  ra cái values cho ts log la: 'Giá trị mặc định'
  --> nghĩa là ta đang cố luận lý logic để tạo ra một giá trị mặc định 
  mà nếu khoog có truyền values cho ts log thì nó sẽ in ra đúng câu
  đã thiết lặp sẵn

  ===> tuy nhiên viết thế là thủ công, trong ES6 có một cách hay hơn
  được ES6 hỗ trợ sẵn gọi là Default Parameters Values
*/

//<===> triển khai kiểu tham số mặc định của ES6 hỗ trợ
// bằng cách truyền tt values cho tham số khi khai báo lun
function myLogger(log = 'Giá trị mặc định 1') {
    console.log(log)
}

myLogger()  // nếu không truyền gì nó sẽ ra giá trị mặc đinh


//<=> tuy niên vs tham số mặc định nên áp dụng cho các tham số có kiểu boolean cần xác định true or false để hiển thị
function myLog(log, isAlert= false) {
    if (isAlert) return alert(log)
    console.log(log)
}
myLog('Message')









