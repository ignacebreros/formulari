
function pedirNombre(nombre) {
    console.log(`Hola, ${nombre}!`);
}

let nombre = prompt('Ingrese su nombre:');
let apellido = prompt(nombre +" "+"por favor ingrese su apellido:");
let email = prompt(nombre +" "+ "Ingrese su email:");
let contraseña = prompt(nombre +" "+"Ingrese su contraseña:");
let edad = prompt(nombre +" "+"Ingrese su edad:");
do {
    
    if (!validarEdad(edad)) {
        console.log(nombre +" "+ "Por favor, ingresa una edad válida. Debes ser mayor de 18 años.");
    }
} while (!validarEdad(edad));
function validarEdad(edad) {
    return !isNaN(edad) && edad >= 18;
}

let pregunta1 = prompt("¿visitas frecuentemente la pagina? (Sí/No)").toLowerCase();
let pregunta2 


if (pregunta1 ==="si") {
    console.log("¡Nos alegra"+" "+ nombre +" "+ "que te haya gustado!");
} else if (pregunta1 === "no") {
    console.log("Lamentamos" +" "+ nombre+" "+"que no haya sido de tu agrado. Agradecemos tu feedback para mejorar.");
} else {
    console.log("Por favor, responde solo con 'Sí' o 'No'.");
}
do {
    pregunta2 = prompt("¿Cómo la calificarías la pagina web? (malo/bueno/muy bueno)").toLowerCase();
    
    if (pregunta2 !== "malo" && pregunta2 !== "bueno" && pregunta2 !== "muy bueno") {
        console.log("Por favor, ingresa una respuesta válida: malo, bueno o muy bueno.");
    }
} while (pregunta2 !== "malo" && pregunta2 !== "bueno" && pregunta2 !== "muy bueno");

alert("¡Gracias por completar la encuesta"+" "+nombre+" "+"!");


console.log("Nombre:", nombre);
console.log("Apellido:", apellido);
console.log("Email:", email);
console.log("Contraseña:", contraseña); 
console.log("Edad:", edad);



