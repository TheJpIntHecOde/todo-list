//– Juan Pablo Mayorga

document.getElementById('formularioTarea').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nombre = document.getElementById('nombre').value.trim();
    const fecha = document.getElementById('fecha').value;
    const descripcion = document.getElementById('descripcion').value.trim();
    const tipo = document.getElementById('tipo').value;
    const prioridad = document.querySelector('input[name="prioridad"]:checked');
  
    if (!nombre || !fecha || !descripcion || !tipo || !prioridad) {
      alert("Por favor completa todos los campos.");
      return;
    }
  
    const nuevaTarea = document.createElement('div');
    nuevaTarea.className = 'tarea';
    nuevaTarea.innerHTML = `
      <h3>${nombre} 🗓️</h3>
      <p><strong>Fecha:</strong> ${fecha}</p>
      <p><strong>Descripción:</strong> ${descripcion}</p>
      <p><strong>Tipo:</strong> ${tipo}</p>
      <p><strong>Prioridad:</strong> ${prioridad.value}</p>
    `;
  
    document.getElementById('listaTareas').appendChild(nuevaTarea);
    this.reset();
  });
  