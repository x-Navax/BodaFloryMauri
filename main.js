// fecha límite
var fechaLimite = new Date("April 11, 2026 21:00:00").getTime();

// actualizar el contador cada un segundo
var intervalo = setInterval(function () {
  // obtener la fecha actual
  var fechaActual = new Date().getTime();

  // calcular la diferencia entre la fecha límite y la fecha actual
  var tiempoRestante = fechaLimite - fechaActual;

  // si se ha alcanzado la fecha límite, detener el intervalo y mostrar un mensaje
  if (tiempoRestante <= 0) {
    clearInterval(intervalo);
    document.getElementById("mensaje").innerHTML = "¡Llegó el día!";
    return;
  }

  // cálculos para obtener los días, horas, minutos y segundos restantes
  var dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
  var horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

  // mostrar el contador en el HTML
  document.getElementById("dias").innerHTML = dias;
  document.getElementById("horas").innerHTML = horas;
  document.getElementById("minutos").innerHTML = minutos;
  document.getElementById("segundos").innerHTML = segundos;
}, 1000);

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("copyAlias");
  const alias = "milero.mp"; // ESCRIBÍ TU ALIAS ACÁ

  boton.addEventListener("click", () => {
    navigator.clipboard.writeText(alias).then(() => {
      boton.textContent = "ALIAS COPIADO ✔";
      
      setTimeout(() => {
        boton.textContent = "COPIAR ALIAS";
      }, 2000);
    }).catch(() => {
      alert("No se pudo copiar el alias");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const flecha = document.getElementById("scrollArrow");
  let ocultada = false;

  function ocultarFlecha() {
    if (!ocultada && (window.scrollY > 0 || document.documentElement.scrollTop > 0)) {
      flecha.classList.add("hide");
      ocultada = true;
    }
  }

  // Scroll normal
  window.addEventListener("scroll", ocultarFlecha, { passive: true });

  // Touch (iOS / Android)
  window.addEventListener("touchmove", ocultarFlecha, { passive: true });
});



document.addEventListener("DOMContentLoaded", () => {
  const mensaje = `
Hola! 👋
Queríamos confirmar tu asistencia a la boda 💍

✅ ¿Asistís a la boda? (Sí / No)
👥 ¿Cuántas personas asisten?
🍽️ ¿Tenés alguna restricción alimenticia?
`;

  const botones = document.querySelectorAll(".btn-wsp");

  botones.forEach((boton) => {
    const phone = boton.dataset.phone;
    const mensajeCodificado = encodeURIComponent(mensaje);

    boton.href = `https://api.whatsapp.com/send?phone=${phone}&text=${mensajeCodificado}`;
  });
});