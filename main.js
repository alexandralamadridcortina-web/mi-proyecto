import { PI, IVA, DIAS_SEMANA, DESCUENTO } from "./constantes.js";
import {
  sumar,
  restar,
  multiplicar,
  areaCirculo,
  calcularTotal,
  aplicarImpuestos,
  aplicarDescuento,
  aplicarDescuentoPorRol
} from "./operaciones-matematicas.js";
import { ROLES } from "./usuariosConstantes.js";
import { crearUsuario } from "./usuarios.js";

console.log("Área de un círculo de radio 5:", areaCirculo(5));
console.log("Precio con IVA de $100:", 100 * (1 + IVA));
console.log("Tercer día de la semana:", DIAS_SEMANA[2]);

console.log("Suma 4 + 5 =", sumar(4, 5));
console.log("Resta 10 - 3 =", restar(10, 3));
console.log("Multiplicación 6 * 7 =", multiplicar(6, 7));

let precioUnitario = 30;
let cantidad = 3;
let subtotal = calcularTotal(precioUnitario, cantidad);
let totalConImpuestos = aplicarImpuestos(subtotal);
let totalConDescuento = aplicarDescuento(totalConImpuestos);
console.log("\n--- Ejercicio 3: Calculadora de Impuestos ---");
console.log("Subtotal:", subtotal);
console.log("Total con impuestos:", totalConImpuestos);
console.log("Total con descuento:", totalConDescuento);


const usuario1 = crearUsuario("Pedro", ROLES.ADMIN);
const usuario2 = crearUsuario("Carlos", ROLES.CLIENTE);

console.log("\n--- Usuarios ---");
console.log("Usuario 1:", usuario1);
console.log("Usuario 2:", usuario2);


console.log("\n--- Ejercicio 5: Sistema de Descuentos por Rol ---");

let adminSubtotal = calcularTotal(25, 4);
let adminConIVA = aplicarImpuestos(adminSubtotal);
let adminFinal = aplicarDescuentoPorRol(adminConIVA, usuario1);
console.log("ADMIN:");
console.log("Subtotal:", adminSubtotal);
console.log("Con IVA:", adminConIVA);
console.log("Con descuento:", adminFinal);

let clienteSubtotal = calcularTotal(50, 3);
let clienteConIVA = aplicarImpuestos(clienteSubtotal);
let clienteFinal = aplicarDescuentoPorRol(clienteConIVA, usuario2);
console.log("\nCLIENTE:");
console.log("Subtotal:", clienteSubtotal);
console.log("Con IVA:", clienteConIVA);
console.log("Con descuento:", clienteFinal);
