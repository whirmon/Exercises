/* EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende de lo siguiente:
Examen =20%
Tareas = 40%
Asistencia = 10%
Investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final. */
function estudiante() {
    // Agarrar valores del formulario
    const nomBre = (document.getElementById('nombre').value);
    const examEn = (document.getElementById('examen').value);
    const tarEas = (document.getElementById('tareas').value);
    const asisTencia = (document.getElementById('asistencia').value);
    const invesTigacion = (document.getElementById('investigacion').value);
    // Calcular notas estudiante
    let contribucionExamen = examEn * 0.2;
    let contribucionTareas = tarEas * 0.4;
    let contribucionAsistencia = asisTencia * 0.1;
    let contribucionInvestigacion = invesTigacion * 0.3;
    const final = contribucionExamen + contribucionTareas + contribucionAsistencia + contribucionInvestigacion;
    // Devolver valores e imprimir
    document.getElementById('resultado').innerText = 'Nota del estudiante: ' + nomBre + '\n\n' +
    'carnet No: ' + (200*3.1416).toFixed(8) + '\n\n' +
    'Nota final: ' +  final.toFixed(2);
}