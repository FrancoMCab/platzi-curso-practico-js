// Codigo del Cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ladoCuadrado+"cm");

const perimetoCuadrado= ladoCuadrado*4;
console.log("El perimetro del cuadrado es: "+perimetoCuadrado+"cm");

const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log("El area del cuadrado es: "+areaCuadrado+"cm2");

console.groupEnd();

// Codigo del Triangulo
console.group("Triangulo")

const ladoTriangulo1=6;
const ladoTriangulo2=6;
const baseTrgiangulo=4;

console.log(
    "Los lados del triangulo miden: "
+ladoTriangulo1+"cm, "+ladoTriangulo2+"cm, "+baseTrgiangulo+"cm"
)

const alturaTriangulo=5.5;
console.log("La altura del triangulo es: "+alturaTriangulo+"cm");

const perimetroTriangulo= ladoTriangulo1+ladoTriangulo2+baseTrgiangulo;
console.log("El perimetro del triangulo es: "+perimetroTriangulo+"cm");

const areaTriangulo = (baseTrgiangulo*alturaTriangulo)/2
console.log("El areal del triangulo es: "+areaTriangulo+"Cm2")

console.groupEnd();

// Codigo del Triangulo
console.group("Circulo")

const radio= 4;
const PI= Math.PI;

console.log("El radio del circulo es: "+radio+"cm");

const diametroCirculo=radio*2;
console.log("El diametro del circulo es: "+diametroCirculo+"cm");

const perimetroCirculo= diametroCirculo*PI;
console.log("El perimetro del circulo es: "+perimetroCirculo+"cm");

const areaCirculo = (radio*radio)*PI;
console.log("El area del circulo es: "+areaCirculo+"cm2");

console.groupEnd();