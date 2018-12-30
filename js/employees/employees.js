$(document).ready(function(){
    loadEmployeeData();

    $("#search-employees").click(function(){
        var employeeName = $("#fullname").val();

        if(!$("#clear-filter").length){
            $("#btn-list").append(
                "<button id='clear-filter' class='btn btn-secondary'>Clear Search</button>"
            );
        }
        
        searchEmployees(employeeName);
    });

    $(document).on("click", "#delete-employee", function(){
        var id = $(this).val();
        
        deleteEmployee(id);
    });

    $(document).on("click", "#clear-filter", function(){
        $("#clear-filter").remove();
        $('#table-content tr').remove();
        loadEmployeeData();
    });

    function loadEmployeeData(){
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: "/api/employee",
            dataType: "json",
            success: function(response){
                $.each(response.data, function(i, employee){
                    $('#table-content').append(
                        "<tr>" +
                            "<td>" + (i+1) + "</td>" +
                            "<td>" + employee.name + "</td>" +
                            "<td>" + employee.email + "</td>" +
                            "<td>" + employee.address + "</td>" +
                            "<td>" + employee.phone + "</td>" +
                            "<td>" + 
                                "<a class='btn btn-primary' href='view-employee.html?id="+ employee.id +"'>View</a>" +
                                "<button id='delete-employee' class='btn btn-danger' value='" + employee.id + "' type='button'>Delete</a>" +
                            "</td>" +
                        "<tr>"
                    );
                });
            },
            error: function(){
                alert("Error");
            }
        });
    }

    function searchEmployees(employeeName){
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: "/api/employee/name/" + employeeName,
            dataType: "json",
            success: function(response){
                if(response.data == null){
                    alert("No employee found");
                }else{
                    $('#table-content tr').remove();

                    $.each(response.data, function(i, employee){
                        $('#table-content').append(
                            "<tr>" +
                                "<td>" + (i+1) + "</td>" +
                                "<td>" + employee.name + "</td>" +
                                "<td>" + employee.email + "</td>" +
                                "<td>" + employee.address + "</td>" +
                                "<td>" + employee.phone + "</td>" +
                                "<td>" + 
                                    "<a class='btn btn-primary' href='view-employee.html?id="+ employee.id +"'>View</a>" +
                                    "<button id='delete-employee' class='btn btn-danger' value='" + employee.id + "' type='button'>Delete</a>" +
                                "</td>" +
                            "<tr>"
                        );
                    });
                }
            },
            error: function(){
                alert("Error");
            }
        });
    }

    function deleteEmployee(id){
        $.ajax({
            type: "DELETE",
            contentType: "application/json",
            url: "/api/employee/id/" + id,
            success: function(){
                alert("Employee deleted");
                location.reload();
            },
            error: function(){
                alert("Error");
            }
        });
    }

});