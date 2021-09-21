
function inicio() {
    $("#espaniol").animate({fontSize:'130%',opacity:'1'}, 500,function(){});
    $("#ingles").animate({fontSize:'100%',opacity:'0.3'}, 500,function(){});
  }
  
setTimeout(inicio, 1000)


function ingles(){
    //Iconos de banderas de lenguaje
    $("#ingles").animate({fontSize:'130%',opacity:'1'}, 500,function(){});
    $("#espaniol").animate({fontSize:'100%',opacity:'0.3'}, 500,function(){});
    //Menu de navegacion
    $("#navTrabajo").first().empty();
    $("#navTrabajo").first().append("Work");
    $("#navViaje").first().empty();
    $("#navViaje").first().append("My travel");
    $("#navContacto").first().empty();
    $("#navContacto").first().append("Contact");
    //footer
    $("#followMe").first().empty();
    $("#followMe").first().append("Follow me!");
    // Index
    $("#hola").first().empty();
    $("#hola").first().append("Hi, I am");
    $("#frase1").first().empty();
    $("#frase1").first().append("ENOUGH WAITING FOR THINGS.");
    $("#frase2").first().empty();
    $("#frase2").first().append("GET OUT THERE AND MAKE THEM");
    $("#picture01").first().empty();
    $("#picture01").first().append("Be happy. Always!");
    $("#picture02").first().empty();
    $("#picture02").first().append("The things won't be like before. They will be better!");
    $("#picture03").first().empty();
    $("#picture03").first().append("I can arrive to the infinite.");
    //trabajo
    $("#h1Trabajo").first().empty();
    $("#h1Trabajo").first().append("Work");
    $("#puestoMeli").first().empty();
    $("#puestoMeli").first().append("Senior Cyber Security IAM <br>Engineer in Mercado Libre");
    $("#h4trabajo").first().empty();
    $("#h4trabajo").first().append("My professional projects");
    $("#trabajoPresentacion").first().empty();
    $("#trabajoPresentacion").first().append("I think daily motivation and synergy in a work team is the fundamental factor for excellence in all projects and technical developments. I am a big follower of this idea, which helps me every day to get fulfillment in my entire life and professional career. In this career I had the pleasure of working on the following initiatives:");
    $("#TrabajoElectroDos").first().empty();
    $("#TrabajoElectroDos").first().append("- Findings and repair of the network and its computer equipment.<br>- Design of banners and communications in social networks.<br><br><br>");
    $("#TrabajoMetpro").first().empty();
    $("#TrabajoMetpro").first().append("- Programming of PLC and SCADA systems in automation projects.<br>- Design of electrical panels with AutoCad and its subsequent assembly and connection.<br>- Market research for technology purchases.<br><br>");
    $("#trabajoIAMSupport").first().empty();
    $("#trabajoIAMSupport").first().append("Cyber Security Assistance (+ 10k users).<br><br>- Support in Security processes<br>- Process automation projects<br>- Access management (Active Directory - SAP - AWS- GCP - Azure - VPN - Salesforce)<br>- Software development and databases<br>- SLA management on tickets and requirements<br><br><br>");
    $("#trabajoIAM").first().empty();
    $("#trabajoIAM").first().append("Management and standardization of all company users (+ 20k users)<br><br> - Backend API development.<br> - Cloud engineering (AWS - GCP - Azure)<br>- Automatic processes for creating, modifying and disabling users for the company.<br>- Integrations with Single Sign On (SSO). (+20 apps such as Salesforce, Workplace, New Relic, Jira and Success Factors)<br>- Standardization of Active Directory resources.<br>");
    $("#trabajoIAMSsr").first().empty();
    $("#trabajoIAMSsr").first().append("Management and standardization of all company users (+30k users)<br><br>- Integration of MFA (multifactor authentication) for all internal applications.<br>- Market analysis and acquisition of PAM (Privileged Access Management) solution<br>- Standardization of external employee accounts.<br>- Design and implementation of Facebook Workplace Spaces for all users of the company.<br>- Backend API development. API automation and Auth0 management.<br>");
    $("#trabajoIAMSr").first().empty();
    $("#trabajoIAMSr").first().append("Management and standardization of all company users (+ 50k users)<br><br>- Automatic AuthZ. Automatic permission set solution for all internal employee accounts.<br>- PAM Cyberark solution integration (infrastructure, accounts and services)<br>- Standardization of OUs and permissions in Github, Active Directory and Gsuite<br>- Identity Provider Auth0 administration, rules and automations.<br><br>");

    

    //Viaje
    $("#h1Miviaje").first().empty();
    $("#h1Miviaje").first().append("My travel");
    $("#viajeFrase").first().empty();
    $("#viajeFrase").first().append("I know that life is just a journey we go through.<br> On this trip, I am doing 2 personal projects:");
    $("#viajeProyecto1").first().empty();
    $("#viajeProyecto1").first().append("What could happiness be?");
 

}

function espaniol(){
    //Iconos de banderas de lenguaje
    $("#espaniol").animate({fontSize:'130%',opacity:'1'}, 500,function(){});
    $("#ingles").animate({fontSize:'100%',opacity:'0.3'}, 500,function(){});
    //Menu de navegacion
    $("#navTrabajo").first().empty();
    $("#navTrabajo").first().append("Trabajo");
    $("#navViaje").first().empty();
    $("#navViaje").first().append("Mi viaje");
    $("#navContacto").first().empty();
    $("#navContacto").first().append("Contacto");
    //footer
    $("#followMe").first().empty();
    $("#followMe").first().append("Sigueme!");
    // Index
    $("#hola").first().empty();
    $("#hola").first().append("Hola, soy");
    $("#frase1").first().empty();
    $("#frase1").first().append("DEJA DE ESPERAR QUE LAS COSAS PASEN.");
    $("#frase2").first().empty();
    $("#frase2").first().append("SAL AHI FUERA Y HAZ QUE PASEN");
    $("#picture01").first().empty();
    $("#picture01").first().append("Se feliz. Siempre.");
    $("#picture02").first().empty();
    $("#picture02").first().append("Las cosas no serán como antes, serán mejor");
    $("#picture03").first().empty();
    $("#picture03").first().append("Puedo llegar al infinito.");
    //Trabajo
    $("#h1Trabajo").first().empty();
    $("#h1Trabajo").first().append("Trabajo");
    $("#puestoMeli").first().empty();
    $("#puestoMeli").first().append("Ingeniero Senior - Seguridad Informatica <br>IAM en Mercado Libre");
    $("#h4trabajo").first().empty();
    $("#h4trabajo").first().append("Mis proyectos profesionales");
    $("#TrabajoElectroDos").first().empty();
    $("#TrabajoElectroDos").first().append("- Relevamiento y reparacion de la red y sus equipos informáticos.<br>- Diseño de banners y comunicaciones en las redes sociales.<br><br><br>");
    $("#TrabajoMetpro").first().empty();
    $("#TrabajoMetpro").first().append("- Programación de PLC y sistemas SCADA en proyectos de automatización.<br>- Diseño de tableros eléctricos con AutoCad y su posterior armado y conexión.<br>- Investigación del mercado para compras de tecnología.<br><br><br>");
    $("#trabajoIAMSupport").first().empty();
    $("#trabajoIAMSupport").first().append("Asistencia en Seguridad Informática (+ 10mil usuarios).<br><br>- Soporte en procesos de Seguridad<br>- Proyectos de automatización de procesos<br>- Gestion de accesos (Active Directory - SAP - AWS- GCP - Azure - VPN - Salesforce)<br>- Desarrollo de software y Bases de datos<br>- Gestion de SLA en tickets y requerimientos<br><br><br>");
    $("#trabajoIAM").first().empty();
    $("#trabajoIAM").first().append("Gestión y estandarización de todos los usuarios de la empresa (+ 20mil usuarios)<br><br> - Desarrollo APIs backend.<br> - Ingeniería cloud (AWS - GCP - Azure)<br>- Procesos automáticos de creación, modificacion y deshabilitación de usuarios para toda la compañia.<br>- Integraciones con Single Sign On (SSO). (+20 apps como por ejemplo Salesforce, Workplace, New Relic, Jira y Success Factors)<br>- Estandarización de recursos del Active Directory.<br>");
    $("#trabajoIAMSsr").first().empty();
    $("#trabajoIAMSsr").first().append("Gestión y estandarización de todos los usuarios de la empresa (+ 30mil usuarios)<br><br>- Integración de MFA (multifactor de autenticación) para todas las aplicaciones internas.<br>- Analisis de mercado y adquisición de solución PAM (Privileged Access Management)<br>- Estandarización de cuentas de empleados externos.<br>- Diseño e implementación de Facebook Workplace Spaces para todos los usuarios de la compañia.<br>- Desarrollo APIs backend. Automatizaciones API y gestión Auth0.<br>");
    $("#trabajoIAMSr").first().empty();
    $("#trabajoIAMSr").first().append("Gestión y estandarización de todos los usuarios de la empresa (+ 50mil usuarios)<br><br>- AuthZ. Solución de set de permisos automáticos para todos las cuentas de empleados internos.<br>- Integración solución PAM Cyberark (infraestructura, cuentas y servicios) <br>- Estandarización de OUs y permisos en Github, Active Directory y Gsuite<br>- Administración Identity Provider Auth0, reglas y automatizaciones.<br><br>");


    //Viaje
    $("#h1Miviaje").first().empty();
    $("#h1Miviaje").first().append("Mi Viaje");
    $("#viajeFrase").first().empty();
    $("#viajeFrase").first().append("Estoy convencido de que la vida es solo un viaje que transitamos.<br>En dicho viaje me encuentro abordando 2 proyectos personales:");
    $("#viajeProyecto1").first().empty();
    $("#viajeProyecto1").first().append("¿Que será la felicidad?");

    
}
