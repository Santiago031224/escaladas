let seleccionProteina = null;
let seleccionPrincipio = null;
let seleccionAcompañamiento = null;
let seleccionEnsalada = null;

function seleccionarOpcion(elemento) {
    const tipo = elemento.getAttribute('data-tipo');
    const precio = parseFloat(elemento.getAttribute('data-precio'));

    // Deseleccionar la opción anterior si existe
    if (tipo === 'proteina') {
        if (seleccionProteina) seleccionProteina.classList.remove('selected');
        seleccionProteina = elemento;
    } else if (tipo === 'principio') {
        if (seleccionPrincipio) seleccionPrincipio.classList.remove('selected');
        seleccionPrincipio = elemento;
    } else if (tipo === 'Acompañamientos') {
        if (seleccionAcompañamiento) seleccionAcompañamiento.classList.remove('selected');
        seleccionAcompañamiento = elemento;
    } else if (tipo === 'Ensaladas') {
        if (seleccionEnsalada) seleccionEnsalada.classList.remove('selected');
        seleccionEnsalada = elemento;
    }

    // Seleccionar la nueva opción
    elemento.classList.add('selected');

    calcularTotal();
}

function calcularTotal() {
    const totalProteina = seleccionProteina ? parseFloat(seleccionProteina.getAttribute('data-precio')) : 0;
    const totalEnsalada = seleccionEnsalada ? parseFloat(seleccionEnsalada.getAttribute('data-precio')) : 0;
    const totalPrincipio = seleccionPrincipio ? parseFloat(seleccionPrincipio.getAttribute('data-precio')) : 0;
    const totalAcompañamiento = seleccionAcompañamiento ? parseFloat(seleccionAcompañamiento.getAttribute('data-precio')) : 0;
    const total = totalProteina + totalPrincipio + totalAcompañamiento + totalEnsalada;
    document.getElementById('total').textContent = `Total a pagar: $${total}`;
}

function pagar() {
    const nombre = document.getElementById('nombre').value;
    
    if (!nombre) {
        alert('Por favor ingresa tu nombre');
        return;
    }

    const totalProteina = seleccionProteina ? parseFloat(seleccionProteina.getAttribute('data-precio')) : 0;
    const totalEnsalada = seleccionEnsalada ? parseFloat(seleccionEnsalada.getAttribute('data-precio')) : 0;
    const totalPrincipio = seleccionPrincipio ? parseFloat(seleccionPrincipio.getAttribute('data-precio')) : 0;
    const totalAcompañamiento = seleccionAcompañamiento ? parseFloat(seleccionAcompañamiento.getAttribute('data-precio')) : 0;
    const total = totalProteina + totalPrincipio + totalAcompañamiento + totalEnsalada;
    
    if (totalProteina > 0) {
        // Almacena el pedido en localStorage
        localStorage.setItem('pedidoActual', JSON.stringify({ nombre: nombre, total: total }));
        
        // Redirige a la pantalla de confirmación
        window.location.href = 'confirmacion.html';
    } else {
        alert('Por favor selecciona una proteína');
    }
}
