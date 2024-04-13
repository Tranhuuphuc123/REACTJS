/*********HỌC VỀ CÁC METHOD PROMISE RESOLVE, REJECT..ALL******************** */
/*
 => trong bài lần trc ta nắm đc cách khai báo mọt promise, tính chất giải quyết
 vấn đề của một promise tránh bị callback hell làm code trở nên rối rắm
 => hiểu rõ đc tính chất sử dụng promise cũng như cách triển khai nhiều then()
 khi promise khai báo thnahf công thì nó tuần tự ra sau
 ==============================================================
 ====> trong bài này ta sẽ tiềm hiểu tiếp các method của promise:
  1/ promise.resolve
  2/ promise.reject
  3/ promise.all
*/

// demo 
function sleep(ms) {
    return new Promise(function (rs) {
        setTimeout(rs, ms)
    })
}

sleep(1000)
    .then(function () {
        console.log(1)
        return sleep(1000)
    })
    .then(function () {
        console.log(2)
        /*vidu ở then() số 2 ta bắt lỗi nó trả về catch thì
         nó sẽ chạy 1 -2 và chạy luốn xuống catch do ử then 2 nó 
         trả về một promise mà nó promise đó trả về lỗi */
        
        // return new Promise(function(rs, rj) {
        //     rj('co loi!');
        // })
         throw new Error('Có lỗi xảy ra!');
    }) 
    .then(function () {
        console.log(3)
        return sleep(1000)
    })   
    .then(function () {
        console.log(4)
    }) 
    .catch(function(error) {
        console.warn(error)
    })
    .finally(function () {
         console.log("Done!")
    })
    
    
console.log('***************************')
/** Đi chi tiết thêm về các method promise **/
/*01 Promise.resovle*/
var promise = new Promise(function (resolve, reject) {
    // resolve('Success!')
    reject('Loi nha!')
})

promise
    .then(function (value) {
        console.log(value)
    })
    .catch(function (error) {
        console.log(error)
    })
      
// ứng dụng promise.resolve => viết trực tiếp thay vì new Promise
var promise1 = Promise.resolve('Thành công')
promise1
    .then(function (value) {
           console.log(value)
       })

/*02 promise.reject => trả thẳng trực tiếp là một reject luôn khỏi lòng vòng*/
var promise2 = Promise.reject('Thất bại')
promise2
    .catch(function (error) {
        console.log(error)
    })
       
       
/*03 promise.all => chạy song song tất cả các luồn bất đồng bộ với all
-> vd luồng 1 luồng 2 chạy song song mà không phụ thuộc vào nhau(bất đồng bộ)
tuy nhiên muốn value 1 bổ trợ cho value2 và ngc lại để làm việc với nhau thì
lúc đó all phát huy tác dụng của mình*/

// demo tạo promise đại diện luồng số 1
var promiseAll1 = new Promise(function (rs) {
    setTimeout(function () {
        rs([1])
    }, 2000)
})

// demo tạo promise đại diện luồng số 2
var promiseAll2 = new Promise(function (rs) {
    setTimeout(function () {
        rs([2,3])
    }, 5000)
})
//==> nếu chạy một cách tuần tự ta sẽ mất tất cả 7s mới hoàn thành in ra 2 luồng trên
/* với all nó giúp ta chạy song song 2 luồng 1 lượt-> 2s để in ra 1 cùng lúc 2s đang chạy
thì luồng promiseAll2 cũng bắt đầu chạy cùng lúc nhưng tới 5s thì mới in ra
vậy chung cuộc 2 luồn chạy một lượt và giới hạn là 5s để hoàn thành cả 2 mặc dù
luồng promiseAll1 chỉ mất có 2s*/

// hợp nhất với all chạy sog sog các luồng 1 lúc
Promise.all([promiseAll1, promiseAll2])
    .then(function (result) {
        var rs1 = result[0]
        var rs2 = result[1]
        // thực hiện nối mảng thành một mảng lớn
        console.log(rs1.concat(rs2))
    })
     
 //=> lúc này ta thấy nó trả về đồn thời cả 2 luồng 1 lúc chứ không tuần tự promiseAll1 xong mói tới promiseAll2

 
// ví dụ th 2 promise mà có thằng có lỗi thì sao
 
var promiseAll3 = new Promise(function (rs) {
    setTimeout(function () {
        rs([1])
    }, 2000)
})

// demo tạo promise đại diện luồng số 2
var promiseAll4 = new Promise.reject('Co loi nha')
// all xử lý nè
Promise.all([promiseAll3, promiseAll4])
    .then(function([rsult1, rsult2]) {
        // thực hiện nối mảng thành một mảng lớn
        console.log(rsult1.concat(rsult2))
    })
    .catch(function (error) {
        console.log(error)
    })
    