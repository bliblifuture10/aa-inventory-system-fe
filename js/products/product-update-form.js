$(document).ready(function(){
    var urlString = window.location.href;
    var url = new URL(urlString);
    var prodId = url.searchParams.get("id");

    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "/api/product/id/" + prodId,
        dataType: "json",
        success: function(response){
            $("#name").attr("value", response.name);
            $("#category").attr("value", response.category);
            $("#stock").val(response.stock);
            $("#price").attr("value", response.price);
            $("#image").attr("value", response.image);
        },
        error: function(){
            alert("Error get data");
        }
    });

    $("#product-form").submit(function(event){
        event.preventDefault();
        updateProduct();
    });

    $("#back").attr("href", "view-product.html?id=" + prodId);

    function updateProduct(){
        var formData = {
            id: prodId,
            name: $("#name").val(),
            category: $("#category").val(),
            stock: $("#stock").val(),
            price: $("#price").val(),
            image: $("#image").val(),
        }
        
        $.ajax({
            type: "PUT",
            contentType: "application/json",
            url: "/api/product",
            data: JSON.stringify(formData),
            dataType: "json",
            success: function(){
                alert("Product updated");
                location.reload();
            },
            error: function(){
                alert("Error");
            }
        });
    }

});