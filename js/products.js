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
                $('#table-content').append(
                    "<tr>" +
                        "<td>" + i + "<td>" +
                        "<td>" + product.name + "<td>" +
                        "<td>" + product.category + "<td>" +
                        "<td>" + product.stock + "<td>" +
                        "<td>" + product.price + "<td>" +
                    "<tr>"
                );
                i++;
            });
        },
        error: function(){
            alert("Error");
        }
    });
});