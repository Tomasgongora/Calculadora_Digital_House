let sumar = require('./sumar')

let restar = require('./restar')

let multiplicar = require('./multiplicar')

let dividir = require('./dividir')

console.log(sumar(2, 2));
console.log(restar(4, 2));
console.log(multiplicar(3, 2));
console.log(multiplicar(10, 0));
console.log(dividir(10, 0));
console.log(dividir(4, 2));


/* a.¿Qué hubiese sucedido si, en vez de generar un archivo por cada operación
matemática, hubiésemos programado todo en un mismo archivo ?
A)- Se lo podria tomar como mala practica por que quisas no en este caso pero seria mas complicado de mantener o corregir.
Es mejor trabajar en modulos con javaScript para poder ver los resultados en node.js.


    b.¿Por qué el mejor camino es generar distintos archivos y luego requerirlos en uno solo ?
    B)- Para hacer mas facil de controlar y mantener y asi hacer correcciones en caso que se tubieran que hacer.
    Por que es buena practica hacerlo de esta manera.


    c.¿Será esta metodología de trabajo una constante de aquí en adelante ? 
    C)- Si para trabajar con node.js */