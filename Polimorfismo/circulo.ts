class Circulo extends Figura {
    private radio: number;

    constructor(radio: number) {
        super();
        this.radio = radio;
    }

    public getRadio(): number {
        return this.radio;
    }

    public setRadio(radio: number): void {
        this.radio = radio;
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}
