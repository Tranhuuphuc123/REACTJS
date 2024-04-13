/* tiềm hiểu về các hàm built-in function đc javascript xây dựng sẵn có */
/* CÁC HÀM BUILT-IN FUNTION
1/ Alert: hộp thoại thông báo
2/ Console: 
3/ Confirm
4/ Prompt
5/ Set timeout
6/ Set interval */


/* tiềm hiểu về console: method thuộc tín ghi nhận và xuất hiện thông tin
>> các method đi kèm
 1/ console.log(): 
  => Được sử dụng để ghi thông tin hoặc giá trị biến ra console. Đây là phương pháp gỡ lỗi phổ biến 
  để kiểm tra giá trị của các biến hoặc xem dữ liệu trạng thái.

 2/ console.error(): 
  => Được sử dụng để ghi thông báo lỗi ra console. Thường được sử dụng khi một lỗi xảy ra trong mã 
  JavaScript.

 3/ console.warn(): Được sử dụng để ghi cảnh báo ra console. Nó thường được sử dụng để cảnh báo về các 
tình huống có thể gây ra vấn đề trong tương lai.

 4/ console.info(): Được sử dụng để ghi thông tin khác nhau ra console. Thường được sử dụng để cung cấp
 thông tin bổ sung cho những gì đang xảy ra.

 5/ console.debug(): Được sử dụng để ghi thông tin gỡ lỗi hoặc theo dõi vào quá trình thực thi của mã. 
Tuy nhiên, nó không hiển thị trên tất cả các trình duyệt mặc định.

 6/ console.clear(): Được sử dụng để xóa mọi thứ khỏi console, làm cho nó sạch sẽ và dễ đọc hơn.*/

var age =20
console.log(age) // xuất hiện dòng log thông tin thui
console.warn('đây là cảnh báo') // hiện ra một cảnh báo kèm biểu tượng tam giác vàng
console.error('lỗi ngiêm trọng') // tạo ra cảnh báo đỏ nguy hiểm






/*confirm: là hàm dùng để tạo thông báo xác nhận -> có hiển thị ok hay cancel
=> dùng để xác nhận trc khi thực thi tiếp*/
confirm('bạn đủ 18 tủi chưa')



/* Prompt: dùng để tạo hộp thoại ngoài giá trị mún thông báo thông tin ra
thì nó có xuất hiện thêm ô edit text cho người dùng nhập vào thông tin*/
prompt('vui lòng nhập vào độ tủi của bạn')



/* Set timeout: dùng để xét đoạn code đc thực thi sau khỏang thời gian thiết lặp trc đó
vd bên dưới là xét sau 3s funtion thông báo đó sẽ chạy*/
setTimeout(
    function () {
        alert('đc ròi đó')
    }, 3000
)


/* set interval: dùng tương tự setTimeOut khác ở chỗ cứ cách đúng thừi gian thiết lặp nó sẽ chạy 1 lần
và đều đằn không ngừng như một vòng tuần hoàn đều đăn sau khoảng thời gian thiết lặp */

// setInterval(
//     function () {
//         console.log('day la log' + Math.random()),4000
//     }
// )
