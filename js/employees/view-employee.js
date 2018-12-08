$(document).ready(function(){
    var urlString = window.location.href;
    var url = new URL(urlString);
    var id = url.searchParams.get("id");

    $("#update-employee").attr("href", "employee-update-form.html?id="+id);

    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "/api/employee/id/" + id,
        dataType: "json",
        success: function(response){
            $("#employee-profile").append(
                "<p>" + response.name + "</p>" +
                "<p>" + response.email + "</p>" +
                "<p>" + response.address + "</p>" +
                "<p>" + response.phone + "</p>"
            );
        },
        error: function(){
            alert("Error cuy");
        }
    });
});