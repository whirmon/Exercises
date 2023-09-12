//find looking into an array negative numbers and count them.
function contador(){
    let a = (document.getElementById('A').value);
    let b = (document.getElementById('B').value);
    let c = (document.getElementById('C').value);
    let d = (document.getElementById('D').value);
    let e = (document.getElementById('E').value);
    let f = (document.getElementById('F').value);
    let g = (document.getElementById('G').value);
    let h = (document.getElementById('H').value);
    let i = (document.getElementById('I').value);
    let j = (document.getElementById('J').value);
    const arreglo=[a,b,c,d,e,f,g,h,i,j];
    let negativos=arreglo.filter((el) => el < 0).length;
    let cero=arreglo.filter((el) => el == 0).length;
    let positivos =arreglo.filter((el) => el > 0).length;
/*     let multiplos15 = (arreglo[i] % 15 === 0) = multiplos15++;
 *//*     let acumuladoPares = (arreglo[x] % 2 === 0) acumuladoPares += arreglo[x];
 */    document.getElementById('resultado').innerText = 'Valores evaluados:\n\n' + arreglo + '\n\n Negativos: '+ negativos + '\n\n Positivos: ' + positivos + '\n\n Cero:' + cero /*+  '\n\n Pares:' + acumuladoPares */ /* + '\n\n Multiplos de 15:' + multiplos15 */;
}