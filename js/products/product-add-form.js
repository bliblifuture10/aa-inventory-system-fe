$(document).ready(function(){
    $("#product-form").submit(function(event){
        addProduct();
    });

    function addProduct(){
        var formData = {
            name: $("#name").val(),
            category: $("#category").val(),
            stock: $("stock").val(),
            price: $("price").val(),
            image: $("image").val()
        };

        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "/api/product",
            data: JSON.stringify(formData),
            dataType: "json",
            success: function(response){
                alert("Product added");
            },
            error: function(xhr, status, error){
                var err = eval("(" + xhr.responseText + ")");
                
                alert(err.message);
            }
        });
    }
});