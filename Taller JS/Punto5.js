//Es primo o no es primo
let numeroPrimo = prompt("Ingrese un numero");
let esNumeroPrimo = true;
var f;
for(f=2; f<numeroPrimo/2; f++) {
    if(numeroPrimo %f===0){
        esNumeroPrimo = false;
    }
}
if(esNumeroPrimo){
    document.write("Si es numero primo:", numeroPrimo);
}else{
    document.write("No es numero primo:", numeroPrimo);
}