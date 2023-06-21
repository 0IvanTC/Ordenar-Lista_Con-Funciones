/**
 * @template T
 * @callback comparator
 * @param {T} a
 * @param {T} b
 * @returns {Boolean}
 */

/**
 * Compara dous numeros
 * @type {comparator<Number>}
 */
function numeroAmenorQueNumeroB(a,b){
    return a<b
}

let array=[2,8,6,3,12,4,7]
/**
 * Buscar seguinte elemento a mover
 * @template T
 * @callback buscadorDeElementoAMover
 * @param {T[]} lista - Lista de elementos a ordear
 * @param {comparator<T>} comparador - Funcion comparadora de elementos
 * @returns {Number} - Indice do elemento a mover
 */
function seguinteElementoAmover(lista, comparador) {
      let posicion=0;
      let posicionActual=1;
      while(posicionActual<lista.length){
        if(comparador(lista[posicionActual],lista[posicion])) posicion=posicionActual;
        posicionActual++;
    }      
    return posicion;
}

/**
 * Move ordenadamente os elementos a un novo array
 * @template T
 * @callback ordenarTodo
 * @param {T[]} lista - Lista de elementos a ordear
 * @param {buscadorDeElementoAMover<T>} selectorElementoAmover - Funcion buscar elemento a mover
 * @param {comparator<T>} comparador - Funcion comparadora de elementos
 * @returns {T[]} - Array con elementos ordenados
 */
function ordenarElementos(lista, selectorElementoAmover, comparador){
    let listaOrdenada=[];
    
    while(lista.length>0){
        selectorElementoAmover=seguinteElementoAmover(lista,comparador);
        listaOrdenada.push(lista[selectorElementoAmover]);
        lista.splice(selectorElementoAmover,1)   
    }
    return listaOrdenada;
}

export {
    numeroAmenorQueNumeroB,
    seguinteElementoAmover,
    ordenarElementos
}