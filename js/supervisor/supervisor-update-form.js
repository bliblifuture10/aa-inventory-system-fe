$(document).ready(function(){
    var referrer = document.referrer;
    var urlString = window.location.href;
    var url = new URL(urlString);
    var id = url.searchParams.get("id");

    $("#back").attr("href", "view-supervisor.html?id=" + id);

    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "/api/supervisor/id/" + id,
        dataType: "json",
        success: function(response){
            $("#fullname").attr("value", response.name);
            $("#email").attr("value", response.email);
            $("#address").val(response.address);
            $("#phone").attr("value", response.phone);
            $("#image").attr("value", response.image);
        },
        error: function(){

        }
    });
});