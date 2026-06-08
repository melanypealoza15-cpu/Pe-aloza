export class Rombo {
    private diagonalMayor: number;
    private diagonalMenor: number;
    private lado: number;

    constructor(diagonalMayor: number, diagonalMenor: number, lado: number) {
        this.diagonalMayor = diagonalMayor;
        this.diagonalMenor = diagonalMenor;
        this.lado = lado;
    }

    public getDiagonalMayor(): number {
        return this.diagonalMayor;
    }

    public setDiagonalMayor(valor: number): void {
        this.diagonalMayor = valor;
    }

    public calcularArea(): number {
        return (this.diagonalMayor * this.diagonalMenor) / 2;
    }

    public calcularPerimetro(): number {
        return 4 * this.lado;
    }
}
