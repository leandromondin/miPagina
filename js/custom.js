
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

    $("#followMe").first().empty();
    $("#followMe").first().append("Follow me!");
    $("#picture01").first().empty();
    $("#picture01").first().append("Be happy. Always!");
    $("#picture02").first().empty();
    $("#picture02").first().append("The things won't be like before. They will be better!");
    $("#picture03").first().empty();
    $("#picture03").first().append("I can arrive to the infinite.");
    $("#h1Trabajo").first().empty();
    $("#h1Trabajo").first().append("Work");

    $("#puestoMeli").first().empty();
    $("#puestoMeli").first().append("Sr IAM Cyber Security Engineer in Mercado Libre");

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
    $("#followMe").first().empty();
    $("#followMe").first().append("Sigueme!");

    $("#picture01").first().empty();
    $("#picture01").first().append("Se feliz. Siempre.");
    $("#picture02").first().empty();
    $("#picture02").first().append("Las cosas no serán como antes, serán mejor");
    $("#picture03").first().empty();
    $("#picture03").first().append("Puedo llegar al infinito.");
    $("#h1Trabajo").first().empty();
    $("#h1Trabajo").first().append("Trabajo");
    
    $("#puestoMeli").first().empty();
    $("#puestoMeli").first().append("Ingeniero Sr - Seguridad Informatica IAM en Mercado Libre");
    
}
