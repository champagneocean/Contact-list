// Lista de contactos con datos predefinidos
let listaDeContactos = [
  { nombre: "Juan Pérez", telefono: "123-456-7890" },
  { nombre: "María García", telefono: "987-654-3210" },
  { nombre: "Carlos López", telefono: "555-123-4567" }
];

// Función para añadir un nuevo contacto a la lista
function agregarContacto(nombre, telefono) {
  listaDeContactos.push({ nombre, telefono });
}

// Función para borrar un contacto existente de la lista
function borrarContacto(nombre) {
  listaDeContactos = listaDeContactos.filter(contacto => contacto.nombre !== nombre);
}

// Función para imprimir en consola los contactos presentes en la lista
function imprimirContactos() {
  console.log("Lista de Contactos:");
  listaDeContactos.forEach(contacto => {
    console.log(`Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}`);
  });
}

// Ejemplos de uso
imprimirContactos();

agregarContacto("Ana Martínez", "777-888-9999");
imprimirContactos();

borrarContacto("María García");
imprimirContactos();