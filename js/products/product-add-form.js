$(document).ready(function(){
    $("#product-form").submit(function(){
        addProduct();
    });

    function addProduct(){
        var form = $("#product-form")[0];
        var formData = new FormData(form);

        formData.append("image", null);
        $.ajax({
            type: "POST",
            enctype: "multipart/form-data",
            url: "/api/product",
            data: formData,
            dataType: "json",
            processData: false,
            contentType: false,
            cache: false,
            timeout: 1000000,
            success: function(response){
                alert("Product added");
                window.document.location = "products.html";
            },
            error: function(xhr, status, error){
                var err = eval("(" + xhr.responseText + ")");
                
                alert(err.message);
            }
        });
    }
});