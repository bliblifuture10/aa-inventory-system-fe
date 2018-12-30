$(document).ready(function(){
    var urlString = window.location.href;
    var url = new URL(urlString);
    var id = url.searchParams.get("id");

    loadData();
    $("#update-product").attr("href", "product-update-form.html?id=" + id);

    function loadData(){
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: "/api/product/id/" + id,
            dataType: "json",
            success: function(response){
                var product = response.data;
    
                $("#product-description").append(
                    "<p><img src='" + product.image + "' alt='" + product.name + "'/></p>" +
                    "<p>" + product.name + "</p>" +
                    "<p>" + product.category + "</p>" +
                    "<p>" + product.stock + "</p>" +
                    "<p>" + product.price + "</p>"
                );
            },
            error: function(){
                alert("Error");
            }
        });
    }
});