$(document).ready(function(){
    $("#generateEmployee").click(function() {
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
            success: function(response){
                var i = 1;
                response.forEach(employee => {
                    $('#tableContent').append(
                        "<tr>" +
                            "<td>" + i + "<td>" +
                            "<td>" + employee.username + "<td>" +
                            "<td>" + employee.password + "<td>" +
                        "<tr>"
                    );
                    i++;
                });
            },
            error: function(){
                alert("Error");
            }
        });
    }
});