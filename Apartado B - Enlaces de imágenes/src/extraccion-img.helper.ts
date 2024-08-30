export const obtenerInput = () => {
  let texto = "";
  const textoInput = document.querySelector(".texto-html");
  if (textoInput && textoInput instanceof HTMLTextAreaElement) {
    texto = textoInput.value;
  }
  return texto;
};
