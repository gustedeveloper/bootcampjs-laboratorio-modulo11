export const obtenerInput = (): string => {
  let texto = "";
  const textoInput = document.querySelector(".texto-html");
  if (textoInput && textoInput instanceof HTMLTextAreaElement) {
    texto = textoInput.value;
  }
  return texto;
};

export const extraerEnlacesImagenes = (texto: string): string[] => {
  let urlsImagenes = [];
  const patron = /<img[^>]*src="([^"]*)"[^>]*>/g;
  let coincidencia;
  while ((coincidencia = patron.exec(texto)) !== null) {
    urlsImagenes.push(coincidencia[1]);
  }
  return urlsImagenes;
};

const crearContenedorImagen = (url: string): HTMLDivElement => {
  const divImagen = document.createElement("div");
  divImagen.classList.add("contenedor-imagen");
  divImagen.innerHTML = `
    <img src="${url}">
    `;
  return divImagen;
};

export const pintarImagenes = (enlaces: string[]): void => {
  const contenedorImagenes = document.querySelector(".contenedor-imagenes");

  if (contenedorImagenes && contenedorImagenes instanceof HTMLDivElement) {
    enlaces.forEach((enlace) => {
      const contenedorImagen = crearContenedorImagen(enlace);
      contenedorImagenes.appendChild(contenedorImagen);
    });
  } else {
    throw new Error("No se ha encontrado el contenedor de imágenes");
  }
};
