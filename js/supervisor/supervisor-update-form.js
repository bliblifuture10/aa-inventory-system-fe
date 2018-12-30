$(document).ready(function(){
    var urlString = window.location.href;
    var url = new URL(urlString);
    var id = url.searchParams.get("id");
    var supervisor;

    loadData();

    $("#supervisor-form").submit(function(event){
        event.preventDefault();
        updateSupervisor();
    });
    $("#back").attr("href", "view-supervisor.html?id=" + id);

    function loadData(){
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: "/api/supervisor/id/" + id,
            dataType: "json",
            success: function(response){
                supervisor = response.data;

                $("#name").attr("value", supervisor.name);
                $("#email").attr("value", supervisor.email);
                $("#address").val(supervisor.address);
                $("#phone").attr("value", supervisor.phone);
                $("#image").attr("value", supervisor.image);
            },
            error: function(){
                alert("Error");
            }
        });
    }

    function updateSupervisor(){
        var form = $("#supervisor-form")[0];
        var formData = new FormData(form);

        formData.append("username", supervisor.username);
        formData.append("password", supervisor.password);
        formData.append("image", null);
        formData.append("role", null);
        $.ajax({
            type: "PUT",
            enctype: "multipart/form-data",
            url: "/api/supervisorid/" + id,
            data: formData,
            dataType: "json",
            processData: false,
            contentType: false,
            cache: false,
            timeout: 1000000,
            success: function(){
                alert("Supervisor updated");
                window.document.location = "view-supervisor.html?id=" + id;
            },
            error: function(xhr, status, error){
                var err = eval("(" + xhr.responseText + ")");
                
                alert(err.message);
            }
        });
    }

});