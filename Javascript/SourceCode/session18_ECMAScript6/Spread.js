/*********************Luyện tập về Spread trong EC6***********************/
/*
 => Spread là gì?
  + Thường gọi là toán tử giải
  + ký hiệu toán tử spread: dấu ...
  (khá giống toán tử ...rest: nhưng ...rest là toán tử loại bỏi các value chỉ định
    giữ lại các values con lại và gôm về một array)

 
*/
var array = ["java", "php", "ruby", "C#"]
var array1 = ["reactjs", "javascript"]

// nhiệm vụ là làm sao tạo ra một array2: nối và đưa array + array1 vào trong array2
//=> tiến hành thực thi yêu cầu trên với toán tử spread ...
var array2 = [...array1, ...array]
console.log(array2)

/*=> kww: trả về array2= ["reactjs", "javascript","java", "php", "ruby", "C#"]
 => điều đó đồng nghĩa toán tử spread dùng dấu ... 
 vd:
     [...array1, ...array] 
     nó tiến hành phá giải cái dấu [ ] bao các value trong mảng ra
     và copy đưa vào array2 <=> cho nên lúc nay array2 sẽ đc các 
     values tương ứng của array, array1
     ==> chốt lại spread dùng dấu ... là toán tử phá giải [].. bao các values tương
     ứng và copy đưa nó vào trong chủ thể cần đưa
*/



//=====================spread với object========================
// với object nè
var object1 = {
    name: 'java'
}

var object2 = {
    price: 1000
}

// tương tự dùng spread (...) để đưa object1 và object2 vào trong object3
var object3 = { ...object1, ...object2 }
console.log(object3)

//=> kww: object3 = {name:'java', price:1000}








//==========================xử lý values trung khi spread==================
/* ví dụ trg hợp object1 có một values đg dẫn mà ngoài việc copy values đó vào
object mới với spread ta còn có thể sữa.. tức ghi đè các values trùng nhau*/

var myObj1 = {
    api: 'https://google.com.cn',
    apiVersion: 'EN1',
    other: 'other'
}

var myObj2 = {
    ...myObj1,
    // lúc này có thể ghi đè cái api đc nè sau khi dùng spread giải và copy values vào
    api: 'https://google.com.vn',
}

console.log(myObj2)  // luc này kw: in ra đầy đủ và api sẽ đc sữa lại đuôi .vn chứ không phải .cn







//=====================toản tử spread với việc truyền tham số cho hàm================
var myArray = ['java', 'php', 'ruby', 'c#']

// tạo function với tham số log
function logger(a,b,c) {
    console.log(a,b,c)
}

// nếu truyền đối số cho các ts tương ứng bình thường thì ntn nè là xong
logger(1, 2, 3)

// nhưng dùng spread giải và truyền ts thì ntn
// bài toán giả dụ ta truyền các đối số là các values của mảng trên vào tham số tg ứng của function logger
logger(...myArray)
