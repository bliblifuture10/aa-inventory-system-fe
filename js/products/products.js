$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "/api/product",
        dataType: "json",
        headers: {
            "Content-Type": "application/json"
        },
        success: function(response){
            var i = 1;
            response.forEach(product => {
                $("#table-content").append(
                    "<tr>" +
                        "<td>" + i + "</td>" +
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
                i++;
            });
        },
        error: function(){
            alert("Error");
        }
    });

    $(document).on("click", "#delete-product", function(){
        var id = $(this).val();
    
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
    });

});