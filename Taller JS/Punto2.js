//Dias entre hoy y el 24 de Diciembre
var fecha1 = new Date();
var fecha2= new Date('12/24/2021');
var milisegundosDia = 24 * 60 * 60 * 1000;
let milisegundosTranscurridos = Math.abs(fecha1.getTime() - fecha2.getTime());
var dias = Math.round(milisegundosTranscurridos/milisegundosDia);
document.write(fecha1);
document.write('<br>');
document.write(fecha2); 
document.write('<br>');
document.write(dias);