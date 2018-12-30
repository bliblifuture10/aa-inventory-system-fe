$(document).ready(function(){
    loadProductData();

    $("#search-products").click(function(){
        var productName = $("#prod-name").val();

        if(!$("#clear-filter").length){
            $("#btn-list").append(
                "<button id='clear-filter' class='btn btn-secondary'>Clear Search</button>"
            );
        }        

        searchProduct(productName);
    });

    $(document).on("click", "#delete-product", function(){
        var id = $(this).val();
    
        deleteProduct(id);
    });

    $(document).on("click", "#clear-filter", function(){
        $("#clear-filter").remove();
        $('#table-content tr').remove();
        loadProductData();
    });

    function loadProductData(){
        $.ajax({
            type: "GET",
            url: "/api/product",
            dataType: "json",
            headers: {
                "Content-Type": "application/json"
            },
            success: function(response){
                $.each(response.data, function(i, product){
                    $("#table-content").append(
                        "<tr>" +
                            "<td>" + (i+1) + "</td>" +
                            "<td>" + product.name + "</td>" +
                            "<td>" + product.category + "</td>" +
                            "<td>" + product.stock + "</td>" +
                            "<td>" + product.price + "</td>" +
                            "<td>" + 
                                "<a class='btn btn-primary' href='view-product.html?id="+ product.id +"'>View</a>" +
                                "<button id='delete-product' class='btn btn-danger' value='" + product.id + "' type='button'>Delete</a>" +
                            "</td>" +
                        "<tr>"
                    );
                });
            },
            error: function(){
                alert("Error");
            }
        });
    }

    function searchProduct(productName){
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: "/api/product/name/" + productName,
            dataType: "json",
            success: function(response){
                if(response.data == null){
                    alert("No product found");
                }else{
                    $('#table-content tr').remove();

                    $.each(response.data, function(i, product){
                        $("#table-content").append(
                            "<tr>" +
                                "<td>" + (i+1) + "</td>" +
                                "<td>" + product.name + "</td>" +
                                "<td>" + product.category + "</td>" +
                                "<td>" + product.stock + "</td>" +
                                "<td>" + product.price + "</td>" +
                                "<td>" + 
                                    "<a class='btn btn-primary' href='view-product.html?id="+ product.id +"'>View</a>" +
                                    "<button id='delete-product' class='btn btn-danger' value='" + product.id + "' type='button'>Delete</a>" +
                                "</td>" +
                            "<tr>"
                        );
                    });
                }
            },
            error: function(response){
                alert(
                    "Error code: " + response.code +
                    "\nError message:\n" + response.message
                )
            }
        });
    }

    function deleteProduct(id){
        $.ajax({
            type: "DELETE",
            contentType: "application/json",
            url: "/api/product/id/" + id,
            success: function(){
                alert("Product deleted");
                location.reload();
            },
            error: function(url){
                alert("Error");
            }
        });
    }

});