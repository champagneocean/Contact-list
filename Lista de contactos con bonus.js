// Lista de contactos con datos predefinidos
let listaDeContactos = [
  {
    id: 1,
    nombres: "Juan",
    apellidos: "Pérez",
    telefono: "123-456-7890",
    ubicaciones: [
      { ciudad: "Ciudad A", direccion: "Calle 123" },
      { ciudad: "Ciudad B", direccion: "Avenida XYZ" }
    ]
  },
  {
    id: 2,
    nombres: "María",
    apellidos: "García",
    telefono: "987-654-3210",
    ubicaciones: [
      { ciudad: "Ciudad C", direccion: "Calle ABC" },
      { ciudad: "Ciudad A", direccion: "Avenida 456" }
    ]
  },
  {
    id: 3,
    nombres: "Carlos",
    apellidos: "López",
    telefono: "555-123-4567",
    ubicaciones: [
      { ciudad: "Ciudad B", direccion: "Calle XYZ" },
      { ciudad: "Ciudad C", direccion: "Avenida 789" }
    ]
  }
];

// Función para añadir un nuevo contacto a la lista
function agregarContacto(id, nombres, apellidos, telefono, ubicaciones) {
  listaDeContactos.push({ id, nombres, apellidos, telefono, ubicaciones });
}

// Función para borrar un contacto existente de la lista
function borrarContacto(id) {
  listaDeContactos = listaDeContactos.filter(contacto => contacto.id !== id);
}

// Función para imprimir en consola los contactos presentes en la lista
function imprimirContactos() {
  console.log("Lista de Contactos:");
  listaDeContactos.forEach(contacto => {
    console.log(`ID: ${contacto.id}, Nombres: ${contacto.nombres}, Apellidos: ${contacto.apellidos}, Teléfono: ${contacto.telefono}`);
    console.log("Ubicaciones:");
    contacto.ubicaciones.forEach(ubicacion => {
      console.log(`  Ciudad: ${ubicacion.ciudad}, Dirección: ${ubicacion.direccion}`);
    });
    console.log("------------------------");
  });
}
// Función para actualizar un contacto existente en la lista
function actualizarContacto(id, nuevosDatos) {
    const indiceContacto = listaDeContactos.findIndex(contacto => contacto.id === id);
  
    if (indiceContacto !== -1) {
      // Actualizar solo las propiedades proporcionadas en nuevosDatos
      listaDeContactos[indiceContacto] = { ...listaDeContactos[indiceContacto], ...nuevosDatos };
      console.log(`Contacto con ID ${id} actualizado correctamente.`);
    } else {
      console.log(`No se encontró un contacto con ID ${id}.`);
    }
  }

// Ejemplos de uso
imprimirContactos();

agregarContacto(4, "Ana", "Martínez", "777-888-9999", [{ ciudad: "Ciudad D", direccion: "Calle 789" }]);
imprimirContactos();

borrarContacto(2);
imprimirContactos();

actualizarContacto(1, { nombres: "Juanito", telefono: "111-222-3333" });
imprimirContactos();