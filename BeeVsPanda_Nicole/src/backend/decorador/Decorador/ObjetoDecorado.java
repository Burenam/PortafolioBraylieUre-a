package backend.decorador.Decorador;

import backend.decorador.Componente.Nave;

public abstract class ObjetoDecorado extends Nave{
    public Nave nave;

    public ObjetoDecorado(String gasolina, Nave nave) {
        setGasolina(gasolina);
        this.nave = nave;
    }

    public ObjetoDecorado(Nave nave) {
        this.nave = nave;
    }
}
