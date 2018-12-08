$(document).ready(function(){
    $("#employee-form").submit(function(){
        addEmployee();
    });

    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "/api/supervisor",
        dataType: "json",
        success: function(response){
            response.forEach(supervisor => {
                $("#supervisor").append(
                    "<option value='"+ supervisor.id +"'>" + supervisor.name + "</option>"
                );
            });
        },
        error: function(){
            alert("Get supervisor data error");
        }
    });

    function addEmployee(){
        var formData = {
            username: $("#username").val(),
            password: $("#password").val(),
            name: $("#fullname").val(),
            email: $("#email").val(),
            address: $("#address").val(),
            phone: $("#phone").val(),
            supervisor : $("#supervisor").val(),
            image: $("#image").val(),
            role : null
        };

        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "/api/employee",
            data: JSON.stringify(formData),
            dataType: "json",
            success: function(response){
                if(response.status == "Done"){
                    console.log(response);
                }
            },
            error: function(xhr, status, error){
                var err = eval("(" + xhr.responseText + ")");
                
                alert(err.message);
            }
        });
    }
});