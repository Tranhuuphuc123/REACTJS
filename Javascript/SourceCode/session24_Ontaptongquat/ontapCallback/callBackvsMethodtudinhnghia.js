/*********************callback vs method tự định nghĩa************************** */
//bài này ta tiềm hiểu cách tạo một method tự định nghĩa
//ngoài các method có sẵn của js trng prototype cua Array ta có thể tự định nghĩa lấy một method riêng cho mình sử dụng callback
//luu ý rằng: callback sử dụng rất nhiều method có sẵn của prototype trong Array

//###b1: khởi tạo method tự định nghĩa
// -- mẫu theo phương pháp sau
Array.prototype.maptudinhnghia = function(callback){
    //tạo biến arryLength để lấy độ dài tối đa của mảng
    //hiểu rõ this này chó đến biến courses (đại diện cho biến courses)
    var arryLength = this.length
    var output = []
    
    for (var i = 0; i< arryLength; ++i){
        var result = callback(this[i], i)
        //push trong array la de them phan tu moi vao cui mang
        output.push(result)
    }

    return output
}


//##2: tạo mảng courses
var courses = [
    'javascripts',
    'java',
    '.net'
]


//##3: sử dụng method vừa tạo  -> ket hop dungf calback trong method vua tao
// courses.maptudinhnghia(function (course, index) {
//     console.log(index, course)
// });

var html = courses.maptudinhnghia(function (course) {
    return `<h1>${course}</h1>`
})

console.log(html.join(' '))