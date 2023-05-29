/* EJERCICIO 7: Realizar programa para una web, en el cual el usuario introduce 2 notas y su valor ponderado (como cuando un examen vale un 30% y otro examen el 70%). Pulsando el botón “Calcula”, la web muestra como resultado la nota media ponderada. */
function estudiante() {
    // Agarrar valores del formulario
    const primerExamen = (document.getElementById('primerExamen').value);
    const primerPorcentaje = (document.getElementById('primerPorcentaje').value);
    const segundoExamen = (document.getElementById('segundoExamen').value);
    const segundoPorcentaje = (document.getElementById('segundoPorcentaje').value);
    // Calcular notas estudiante
    const decimalValorA = primerPorcentaje/100;
    const valorprimerexament=(primerExamen*decimalValorA);
    const decimalValorB = segundoPorcentaje/100;
    const valorsegundoexament=(segundoExamen*decimalValorB);
    const final = valorprimerexament + valorsegundoexament;
    // Devolver valores e imprimir
    document.getElementById('resultado').innerText = 'Nota del estudiante:\n\n' +
    'Nota primer examen: ' + primerExamen + ' valor porcentual: ' + primerPorcentaje + ' valor ponderado primer examen: ' + valorprimerexament + '\n' +
    'Nota segundo examen: ' + segundoExamen + ' valor porcentual: ' + segundoPorcentaje + ' valor ponderado segundo examen: ' + valorsegundoexament + '\n' +
    'Ponderacion primer examen: ' + valorprimerexament + ' Ponderacion segundo examen: ' + valorsegundoexament + ' Nota ponderada final ' + final.toFixed(2);
    }