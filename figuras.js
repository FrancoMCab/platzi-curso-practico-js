// Codigo del Cuadrado
console.group("Cuadrado");

function perimetoCuadrado(lado){
    return lado*4;
}

function areaCuadrado (lado){
    return lado*lado;
}


console.groupEnd();

// Codigo del Triangulo
console.group("Triangulo");

function perimetroTriangulo(lado1,lado2,base){
    const perimetro =lado1+lado2+base;
    return perimetro;
}
function alturaIsosceles(lado1,lado2,base){
   if(lado1 == lado2 && lado1 !=base ){
    console.log("Los lados 1 y 2 son iguales, este triangulo es isosceles");
    const altura = Math.sqrt((lado1**2)-((base**2)/4));
    console.log("La altura de este triangulo es: "+altura);
    return altura;
   } else{
      return console.log("Este triangulo no es isosceles");
   }
   
}
function areaTriangulo (base, altura){
    return (base*altura)/2;
}

console.groupEnd();

// Codigo del Triangulo
console.group("Circulo");

const PI= Math.PI;

function diametroCirculo(radio){
    return radio*2;
}

function perimetroCirculo(radio){
    return diametroCirculo(radio)*PI;
}

function areaCirculo(radio){
    return (radio*radio)*PI;
}

console.groupEnd();

//Aca interactiamos con HTML

function calcularPerimetroCuadrado(){
    const input= document.getElementById("inputCuadrado");
    const value= input.value;
    const perimeto= perimetoCuadrado(value);
    alert(perimeto);
}
function calcularAreaCuadrado(){
    const input= document.getElementById("inputCuadrado");
    const value= input.value;
    const area= areaCuadrado(value);
    alert(area);
}
function calcularPerimetroTriangulo(){
    const input1= document.getElementById("inputTrianguloL1");
    const value1= parseInt(input1.value); 
    const input2= document.getElementById("inputTrianguloL2");
    const value2= parseInt(input2.value); 
    const inputB= document.getElementById("inputTrianguloB");
    const valueB= parseInt(inputB.value); 
    const perimeto= perimetroTriangulo(value1,value2,valueB);
    alert(perimeto);
}
function calcularAreaTriangulo(){
    const input1= document.getElementById("inputTrianguloL1");
    const value1= parseInt(input1.value); 
    const input2= document.getElementById("inputTrianguloL2");
    const value2= parseInt(input2.value); 
    const inputB= document.getElementById("inputTrianguloB");
    const valueB= parseInt(inputB.value); 
    const altura = alturaIsosceles(value1,value2,valueB);
    const perimeto= areaTriangulo(valueB,altura);
    alert(perimeto);
}