$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "/api/employee",
        dataType: "json",
        headers: {
            "Content-Type": "application/json"
        },
        success: function(response){
            var i = 1;
            response.forEach(employee => {
                $('#table-content').append(
                    "<tr>" +
                        "<td>" + i + "<td>" +
                        "<td>" + employee.name + "<td>" +
                        "<td>" + employee.email + "<td>" +
                        "<td>" + employee.address + "<td>" +
                        "<td>" + employee.phone + "<td>" +
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