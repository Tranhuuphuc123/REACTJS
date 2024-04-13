/********************************************************************** */
/******************TIỀM HIỂU VỀ METHOD INCLUDE TRONG Array/String********************** */

/*Khái niệm:
 => Phương thức includes() trong JavaScript được sử dụng để kiểm tra xem một chuỗi có chứa một chuỗi con khác 
 hay không. Nó trả về kết quả là true nếu chuỗi chứa chuỗi con được cung cấp và false nếu không. */

 
var title = 'Aptech website Aptech'

// kiểm tra xem title trên có chứa chữ nào tên web không
console.log(title.includes('web'))
// muốn tiềm kiếm  chữ ptech nhưng nó có 2 cái trùng nhau thì có thể dùng index để bắt đầu vttk
console.log(title.includes("Aptech", 1))



// th sử dụng với mảng và includes
var coures = [
    'java',
    'php',
    'python',
    'C#'
]

console.log(coures.includes('java'))
// có thể dùng chỉ mục index để bắt đầu vị trí tiềm
console.log(coures.includes
    ('java', 1))
//=> kw; false vị từ vị trí 1 -> về cúi mảng không có java nó bỏ qua vitri o rồi mà