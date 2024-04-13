/**Kiến thức về mảng 2 chiều, nhiều chiều trong js với function
 * kết hợp functoion trong truy vấn mảng nâng cao
 * Array methods:
 *  + forEach() duyệt từng phần tử mảng
 *  + every()  duyệt qua các phần tử mảng với đk xét phải đúng hết
 *  + some()  ngc lại với every chỉ cân một đk đúng là đc
 *  + find()  tiềm kiếm trong mảng
 *  + filter()  lọc các phần tử với đk đầu vào cần tiềm kiếm 
 *  + map()  ghi nhạn và cập nhật thay đổi các phần tử trong mảng
 *  + reduce() 
 */

// tạo một mảng với các function riêng
var cources = [
    {
        id: 1,
        name: 'Java',
        coin: 0
    },
    {
        id: 2,
        name: 'C#',
        coin: 50
    },
    {
        id: 3,
        name: 'Python',
        coin: 150
    },
    {
        id: 4,
        name: 'ReactJS',
        coin: 250
    },
    {
        id: 5,
        name: 'C#',
        coin: 60
    }
]


/*********************************************************** */
/* dùng foreach với mảng -> nhớ rằng for in chỉ lấy key hãy giá trị phân ftuwr mảng chứ không lấy value*/
// --> để lấy đc value với for in thì gọi lại tên mảng truyền tên biến forr in vào
for (var item in cources) {
    console.log(cources[item])
}


cources.forEach(function (item) {
    console.log(item)
})

// thêm index lấy giá trị mảng
cources.forEach(function (item, index) {
    console.log(index, item)
})



/****************************every********************************** */
/* sử dụng every với mảng
=> với every thì cần đk chức năng thì y foreach
=> đk trả về phải đúng thì true sai thì false
=> đk đúng là phải đúng hết-> 1 cái sai xem là sai luôn
===> ứng dụng every dùng để kiểm tra 
   vd:
     các khóa học f8 nếu mà chỗ nào chưa học qua sẽ xem là không đủ đk
     để học tiếp các bài học sau
*/

var isFree = cources.every(function (item) {
    // xét đk duyệt các mảng mà giá coin phải bằng 0
    return cources.coin === 0
})
console.log(isFree) // kiểm tra xem có đúng là các khóa học đều free



/*************************some**************************************** */
/**Some ngc lại với every nó chỉ cần một đk đúng thì coi như đúng hết */

var isFree1 = cources.some(function (item) {
    // xét đk duyệt các mảng mà giá coin phải bằng 0
    return item.coin === 0
})
console.log(isFree1) 



/******************************************************** */
/**find với array */

var isFree2 = cources.find(function (item) {
    // xét đk duyệt các mảng mà giá coin phải bằng 0
    return item.name === 'Java'
})
console.log(isFree2) 



/************************************************************* */
/**filter với array-> chức năng nâng cao hơn của filter với find nó gạp đk đúng thì dừng lun
 * nếu giả dụ trong mảng có nhiều phần tử mảng có chung là khóa học C# thì với find
 * nó chỉ tiềm kiếm đc 1 lần còn filter là tất cả
 */

var isFree3= cources.filter(function (item) {
    // xét đk duyệt các mảng mà giá coin phải bằng 0
    return item.name === 'C#'
})
console.log(isFree3) 







/*********************************************************************** */
/**map với array
 * => sử dụng map với mục đích:
 *  + muốn thay đổi các elenment của một array thì dùng map
 *  + .map(): Sử dụng khi bạn muốn biến đổi mỗi phần tử trong mảng ban đầu 
 * và tạo ra một mảng mới chứa các giá trị đã biến đổi.
 * -> chức năng này chả khác nào update trong sql database vậy
 * -> ngoài ra chức năng nó còn rất quan trọng trong các bài tập lọc các giá trị cần lấy mà 
 * không cần quá phụ thuộc vào các đk ban đầu như some, every, find hay filter
 */


// giả dụ mình sẽ thay đổi tất name có thêm chứ 'khóa học', và một mục coinText để ghi giá cụ thể
/**hãy nhớ rằng map như một vong lặp trong callback funtion trả về return về cái gì
 * thì map sẽ ánh xạ cái đó vào từng element của mảng cho trc, xem ví dụ sau để rõ hơn
 * 
 * => 2 tham số item: chính là giá trị hiện tại của mahr course
 *              originarray: là mảng gôc ban đầu
 */
var newCources = cources.map(function (item, originArray) {
    return {
        id: item.id,
        name: `khóa học: ${item.name}`, // thêm chữ 'khóa học trc element cũ'
        coin: item.coin,
        // thêm trg mới conText vào
        conText: `Giá: ${item.coin}`,
        // cách xuất lại mảng gốc ban đầu so sánh với mảng mới
        originArray: cources
   }
})

console.log(newCources)
//==> ứng dụng thực tế dùng map để render nội dung ra bên ngoài ở các mục banner











