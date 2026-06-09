
class Circulo extends Figura { // <- Heredar
    private radio: number;

    //Requerido al instanciar esta clase
    constructor(radio: number) {
        super();
        this.radio = radio;
    }

    //
    // Metodos adicionales
    //

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
