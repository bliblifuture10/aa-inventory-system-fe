$(document).ready(function(){
    $("#employeeForm").submit(function(event){
        addEmployee();
    });

    function addEmployee(){
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/api/employee",
            dataType: "json",
            data: $("#employeeForm").serialize(),
            headers: {
                "Content-Type": "application/json"
            },
            success: function(data){
                
            },
            error: function(xhr){
                
            }
        });
    }
});