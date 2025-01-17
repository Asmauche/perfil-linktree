const datoCreador = {
    nombre: "Mauricio Cherre",
    descripcion: "Alumno actual de Enter Tech School"
};

function agregarInformacionCreador() {

    const containerIncormacionCreador = document.getElementById('informacion-creador');
    
    const nombreElemento = document.createElement('h1');
    nombreElemento.textContent = datoCreador.nombre;

    const descripcionElemento = document.createElement('p');
    descripcionElemento.textContent = datoCreador.descripcion;

    containerIncormacionCreador.appendChild(nombreElemento);
    containerIncormacionCreador.appendChild(descripcionElemento);
}

// Ejecutar la función cuando el documento esté cargado
document.addEventListener('DOMContentLoaded', agregarInformacionCreador);
