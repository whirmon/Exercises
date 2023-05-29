/* EJERCICIO 6: Crear una Función para calcular el descuento en viajes turísticos tomando en cuenta lo siguiente: Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino es Puerto el Triunfo el descuento será del 15%. */
function calcularDescuentoViaje() {
    const oriGen = (document.getElementById('origen').value);
    const desTino = (document.getElementById('destino').value);
    let precioViaje = (document.getElementById('precio').value);

    if (desTino === 'Palma' && oriGen === 'La costa del Sol') {
        descuento = 0.05;
      } else if (desTino === 'Panchimalco') {
        descuento = 0.10;
      } else if (desTino === 'Puerto el Triunfo') {
        descuento = 0.15;
      } else {
        descuento = 0;
      }
      let descuentoCalculado = precioViaje * descuento;
      let valorViaje = precioViaje - descuentoCalculado;
      document.getElementById('resultado').innerText = 'El descuento sera de: ' + descuentoCalculado + '\n' + ' El valor del viaje sera de: ' + valorViaje;
}