package backend.decorador.DecoradorConcreto;

import backend.decorador.Componente.Nave;
import backend.decorador.Decorador.ObjetoDecorado;

public class Vida extends ObjetoDecorado {

    public Vida(Nave nave) {
        super(nave);
    }

    @Override
    public String asignarPowerUp() {
        return nave.getGasolina();
    }
}
