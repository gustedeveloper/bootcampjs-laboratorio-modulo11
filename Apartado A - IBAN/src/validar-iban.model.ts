export const bancos = [
  { Código: "2080", Nombre: "Abanca Corporación Bancaria" },
  { Código: "0061", Nombre: "Banca March" },
  { Código: "0188", Nombre: "Banco Alcalá" },
  { Código: "0182", Nombre: "Banco Bilbao Vizcaya Argentaria" },
  { Código: "0130", Nombre: "Banco Caixa Geral" },
  { Código: "0234", Nombre: "Banco Caminos" },
  { Código: "2105", Nombre: "Banco Castilla-La Mancha" },
  { Código: "0240", Nombre: "Banco de Crédito Social Cooperativo" },
  { Código: "0081", Nombre: "Banco de Sabadell" },
  { Código: "0487", Nombre: "Banco Mare Nostrum" },
  { Código: "0186", Nombre: "Banco Mediolanum" },
  { Código: "0238", Nombre: "Banco Pastor" },
  { Código: "0075", Nombre: "Banco Popular Español" },
  { Código: "0049", Nombre: "Banco Santander" },
  { Código: "3873", Nombre: "Banco Santander Totta" },
  { Código: "2038", Nombre: "Bankia" },
  { Código: "0128", Nombre: "Bankinter" },
  { Código: "0138", Nombre: "Bankoa" },
  { Código: "0152", Nombre: "Barclays Bank PLC" },
  { Código: "3842", Nombre: "BNP Paribas Paris" },
  { Código: "3025", Nombre: "Caixa de Credit del Enginyers" },
  { Código: "2100", Nombre: "Caixabank" },
  { Código: "2045", Nombre: "Caja de Ahorros y Monte de Piedad de Ontinyent" },
  { Código: "3035", Nombre: "Caja Laboral Popular CC" },
  { Código: "3081", Nombre: "Caja Rural Castilla-La Mancha" },
  { Código: "3058", Nombre: "Cajamar Caja Rural" },
  { Código: "2000", Nombre: "Cecabank" },
  { Código: "1474", Nombre: "Citibank Europe PLC" },
  { Código: "3821", Nombre: "Commerzbank AG" },
  { Código: "3877", Nombre: "Danske Bank A/S" },
  { Código: "0019", Nombre: "Deutsche Bank SAE" },
  { Código: "0239", Nombre: "EVO Banco" },
  { Código: "2085", Nombre: "Ibercaja Banco" },
  { Código: "1465", Nombre: "ING Bank NV" },
  { Código: "2095", Nombre: "Kutxabank" },
  { Código: "2048", Nombre: "Liberbank" },
  { Código: "0131", Nombre: "Novo Banco" },
  { Código: "0073", Nombre: "Open Bank" },
  { Código: "0108", Nombre: "Société Générale" },
  { Código: "2103", Nombre: "Unicaja Banco" },
];

export interface InfoBanco {
  codigoDeBanco: string;
  codigoDeSucursal: string;
  digitoDeControl: string;
  numeroDeCuenta: string;
}
