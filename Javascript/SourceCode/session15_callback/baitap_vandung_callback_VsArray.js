/***************************************************************************** */
/** Vận dụng call back chữa các dạng bài tập vận dụng cá thuộc tính của mảng nâng cao*/
//===> cùng vẫn dụng lại kiến thức Array nâng cao với callback qua các thuộc tính thg gặp

/*các thể thực vận dụng lại từ mảng array nâng cao cới callback như sau
1/ forEach
2/ find
3/ filter
4/ some
5/ every
6/ reduce
*/


/************************************************************* */
/***call back với forEach()****** */

var coures = [
    'java',
    'c#',
    'php'
]

/* dùng for each với callback */

// for each cơ bản với call back
coures.forEach(function (item, index) {
    console.log(index, item)
})


console.log('*****************************')


//bây giờ ta tự định nghĩa thuộc tính foreach mới tên là foreach_phuc sd nó với callback
Array.prototype.forEach2 = function (callback) {
    // this đại diện cho coures mảng ấy
    for (var index in this) {
        /* hasOwnProperty kiểm tra xem thuộc tính đang được xem xét có phải là một
         phần tử thực sự của mảng (coures) hay không. Nếu có, thì callback sẽ được gọi với 
         giá trị của phần tử và chỉ số tương ứng. Nếu không, nó sẽ bỏ qua các thuộc tính không
         phải là phần tử của mảng.*/
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this)   
        }
     }
}

coures.forEach2(function (item, index) {
    console.log(index, item)
})




/************************************************************ */
/****call back với filter()***** */
console.log('*****************************')
// tạo một object
var cources1 = [
    {
        name: 'Java',
        coin: 680
    },
    {
        name: 'PHP',
        coin: 860
    },
    {
        name: 'Ruby',
        coin: 980
    },
    {
        name: 'PHP',
        coin: 980
    }
]

// filter
var rs = cources1.filter(function (item) {
    return item.name==='PHP'
})
console.log(rs)


// tạo thuộc tính filter riêng sử dụng lại với callback: lấy tên là filter2
Array.prototype.filter2 = function (callback) {
    var output = []
    //this là đại diện mảng cources1 truyền vào callback khi gọi filter2
    for (var index in this) {
        // dùng hasOwnProperty là để ktra xem index có tồn tại là một tp trong mảng thực hay không
        if (this.hasOwnProperty(index)) {
            //this: ghi nhận cources1 hiện tại, this[index] biến lưu trữ, index chỉ số element của mảng cources
            // ==> callback đc hiểu là khi dùng filter2 ta gọi lại callback function ấy
            var rs = callback(this[index], index, this)
            if (rs) {
                output.push(this[index])
            }
        }
    }
    return output
} 

// sử dụng filter2 tự tạo
console.log('*****************************')
var rs1 = cources1.filter2(function (cal, index, ) {
    return cal.coin>700
})
console.log(rs1)






/******************************************************* */
/****callback với some: chỉ cần 1 dk đúng thì soem kiểm tra xem đúng hết*** */
console.log('******************callback với some***************************')

var cources2 = [
    {
        name: 'Java',
        coin: 680,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: false
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 980,
        isFinish: false
    }
]

// dùng some kiểm tra những khóa học đã hoàn thành rồi
var rs3 = cources2.some(function (list, i) {
    return list.isFinish == true
})
console.log(rs3)


// tự tọa some với callback
Array.prototype.some2 = function (callback) {
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            if (callback(this[i], i, this)) {
                return true
            }
        }
    }
    return false
}

console.log('**************some2 tự tạo************')
var rs4 = cources2.some2(function(cal, index){
    return cal.isFinish == true
})


console.log(rs4)






/********************************************** */
/****every với callback*** */
var cources3 = [
    {
        name: 'Java',
        coin: 680,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: false
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 980,
        isFinish: false
    }
]

// dùng với evry-> đúng thì phải đúng hết 1 cái sai cũng là sai
console.log('*****every*****')
var rs5 = cources3.every(function (list) {
    return list.isFinish== true
})
console.log(rs5)  // dù tất cả đều true mà có 1 cái false nó vẫn false



// tự tạo every2
Array.prototype.every2 = function (callback) {
    for (var i in this) {
        var outut = true
        if (this.hasOwnProperty(i)) {
            var rs = callback(this[i], i, this)
            // kiểm tra dù 1 lần sai cũng không chấp thuận
            if (!rs) {
                return false
                break
          }
        }
    }
    return outut
}


var rs6 = cources3.every2(function (list) {
    return list.isFinish == false
})

console.log(rs6)