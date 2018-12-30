$(document).ready(function(){
    loadSupervisorData();

    $("#search-supervisors").click(function(){
        var supervisorName = $("#fullname").val();

        if(!$("#clear-filter").length){
            $("#btn-list").append(
                "<button id='clear-filter' class='btn btn-secondary'>Clear Search</button>"
            );
        }

        searchSupervisor(supervisorName);
    });

    $(document).on("click", "#delete-supervisor", function(){
        var id = $(this).val();

        deleteSupervisor(id);
    });

    $(document).on("click", "#clear-filter", function(){
        $("#clear-filter").remove();
        $('#table-content tr').remove();
        loadSupervisorData();
    });

    function loadSupervisorData(){
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: "/api/supervisor",
            dataType: "json",
            success: function(response){
                $.each(response.data, function(i, supervisor){
                    $('#table-content').append(
                        "<tr>" +
                            "<td>" + (i+1) + "</td>" +
                            "<td>" + supervisor.name + "</td>" +
                            "<td>" + supervisor.email + "</td>" +
                            "<td>" + supervisor.address + "</td>" +
                            "<td>" + supervisor.phone + "</td>" +
                            "<td>" + 
                                "<a class='btn btn-primary' href='view-supervisor.html?id="+ supervisor.id +"'>View</a>" +
                                "<button id='delete-supervisor' class='btn btn-danger' value='" + supervisor.id + "' type='button'>Delete</a>" +
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

    function deleteSupervisor(id){
        $.ajax({
            type: "DELETE",
            contentType: "application/json",
            url: "/api/supervisor/id/" + id,
            success: function(){
                alert("Supervisor deleted");
                location.reload();
            },
            error: function(){
                alert("Error");
            }
        });
    }

    function searchSupervisor(supervisorName){
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: "/api/supervisor/name/" + supervisorName,
            dataType: "json",
            success: function(response){
                if(response.data == null){
                    alert("No supervisor found");
                }else{
                    $('#table-content tr').remove();

                    $.each(response.data, function(i, supervisor){
                        $('#table-content').append(
                            "<tr>" +
                                "<td>" + (i+1) + "</td>" +
                                "<td>" + supervisor.name + "</td>" +
                                "<td>" + supervisor.email + "</td>" +
                                "<td>" + supervisor.address + "</td>" +
                                "<td>" + supervisor.phone + "</td>" +
                                "<td>" + 
                                    "<a class='btn btn-primary' href='view-supervisor.html?id="+ supervisor.id +"'>View</a>" +
                                    "<button id='delete-supervisor' class='btn btn-danger' value='" + supervisor.id + "' type='button'>Delete</a>" +
                                "</td>" +
                            "<tr>"
                        );
                    });
                }
            },
            error: function(){
                alert("Error");
            }
        });
    }

});