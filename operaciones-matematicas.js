// operaciones-matematicas.js
import { PI, DESCUENTO, IVA } from './constantes.js';

export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

export function multiplicar(a, b) {
  return a * b;
}

export function areaCirculo(radio) {
  return PI * radio * radio;
}

export function calcularTotal(precio, cantidad) {
  return precio * cantidad;
}

export function aplicarImpuestos(total) {
  return total * (1 + IVA);
}

export function aplicarDescuento(total) {
  return total * (1 - DESCUENTO);
}

export function aplicarDescuentoPorRol(total, usuario) {
  if (usuario.rol === "admin") {
    return total * 0.8;
  } else {
    return total * (1 - DESCUENTO);
  }
}
