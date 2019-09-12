$(document).ready(function(){
    //Hover proyectos
    $("#displayProy").hover(function printData() { 
        $.ajax({    //create an ajax request to display.php
            type: "POST",
            data: {"idEmp" : $("#idEmp").val()},
            url: "../scriptsPHP/showActiveProy.php",             
            dataType: "html",   //expect html to be returned                
            success: function(response){                    
                $("#activeProy").html(response); 
                //alert(response);
            },
            error: function() {
                console.log("No se ha podido obtener la información");
            }
    
         });
    });
    //Hover de Empresas
    $("#display").hover(function printData() { 
        $.ajax({    //create an ajax request to display.php
            type: "GET",
            data: {"idOwner" : $("#idOwner").val()},
            url: "../mostrarEmpresas.php",             
            dataType: "html",   //expect html to be returned                
            success: function(response){                    
                $("#responsecontainer").html(response); 
                //alert(response);
            },
            error: function() {
                console.log("No se ha podido obtener la información");
            }
    
         });
    });
    //Mostrar el nombre de la empresa en la q estoy
    $.ajax({    
        type: "GET",
        data: {"idProy" : $("#idProy").val()},
        url: "../scriptsPHP/mostrarNombreProy.php",             
        dataType: "html",   //expect html to be returned                
        success: function(response){                    
            $("#proyName").html(response); 
            //alert(response);
        },
        error: function() {
            console.log("No se ha podido obtener el nombre del proyecto");
        }

    });
    $("#añadirTarea").click(function (){
        if($("#nameTarea").val()){
            console.log($("#deadline").val());
            $.ajax({    
                type: "POST",
                data: {
                    "idProy"         : $("#idProy").val(),
                    "name"          : $("#nameTarea").val(),
                    "descripcion"   : $("#descripcionTarea").val()
                },
                url: "../scriptsPHP/addTareas.php",             
                dataType: "html",   //expect html to be returned                
                success: function(response){                    
                    $("#rAñadirTarea").html(response); 
                    
                },
                error: function() {
                    $("#rAñadirTarea").html("<p>Error!</p>"); 
                }
        });
        }else{
            $("#rAñadirTarea").html("<p>El nombre es requerido</p>"); 
        }
    });
});