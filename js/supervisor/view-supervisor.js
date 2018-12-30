$(document).ready(function(){
    var urlString = window.location.href;
    var url = new URL(urlString);
    var id = url.searchParams.get("id");

    loadData();

    $("#update-supervisor").attr("href", "supervisor-update-form.html?id="+id);

    function loadData(){
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: "/api/supervisor/id/" + id,
            dataType: "json",
            success: function(response){
                var supervisor = response.data;

                $("#supervisor-profile").append(
                    "<p><img src='" + supervisor.image + "' alt='" + supervisor.name + "'/></p>" +
                    "<p>" + supervisor.name + "</p>" +
                    "<p>" + supervisor.email + "</p>" +
                    "<p>" + supervisor.address + "</p>" +
                    "<p>" + supervisor.phone + "</p>"
                );
            },
            error: function(){
                alert("Error cuy");
            }
        });
    }
    
});