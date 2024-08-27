const mensajeFormato = document.querySelector(".bien-formado");

export const obtenerInput = () => {
  let textoInput = "";
  const inputValidar = document.getElementById("validar");
  if (inputValidar && inputValidar instanceof HTMLInputElement) {
    textoInput = inputValidar.value;
  }
  return textoInput;
};

export const comprobarFormatoIBAN = (iban: string) => {
  const regex =
    /^([A-Z]{2})(\d{2})[- ]?(\d{4})[- ]?(\d{4})[- ]?(\d{2})[- ]?(\d{10})$/;

  const formatoValido = iban.match(regex);

  if (mensajeFormato && mensajeFormato instanceof HTMLParagraphElement) {
    if (!formatoValido) {
      mensajeFormato.innerText = "El IBAN no está bien formado";
      throw new Error("Formato de IBAN no válido");
    } else {
      mensajeFormato.innerText = "El IBAN está bien formado";
    }
  }
};
