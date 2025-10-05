const inputSeleccion = document.querySelectorAll('#PlateGE button');

inputSeleccion.forEach((input) => {
	input.addEventListener('click', ()=>{
        console.log(input.id)
    });
});


/*function cambio(){
    
    if(document.getElementById("imagenplatea").style.display == 'none'){
        document.getElementById("imagenplatea").style.display = '';
        document.getElementById("platea").innerHTML = "Ocultar Ejemplo"
    } else {
        document.getElementById("imagenplatea").style.display = 'none';
        document.getElementById("platea").innerHTML = "Ver Ejemplo"
    };
};*/

function cambio(){

    console.log(document.querySelector(`#PlateGE img`).classList)

    if(document.querySelector(`#PlateGE img`).classList == 'inactivo'){
        document.querySelector(`#PlateGE .inactivo`).classList.add('activo');
        document.getElementById("platea").innerHTML = "Ocultar Ejemplo"
    } else {
        document.querySelector(`#PlateGE .inactivo`).classList.remove('activo');
        document.getElementById("platea").innerHTML = "Ver Ejemplo"
    };
};