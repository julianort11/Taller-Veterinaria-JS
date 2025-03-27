let pets= []

export function addPets() {
    let Nombre = prompt("nombre de la mascota: ");
    let Especie = prompt("Ingrese la especie de la mascota: ");
    let Edad = prompt("Ingrese la edad de la mascota: ");
    let Peso = prompt("Ingrese el peso de la mascota: ");
    let Estado = prompt("Ingrese el estado de su mascota:\n"+"Sano\n"+"Enfermo\n"+"En tratamiento");

    const newPet ={
        Nombre : Nombre,
        Especie : Especie,
        Edad : Edad,
        Peso : Peso,
        Estado : {Sano: true,
            Enfermo: false,
            Tratamiento: false
        }
    };

    pets.push(newPet);
    alert("La mascota resgistrada con exito")
}