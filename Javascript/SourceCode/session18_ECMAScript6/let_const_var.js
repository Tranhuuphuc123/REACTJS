//=======================================================================
//===================LET & CONST TRONG ES6======================
/*
  ==> điểm chung là cả: let, var và const đều dùng để khai báo biến

  >>điểm khác giữa var và let, const
   - scope(phạm vi truy cập):
    -> trc đây ES6 mới ra mắt nên chưa phổ biến trên toàn hệ thống, 2023 thì mọi việc đã
    trở nên phổ biến hơn nên phạm vi truy cập không còn là vấn để. Bạn hoàn toàn có thể
    thoải máy dùng let, var, const để khai báo biến mà không gặp lỗi gì

   - Hosting(là quá trình hd của web lên máy chủ server):
    -> trong vd bên dưới ta khai báo biến xong mới gán value, thì việc đó nó sẽ nhấc
    cái values bên biến đầu khai báo..
    -> hiện tại 2023 thì let, var có hỗ trợ hosting như vậy
    -> nhưng const vẫn chưa có hỗ trợ hosting, nên khai báo
        const a
        a = 1
        console.log(a)
        ==> sẽ bị báo lỗi ngay
  
  >> Điểm khác của const với var, let:
   - Assigment(gán lại giá trị cho biến):
*/


//===== tiềm hiểu điểm khác nhau giữa var với const, let====
if (true) {
    const course = 'java'
    var course1 = 'php'
    let course2 = 'C#'
    console.log(course)
    console.log(course1)
    console.log(course2)
}

// hosting -> nó nhấc giá trị biến lên đầu trog vd sau
let a
var b
// const c => báo lỗi ngay phải là const c = values mới đc
a = 1
b = 2
console.log(a)
console.log(b)




//===== tiềm hiểu điểm khác nhau giữa const với let, var====
var d = 1
let e = 10
d = 100
e = 1000
console.log(d)
console.log(e)
//==> ta thấy việc khai báo values ban đầu cho d, e sau đó gán giá trị mới vẫn không có vấn đề gì với let, var
/*
    const f = 10
    f = 200
    console.log(f)

 ==> nhưng với cách viết với  const thì nó báo lỗi
 ==> const nó không hỗ trợ việc gán lại valus mới cho biến khai báo ban đầu
 (const không hỗ trợ Assigment tức việc gán lại values cho biến)*/
// muốn khăc phục việc khong gán đc cho const thì viết như dầy nè
const f = {
     name: 'java'
}
f.name = 'php'
 console.log(f)


