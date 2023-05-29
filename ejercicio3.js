/* EJERCICIO 3: Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. Para este ejercicio deberá de asignar las siguientes variables: Nombre, Salario, categoría y aumento. Deberá demostrar en html los datos del empleado y el aumento salarial. */
function empleado() {
        // Obtener los valores de entrada
        var nombre = document.getElementById('nombre').value;
        var salario = parseFloat(document.getElementById('salario').value);
        var categoria = document.getElementById('categoria').value;        
        // Calcular el aumento según la categoría
        var aumento;
        if (categoria === 'A') {
          aumento = salario * 0.3;
        } else if (categoria === 'B') {
          aumento = salario * 0.3;
        } else if (categoria === 'C') {
          aumento = salario * 0.1;
        } else if (categoria === 'D') {
          aumento = salario * 0.2;
        } else {
          aumento = 0;
        }
        // Calcular el nuevo salario
        var nuevoSalario = salario + aumento;
        // Mostrar los resultados en el HTML
        document.getElementById('resultado').innerText =
        'Nombre: ' + nombre + '\n' +
        'Salario: $' + salario.toFixed(2) + '\n' +
        'Categoría: ' + categoria + '\n' +
        'Aumento: $' + aumento.toFixed(2) + '\n' +
        'Nuevo salario: $' + nuevoSalario.toFixed(2);
        }