function conversor() {
    let tempeRatura = (document.getElementById('temperatura').value);
    let sistemaDeUnidades = (document.getElementById('fOc').value);
    let value;
    let mensaje;
    evaluacion = sistemaDeUnidades === 'c' ? value=(tempeRatura*9/5+32) : value=((tempeRatura-32)*5/9);
    cambiar = sistemaDeUnidades === 'f' ? 'c' : 'f';
    if (sistemaDeUnidades === 'f' && tempeRatura >= 14 || tempeRatura < 32) {
        mensaje = 'Temperatura baja'
    } else if (sistemaDeUnidades === 'f' && tempeRatura >= 32 || tempeRatura < 68) {
        mensaje = 'Temperatura adecuada';
    } else if (sistemaDeUnidades === 'f' && tempeRatura >= 68 || tempeRatura < 96) {
        mensaje = 'Temperatura alta';
    } else {
        mensaje = 'Temperatura desconocida';
    }
    document.getElementById('resultado').innerText = 'El valor ' + tempeRatura + sistemaDeUnidades + ' equivale a: ' + value + cambiar + ' ' + mensaje;
}

/* Imprimir "Ingrese la temperatura en grados Celsius:"
Leer temperaturaCelsius

temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32

Si temperaturaFahrenheit está entre 14 y 32 entonces
    Imprimir "Temperatura baja"
Sino si temperaturaFahrenheit está entre 32 y 68 entonces
    Imprimir "Temperatura adecuada"
Sino si temperaturaFahrenheit está entre 68 y 96 entonces
    Imprimir "Temperatura alta"
Sino
    Imprimir "Temperatura desconocida"
 */
