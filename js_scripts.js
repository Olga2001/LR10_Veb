$(document).ready(function(){
    $("#addClass_button").click(function(){
        $("#addClass_ex").addClass("blue_class");
    });

    $("#hover_ex").hover(function(){
       $("#find_ex").children("#children").css({"color" : "red"});
    },
    function(){
        $("#find_ex").children("#children").css({"color" : "black"});
    }); 

    $("#toggle_class_button").click(function(){
        $(".toggle_class_ex").filter("span").toggleClass("blue_class");
    });

    $("#attr_button").click(function(){
        $("#attr_ex").attr("id", "attr_ex_2");
    });

    $("#check1").change(function() {
        if ($("#check1").prop('checked')){
            $("#prop_ex").html("Пример работы prop");
        }
        else{
            $("#prop_ex").html(" ");
        }
    });

    $("#trigger_button").click(function(){
        $("#trigger_ex").hide();
    });

    $("#trigger_button_2").click(function(){
        $("#trigger_ex").show();
    });
    $("#trigger_hover").hover(
        function(){
            $("#trigger_button").trigger("click")},
        function(){
            $("#trigger_button_2").trigger("click")
    });

    $("#wrap_button").click(function(){
        $("#wrap_ex").wrap('<div class ="wrap_class" />').prepend('Пример работы ').append('. На этом демонстрация jQuery закончилась. На очереди jQuery UI');
    });

});

$( function() {
    $("#accordion").accordion();
});
$( function() {
    $("#draggable").draggable();
  } );