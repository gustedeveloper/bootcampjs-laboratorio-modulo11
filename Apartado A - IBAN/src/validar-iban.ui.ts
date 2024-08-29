import { encontrarBanco } from "./validar-iban.helper";
import { InfoBanco } from "./validar-iban.model";

const bancoCodigo = document.querySelector(".codigo-banco");
const sucursalCodigo = document.querySelector(".codigo-sucursal");
const digitoControl = document.querySelector(".digito-control");
const numeroCuenta = document.querySelector(".numero-cuenta");

const establecerBanco = (codigoDeBanco: string): void => {
  if (bancoCodigo && bancoCodigo instanceof HTMLParagraphElement) {
    const banco = encontrarBanco(codigoDeBanco);
    bancoCodigo.innerText = `Banco: ${banco}`;
  }
};

const establecerSucursal = (codigoDeSucursal: string): void => {
  if (sucursalCodigo && sucursalCodigo instanceof HTMLParagraphElement) {
    sucursalCodigo.innerText = `Código de sucursal: ${codigoDeSucursal}`;
  }
};

const establecerDigitoControl = (digitoDeControl: string): void => {
  if (digitoControl && digitoControl instanceof HTMLParagraphElement) {
    digitoControl.innerText = `Dígito de control: ${digitoDeControl}`;
  }
};

const establecerNumeroCuenta = (numeroDeCuenta: string): void => {
  if (numeroCuenta && numeroCuenta instanceof HTMLParagraphElement) {
    numeroCuenta.innerText = `Número de cuenta: ${numeroDeCuenta}`;
  }
};

export const establecerDatosBanco = (infoBanco: InfoBanco): void => {
  establecerBanco(infoBanco.codigoDeBanco);
  establecerSucursal(infoBanco.codigoDeSucursal);
  establecerDigitoControl(infoBanco.digitoDeControl);
  establecerNumeroCuenta(infoBanco.numeroDeCuenta);
};
