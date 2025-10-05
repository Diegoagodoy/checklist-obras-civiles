/* VALIDACION DE DATOS PERSONALES */
const formulario = document.getElementById('formulario');
const inputsInicio = document.querySelectorAll('#inicio input');
const inputInterferencia = document.querySelectorAll('#radiointerferencia,#radiointerferencia1');
const inputSeleccion = document.querySelectorAll('#seleccion input');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ0-9\s\_\ \.]{5,54}$/, // Letras, numeros, guion y guion_bajo /^[a-zA-Z0-9\_\-]{4,53}$/, 
	obra: /^[a-zA-ZÀ-ÿ0-9\s\_\-\ \.]{5,54}$/, // Letras, numeros, guion y guion_bajo /^[a-zA-Z0-9\_\-]{4,53}$/, 
	//nombre: /^[a-zA-ZÀ-ÿ\s\.]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    fecha:/^((0[1-9]|1[012]|[1-9])[- /.](0[1-9]|[12][0-9]|3[01]|[1-9])[- /.](19|20)\d\d|(19|20)\d\d[- /.](0[1-9]|1[012]|[1-9])[- /.](0[1-9]|[12][0-9]|3[01]|[1-9]))$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
}

const campos = {

    nombreObra: false,
    direccion: false,
    nombreSolicitante: false,
    telefonoSolicitante: false,
    nombreReferente: false,
    telefonoReferente: false,
    PEPImputacion: false,
    fechaNecesidad: false,
    interferencias:false,
    nombreResponsable: false,
    telefonoResponsable: false,
    liberacion: false,
    fechaLiberacion: false,
    seleccion:false,
    tareas:false,
}

const validarFormulario = (e) => {

    switch (e.target.name) {
		case "nombreObra":
			validarCampo(expresiones.nombre, e.target, 'nombreObra');
		break;
		case "direccion":
			validarCampo(expresiones.obra, e.target, 'direccion');
		break;
		case "nombreSolicitante":
			validarCampo(expresiones.obra, e.target, 'nombreSolicitante');
		break;
		case "telefonoSolicitante":
			validarSubCampos(expresiones.obra, e.target, 'nombreSolicitante');
		break;
		case "nombreReferente":
			validarCampo(expresiones.obra, e.target, 'nombreReferente');
		break;
		case "telefonoReferente":
			validarSubCampos(expresiones.correo, e.target, 'nombreReferente');
		break;
        case "PEPImputacion":
			validarCampo(expresiones.obra, e.target, 'PEPImputacion');
		break;
        case "fechaNecesidad":
			validarCampo(expresiones.fecha, e.target, 'fechaNecesidad');
		break;
        case "nombreResponsable":
			validarCampo(expresiones.obra, e.target, 'nombreResponsable');
		break;
		case "telefonoResponsable":
			validarSubCampos(expresiones.correo, e.target, 'nombreResponsable');
		break;
        case "tipoInterferencia":
			validarCampo(expresiones.obra, e.target, 'liberacion');
		break;
        case "fechaLiberacion":
			validarSubCampos(expresiones.fecha, e.target, 'liberacion');
		break;
	}
}

//validarCampo(expresiones.obra, document.getElementById("inputTipoInterferencia"), 'liberacion');


/* VALIDACION DE DATOS PERSONALES */
const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		/*document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');*/
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		/*document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');*/
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}


const validarSubCampos = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		/*document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');*/
		document.querySelector(`#grupo__${campo} .formulario__input-error1 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error1 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error1`).classList.remove('formulario__input-error-activo');
		if(campo == 'nombreSolicitante'){
            campos.telefonoSolicitante = true;
        }
        if(campo == 'nombreReferente'){
            campos.telefonoReferente = true;
        }
        if(campo == 'nombreResponsable'){
            campos.telefonoResponsable = true;
        };
        if(campo == 'liberacion'){
            campos.fechaLiberacion = true;
        };
    } else {
		/*document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');*/
		document.querySelector(`#grupo__${campo} .formulario__input-error1 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error1 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error1`).classList.add('formulario__input-error-activo');
		
        if(campo == 'nombreSolicitante'){
            campos.telefonoSolicitante = false;
        }
        if(campo == 'nombreReferente'){
            campos.telefonoReferente = false;
        };
        if(campo == 'nombreResponsable'){
            campos.telefonoResponsable = false;
        };
        if(campo == 'liberacion'){
            campos.fechaLiberacion = false;
        };
	}
}

/* VALIDACION INTERFERENCIA*/
const validarRadio = (e) => {
    
	const input1 = document.getElementById('radiointerferencia');
	const input2 = document.getElementById('radiointerferencia1');

	if(input1.checked || input2.checked){
		
		document.querySelector(`#grupo__fechaNecesidad .formulario__input-error1 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__fechaNecesidad .formulario__input-error1 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__fechaNecesidad .formulario__input-error1`).classList.remove('formulario__input-error-activo');
		campos.interferencias = true;
	} else {
		
		document.querySelector(`#grupo__fechaNecesidad .formulario__input-error1 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__fechaNecesidad .formulario__input-error1 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__fechaNecesidad .formulario__input-error1`).classList.add('formulario__input-error-activo');
		campos.interferencias = false;
	};
};

/* VALIDACION SELECCION DE OBRA */
const validarSeleccion =(e) =>{
    
    for(i=0;i<inputSeleccion.length;i++){
        
        if(inputSeleccion[i].checked){
          
            document.querySelector(`#seleccion .formulario__input-error i`).classList.add('fa-check-circle');
            document.querySelector(`#seleccion .formulario__input-error i`).classList.remove('fa-times-circle');
            document.querySelector(`#seleccion  .formulario__input-error`).classList.remove('formulario__input-error-activo');
            campos.seleccion = true;
            break;
            
        } else {

            document.querySelector(`#seleccion  .formulario__input-error i`).classList.add('fa-times-circle');
            document.querySelector(`#seleccion  .formulario__input-error i`).classList.remove('fa-check-circle');
            document.querySelector(`#seleccion  .formulario__input-error`).classList.add('formulario__input-error-activo');
            campos.seleccion = false;
        };
    };
    
};


inputsInicio.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

inputInterferencia.forEach((input) => {
	input.addEventListener('click', validarRadio);
    
});

inputSeleccion.forEach((input) => {
	input.addEventListener('click', validarSeleccion);
    
});

const validarTareas = (radio) =>{

    var contando = radios.length/2
    var result = 0

    if(radio.target.checked && radio.target.value != "on"){
        document.querySelector(`#${radio.target.name}`).classList.add('textotachado');
    } else{
        document.querySelector(`#${radio.target.name}`).classList.remove('textotachado');
    };

    for(i=0;i<obra.length;i++){
        if(document.getElementById(obra[i]).checked){
            var resultado = listaObra[i]
            break
        }     
    };

    for(i=0;i<radios.length;i++){
        if(radios[i].checked){
            result=result+1
        };
    };
    
    if(contando == result){
        document.querySelector(`#${resultado} .formulario__input-error i`).classList.add('fa-check-circle');
        document.querySelector(`#${resultado} .formulario__input-error i`).classList.remove('fa-times-circle');
        document.querySelector(`#${resultado} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos.tareas = true;
    } else {
        document.querySelector(`#${resultado} .formulario__input-error i`).classList.add('fa-times-circle');
        document.querySelector(`#${resultado} .formulario__input-error i`).classList.remove('fa-check-circle');
        document.querySelector(`#${resultado} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos.tareas = false;
    };



    
};

/* FECHA ACTUAL*/
var fecha = new Date();
var dia = fecha.getDate();
var mes = fecha.getMonth()+1;
var ano = fecha.getFullYear();
$fecha = document.getElementById("fecha")

$fecha.innerHTML= dia +"/"+mes+"/"+ano

document.getElementById("inputFechaNecesidad").setAttribute("min", ano +"-"+ mes +"-"+ dia)
document.getElementById("inputFechaLiberacion").setAttribute("min", ano +"-"+ mes +"-"+ dia)

/* SELECCION DE INTERFERENCIAS */

function verificarRI(){
    
    if(document.getElementById("radiointerferencia").checked){
        document.getElementById("grupo__nombreResponsable").style.display = '';
        document.getElementById("grupo__liberacion").style.display = '';
        document.getElementById("grupo__liberacionArear").style.display = '';
    } else {
        document.getElementById("grupo__nombreResponsable").style.display = 'none';
        document.getElementById("grupo__liberacion").style.display = 'none';
        document.getElementById("grupo__liberacionArear").style.display = 'none';
    };
};



/* SELECCION DE OBRAS */
obra = ["obra1","obra2","obra3","obra4","obra5","obra6","obra7","obra8","obra9","obra10","obra11"];
listaObra = ["listaObra1","listaObra2","listaObra3","listaObra4","listaObra5","listaObra6","listaObra7","listaObra8","listaObra9","listaObra10","listaObra11"]

function verificarRB(){
    for(i=0;i<obra.length;i++){
        if(document.getElementById(obra[i]).checked){
            document.getElementById(listaObra[i]).style.display = 'block';

            radios = document.querySelectorAll(`#${listaObra[i]} input`)
            
            radios.forEach((radio) => {
                radio.addEventListener("click", validarTareas);
            });
        } else {
            document.getElementById(listaObra[i]).style.display = 'none';
        };
    };
};

/* SELECCION DE AREA OBSERVACIONES */
textObra = ["otro1","otro2","otro3","otro4","otro5","otro6","otro7","otro8","otro9","otro10"]
textTarea = ["texareaobra1","texareaobra2","texareaobra3","texareaobra4","texareaobra5","texareaobra6","texareaobra7","texareaobra8","texareaobra9","texareaobra10"]
function texAreaObra(){
    for(i=0;i<textObra.length;i++){
        if(document.getElementById(textObra[i]).checked){
            document.getElementById(textTarea[i]).style.display = 'contents';
        } else {
            document.getElementById(textTarea[i]).style.display = 'none';
        };
    };
};




//document.getElementById("inputNombreReferente").focus();


/* VALIDACION TOTAL E IMPRESION PDF*/

/* IMPRESION EN PDF */
document.addEventListener("DOMContentLoaded",()=>{
    const $boton = document.getElementById("PDF");
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        
        validarCampo(expresiones.nombre, document.getElementById("inputNombreObra"), 'nombreObra')
      
        validarCampo(expresiones.obra,document.getElementById("inputDireccion"), 'direccion')
        
        validarCampo(expresiones.obra, document.getElementById("inputNombreSolicitante"), 'nombreSolicitante')
        
        validarSubCampos(expresiones.obra, document.getElementById("inputTelefonoSolicitante"), 'nombreSolicitante')
        
        validarCampo(expresiones.obra, document.getElementById("inputNombreReferente"), 'nombreReferente')
        
        validarSubCampos(expresiones.correo, document.getElementById("inputTelefonoReferente"), 'nombreReferente')
        
        validarCampo(expresiones.obra, document.getElementById("inputPEPImputacion"), 'PEPImputacion');
        
        validarCampo(expresiones.fecha, document.getElementById("inputFechaNecesidad"), 'fechaNecesidad');
        
        validarRadio();

        validarSeleccion();




        if(document.getElementById("radiointerferencia").checked){
            validarCampo(expresiones.obra, document.getElementById("inputNombreResponsable"), 'nombreResponsable');
		    validarSubCampos(expresiones.correo,document.getElementById("inputTelefonoResponsable"), 'nombreResponsable');
		    validarCampo(expresiones.obra, document.getElementById("inputTipoInterferencia"), 'liberacion');
		    validarSubCampos(expresiones.fecha, document.getElementById("inputFechaLiberacion"),'liberacion');
            
        } else {
            campos.nombreResponsable = true;
            campos.telefonoResponsable = true;
            campos.liberacion = true;
            campos.fechaLiberacion = true;
        };

        if(document.getElementById("obra11").checked){
            campos.tareas = true;
        }

        var fechanececidad = document.getElementById("inputFechaNecesidad");
        //console.log(document.getElementById("inputFechaNecesidad").value)
    
        if(campos.nombreObra == true && 
            campos.direccion == true && 
            campos.nombreSolicitante == true && 
            campos.telefonoSolicitante == true && 
            campos.nombreReferente == true && 
            campos.telefonoReferente == true && 
            campos.PEPImputacion == true && 
            campos.fechaNecesidad == true && 
            campos.interferencias == true &&
            campos.seleccion == true &&
            campos.tareas == true &&
            campos.nombreResponsable ==true &&
            campos.telefonoResponsable == true &&
            campos.liberacion == true &&
            campos.fechaLiberacion == true){
    
            
            const $elementoParaConvertir = document.getElementById("conteiner");

            let nombrepdf = document.getElementById("inputNombreObra").value.replace(/ /g, "_")
            console.log(nombrepdf)

            html2pdf()
            .set({
                margin:1,
               // `#${resultado} .formulario__input-error i`
               //document.getElementById("inputFechaLiberacion").setAttribute("min", ano +"-"+ mes +"-"+ dia)
               //"inputNombreObra"
                filename:`${document.getElementById("inputFechaNecesidad").value}` + " - " + `${nombrepdf}` + ".pdf",
                image:{
                type: "jpeg",
                quality: 0.98
                },
                html2canvas:{
                scale: 3,
                //logging: true,
                //dpi: 192,
                letterRendering: true,
                },
                jsPDF:{
                unit:"mm",
                format: [210, 330],
                orientation:"portrait"
                }
            })
            .from($elementoParaConvertir)
            .save()
            .catch(err=> console.log(err))
            .finally()
            .then(()=>{
                /*setTimeout(() => {
                alert("Solicitud Creada, desde ya gracias!\n    EOC - Equipo de Obras Civiles")
                }, 1000);*/

                document.getElementById("nombreDocumentoPDF").innerHTML = `${document.getElementById("inputFechaNecesidad").value}` + " - " + `${nombrepdf}` + ".pdf";
                over.classList.add('active');
                document.getElementById("impresionOk").classList.add('active');
                console.log("se esta imprimendo")

            })
            
        }else{
           
            over.classList.add('active');
            document.getElementById("impresionError").classList.add('active');
            console.log("ERROR de IMPRESION")
        };
    
        
    
    
        
    });
});


/*var formulario = document.getElementById("formulario");
var x = formulario.getElementsByTagName("botonreq");

for(i=0 ; i<x.length ; i++){

    if((x[i].required == true) && (x[i].value =="")){
        alert("Ingrese campo requerido");
        x[i].focus();
        return 0;
        
    } else {
        alert("Formulario Enviado")
    };
};*/


/*POPUP*/



const links = document.querySelectorAll('#conteiner a');
const overlay = document.getElementById('overlay');
const over = document.getElementById('over');
btnCerrarPopup = document.querySelectorAll('#overlay a');
botonAceptar = document.querySelectorAll('#overlay button');
/*btnCerrarImpresion = document.querySelector('#btnImp');
btnCerrarErr = document.querySelector('#btnErr');*/


const cerrarPopup = ((e)=>{
    e.preventDefault();
    overlay.classList.remove('active');
    popup.classList.remove('active');
});

const cerrarImp = ((e)=>{
    e.preventDefault();
    document.getElementById("impresionOk").classList.remove('active');
    document.getElementById("impresionError").classList.remove('active');
    over.classList.remove('active');
});


document.querySelector('#btnImp').addEventListener('click', cerrarImp);
document.querySelector('#btnErr').addEventListener('click', cerrarImp);
window.addEventListener('click', e => e.target == over && cerrarImp(e));    


//window.addEventListener('click', e => e.target == over && ccerrarImp(e));

/*btnCerrarErr.forEach((err) => {
	err.addEventListener('click', cerrarImp);
});*/

btnCerrarPopup.forEach((cerrar) => {
	cerrar.addEventListener('click', cerrarPopup);   
});

botonAceptar.forEach((cerrar) => {
    cerrar.addEventListener('click', cerrarPopup);   
});

window.addEventListener('click', e => e.target == overlay && cerrarPopup(e));


const validarLinks = (e) => {

    
    popup = document.getElementById(e.target.name),
    
    document.getElementById(popup.id).style.display = 'block';
    overlay.classList.add('active');
    popup.classList.add('active');

    
};


links.forEach((link) => {
	
    link.addEventListener('click', validarLinks);
});


//window.addEventListener('click', e => console.log(e.target));



