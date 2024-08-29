import { electronicFormatIBAN, isValidIBAN } from "ibantools";
import { bancos, InfoBanco } from "./validar-iban.model";
import {
  establecerMensajeFormato,
  establecerMensajeValidez,
} from "./validar-iban.ui";

const patron =
  /^(ES)(\d{2})[- ]?(?<codigoDeBanco>\d{4})[- ]?(?<codigoDeSucursal>\d{4})[- ]?(?<digitoDeControl>\d{2})[- ]?(?<numeroDeCuenta>\d{10})$/;

export const obtenerInput = (): string => {
  let textoInput = "";
  const inputValidar = document.getElementById("validar");
  if (inputValidar && inputValidar instanceof HTMLInputElement) {
    textoInput = inputValidar.value;
  }
  return textoInput;
};

export const comprobarFormatoIBAN = (iban: string): string => {
  const formatoValidoIban = iban.match(patron);
  if (!formatoValidoIban) {
    establecerMensajeFormato(false);
    throw new Error("No se ha introducido un IBAN válido");
  } else {
    establecerMensajeFormato(true);
  }
  return iban;
};

export const unificarIBAN = (iban: string): string => {
  const ibanFormateado = electronicFormatIBAN(iban);
  if (!ibanFormateado) {
    throw new Error("No se ha introducido un IBAN válido");
  }
  return ibanFormateado;
};

export const esIBANValido = (iban: string): string => {
  if (!isValidIBAN(iban)) {
    establecerMensajeValidez(false);
    throw new Error("El IBAN no es válido");
  } else {
    establecerMensajeValidez(true);
  }
  return iban;
};

export const extraccionDatos = (iban: string): InfoBanco => {
  const coincidencia = patron.exec(iban);
  if (coincidencia) {
    const { codigoDeBanco, codigoDeSucursal, digitoDeControl, numeroDeCuenta } =
      coincidencia.groups as any;
    const infoBanco: InfoBanco = {
      codigoDeBanco: codigoDeBanco,
      codigoDeSucursal: codigoDeSucursal,
      digitoDeControl: digitoDeControl,
      numeroDeCuenta: numeroDeCuenta,
    };
    return infoBanco;
  } else {
    throw new Error("Error al extraer datos");
  }
};

export const encontrarBanco = (codigoDeBanco: string): string => {
  const banco = bancos.find((banco) => banco.Código === codigoDeBanco);
  if (!banco) {
    throw new Error("No se he encontrado el banco");
  } else {
    return banco.Nombre;
  }
};
