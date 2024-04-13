/******KIẾN THỨC VỀ FETCH************* */
/*
 >>> Lý thuyết<<
 => Fetch là khái niệm mà lập trình viên sử dụng để lấy dữ liệu từ phía back end trả về
 => Fetch gọi lên API để lấy nội dung đc xử lý phía hậu kỳ Back end
 => API là gì
  + Application programing interface từ viết này có nghĩa là giao diện lập trình
  ứng dụng
  + API là giao diện nhưng hãy hiểu sâu là giao diện mà máy nhìn thấy chứ hông phải
  mắt thường chúng ta cảm nhận về màu sắc, hính dáng của website
  --> vì vậy có thể kết luận tư duy logic là API là cổng giao tiếp giữa các phần mềm
  , chẳng hạn back end tạo ra một ứng dụng với SourceCode  của mình và để cho các
  ứng dụng nền tảng khác có thể giao tiếp đc với dữ liệu SourceCode lưu trữ
  xử lý của Back end thì lập trình viên backend cần phải tạo và mở ra một cái cổng 
  một cái đg dẫn tiếp xúc URL gọi là API để mọi người có thể thông qua API đó mà 
  các phần mềm ứng dụng khác có thể giao tiếp trực tiếp với cơ sở dữ liệu của SourCode
  từ phía back end trên một cách chính xác nhất 
  ----> API đc hiểu chính xác là như thế

**********************************
=> sở lược quy trình như sau:

  BackEnd -> trả về API(URL) -> sử dụng Fetch(để lấy dữ liệu từ APi) -> trả về JSON/XML
  -> JSON.parse để chuyển đổi trả về một mã Javascript types
  -> Render xây dựng hiển thị ra một giao diện tương ứng

=> tham khảo kiến thức cấu trúc của fetch() ở trang:
 "https://jsonplaceholder.typicode.com/"  
 --> tiềm kiếm về API jsonplaceHolder
*/



/*****TIẾN HÀNH SỬ DỤNG FETCH()********* */

var postAPI = 'https://jsonplaceholder.typicode.com/posts'

// stream luồng dữ liệu với fetch
// nhìn cách triển khai khá giống với promise() cấu trúc triển khai khá tương đương
fetch(postAPI)
    .then(function (response) {
        // trả về json tức trả về một promise()
        // bản chất của đoạn trả về này chính là việc JSON.parse chuyển đổi về js
          return response.json() 
    })
    .then(function (post) {
        // đoạn code dưới đây chính là quá trình hiện hữu JSON -> Javascript types
        // tức show ra dl đã chuyển đổi thành Js types
        /*console.log(post)*/

        // cách hiển thị ra giao diện người dùng => ý là hiển thị trên html ấy chỉ định cụ thể ở thẻ ul
        var htmls = post.map(function (post) {
            return `<li>
                       <h2>${post.title}</h2>
                       <p>${post.body}</p>
                    </li>`
        })
        // dùng join t/c mảng để thêm ký tự ngăn cách giữa các thành phần trong mảng ấy
        var html = htmls.join('')
        document.getElementById('post-list').innerHTML = html

    })
    .catch(function (err) {
        // khi nào không fetch đc nó sẽ nhảy vào đây
         console.log(' có lỗi')
     })

    /*
    ==> var postAPI = 'https://jsonplaceholder.typicode.com/posts'
    dòng Json trên có 100 hàm JSON
    việc chuyển đổi với fetch sẽ biến nó thành 100 dòng Js tương đương ở dạng 
    Js types  */