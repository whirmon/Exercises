/* EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario, calcular cual número es el mayor y devolverlo. */
function mayorOmenor() {
    // Agarrar valores del formulario
    const numEro1 = (document.getElementById('primerNumero').value);
    const numEro2 = (document.getElementById('segundoNumero').value);
    let value;
    // Calcular notas estudiante
    evaluacion = numEro1 >= numEro2 ? value=numEro1 : value=numEro2;
    // Devolver valores e imprimir
    document.getElementById('resultado').innerText = 'El numero mayor es: ' + value;
    }