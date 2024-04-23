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
        Password : "89CACC625AE22F9E4424B00435152F919A6F",
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

function verificarCampos() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

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
function verificarEmail() {
    const expRegular = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    if (!email.value.match(expRegular)) {
        email.classList.add('error');
        email.parentElement.classList.add('error');
    } else {
        email.classList.remove('error');
        email.parentElement.classList.remove('error');
    }
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    verificarCampos();
    // enviarEmail();
} )