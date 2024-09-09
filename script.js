let seleccionProteina = null;
let seleccionPrincipio = null;
let seleccionAcompañamiento = null;

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
    }else if (tipo === 'Acompañamientos'){
        if (seleccionAcompañamiento) seleccionAcompañamiento.classList.remove('selected');
        seleccionAcompañamiento = elemento;
    }

    // Seleccionar la nueva opción
    elemento.classList.add('selected');

    calcularTotal();
}

function calcularTotal() {
    const totalProteina = seleccionProteina ? parseFloat(seleccionProteina.getAttribute('data-precio')) : 0;
    const totalPrincipio = seleccionPrincipio ? parseFloat(seleccionPrincipio.getAttribute('data-precio')) : 0;
    const totalAcompañamiento = seleccionAcompañamiento ? parseFloat(seleccionAcompañamiento.getAttribute('data-precio')) : 0;
    const total = totalProteina + totalPrincipio + totalAcompañamiento; // Principio siempre será 0
    document.getElementById('total').textContent = `Total a pagar: $${total}`;
}

function pagar() {
    const totalProteina = seleccionProteina ? parseFloat(seleccionProteina.getAttribute('data-precio')) : 0;
    const totalPrincipio = seleccionPrincipio ? parseFloat(seleccionPrincipio.getAttribute('data-precio')) : 0;
    const totalAcompañamiento = seleccionAcompañamiento ? parseFloat(seleccionAcompañamiento.getAttribute('data-precio')) : 0;
    const total = totalProteina + totalPrincipio;
    
    if (totalProteina > 0) {
        window.location.href = `https://www.pse.com.co/inicio/?total=${total}`;
    } else {
        alert('Por favor selecciona una proteína');
    }
}
