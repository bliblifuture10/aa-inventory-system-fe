$(document).ready(function(){
    $("#employee-form").submit(function(event){
        addEmployee();
    });

    function addEmployee(){
        var formData = {
            username: $("#username").val(),
            password: $("#password").val(),
            fullname: $("#fullname").val(),
            email: $("#email").val(),
            address: $("#address").val(),
            phone: $("#phone").val(),
            image: $("#image").val(),
            supervisor : null,
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