document.getElementById('submitButton').addEventListener('click', function () {
    // Obtener los valores seleccionados por el usuario
    const campos = [
        document.getElementById('campoocupacional1').value,
        document.getElementById('campoocupacional2').value,
        document.getElementById('campoocupacional3').value,
        document.getElementById('campoocupacional4').value
    ];

    // Verificar si todos los campos fueron seleccionados
    if (campos.includes("")) {
        alert("Por favor, selecciona una opción en cada categoría.");
        return;
    }

    // Contar las ocurrencias de cada campo
    const conteo = {};
    campos.forEach(campo => {
        conteo[campo] = (conteo[campo] || 0) + 1;
    });

    // Determinar la cantidad de campos únicos seleccionados
    const camposUnicos = Object.keys(conteo).length;
    let result = '';

    // Lógica de indicaciones según las reglas definidas
    switch (camposUnicos) {
        case 1:
            result = 'elige cuatro carreras del campo ocupacional. Haz clic en más información';
            break;
        case 2:
            result = 'elige dos carreras por campo ocupacional. Haz clic en más información';
            break;
        case 3:
            result = 'elige dos carreras del campo ocupacional que se repite y una carrera por cada uno de los otros campos ocupacionales. Haz clic en más información';
            break;
        case 4:
            result = 'elige una carrera por campo ocupacional. Haz clic en más información';
            break;
        default:
            result = 'Error: selección inválida.';
    }

    // Mostrar el resultado en el div
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p>${result}</p>`;

    // Agregar botón "Más Información"
    const buttonHTML = `<button id="moreInfoButton">Más Información</button>`;
    resultElement.innerHTML += buttonHTML;
    resultElement.style.display = 'block';

    // Evento para el botón dinámico
    document.getElementById('moreInfoButton').addEventListener('click', function () {
        window.open('info.html', '_blank');
    });
});

