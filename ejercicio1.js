/* EJERCICIO 1: Crear una función que en base a la edad que ingreso el usuario devolver un mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario. */
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
function persona() {
    let edad = (document.getElementById('edad').value);
    let value;
    evaluacion = edad >= 18 ? value=("Mayor de edad") : value=("Menor de edad");
    document.getElementById('resultado').innerText = 'Tienes ' + edad + ' eres ' + value;
}