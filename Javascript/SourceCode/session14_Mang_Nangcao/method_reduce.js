/************************************************************************* */
/************************************************************************* */
/********************************CHUYÊN VỀ REDUCE***************************************** */
/************************************************************************* */
/************************************************************************* */


/************************************************************************* */
/**reduce làm việc với mảng array 
 * Mục đích:
 *  => muốn nhận về một giá trị duy nhất
 * vd:
 *  trong array cources ở trên mong muốn nhận về tổng số tiền của khóa học chỉ 
 * tổng coint thui, giống bên sql có lệnh select sum(*).. vậy đó
 * -> giái pháp chính là reduce với mảng sẽ hg đc bài toán này
 * => ta vẫn có thể sử dụng loop tuy nhiên js cũng cấp một giải pháp chuyên nghiệp hơn chính
 * là reduce
 * => tóm lại reduce cũng tg tự một vòng lặp nhưng nó là giải pháp giải quyết kiểu
 * trả về một giá trị nào muôn đc hỗ trợ hẵn một thuộc tính riêng là reduce
*/


// ví dụ tính tổng ta co thẻ dùng vòng lặp như sau
var total = 0;
for (var add of cources) {
    total+=add.coin
}

console.log(total)

/*tuy nhiên với reduce thì không cần dùng vòng lặp
 >>điểm ạnh của các phương thức làm việc với mảng như reduce:
  + tinh gọn
  + tối ưu
  + dễ hiểu
  + hiệu năng tốt hơn so với loop
  + chuyên nghiệp
  + tính ưng dụng thực tê sản phẩm cao
*/


/* cacculator là biến lưu trữ, currentValues giá trị hiện tại, curentIndex chỉ mục tg ứng curentValues
originArray: giá trj gốc của mảng cho trc*/
function coinHanler(acculator, curentValue) {
    return acculator + curentValue.coin
}
// reducr có hai đối só: 1 là call back function, 2 là giá trị khởi tạo
var totalCoin = cources.reduce(coinHanler, 0);
console.log(totalCoin)



// or có thể viết kiểu callback gán cho biến cụ thể
var totalCoin1 = cources.reduce(function (acculator, curentValue) {
    return acculator + curentValue.coin
}, 0)

console.log(totalCoin1)



// một cách viết khác => tính tổng số huy chương

var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]

function getTotalGold(arr){
   return arr.reduce(function (acculator, curentValue){
       return acculator + curentValue.gold
   },0)
}

// Expected results:
console.log(getTotalGold(sports)) // Output: 23












/******************************************************************** */
/**các method reduce tiếp theo 
 * => trong bài này ta tiềm hiểu rõ hơn về giá trị inittial values(giá trị khởi tạo ban đầu)
 * vd:
 *    function getTotalGold(arr){
        return arr.reduce(function (acculator, curentValue){
            return acculator + curentValue.gold
        },0)
        => số 0 chính là inittial (tham số không bắt buộc))
        => mục đích là giá trị khổi tạo inittial values dùng để gọi lại
        giá trị ban đầu của reduce, vd tính tổng thì giá trị intial values 
        giúp xác định đối số ban đầu là 0 để cộng dồn kết quả tg tự như với vòng
        lặp for mún tính tổng cần khai báo biến ban đầu var tong = 0; để + đồn ấy

        => lưu ý nếu các object đặt trong mảng thì nên có tham số khởi tạo initial value
        nếu không sẽ lỗi
        => còn nếu không khai báo kiểu mảng với object thì không cần có initial values
}
*/

// nếu mảng cùng kiểu dl thì khong cần initial values
var myArr2 = [100, 200, 300, 500, 400]
var totalCoin2 = myArr2.reduce(function (acculator, myArr) {
    return acculator + myArr
})
console.log(totalCoin2)



// bài tập vận dụng-Flat làm phẳng mảng từ mảng sâu(là tỏng mảng có mảng)
//=> bài tập làm phẳng mảng nghĩa là đưa mang sâu thành một mảng cùng cấp không có vụ tách biệt thành mảng trong mảng nữa
var myArr3 = [1, 2, [3, 4], 5, 6, [7, 8, 9]]

var flatArray = myArr3.reduce(function (acculator, curentMyArrItem) {
    // thực hiến nối mảng
     return acculator.concat(curentMyArrItem)
}, [])

console.log(flatArray)


// bài tập lấy các khóa học đưa vào một mảng mới
// mảng chứa nhiều object trong các element của object lại chứa mảng và object bên trong
var topics = [
    {
        topic: "Front-end",
        cources: [
            {
                id: 1,
                title:"html,css"
            },
            {
                id: 2,
                title: 'Javascript'
            }
        ]
    },
    {
        topic: "Back-end",
        cources: [
            {
                id: 1,
                title:"jsp/servlet. java ee"
            },
            {
                id: 2,
                title: 'Spring Framework'
            }
        ]
    }

]

// dùng reduce giải quyết đưa các khóa học ra một mảng mới
var myArr4 = topics.reduce(function (acculator, curentTopics) {
    return acculator.concat(curentTopics.cources)
}, [])
console.log("reduce với nối với mảng")
console.log(myArr4)
//==> lúc này ta lấy ra đc 4 khóa học của course ở mục front-end và back-end ra và chứa trong môt mảng mới tên là myArr4
//=> lưu ý chỉ lấy đúng các khóa học chi tiết chứa trong cources thui





