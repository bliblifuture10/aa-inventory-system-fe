$(document).ready(function(){
    $("#product-form").submit(function(event){
        addProduct();
    });

    function addProduct(){
        var formData = {
            name: $("#prod-name").val(),
            category: $("#prod-category").val(),
            stock: $("prod-stock").val(),
            price: $("prod-price").val(),
            picture: $("prod-image").val()
        };

        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "/api/product",
            data: JSON.stringify(formData),
            dataType: "json",
            success: function(response){
                if(response.status == "Done"){
                    console.log(response);
                }
            },
            error: function(xhr, status, error){
                var err = eval("(" + xhr.responseText + ")");
                
                alert(err.message);
            }
        });
    }
});