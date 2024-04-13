/*Phần thực hành với lệnh thêm xóa sữa.. với Fetch và RestAPi*/
// Tạo một ứng dụng

// ánh xạ lấy element của thẻ ul để đẩy code vào đó
var listCoursesElement = document.getElementById('list-courses')

// lk link Json-server
var courcesAPI = " http://localhost:3000/cources"


//=====================Xây dựng function=========


//================đỗ dữ liệu=================
// tạo function với fetch chuyển đổi Rest API thành json
function getCources(callback) {
    fetch(courcesAPI)
        .then(function (response) {
            return response.json() // chuyển đổi Json thành Js
        })
        .then(callback) // đổ json-js lên 
}


// tạo fucntuon render để đổ values ra html hiển thị trên trình duyệt(đỗ dữ liệu)
function renderCourses(callback) {
    var htmls = callback.map(function (cource) {
        // map sẽ tiến hành ghi nhận các element mới này 
        return `<li>
                    <h4>${cource.name}</h4>
                    <p>${cource.description}</p>
                    <p>${cource.id}</p>
                    <button onclick="handleDeleteCourse(${cource.id})">Delete</button>
                    <button onclick="handleUpdateCourse(${cource.id})">Update</button>
                </li>`
      
    })
     // đổ vào element đã lk với id của thẻ ul bên html
     listCoursesElement.innerHTML = htmls.join('')
}





// tạo function nhận các name và description ở form khi nhấn create khởi tạo gửi qua
// dùng fetch thực hiện thêm mới dl với các giá trị vừa nhập ở form
function createCourse(data, callback) {
    // phần tạo ts thứ 2 options có thể tham khảo cách gửi dl với Fetch làm mẫu
    // gõ google - Fetch gửi dl url là ra or Method fetch là đc
    var options = {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json'   
        },
        body: JSON.stringify(data)
    }
    fetch(courcesAPI, options)
        .then(function (response){
            return response.json
        })
        .then(callback) // trở về callback chính cái function createCourse
}


// tạo fucntion xử lý sự kiện thêm mới của form nhập mới value cho json-server
function handleCreate() {
    // lấy elenemnt bên html
    var btn_create = document.querySelector('#create')
    // thực hiện event cho element btn create
    btn_create.onclick = function () {
        var name = document.querySelector('input[name="name"]').value
        var description = document.querySelector('input[name="description"]').value


        var formData = {
            name: name,
            description:description
        }

        // gọi đến function createCourse
        createCourse(formData)

    }
}

//========function xóa dữ liệu==================
function handleDeleteCourse(id, options) {
    // phần tạo ts thứ 2 options có thể tham khảo cách gửi dl với Fetch làm mẫu
    // gõ google - Fetch gửi dl url là ra or Method fetch là đc
    var options = {
        method: 'DELETE',  // thay thế bằng method DELETE
        headers: {
           'Content-Type': 'application/json'   
        },
    }
    //courcesAPI + '/' + id, viết nguyên mẫu kiểu bên POSTMAN
    fetch(courcesAPI + '/' + id, options)
        .then(function (response){
            return response.json
        })
        .then(function () {
            getCources(renderCourses)
        }) // gọi lại getCourse để đổ lại dl khỏi cần mõi cái mõi refresh
}




//===============function update dữ liệu=================
function UpdateCourse(id, data) {
    // muốn hiểu rõ đoạn object Options bên dưới gõ tiêm kiếm: fetch Method các cách CRUD value là ra
    //--> cóa hg dẫn chi tiết này cũng code dựa trên mẫu đó
    var options = {
        method: 'PUT', // thay đổi bằng method PUT tức update như trong PostMan
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(courcesAPI  + '/' + id, options)
        .then(response => response.json())
        .then(() => {
            getCourses(renderCourses); // thực thi xong thì nó load lại dl lun khỏi mắc công refresh
        });
}

function handleUpdateCourse(id) {
    var newName = document.querySelector('input[name="name"]').value;
    var newDescription = document.querySelector('input[name="description"]').value;
    
    
    var updatedData = {
        name: newName,
        description: newDescription
    };

    
    handleUpdateCourse(id, updatedData);
}






//================Thực thi======================

//Thực hiện  đổ dl lên html
function start() {
    // show các values json -> js ra(này cũng là chức nawg read mới đọc đưa dl lên thui)
    getCources(function (courses) {
        renderCourses(courses)
    })

    // gọi function handleCreate
    handleCreate()
}

// thực thị function start
start();





