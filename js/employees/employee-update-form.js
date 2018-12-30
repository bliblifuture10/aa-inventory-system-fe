$(document).ready(function(){
    var urlString = window.location.href;
    var url = new URL(urlString);
    var id = url.searchParams.get("id");
    var employee;

    loadSupervisorData();
    loadData();

    $("#employee-form").submit(function(event){
        event.preventDefault();
        updateEmployee();
    });
    $("#back").attr("href", "view-employee.html?id=" + id);

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

    function loadData(){
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: "/api/employee/id/" + id,
            dataType: "json",
            success: function(response){
                employee = response.data;
    
                $("#name").attr("value", employee.name);
                $("#email").attr("value", employee.email);
                $("#address").val(employee.address);
                $("#phone").attr("value", employee.phone);
                $("#supervisor").val(employee.supervisor);
                $("#image").attr("value", employee.image);
            },
            error: function(){
                alert("Error");
            }
        });
    }

    function updateEmployee(){
        var form = $("#employee-form")[0];
        var formData = new FormData(form);

        formData.append("username", employee.username);
        formData.append("password", employee.password);
        formData.append("image", null);
        formData.append("role", null);
        $.ajax({
            type: "PUT",
            enctype: "multipart/form-data",
            url: "/api/employee/id/" + id,
            data: formData,
            dataType: "json",
            processData: false,
            contentType: false,
            cache: false,
            timeout: 1000000,
            success: function(){
                alert("Employee updated");
                window.document.location = "view-employee.html?id=" + id;
            },
            error: function(xhr, status, error){
                var err = eval("(" + xhr.responseText + ")");
                
                alert(err.message);
            }
        });

    }

});