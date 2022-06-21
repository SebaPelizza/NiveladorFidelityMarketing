
/*
     1 - Realizar un script llamado Ejercicio1.js, que contenga una función llamada CantidadMayusculas que reciba como parámetro un string 
         y devuelva el número de letras mayúsculas que contiene dicha cadena. El valor devuelto debe ser mostrado en pantalla.
 */

function CantidadMayusculas(cadena) {
    if (cadena.length == 0) {
        return false;
    }
    var contar = 0;
    var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < mayusculas.length; i++) {

        for (var x = 0; x < cadena.length; x++) {
            if (cadena[x] == mayusculas[i]) {
                contar += 1;
            }
        }
    }
    alert("Cantidad de mayusculas:  " + contar);
}
