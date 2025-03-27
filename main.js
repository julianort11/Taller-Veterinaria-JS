let opcion;
// let saludo = alert ("Bienvenidos a la veterianaria:) ")
do {
    opcion = prompt(
    "Bienvenidos a la veterianaria:)\n"+
    "Menú:\n" +
    "a. Registrar una nueva mascota.\n" +
    "b. Sumar dos números.\n" +
    "c. Buscar una mascota por nombre.\n" +
    "d. Actualizar el estado de salud de una mascota.\n" +
    "e. Eliminar una mascota por nombre.\n" +
    "f. Salir\n" +
    "Elige una opción:"
  );

    switch (opcion) {
        case "a":
          alert("¡Hola! Este es un mensaje.");
          break;
        case "b":
          alert("segundo mensaje")
          break;
        case "c":
          alert("tercero mensaje")
          break;
        case "d":
          alert("cuarto mensaje")
          break;
        case "e":
          alert("quinto mensaje")
          break;
        case "f":
          alert("Saliendo del menú...");
          break;
        default:
          alert("Opción no válida, intenta de nuevo.");
  }
} while (opcion !== "f");

console.log("Programa terminado.");


// let mascotas = {
//     nombre: "miau",
//     especie: ["perro", "gato", "tortuga"],
//     edad: 12,
//     peso: "12kg",
//     estadoSalud: ["Sano", "Enfermo", "En tratamiento" ]
// }