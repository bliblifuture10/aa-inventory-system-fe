$(document).ready(function(){
    var urlString = window.location.href;
    var url = new URL(urlString);
    var id = url.searchParams.get("id");

    $("#update-supervisor").attr("href", "supervisor-update-form.html?id="+id);

    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "/api/supervisor/id/" + id,
        dataType: "json",
        success: function(response){
            $("#supervisor-profile").append(
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