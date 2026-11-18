//CLASES

//clase reserva
class Reserva{
    constructor(nombre, email, actividad, fecha, notificacion){
        this.nombre = nombre;
        this.email = email;
        this.actividad = actividad;
        this.fecha = fecha;
        this.notificacion = notificacion;
    }
}
//clase Gestion
class Gestion{
    constructor(){
        this.lista = this.cargar();
    }

    cargar(){
        let texto = localStorage.getItem("reservas");
        if(texto === null){
            return [];
        }
        return JSON.parse(texto);
    }

    guardar(){
        localStorage.setItem("reservas", JSON.stringify(this.lista));
    }

    annadir(reserva){
        this.lista.push(reserva);
        this.guardar();
    }

    existe(nombre){
        this.lista.some(c => c.nombre === nombre);
    }

    vaciar(){
        this.lista = [];
        this.guardar();
    }
}

//GESTION
let gestion = new Gestion();

//BOTONES
document.getElementById("addBtn").addEventListener('click', annadirReserva);
document.getElementById("clearBtn").addEventListener('click', borrarReserva);
document.getElementById("saveLocalBtn").addEventListener('click', annadirReserva);
document.getElementById("sendBtn").addEventListener('click', enviarServidor);

//VALIDACIONES
function validarNombre(valor){
    let expreg = /^[A-ZÁÉÍÓÚÑa-záéíóúñ ]+$/;
    if(!expreg.test(valor)){
        throw new Error("Error: Formato del nombre incorrecto (Ej: Ana Pérez)");
    }
}

function validarEmail(valor){
    let expreg = /^[A-ZÑa-zñ0-9]+@[a-z]+\.[a-z]+$/;
    if(!expreg.test(valor)){
        throw new Error("Error: Formato del email incorrecto (Ej: ejemplo@correo.com)");
    }
}

//FUNCIONES

function annadirReserva(){
    try{
        //Recogida de datos del documento + confirmacion de que esta rellenos
        let nombre = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let actividad = document.getElementById("activity").value;
            //asegurarse de que ha escogido algo y no el mensaje de -- Selecciona --
            if(actividad === ""){
                throw new Error("ERROR: Debes de seleccionar una actividad");
            }
        let fecha = document.getElementById("date").value;
            //asegurarse de que ha escogido algo y no el mensaje de -- Selecciona --
            if(fecha === ""){
                throw new Error("ERROR: Debes de seleccionar una fecha");
            }
        let notificacion = document.querySelector("input[name=notify]:checked");
        //Validaciones del formato 
        validarNombre(nombre);
        validarEmail(email);

        //nueva reserva
        let nuevaReserva = new Reserva(nombre, email, actividad, fecha, notificacion);

        gestion.annadir(nuevaReserva);
        mostrarTabla();
        gestion.cargar();
    }catch(e){
        alert(e.message);
    }
}

//llamada a funcion mostrarTabla()
mostrarTabla();

function borrarReserva(){
    gestion.vaciar();
    mostrarTabla();

}

async function enviarServidor(){
    try{
        // si no hay datos para poder enviar
        if(gestion.lista.length === 0){
            throw new Error("ERROR: No hay datos para enviar al servidor.");
        }
        let response = await fetch("URL", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(gestion.lista)
        });

        // si algo ha fallado
        if(!response.ok){
            throw new Error("Los datos no se han podido enviar al servidor.");
        }

        let data = await response.json();

        alert("Datos enviados al servidor con exito.");

    }catch(e){
        alert(e.message);
    }

}

//FUNCION EXTRA (mostrar tabla)

function mostrarTabla(){
    let documento = document.querySelector("#reservationsTable tbody");
    documento.innerHTML = "";

        let mensaje = document.getElementById("mensaje");
        if(gestion.lista.length === 0){
            mensaje.textContent = "No hay reservas.";
        }else{
            mensaje.textContent = "";
        }

    gestion.lista.forEach(c => {
        documento.innerHTML += `<tr> <td>${c.nombre}</td> <td>${c.email}</td> <td>${c.actividad}</td> <td>${c.fecha}</td> <td>${c.notificacion}</td> </tr>`;
    });

}