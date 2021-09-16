
function inicio() {
    $("#espaniol").animate({fontSize:'130%',opacity:'1'}, 500,function(){});
    $("#ingles").animate({fontSize:'100%',opacity:'0.3'}, 500,function(){});
  }
  
setTimeout(inicio, 1000)


function ingles(){
    $("#hola").first().empty();
    $("#hola").first().append("Hi, I am");

    $("#frase1").first().empty();
    $("#frase1").first().append("ENOUGH WAITING FOR THINGS.");
    $("#frase2").first().empty();
    $("#frase2").first().append("GET OUT THERE AND MAKE THEM");
    $("#navTrabajo").first().empty();
    $("#navTrabajo").first().append("Work");
    $("#navViaje").first().empty();
    $("#navViaje").first().append("My travel");
    $("#navContacto").first().empty();
    $("#navContacto").first().append("Contact");
    $("#ingles").animate({fontSize:'130%',opacity:'1'}, 500,function(){});
    $("#espaniol").animate({fontSize:'100%',opacity:'0.3'}, 500,function(){});
}

function espaniol(){
    $("#hola").first().empty();
    $("#hola").first().append("Hola, soy");
    $("#espaniol").animate({fontSize:'130%',opacity:'1'}, 500,function(){});
    $("#ingles").animate({fontSize:'100%',opacity:'0.3'}, 500,function(){});
    $("#frase1").first().empty();
    $("#frase1").first().append("DEJA DE ESPERAR QUE LAS COSAS PASEN.");
    $("#frase2").first().empty();
    $("#frase2").first().append("SAL AHI FUERA Y HAZ QUE PASEN");
    $("#navTrabajo").first().empty();
    $("#navTrabajo").first().append("Trabajo");
    $("#navViaje").first().empty();
    $("#navViaje").first().append("Mi viaje");
    $("#navContacto").first().empty();
    $("#navContacto").first().append("Contacto");
}
