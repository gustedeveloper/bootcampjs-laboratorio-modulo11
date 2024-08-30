export const obtenerInput = () => {
  let texto = "";
  const textoInput = document.querySelector(".texto-html");
  if (textoInput && textoInput instanceof HTMLTextAreaElement) {
    texto = textoInput.value;
  }
  return texto;
};

export const extraerEnlacesImagenes = (texto: string) => {
  let urlsImagenes = [];
  const patron = /<img[^>]*src="([^"]*)"[^>]*>/g;
  let coincidencia;
  while ((coincidencia = patron.exec(texto)) !== null) {
    urlsImagenes.push(coincidencia[1]);
  }
  return urlsImagenes;
};
