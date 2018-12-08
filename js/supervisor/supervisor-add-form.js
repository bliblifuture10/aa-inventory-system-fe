$(document).ready(function(){
    $("#supervisor-form").submit(function(){
        addSupervisor();
    });

    function addSupervisor(){
        var formData = {
            username: $("#username").val(),
            password: $("#password").val(),
            name: $("#fullname").val(),
            email: $("#email").val(),
            address: $("#address").val(),
            phone: $("#phone").val(),
            image: $("#image").val(),
            role : null
        };
        
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "/api/supervisor",
            data: JSON.stringify(formData),
            dataType: "json",
            success: function(response){
                document.location.replace("./supervisor.html");
            },
            error: function(){
                alert("Error");
            }
        });
    }

});