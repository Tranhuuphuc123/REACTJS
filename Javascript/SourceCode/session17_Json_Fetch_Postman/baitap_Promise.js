/*
  Đây là ví dụ về callback hell trong truyền thuyết, và cách sử dụng Promise 
để giải quyết nó.

    Các bạn có thể thấy khi tạo ra 1 đoạn code callback hell sẽ dẫn đến khó 
  đọc code, thay vì viết như thế, chúng ta có thể áp dụng tính chất chuỗi 
  (chain) của Promise để tạo ra 1 đoạn code dễ nhìn hơn mà vẫn đảm bảo đúng
   logic.
*/

// bài giải
function hell(value, cb) {
    cb(value);
}

// Không sử dụng Promise dẫn đến tạo ra callback hell 
hell(1, function (valueFromA) {
    hell(valueFromA + 1, function (valueFromB) {
        hell(valueFromB + 1, function (valueFromC) {
            hell(valueFromC + 1, function (valueFromD) {
                console.log(valueFromD + 1);
            });
        });
    });
});

// Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
function notHell(value) {
    return new Promise(function (resolve) {
        resolve(value);
    });
}

notHell(1)
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        console.log(value + 1);
    });




