let mascotas = [];

function registrarMascota(nombre, especie, estado, callback) {
    setTimeout(function() {
        mascotas.push({ nombre: nombre, especie: especie, estado: estado });
        if (callback) callback();
    }, 2000);
}

function buscarMascota(nombre, callback) {
    setTimeout(function() {
        var mascota = mascotas.find(function(m) {
            return m.nombre === nombre;
        });
        if (callback) callback(mascota);
    }, 1500);
}

function actualizarEstado(nombre, nuevoEstado, callback) {
    setTimeout(function() {
        var mascota = mascotas.find(function(m) {
            return m.nombre === nombre;
        });
        if (mascota) {
            mascota.estado = nuevoEstado;
            console.log("Estado de " + nombre + " actualizado a: " + nuevoEstado);
        } else {
            alert("mascota no encontrada");
        }
        if (callback) callback();
    }, 2500);
}

function menu() {
    var opcion = prompt("1. Registrar una nueva mascota.\n2. Listar todas las mascotas registradas.\n3. Buscar una mascota por nombre.\n4. Actualizar el estado de salud de una mascota.\n5. Eliminar una mascota por nombre.\n6. Salir");
    
    if (opcion === "1") {
        var nombre = prompt("Nombre:");
        var especie = prompt("Especie:");
        var estado = prompt("Estado de salud:");
        registrarMascota(nombre, especie, estado, function() {
            console.log("Registro completado.");
            alert("Mascota registrada: " + nombre);
            menu();
        });
    } else if (opcion === "2") {
        alert(mascotas.map(function(m) {
            return m.nombre + " - " + m.especie + " - " + m.estado;
        }).join("\n") || "No hay mascotas.");
        menu();
    } else if (opcion === "3") {
        var nombre = prompt("Nombre:");
        buscarMascota(nombre, function(mascota) {
            alert(mascota ? (mascota.nombre + " - " + mascota.especie + " - " + mascota.estado) : "No encontrada.");
            menu();
        });
    } else if (opcion === "4") {
        var nombre = prompt("Nombre:");
        var nuevoEstado = prompt("Nuevo estado:");
        actualizarEstado(nombre, nuevoEstado, function() {
            console.log("Actualización completada.");
            menu();
        });
    } else if (opcion === "5") {
        var nombre = prompt("Nombre:");
        mascotas = mascotas.filter(function(m) {
            return m.nombre !== nombre;
        });
        console.log("Mascota " + nombre + " eliminada.");
        menu();
    } else if (opcion !== "6") {
        menu();
    }
}

menu();