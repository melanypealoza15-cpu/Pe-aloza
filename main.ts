import { Rombo } from "./clase/Rombo";
import { Cuadrado } from "./clase/Cuadrado";
import { Trapecio } from "./clase/Trapecio";

rombo = new Rombo(12, 8, 6);
cuadrado = new Cuadrado(5);
trapecio = new Trapecio(10, 6, 4, 4, 5);

console.log("=ROMBO =");
console.log("Área: " + rombo.calcularArea());
console.log("Perímetro: " + rombo.calcularPerimetro());

console.log("\n= CUADRADO =");
console.log("Área: " + cuadrado.calcularArea());
console.log("Perímetro: " + cuadrado.calcularPerimetro());

console.log("\n=TRAPECIO =");
console.log("Área: " + trapecio.calcularArea());
console.log("Perímetro: " + trapecio.calcularPerimetro());
