$(document).ready(function(){
    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "/api/employee",
        dataType: "json",
        success: function(response){
            var i = 1;
            response.forEach(employee => {
                $('#table-content').append(
                    "<tr>" +
                        "<td>" + i + "</td>" +
                        "<td>" + employee.name + "</td>" +
                        "<td>" + employee.email + "</td>" +
                        "<td>" + employee.address + "</td>" +
                        "<td>" + employee.phone + "</td>" +
                        "<td>" + 
                            "<a class='btn btn-primary' href='view-employee.html?id="+ employee.id +"'>View</a>" +
                        "</td>" +
                    "<tr>"
                );
                i++;
            });
        },
        error: function(){
            alert("Error");
        }
    });
});