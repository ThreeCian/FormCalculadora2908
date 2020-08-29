const Aname = document.getElementById('alertname')
const Alast = document.getElementById('alertlast')
const Aemail = document.getElementById('alertmail')
const Apsswrd = document.getElementById('alertPwrd')
const Aage = document.getElementById('alertage')
const ATyC = document.getElementById('alertTyC')


function ValidarFormulario(e) {

    e.preventDefault()

    let Iname = document.getElementById('name').value

    if (Iname == '') {

        Aname.innerText = "Ingresa tu nombre"
        swal("¡Oh Oh!", "Te faltan campos por llenar", "error");


    }
    let Ilast = document.getElementById('lastname').value

    if (Ilast == '') {

        Alast.innerText = "Ingresa tu apellido"
        swal("¡Oh Oh!", "Te faltan campos por llenar", "error");

    }
    let Iemail = document.getElementById('email').value


    if (Iemail == '') {

        Aemail.innerText = "Ingresa tu correo"
        swal("¡Oh Oh!", "Te faltan campos por llenar", "error");


    }

    let Ipsswrd = document.getElementById('password').value

    if (Ipsswrd == '') {

        Apsswrd.innerText = "Ingresa tu contraseña"
        swal("¡Oh Oh!", "Te faltan campos por llenar", "error");
    }
    let Iage = document.getElementById('age').value

    if (Iage == '') {

        Aage.innerText = "Ingrese tu edad"
        swal("¡Oh Oh!", "Te faltan campos por llenar", "error");

    }
    let TyC = document.getElementById('TyC').checked

    if (TyC == false) {

        ATyC.innerText = "Acepta terminos y condiciones"
        swal("¡Oh Oh!", "Te faltan campos por llenar", "error");

    }
    if (Iname != '' && Ilast != '' && Iemail != '' && Ipsswrd != '' && Iage != '' && TyC != false) {
        swal("¡Muy bien!", "Registro exitoso", "success");

        setTimeout(() => {
            window.location = './calculadora.html'
        }, 2000)
    }
}