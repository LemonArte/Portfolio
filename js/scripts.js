/*INICIALIZACIÓN DEFENSIVA DE MODALES*/

document.addEventListener('DOMContentLoaded', () => {

    /* Inicializar explícitamente todos los modales del portfolio */
    document.querySelectorAll('.modal').forEach(modalEl => {
        new bootstrap.Modal(modalEl, {
            backdrop: true,
            keyboard: true,
            focus:    true
        });
    });

    /* Vincular manualmente los botones overlay por si la Data API falla */
    document.querySelectorAll('[data-bs-toggle="modal"]').forEach(boton => {
        boton.addEventListener('click', (e) => {
            e.stopPropagation(); /* evita que el hover del card interfiera */
            const targetId = boton.getAttribute('data-bs-target');
            const modalEl  = document.querySelector(targetId);
            if (modalEl) {
                bootstrap.Modal.getOrCreateInstance(modalEl).show();
            }
        });
    });

});


/*1. NAVBAR — Fondo sólido al hacer scroll*/
const navbarPrincipal = document.getElementById('navbar-principal');

window.addEventListener('scroll', () => {
    navbarPrincipal.classList.toggle('navbar-scrolled', window.scrollY > 50);
}, { passive: true }); /* passive:true mejora rendimiento en móvil */


/*2. NAVBAR — Cerrar menú móvil al pulsar un enlace*/

const menuNavColapsable = document.getElementById('menu-navegacion');

/* getOrCreateInstance: reutiliza la instancia Bootstrap si ya existe.
   { toggle: false } → NO abrir/cerrar al crear la instancia */
const instanciaColapso = bootstrap.Collapse.getOrCreateInstance(
    menuNavColapsable,
    { toggle: false }
);

document.querySelectorAll('.enlace-nav').forEach(enlace => {
    enlace.addEventListener('click', () => {
        if (menuNavColapsable.classList.contains('show')) {
            instanciaColapso.hide();
        }
    });
});


/*3. NAVBAR — Enlace activo según sección visible */

const seccionesObservadas = document.querySelectorAll('section[id]');

const observadorSeccionesActivas = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            const idSeccion    = entrada.target.getAttribute('id');
            const enlaceActivo = document.querySelector(
                `.enlace-nav[href="#${idSeccion}"]`
            );
            document.querySelectorAll('.enlace-nav')
                    .forEach(e => e.classList.remove('active'));
            if (enlaceActivo) enlaceActivo.classList.add('active');
        }
    });
}, { threshold: 0.35 });

seccionesObservadas.forEach(sec => observadorSeccionesActivas.observe(sec));


/*4. FOOTER — Año actual automático*/

document.getElementById('anio-actual').textContent = new Date().getFullYear();


/*5. ANIMACIONES — Fade-in al entrar en pantalla*/

const elementosConAnimacion = document.querySelectorAll('.animacion-entrada');

/* Contador para escalonar la aparición en grupos */
let contadorLote = 0;

const observadorAnimacion = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            const retraso = contadorLote * 80; /* 80ms entre cada elemento */
            contadorLote++;
            setTimeout(() => {
                entrada.target.classList.add('visible');
                setTimeout(() => { contadorLote = 0; }, 600);
            }, retraso);
            observadorAnimacion.unobserve(entrada.target); /* deja de observar */
        }
    });
}, {
    threshold: 0,
    rootMargin: '0px'
});

elementosConAnimacion.forEach(el => observadorAnimacion.observe(el));


/*6. FALLBACK — Seguridad si el Observer no dispara
   Si tras 1.5s algún elemento sigue con opacity:0
   (scroll rápido, bug del navegador, conexión lenta),
   se hace visible igualmente. */

window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelectorAll('.animacion-entrada:not(.visible)')
            .forEach((el, i) => {
                setTimeout(() => el.classList.add('visible'), i * 60);
            });
    }, 1500);
});


/*7. FORMULARIO — Validación Bootstrap*/

const formularioContacto = document.getElementById('formulario-contacto');
const alertaExito        = document.getElementById('alerta-exito');
const alertaError        = document.getElementById('alerta-error');

formularioContacto.addEventListener('submit', (evento) => {
    evento.preventDefault();
    evento.stopPropagation();

    alertaExito.classList.add('d-none');
    alertaError.classList.add('d-none');

    if (formularioContacto.checkValidity()) {
        alertaExito.classList.remove('d-none');
        formularioContacto.reset();
        formularioContacto.classList.remove('was-validated');
        alertaExito.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    } else {
        formularioContacto.classList.add('was-validated');
        const primerError = formularioContacto.querySelector(':invalid');
        if (primerError) {
            primerError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
});


/*8. SMOOTH SCROLL — Navegación suave entre secciones
   Compensa la altura del navbar fijo para que el
   contenido no quede tapado al navegar a un ancla. */

document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        const destino = document.querySelector(enlace.getAttribute('href'));
        if (destino) {
            e.preventDefault();
            const alturaNavbar = navbarPrincipal.offsetHeight;
            const posicion = destino.getBoundingClientRect().top
                           + window.scrollY
                           - alturaNavbar;
            window.scrollTo({ top: posicion, behavior: 'smooth' });
        }
    });
});