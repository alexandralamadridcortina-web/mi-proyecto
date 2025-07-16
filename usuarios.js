export function crearUsuario(nombre, rol) {
  const fechaRegistro = new Date().toLocaleDateString("es-CO");
  return {
    nombre,
    rol,
    fechaRegistro
  };
}
