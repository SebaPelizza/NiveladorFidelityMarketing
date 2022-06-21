function orderArray(val1, val2, val3, val4, val5) {

  var control = 0;

  if (val1 == "") {
    control = 1;
  } if (val2 == "") {
    control = 1;
  } if (val3 == "") {
    control = 1;
  } if (val4 == "") {
    control = 1;
  } if (val5 == "") {
    control = 1;
  }

  if (control == 1) {
    return false;
  }
  var arrayNumbers = [];

  arrayNumbers[0] = val1;
  arrayNumbers[1] = val2;
  arrayNumbers[2] = val3;
  arrayNumbers[3] = val4;
  arrayNumbers[4] = val5;
  alert("El array ingresado es :  " + arrayNumbers);
  alert("El array ordenado de menor a mayor es :  " + arrayNumbers.sort((a, b) => a - b));
}