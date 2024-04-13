/*************LUYỆN TẠP VỀ VÒNG LẶP******************** */
/*Lý thuyết
1/ for-lặp với điều kiện đúng
2/ for/in - lăp qua key của đối tượng
3/ for/of - lặp khi điều kiện đúng
4/ while - lặp qua điều kiện đúng(kiểm tra  gắt ngay lần đầu)
5/ do/while - lặp ít nhất qua một lần mới kiểm tra điều kiện đúng
*/

/*### 1-vòng lặp for*/
for (var a = 0; a < 10; a++){
    console.log(a + ' ')
}

// cách in không xuống òng với console.log trong forr
var result = '';
for (var a = 0; a < 100; a++) {
    result += a + ' ';
}
console.log(result);


//for với mảng
var array = [
    'Java',
    'C#',
    'PHP',
    'Ruby',
    'C/C++'
]

for (var i = 0; i < array.length; i++){
    console.log(array[i])
}




/*********************************************************** */
/*### 2- for/in: lấy ra các key của đối tượng (na ná for each)*/


// dùng for in lấy key của object myInfo
var myInfo = {
    name: 'Huu Phuc',
    age: 18,
    address: 'cantho'
}

// lấy từng key trong object
for (var item in myInfo) {
    console.log(item)
}

// lấy từng vlaye tương ứng key trong object
for (var item2 in myInfo) {
    console.log(myInfo[item2])
}


// dùng for in với array
var languages = [
    'java',
    'php',
    'python'
]

// lấy từng key trong aray theo thứ tự mảng 0 -> array.lenght
for (var item3 in languages) {
    console.log(item3)
}

// lấy từng vlue tương ứng key của array
for (var item3 in languages) {
    console.log(languages[item3])
}

// lấy ra từng tp ký tự  của chuỗi string với for in
var chuoi = 'tranhuuphuc'
for (var item4 in chuoi) {
    console.log(chuoi[item4])
}




/********************************************************** */
/*************3/ vòng for..of******************************** */
//=> lấy từng phần tử của mảng hay chuỗi không áp dụng với object
var languages1 = [
    'java',
    'php',
    'c#'
]

for (var item5 of languages1) {
    console.log(item5)/* -> ở ngay cách dùng này nó đã xuất value lun rồi không giống for..in 
                      với cách truyền này chỉ lấy đc key thui*/
}

var chuoi1 = 'Aptech'
for (var item6 of chuoi1) {
    console.log(item6)
}


// nó không hỗ trợ tốt cho object nhưng vẫn có cách lấy dc
var khoahoc = {
    name: 'lập trình',
    price: 250
}
// sử dụng Object.keys())
for (var item7 of Object.keys(khoahoc)) {
    console.log(item7) // lấy đc các key
}

for (var item7 of Object.keys(khoahoc)) {
    console.log(khoahoc[item7]) //lấy các value
}




/*********************************************************************** */
/***********************4/ while************** */
var i = 0
while (i < 10) {
    console.log(i)
    i++
}

// với mảng
var array = [
    'java',
    'php',
    'dart'
]
var i = 0
while (i<= array.length) {
    console.log(array[i])
    i++
}


/*********************************************************************** */
/****5/ do..while **************/
var i = 0
do {
    console.log(i)
    i++
} while (i < 10)

// với mảng
var array1 = [
    'java',
    'swift',
    'dart'
]

var y = 0
do{
    console.log(array1[y])
    y++
} while (y < array1.length)





/*************************************************************************** */
/*****6/ nested loop**************** */
var myArray = [
    // có 3 mảng con trong một mảng lớn myArray
    [1, 2],
    [3, 4],
    [5,6]
]


// lấy ra giá trị từng mảng con trong mảng lớn
for (var i = 0;  i < myArray.length; i++) {
    for (var j = 0; j < myArray[i].length; j++){
        console.log(myArray[i][j])
    }
}




/*********************************************************************** */
/**************7/ Đệ quy*************** */

