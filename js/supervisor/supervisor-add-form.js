$(document).ready(function(){
    $("#supervisor-form").submit(function(){
        addSupervisor();
    });

    function addSupervisor(){
        var form = $("#supervisor-form")[0];
        var formData = new FormData(form);

        formData.append("image", null);
        formData.append("role", null);
        $.ajax({
            type: "POST",
            enctype: "multipart/form-data",
            url: "/api/supervisor",
            data: formData,
            dataType: "json",
            processData: false,
            contentType: false,
            cache: false,
            timeout: 1000000,
            success: function(response){
                alert("Supervisor added");
                window.document.location = "supervisor.html";
            },
            error: function(xhr, status, error){
                var err = eval("(" + xhr.responseText + ")");
                
                alert(err.message);
            }
        });
    }

});