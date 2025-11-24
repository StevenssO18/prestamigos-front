function animarPanel(id) {
  const panel = document.getElementById(id);
  panel.style.opacity = 0;
  panel.style.transform = "translateY(20px)";
  setTimeout(() => {
    panel.style.transition = "0.5s ease";
    panel.style.opacity = 1;
    panel.style.transform = "translateY(0)";
  }, 20);
}

function mostrarRegistro() {
  document.getElementById("login").classList.add("oculto");
  document.getElementById("registro").classList.remove("oculto");
  animarPanel("registro");
}

function mostrarLogin() {
  document.getElementById("registro").classList.add("oculto");
  document.getElementById("login").classList.remove("oculto");
  animarPanel("login");
}

function login() {
  alert(" Inicio de sesión simulado. Conectarás el backend luego.");
}

function registrar() {
  alert(" Registro simulado. Puedes conectar API más adelante.");
}
