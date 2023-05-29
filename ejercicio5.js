/* EJERCICIO 5: Realizar una función para una tienda de coches en donde se deberá calcular: Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE el descuento será del 20%. Mostrar en HTML el coche seleccionado y el descuento que se aplicara en base a lo que selecciono el usuario. */
function cocheDescuento() {
    let precioVenta = document.getElementById('precio').value;
    let modeloCoche = document.getElementById('modeloCochE').value;
    let descuento;
    if (modeloCoche === 'FORD FIESTA') {
        descuento = 0.05;
    } else if (modeloCoche === 'FORD FOCUS') {
        descuento = 0.10;
    } else if (modeloCoche === 'FORD ESCAPE') {
        descuento = 0.20;
    } else {
        descuento = 0;
    }
    let descuentoAplicado = precioVenta * descuento;
    let final = precioVenta * (1+descuento);
    document.getElementById('resultado').innerText = 'Coche seleccionado: ' + modeloCoche + ' Descuento aplicado: ' + descuentoAplicado + ' Precio final con descuento: ' + final;
}