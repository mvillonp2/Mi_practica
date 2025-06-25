document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const submitBtn = document.getElementById("submitBtn");
  const btnText = document.getElementById("btnText");
  const loading = document.getElementById("loading");
  const successMessage = document.getElementById("successMessage");
  const errorMessage = document.getElementById("errorMessage");

  // Ocultar mensajes previos
  successMessage.style.display = "none";
  errorMessage.style.display = "none";

  // Mostrar estado de carga
  submitBtn.disabled = true;
  btnText.style.display = "none";
  loading.style.display = "flex";

  // Simular envío de formulario
  setTimeout(() => {
    // Simular éxito (90% de las veces)
    const success = Math.random() > 0.1;

    if (success) {
      successMessage.style.display = "block";
      document.getElementById("contactForm").reset();

      // Scroll suave al mensaje de éxito
      successMessage.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else {
      errorMessage.style.display = "block";

      // Scroll suave al mensaje de error
      errorMessage.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }

    // Restaurar botón
    submitBtn.disabled = false;
    btnText.style.display = "block";
    loading.style.display = "none";
  }, 2000);
});