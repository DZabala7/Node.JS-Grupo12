const formulario = document.querySelector('form');
const nombre = document.getElementById('nombre');
const telefono = document.getElementById('telefono');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const consulta = document.getElementById('mensaje')


function enviarEmail() {
    const mensaje = `
    Nombre: ${nombre.value}<br>
    Email: ${email.value}<br>
    Telefono: ${telefono.value}<br>
    Email: ${email.value}<br>
    Asunto: ${asunto.value}<br>
    Consulta: ${consulta.value} 
    `
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "iarajfares@gmail.com",
        Password : "3F287AD6100AE0A3010A05FEEC0C457410C9",
        To : 'iarajfares@gmail.com',
        From : email.value,
        Subject : asunto.value,
        Body : mensaje
    }).then(
        message => {
            if (message == 'OK') {
                Swal.fire({
                    title: "Enviado!",
                    text: "Nos pondremos en contacto con usted a la brevedad. Gracias por su paciencia!",
                    icon: "success"
                }
                );
            }
        }
    );
}
function verificarEmail() {
    const expRegular = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    let emailInvalido = document.querySelector('.requerido.email');
    if (!email.value.match(expRegular)) {
        email.classList.add('error');
        email.parentElement.classList.add('error');

        if (email.value != "") {
            emailInvalido.innerText = 'Ingrese un correo electrónico válido.'
        } else {
            emailInvalido.innerText = '* Correo electronico es obligatorio'
        }
        
    } else {
        email.classList.remove('error');
        email.parentElement.classList.remove('error');
    }
}

function verificarCampos() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            verificarEmail();
        }

        items[1].addEventListener("keyup", () => {
            verificarEmail();
        });

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            } else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        })
    }
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    verificarCampos();
    function sinErrores() {
        return !nombre.classList.contains("error") &&
                !email.classList.contains("error") &&
                !telefono.classList.contains("error") &&
                !asunto.classList.contains("error") &&
                !mensaje.classList.contains("error");
    }
    console.log(sinErrores());
    if (sinErrores()){
        enviarEmail();
        formulario.reset();
        return false
    }
})