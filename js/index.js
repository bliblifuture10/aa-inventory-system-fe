$(document).ready(function(){
    $("#GenEmp").click(function() {
        getEmployee();
    });

    function getEmployee(){
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/api/employee",
            dataType: "json",
            headers: {
                "Content-Type": "application/json"
            },
            data: "{ '_id' }",
            success: function(){
                alert("Get data success")
            }
        });
    }
});
// document.getElementById("GenEmp").onclick = function(){
//     getEmployee();
// }

// function getEmployee(){
//     var request = new XMLHttpRequest();

//     request.open('GET', 'http://localhost:8080/api/employee', true);
//     request.setRequestHeader("Authorization", "Basic " + btoa("user:8cf91dc6-64f5-4fc7-8543-6f7a02b64966"));
//     request.onload = function(){
//         var data = JSON.parse(this.response);
        
//         if(request.status >= 200 && request.status < 400){
//             data.forEach(information => {
//                 console.log(information.title);
//             });
//         }else{
//             alert("Sorry, something's wrong happened :D");
//         }
//     }
//     request.send();
// }