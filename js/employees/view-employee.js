$(document).ready(function(){
    var urlString = window.location.href;
    var url = new URL(urlString);
    var id = url.searchParams.get("id");

    loadData();

    $("#update-employee").attr("href", "employee-update-form.html?id="+id);

    function loadData(){
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: "/api/employee/id/" + id,
            dataType: "json",
            success: function(response){
                var employee = response.data;

                $("#employee-profile").append(
                    "<p><img src='" + employee.image + "' alt='" + employee.name + "'/></p>" +
                    "<p>" + employee.name + "</p>" +
                    "<p>" + employee.email + "</p>" +
                    "<p>" + employee.address + "</p>" +
                    "<p>" + employee.phone + "</p>"
                );
            },
            error: function(){
                alert("Error");
            }
        });
    }
});