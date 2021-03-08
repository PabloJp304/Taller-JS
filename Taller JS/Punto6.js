//Factorial de un numero dado
let num = parseFloat(prompt("Ingrese un numero"));
let total = 1;

for (let f=1; f<=num; f++){
    total = total * f;
}
document.write("El factorial del numero:"+num+ "es: "+total);