/**********************TIỀM  HIỂU VỀ KIỂU DỮ LIỆU MẢNG ARRAY *****************************/

/*Kiến thức tổng hợp:
1/ tạo mảng
 => tiềm hiểu về cách tạo mảng và kiểm tra kiểu dữ liệu của mảng?

2/ truy xuất mảng
 + dộ dài mảng
 + lấy phần tử mảng theo index

 3/ làm việc với mảng: các thuộc tính
  */



 /*******************CHI TIẾT************************************************ */
 /*******1 cách tạo mảng và kiểu dữ liệu của mảng -> mảng trong js có thể chứa cùng lúc nhiều kiểu dl*/
var mang = [1, 'a', 'c', 25.6]
console.log(mang)
console.log(mang[1]) // xuất phần tử mảng thứ 2

var mang2 = ['Java', 'C#', 'PHP', 'Lap trình C']
console.log(mang2)

// một cách khai báo mảng khác(không nên sử dụng)
var mang3 = new Array(
    'Java', 'C#', 'PHP', 'Lap trình C'
)
console.log(mang3)

// kiểm tra kiểu mảng
console.log(typeof mang)
console.log(typeof mang2)

// kiểm tra xem nó có đúng là mảng koong
console.log(Array.isArray(mang2))



/********************2 truy xuất mảng*/
// đếm độ dài của mảng
console.log(mang.length)

// lấy phần tử theo index
console.log(mang2[2])









// mục 03:
/********************LÀM VIỆC VỚI MẢNG**************************
 * các method khi làm việc với mảng
 * a/ To String: biến value element mảng thành kiểu string hết
 * b/ Join: tạo các k/c giữa các element bằng các ký tự chỉ định, thay vf k/c là khoảng trắng bình thường
 * c/ Pop: cắt bỏ xóa phần tử cúi mảng và trả về phần tử đó
 * d/ Shift: cắt bỏ xóa bỏ phần tử đầu mảng và trả về cho bạn
 * e/ Push: thêm 1 hay nhiều phần tử vào cúi mảng
 * f/ Unshift: ngc với Push thêm 1 hay nhiều element nhưng ở dầu mảng
 * g/ Splicing: dùng splice xóa cắt hoặc chèn cả phần tử mới vào mảng thông qua index
 * h/ Concat: dùng để nối mảng
 * i/ Slicing: dùng slice để sử dụng tính năng này -> cắt element của mảng
 * -> lưu ý slice chỉ cắt chứ không xoa đi element trong mảng nha vfa nó cũng dùng index chỉ định
 * ..... có thể tìm hiểu thêm khi đụng các bài toán thực tế
 * 
 * 
*/
var language = [
    'PHP', 'JAVA','C#','C/C++','DART','PYTHON', 5, 6.52
]

//a to String: chuyển tất cả value trong mảng thành kiểu String
console.log(typeof language.toString())
console.log(language.toString())

//b join: cách thức này để thêm một thuôc tính làm khoảng cách giữa các value của mảng
console.log(language.join('-')) // tạo k/c giữa  các mảng là một dấu '-'
console.log(language.join(' + ')) // tạo ký tự k/c gữa các value mảng là một dấu ' + '



/*c/ Pop: giúp xóa element(value) cuối mảng và trả về phần tử xóa đó
=> chính xác là giống như nó cắt đi phần tử cần xóa trong mảng và đưa phần tử vừa
cắt ra đưa cho bạn, bạn hoàn thành đc mục đích lấy đc cái mình muốn*/
console.log(language.pop())
console.log(language)


//d Shift:ngc lại với pop xóa đi phần tử mảng nhưng là ở đầu mảng và trả lại phần tử đó cho bạn
console.log(language.shift()) 
console.log(language)

//e Push: dùng để thêm một hay nhiều phần tử cúi mảng
console.log(language.push('Ruby','Kotlin'))
console.log(language)

//f Unshift: ngc với Push thêm 1 hay nhiều phần tử nhưng ở dầu mảng và trả về tổng số pt mới lun
console.log(language.unshift('Go', 'JS'))
console.log(language)




/*g/ Splicing: khá đa di năng có thể xóa, chèn + thêm các element vào mảng */
/* xóa element trong mảng: splice(<tham số 1>, <tham số 2>)
  + tham số 1: vị trí bắt đầu muốn xóa
  + tham số 2: số lượng element muốn xóa
*/
console.log(language.splice(0,1)) // xóa pt đầu 1 pt thui 
console.log(language)
 
/*dùng splicing đề chèn: splice(<tham số 1>, <tham số 2>, <tham số 3>)
 + tham số 1: vị trí bắt đầu chèn
 + tham số 2: thg cho 0 để nó hiểu là chèn 1 pt thui bắt đầu từ vị trí xác định tham số 1
 -> nếu để value ts2 là số lơn hơn 0 thì nó hiểu là pt value cần chèn sẽ chiếm hết bao 
 nhiêu pt lun
 + tham số 3: value element mún chèn
*/
console.log(language.splice(1,0,'Golang')) 
console.log(language)


//h Concat: nối mảng
var a1 = ['a', 'b', 'c']
var a2 = ['d', 'e', 'f']
console.log(a1.concat(a2)) // nối a2 vào trong a1



//i Slicing: dùng slice để sử dụng tính năng này -> cắt element của mảng (lưu ý slice chỉ cắt chứ không xóa đi element đó trong mảng)
var c = ['H', 'U', 'C']
console.log(c.slice(1,2))
console.log(c)
