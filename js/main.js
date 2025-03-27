 import {addPets} from "./registro.js";


 let opcion;
 do {
     opcion = prompt(
     "Bienvenidos a la veterianaria:)\n"+
     "Menú:\n" +
     "a. Registrar una nueva mascota.\n" +
     "b. Listar todas las mascotas registradas.\n" +
     "c. Buscar una mascota por nombre.\n" +
     "d. Actualizar el estado de salud de una mascota.\n" +
     "e. Eliminar una mascota por nombre.\n" +
     "f. Salir\n" +
     "Elige una opción:"
   );

     switch (opcion) {
         case "a":
           addPets()
           break;
         case "b":
           alert("b. Listar todas las mascotas registradas.")
           break;
         case "c":
           alert("c. Buscar una mascota por nombre.")
           break;
         case "d":
           alert("d. Actualizar el estado de salud de una mascota.")
           break;
         case "e":
           alert("e. Eliminar una mascota por nombre.")
           break;
         case "f":
           alert("f. Salir");
           break;
         default:
           alert("Opción no válida, intenta de nuevo.");
   }
 } while (opcion !== "f");

console.log("Programa terminado.");
