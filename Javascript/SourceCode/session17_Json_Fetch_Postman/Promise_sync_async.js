/***********TIỀM HIỂU VỀ PROMISE SYNC ASYNC*************** */
/*
 *****Khái niệm*****
 1/ Sync: đồng bộ hóa
 2/ Async: bất đồng bộ hóa
 3/ pain(nổi khổ khi không có promise) -> ý mún nói đến promise sinh ra để làm gì nó giúp ích đc gì
 4/ concept: Lý thuyết và cách hoạt động của Promise
 5/ concept: triển khai thực hành ứng dụng thực tiễn
*/

/****************************************************************************** */
/*********************************************************************************/
/*****SYNC(ĐỒNG BỘ HÓA)/ASYNC(BẤT ĐỒNG BỘ)*** */
/*
 => Bản chất JS là ngôn ngữ đơn luồn tức là đồng bộ hóa
 => tuy nhiên thể hiện bất đồng bộ vẫn hiện rõ chủ yếu ở một số hàm sau
  + setTimeout
  + setInterval
  + fetch
  + XMLHTTPRequest
  + file Reading
  + request animation frame
  ..
  --> đây là nhưng trường mà js hay xử lý bất đồng bộ Async
*/


//demo
setTimeout(function() {
        console.log(1)
    }, 1000)
    // setTimeout là tác vụ bất động bộ (async)

console.log(2) // Đây là tác vụ đồng bộ (sync)

/*
=> theo bạn cái nào đc in ra trc.. nếu theo đồng bộ thì 1 -> ngắt 1 s tới 2
=> nhưng setTimeout lại có t/c bất đông bộ nên cũng có thể nói là 2 cứ in ra việc sau 1s
nó in ra 1 cũng đúng.... */



/****************************************************************************** */
/***********************************************************************************/
/*******THẤU HIỂU PAIN(SỰ CẦN THIẾT CỦA PROMISE)********* */
/**
 * >>> NGUYÊN NHÂN TẠI SAO PROMISE CẦN THIẾT ĐC SINH RA:<<<
 *  =>  trong lập trinh có khai niệm là callback hell, nghĩa là cứ gọi lại hàm callback tỏng một callback
 * cách viết như thế vô tinh để các callback con bên trong một callback khi gọi đến vô
 * tình bị phụ thuộc trồng tréo lên nhau.. nếu phg án như thế quả là một ngõ cục cho
 * việc viết code
 * 
 *  => Pyramid of doom: tiềm hiểu thêm các khó khăn tổng quan khi code
 */

// demo về sự khó khăn khi code dùng đến callback hell như đã nói ở trên
setTimeout(function() {
    console.log(1) // cv thứ 1
    setTimeout(function() {
        console.log(2) // bây giờ đội việc 1 xong sẽ chạy tới việc 2
        setTimeout(function() {
            console.log(3) // xong việc 2 call back  mới chạy đc việc 3
        }, 1000)
    }, 1000)
}, 1000)

/* với cách viết gọi callback lại liên tục ta sẽ chạy đc một tiến trình tuần tự
tuy nhiên với nổi đau callback hell nó quá phụ thuộc vào hành động trc nó
cách viết code cũng lê thê dài dòng */


/****************************************************************************** */
/****************************************************************************** */


/****************************************************************************** */
/****************************************************************************** */
/**==========HƯỚNG GIẢI QUYẾT AVASN ĐỀ NỔI ĐAU TRÊN: PROMISE========== */
/****************************************************************************** */
/****************************************************************************** */
/*
 >>>> ĐỊnh nghĩa Promise là gì
  -> Trong JavaScript, Promise là một đối tượng được sử dụng để xử lý các tác vụ 
  bất đồng bộ (asynchronous tasks) một cách dễ dàng và quản lý chúng một cách hiệu 
  quả. Promise đại diện cho một giá trị hoặc một tác vụ có thể hoàn thành trong 
  tương lai hoặc thất bại. Điều quan trọng là Promise cho phép bạn làm việc với 
  các tác vụ bất đồng bộ mà không cần sử dụng callback hell (nhiều lớp gọi lại lồng nhau).

  -> Một Promise có thể có một trong ba trạng thái sau:
   + Pending (Chờ đợi): Trạng thái ban đầu khi tác vụ chưa hoàn thành hoặc 
   thất bại.

   + Fulfilled (Thành công): Trạng thái khi tác vụ đã hoàn thành thành công
    và trả về một giá trị.

   + Rejected (Thất bại): Trạng thái khi tác vụ thất bại hoặc xảy ra lỗi và
    trả về một giá trị lỗi.

    ==> Một Promise có thể chuyển từ trạng thái "Pending" sang trạng thái "Fulfilled" 
    hoặc "Rejected" khi tác vụ hoàn thành hoặc thất bại.
*/

/*cách khởi tạo sử dụng một promise thay cho một callback (hàm gội lại)*/
var promise = new Promise(
    //Executor: thực thi function khi gọi đến promise
    // hai tham số qui ước(tự đăt): 1/ resovle là tham số chỉ thành công, reject là ts chỉ sự thất bại
    function(resolve, reject) {
        //=>  logic code tùy cơ ứng biến của ta
        // thành công gọi đến resolve()
        resolve([{
                id: 1,
                name: 'javascript'
            }])
            // or thất bại gọi đến reject()
            //  reject('co loi nha')
    }
)

// sử dụng promise với 3 method sau
promise
    .then(function(cources) {
        // khi thành công resolve đc gọi thì then() sẽ đc gọi
        console.log(cources)
    })
    .catch(function(error) {
        // khi thất bại reject đc gọi thì catch() sẽ đc gọi
        console.log(error)
    })
    .finally(function() {
        // finnaly sẽ diễn ra cả khi reject lân resovle đều đc gọi
        console.log('Done!')
    })




/**************************************************************************************************/
/* =======PROMISE CHAIN:Tính chất của promise để giải quyết vấn đề======*/
console.log('**************************************')
    /*
     >>>> Tính chất Promise giải quyết đc vấn đề<<<<<
      **1/  chain(tính chất chuỗi)
        => 
    */
    //demo
var promise2 = new Promise(
    function(resolve, reject) {
        resolve()
    }
)

console.log('******************************')
promise2
    .then(function() {
        return 1
    })
    .then(function(data) {
        console.log(data)
        return 2
    })
    .then(function(data) {
        console.log(data)
        return 3
    })
    .then(function(data) {
        console.log(data)
    })
    .catch(function() {
        // kết quả thất bại
    })
    .finally(function() {
        // thành công thất bại gì nó cũng chạy
        console.log('Done!')
    })

/*
 => nhìn code ta thấy gọi resolve sự thành công thì then() đc gọi và khi đó
 nếu nhiều then đc gọi thì chú ý cách viết code và truyền đạt code ta thấy
 thằng dưới phụ thuộc thằng trên truyền xuống và vẫn đạt đc kết quả như ở 
 vd promise trên --> và đúng với tính chất của callback, ông đằng trc trả về giá
 trị và ông đằng sau ghi nhận mới xuất ra đc

 ===> nhưng điểm khác với callback hell là ta không có code lê thê dài dòng 
 funtion trong funtion cứ liên tục kéo dài thụt sâu làm cho code trở nên rối
 rắm

 ==> ưu điểm là cách trình bày code trở nên gọn gàng clean hơn
*/


var promise3 = new Promise(
    function(rs, rj) {
        rs()
    })

promise3
    .then(function() {
        // trong then lại tiếp tục trả về một promies mới
        return new Promise(function(rs) {
            setTimeout(function() {
                rs([1, 2, 3, ])
            }, 3000)
        })
    })
    .then(function(data) {
        console.log(data)
    })
    .finally(function() {
        console.log('Done!')
    })

/*
 => bạn thấy nếu một trong .then() lại có một promise thì điều gì sẽ xảy ra
 promise có hàm setTimeout nó đợi 3s chạy xong thì mới mới tới cái .then()
 kế tiếp chạy thực thi -> điều đó ta thấy rõ tính chất hứa hẹn của promise
 tuần tự như callback hell
*/

/* demo tiếp theo tạo một function ứng dụng promise với hàm setTimeout cứ sau 
1s sẽ khởi chạy lần*/
function sleep(ms) {
    return new Promise(function(rs) {
        setTimeout(rs, ms)
    })
}
// tiến hành gọi sleep  
sleep(1000)
    .then(function() {
        console.log('values 1')
            // tiếp tục đơi thêm 1s nữa mới chạy cái then tiếp theo
        return sleep(1000)
    })
    .then(function() {
        console.log('value 2')
            // tiếp tục đơi thêm 1s nữa mới chạy cái then tiếp theo
        return sleep(1000)
    })
    .then(function() {
        console.log('value 3')
    })
    .finally(function() {
        console.log('Sau 1s sẽ chạy')
    })