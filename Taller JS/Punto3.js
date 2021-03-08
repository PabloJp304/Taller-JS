//Recibir 10 numeros
var number;
var f;
for (f=1; f<=10; f++) {
    number = prompt('Ingrese un numero','');
} if(number<0){
    document.write(number+'Es un entero negativo');
    document.write('<br>');
}   else{
    document.write(number+'Es un entero positivo');
}

