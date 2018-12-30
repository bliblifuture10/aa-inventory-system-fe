$(document).ready(function(){
    loadSupervisorData();

    $("#employee-form").submit(function(){
        addEmployee();
    });

    function loadSupervisorData(){
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: "/api/supervisor",
            dataType: "json",
            success: function(response){
                $.each(response.data, function(i, supervisor){
                    $("#supervisor").append(
                        "<option value='"+ supervisor.id +"'>" + supervisor.name + "</option>"
                    ); 
                });
            },
            error: function(){
                alert("Get supervisor data error");
            }
        });
    }

    function addEmployee(){
        var form = $("#employee-form")[0];
        var formData = new FormData(form);

        formData.append("image", null);
        formData.append("role", null);
        $.ajax({
            type: "POST",
            enctype: "multipart/form-data",
            url: "/api/employee",
            data: formData,
            dataType: "json",
            processData: false,
            contentType: false,
            cache: false,
            timeout: 1000000,
            success: function(){
                alert("Employee added");
                window.document.location = "employees.html";
            },
            error: function(xhr, status, error){
                var err = eval("(" + xhr.responseText + ")");
                
                alert(err.message);
            }
        });

    }
});