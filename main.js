function mostrarMensagem() {
    alert("Enviado");
}

var btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", mostrarMensagem);

$(document).ready(function() {
    $('.navbar-toggler').click(function() {
        $('#navbarToggleContent').toggleClass('show');
    });
});
