$(document).ready(function(){
    var urlString = window.location.href;
    var url = new URL(urlString);
    var id = url.searchParams.get("id");

    loadData();

    $("#product-form").submit(function(event){
        event.preventDefault();
        updateProduct();
    });

    $("#back").attr("href", "view-product.html?id=" + id);

    function loadData(){
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: "/api/product/id/" + id,
            dataType: "json",
            success: function(response){
                var product = response.data;

                $("#name").attr("value", product.name);
                $("#category").attr("value", product.category);
                $("#stock").val(product.stock);
                $("#price").attr("value", product.price);
                $("#image").attr("value", product.image);
            },
            error: function(){
                alert("Error get data");
            }
        });
    }

    function updateProduct(){
        var form = $("#product-form")[0];
        var formData = new FormData(form);

        formData.append("image", null);
        $.ajax({
            type: "PUT",
            enctype: "multipart/form-data",
            url: "/api/product/id/" + id,
            data: formData,
            dataType: "json",
            processData: false,
            contentType: false,
            cache: false,
            timeout: 1000000,
            success: function(response){
                alert("Product updated");
                window.document.location = "view-product.html?id=" + id;
            },
            error: function(xhr, status, error){
                var err = eval("(" + xhr.responseText + ")");
                
                alert(err.message);
            }
        });
    }

});