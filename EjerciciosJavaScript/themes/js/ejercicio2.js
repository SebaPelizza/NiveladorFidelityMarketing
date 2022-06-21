

function newArray() {
    var arrayNum = [1, 2, 3, 4, 5, 7];
    var arrayReturn = [];
    for (var i = 0; i < arrayNum.length; i++) {
        arrayReturn[i] = arrayNum[i] + 1;
    }
    div = document.getElementById('divResult');
    div.style.display = '';

    document.getElementById("inputNumber1").value = arrayReturn;

}
