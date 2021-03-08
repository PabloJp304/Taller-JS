//Escriba una función que reciba tres números enteros positivos como parámetros: A, B y N. Y que devuelva la suma de los números que son múltiplos de A y de B entre 1 y N. 
var A;
var B;
var N;
A = prompt('Ingrese numero A','');
B = prompt('Ingrese numero B','');
N = parseInt(prompt('Ingrese numero N',''));
var f=2;
var i=2;
var cont=0;
var sum=0;
var total=0;

while(f<A-1){
    if(A%f==0){
        console.log("divisor", f);
        sum=sum+f;
        console.log(sum);
    }
    f++
}

while(i<B-1){
    if(B%i==0){
        console.log("divisor", i);
        cont=cont+1;
        console.log(cont);
    }
    i++
    if(f==i){
        total=1+f+i+N;
        console.log(total);
    }
}
