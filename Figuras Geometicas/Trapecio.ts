export class Trapecio {
    private baseMayor: number;
    private baseMenor: number;
    private lado1: number;
    private lado2: number;
    private altura: number;

    constructor(
        baseMayor: number,
        baseMenor: number,
        lado1: number,
        lado2: number,
        altura: number
    ) {
        this.baseMayor = baseMayor;
        this.baseMenor = baseMenor;
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.altura = altura;
    }

    public getBaseMayor(): number {
        return this.baseMayor;
    }

    public setBaseMayor(valor: number): void {
        this.baseMayor = valor;
    }

    public calcularArea(): number {
        return ((this.baseMayor + this.baseMenor) * this.altura) / 2;
    }

    public calcularPerimetro(): number {
        return this.baseMayor + this.baseMenor + this.lado1 + this.lado2;
    }
}
