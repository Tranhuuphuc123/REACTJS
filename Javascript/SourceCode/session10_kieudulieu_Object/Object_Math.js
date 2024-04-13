/*********************** TIỀM HIỂU VỀ MATH TRONG OBJECT ********************/
/*Lý thuyết:
>>>Các thuộc tính của Math:
1/ Math.PI
2/ Math.round()
3/ Math.abs()
4/ Math.ceil()
5/ Math.floor()
6/ Math.random()
7/ Math.min()
8/ Math.max()
......
-> còn rất nhiều cần triêm nghiệm

==> đó là một object sẵn có hỗ trợ các tính năng tính toán
==> lưu ý nó không phải là một object contructor() nên không thể khởi tạo với new */

console.log(Math.PI); // lấy số PI
console.log(Math.round(5.565)) // lam trò số thập phân lên số nguyên(<0.5 am tròn xuống, >0.5 lam tròn lên)
console.log(Math.abs(-25)) // trị tuyệt đối
console.log(Math.ceil(3.2)) //chỉ làm tròn trên, dù > or < 0.5 nó vẫn làm tròn lên
console.log(Math.floor(7.5233)) // làm trọng dưới ngc lại với ceil



/* Mục random chi tiết detail */
console.log(Math.random(10)) // lấy số random ngẫu nhiên trong khoảng giá trị đặt trc
console.log(Math.floor(Math.random() * 10)) // làm tròn dưới các số ngẫu nhự từ 0 tới 10

// random với biến ngẫu nhiên
var random = Math.floor(Math.random() * 10)
console.log(random)

// random với mảng
var bonus = [
    '10 coins',
    '20 coins',
    '30 coins',
    '40 coins',
    '50 coins'
]
//=> nó sẽ lần lượt xuất hiện ngẫu nhiên các item trong mảng không có chỉ định trc
/* => phải có Math.floor là vì random sẽ quet các số thập phân một cách ngâu nhiên nên luôn làm tròn dưới
    để nó luôn là mọt số nguyên, bonus.length thay vì lấy số tối đa của mảng có thể thông qua bonus.length để
    tự tính tổng số của mảng khỏi mắc công đếm hay nhớ tổng số item mảng là bao nhiêu*/
console.log(bonus[Math.floor(Math.random() * bonus.length)])


console.log(Math.min(-100, 1, 90, 25, 36)) //lấy ra số nhỏ nhất
console.log(Math.max(20, 25, -258, 36, 100, 250)) //Lấy ra số lớn nhất