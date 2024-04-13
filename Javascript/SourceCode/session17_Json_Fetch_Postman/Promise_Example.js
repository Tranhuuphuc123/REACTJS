/*****BÀI TẬP THỰC TIỄN VỀ PROMISE******** */
/*
 ==> thực hiện một bài toán lưu trữ nội dung coment của các User
 ==> học bình luận thì các value đó sẽ đc lưu vào trong một mảng các Object
*/

// tạo mảng chứa các Object tên User
var User = [
    {
        id: 1,
        name: 'A'
    },
    {
        id: 2,
        name: 'B'
    },
    {
        id: 3,
        name: 'C'
    }
    //....
]


// tạo biến nới lưu trữ các User và nội dung ghi nhận từ họ
var comments = [
    {
        id: 1,
        // tạo user_id để ánh xạ lên User biết nội dung này của User nào
        user_id: 1,
        content:'demo 1'
    },
    {
        id: 2,
        user_id: 2,
        content:'demo 2'
    },
    {
        id: 3,
        user_id: 3,
        content:'demo 3'
    }
]


/**********tiến hành thực thi****************** */
/*Mục tiêu bài tập */
// 01 lấy ra đc coment bình luận
// 02 lấy đc user_id tg ứng với comment
// 03 từ user_id suy ra đc đúng user nào đg comment

// tạo Fake API -> tạo promise giả để ghi nhận comments 
function getComments() {
    return new Promise(function(resolve, reject){
        /* dùng setTimeout để sét thơi gian trì hoãn 
        giả dù thời gian mạng yếu trì hoãn cứ 1s sẽ 
        xuất kết quả comment 1 lần*/
        setTimeout(function () {
             resolve(comments)   
        }, 1000)
    })
}

// tạo function suy ra đc đúng id của User từ user_id đã lọc ra đc ở mảng comments
function getUsersByIds(userIds) {
    return new Promise(function (resovle) {
        var result = User.filter(function (user) {
            // trả về chỉ đúng nhưng id của mảng user thui-> trả đúng cái id tg ứng user_id thui
            return userIds.includes(user.id)
        })
        resovle(result)
    })
}




// tiến hành lấy ra các value của mảng comments ra(ý đồ trong đó có content luôn)
getComments()
    .then(function (comments) {
        // trong hàm đã lấy ra đc content và user_id tướng ứng trong mảng comments
        var UserIds = comments.map(function (comment) {
            return comment.user_id
        })
        // xuất ra các user_id có content tướng ứng trong mảng comments
        //đồng thời  sử dụng hàm trả về id tg ứng user_id đó trong mảng Users
        return getUsersByIds(UserIds)
            .then(function (users) {
                return {
                    users: users,
                    comments: comments
                }
            })
    })
    .then(function (data) {
        // vận dụng kiến thức về DOM để lk với element mà ta cần hiện thị nd lên nha
        var comentBlock = document.getElementById('comment-block')
        var html = ''
        data.comments.forEach(function (comment) {
            var user = data.users.find(function (user) {
                return user.id === comment.user_id
            })
            html += `<li>${user.name}: ${comment.content}</li>`
        })
        // sử dụng thuộc tính innerHTML để tiến hành ghi nhận phần tử element mới tên html
        comentBlock.innerHTML = html
     })

   