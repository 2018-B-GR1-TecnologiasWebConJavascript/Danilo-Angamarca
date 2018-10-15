function holaMundo(){
    console.log("Hola Mundo");
}
//holaMundo();

//console.log(holaMundo());

function sumarDosNumeros(numeroUno, NumeroDos) {
    var numeroUnoEsValido = typeof numeroUno == 'number';
    var numeroDosEsValido = typeof numeroDos == 'number';

    if (numeroUnoEsValido && numeroDosEsValido) {
        return numeroUno + NumeroDos;
    } else {
        console.error('Parametros no son numeros');
        return 0;
    }
}

console.log(sumarDosNumeros(1, 2, 3, 4, 5, 6, 7));

console.log(sumarDosNumeros(true, 0, undefined, null, "asd", 6, 7));

function sumarNnumeros(...numeros){

    var resultado = calcularResultadoSumarNnumeros(numeros);
        var numeroesvalido = typeof numeros[i] == 'number';

        if(resultado.esValido) {
            suma = suma + numeros[i];
            }else {
            todosLosNumerosSonValidos = false;
            break;
        }
    }

    var resultado = {
        suma: suma,
        esValido: todosLosNumerosSonValidos
    };
    return resultado

}

console.log(sumarNnumeros(true, 1, 2, 3));





