

let nombre = prompt('Ingrese su nombre:');
let apellido = prompt('Ingrese su apellido:');
let email = prompt('Ingrese su email:');
let contraseña = prompt('Ingrese su contraseña:');
let edad = prompt('Ingrese su edad:');
let pregunta1 = prompt("¿visitas frecuentemente la pagina? (Sí/No)").toLowerCase();
let pregunta2 = prompt("¿como la calificarias? (malo/bueno/muy bueno)");


if (pregunta1 ==="si"|| pregunta1 === "si") {
    console.log("¡Nos alegra que te haya gustado!");
} else if (pregunta1 = "no") {
    console.log("Lamentamos que no haya sido de tu agrado. Agradecemos tu feedback para mejorar.");
} else {
    console.log("Por favor, responde solo con 'Sí' o 'No'.");
}
switch(pregunta2){
    case 'malo':
        console.log("lamentamos que no les guste"); 
    break;
    case 'bueno':
        console.log("bueno nos tendremos que poner a trabajar");
    break;
    case 'muy bueno':
       console.log("genial por que nos matamos trabajando") 
    break; 
    default:
        console.log("ponete las pilas y elegí entre 'Malo', 'Bueno' o 'Muy bueno'."); 
}
alert("¡Gracias por completar la encuesta!");


console.log("Nombre:", nombre);
console.log("Apellido:", apellido);
console.log("Email:", email);
console.log("Contraseña:", contraseña); 
console.log("Edad:", edad);



