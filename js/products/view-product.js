$(document).ready(function(){
    var urlString = window.location.href;
    var url = new URL(urlString);
    var id = url.searchParams.get("id");

    $("#update-product").attr("href", "product-update-form.html?id="+id);

    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "/api/product/id/" + id,
        dataType: "json",
        success: function(response){
            $("#product-description").append(
                "<p>" + response.name + "</p>" +
                "<p>" + response.category + "</p>" +
                "<p>" + response.stock + "</p>" +
                "<p>" + response.price + "</p>"
            );
        },
        error: function(){
            alert("Error cuy");
        }
    });
});