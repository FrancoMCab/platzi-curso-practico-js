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
    return lado1+lado2+base;
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