// Verificando o .collapse ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
    let toggler = document.querySelector('.navbar-toggler');
    if (toggler && !toggler.classList.contains('collapsed')) {
        toggler.classList.add('collapsed');
    }
});

// Verificação de qual página esta ativa
document.addEventListener("DOMContentLoaded", function () {
    let paginaAtiva = window.location.pathname.split("/").pop();
    let navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function(link) {
        if (link.getAttribute('href') === paginaAtiva) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
